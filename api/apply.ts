import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'
import { Resend } from 'resend'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
}

type ApplyBody = {
  role?: string
  fullName?: string
  email?: string
  location?: string
  linkedin?: string
  portfolio?: string
  why?: string
  resumeName?: string
  resumeBase64?: string
  resumeType?: string
}

const CAREERS_TO = process.env.CAREERS_TO_EMAIL || 'careers@cadencey.io'

function setCors(res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
}

function readBody(req: VercelRequest): Promise<ApplyBody> {
  if (req.body && typeof req.body === 'object') {
    return Promise.resolve(req.body as ApplyBody)
  }

  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (chunk) => chunks.push(Buffer.from(chunk)))
    req.on('end', () => {
      try {
        const raw = Buffer.concat(chunks).toString('utf8')
        resolve(raw ? (JSON.parse(raw) as ApplyBody) : {})
      } catch (error) {
        reject(error)
      }
    })
    req.on('error', reject)
  })
}

function buildText(fields: {
  role: string
  fullName: string
  email: string
  location: string
  linkedin: string
  portfolio: string
  why: string
  resumeName: string
}) {
  return [
    `Role: ${fields.role}`,
    `Name: ${fields.fullName}`,
    `Email: ${fields.email}`,
    `Location: ${fields.location}`,
    `LinkedIn / resume URL: ${fields.linkedin || '(not provided)'}`,
    `Portfolio / GitHub: ${fields.portfolio || '(not provided)'}`,
    `Resume file: ${fields.resumeName || '(not attached)'}`,
    '',
    'Why CadenceY:',
    fields.why,
  ].join('\n')
}

type MailFields = {
  role: string
  fullName: string
  email: string
  location: string
  linkedin: string
  portfolio: string
  why: string
  resumeName: string
  resumeBase64: string
  resumeType: string
}

async function sendViaResend(fields: MailFields) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return null

  const text = buildText(fields)
  const cleanedBase64 = fields.resumeBase64.replace(/^data:[^;]+;base64,/, '')
  const attachments = cleanedBase64
    ? [
        {
          filename: fields.resumeName || 'resume.pdf',
          content: cleanedBase64,
          contentType: fields.resumeType || 'application/octet-stream',
        },
      ]
    : []

  // Prefer verified domain from-address; fall back to Resend onboarding sender
  // so Production keeps working even before DNS sender identity is perfect.
  const fromCandidates = [
    process.env.CAREERS_FROM_EMAIL,
    'CadenceY Careers <careers@cadencey.io>',
    'CadenceY Careers <onboarding@resend.dev>',
  ].filter(Boolean) as string[]

  const resend = new Resend(apiKey)
  let lastError: Error | null = null

  for (const from of fromCandidates) {
    const result = await resend.emails.send({
      from,
      to: [CAREERS_TO],
      replyTo: fields.email,
      subject: `Application: ${fields.role} — ${fields.fullName}`,
      text,
      html: `<pre style="font-family:sans-serif;white-space:pre-wrap">${escapeHtml(text)}</pre>`,
      attachments,
    })

    if (!result.error) {
      return { via: 'resend' as const, id: result.data?.id, from }
    }
    lastError = new Error(result.error.message)
  }

  throw lastError || new Error('Resend failed')
}

async function sendViaSmtp(fields: MailFields) {
  const host = process.env.SMTP_HOST || 'smtp.hostinger.com'
  const port = Number(process.env.SMTP_PORT || 465)
  const user = process.env.SMTP_USER || CAREERS_TO
  const pass = process.env.SMTP_PASS

  if (!pass) return null

  const cleanedBase64 = fields.resumeBase64.replace(/^data:[^;]+;base64,/, '')
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })

  const info = await transporter.sendMail({
    from: `CadenceY Careers <${user}>`,
    to: CAREERS_TO,
    replyTo: fields.email,
    subject: `Application: ${fields.role} — ${fields.fullName}`,
    text: buildText(fields),
    attachments: cleanedBase64
      ? [
          {
            filename: fields.resumeName || 'resume.pdf',
            content: Buffer.from(cleanedBase64, 'base64'),
            contentType: fields.resumeType || 'application/octet-stream',
          },
        ]
      : [],
  })

  return { via: 'smtp' as const, id: info.messageId }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res)

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  try {
    const body = await readBody(req)
    const role = (body.role || '').trim()
    const fullName = (body.fullName || '').trim()
    const email = (body.email || '').trim()
    const location = (body.location || '').trim()
    const linkedin = (body.linkedin || '').trim()
    const portfolio = (body.portfolio || '').trim()
    const why = (body.why || '').trim()
    const resumeName = (body.resumeName || '').trim()
    const resumeBase64 = (body.resumeBase64 || '').trim()
    const resumeType = (body.resumeType || 'application/octet-stream').trim()

    if (!role || !fullName || !email || !location || !why) {
      return res.status(400).json({ ok: false, error: 'Missing required fields.' })
    }
    if (!resumeBase64 || !resumeName) {
      return res.status(400).json({ ok: false, error: 'Resume file is required.' })
    }

    const fields: MailFields = {
      role,
      fullName,
      email,
      location,
      linkedin,
      portfolio,
      why,
      resumeName,
      resumeBase64,
      resumeType,
    }

    const errors: string[] = []

    try {
      const resent = await sendViaResend(fields)
      if (resent) return res.status(200).json({ ok: true, ...resent })
    } catch (error) {
      errors.push(`Resend: ${error instanceof Error ? error.message : 'failed'}`)
    }

    try {
      const smtp = await sendViaSmtp(fields)
      if (smtp) return res.status(200).json({ ok: true, ...smtp })
    } catch (error) {
      errors.push(`SMTP: ${error instanceof Error ? error.message : 'failed'}`)
    }

    return res.status(503).json({
      ok: false,
      error:
        'Email delivery is not configured. Add RESEND_API_KEY or SMTP_PASS in Vercel Production env, then Redeploy.',
      details: errors,
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to send application'
    return res.status(500).json({ ok: false, error: message })
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}
