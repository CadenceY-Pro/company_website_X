import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb',
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return res.status(500).json({
      ok: false,
      error: 'Missing RESEND_API_KEY. Add it in Vercel project environment variables.',
    })
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

    const text = [
      `Role: ${role}`,
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Location: ${location}`,
      `LinkedIn / resume URL: ${linkedin || '(not provided)'}`,
      `Portfolio / GitHub: ${portfolio || '(not provided)'}`,
      `Resume file: ${resumeName || '(not attached)'}`,
      '',
      'Why CadenceY:',
      why,
    ].join('\n')

    const html = `
      <h2>New application — ${escapeHtml(role)}</h2>
      <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
        <tr><td style="padding:6px 12px 6px 0"><strong>Name</strong></td><td>${escapeHtml(fullName)}</td></tr>
        <tr><td style="padding:6px 12px 6px 0"><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
        <tr><td style="padding:6px 12px 6px 0"><strong>Location</strong></td><td>${escapeHtml(location)}</td></tr>
        <tr><td style="padding:6px 12px 6px 0"><strong>LinkedIn / resume URL</strong></td><td>${escapeHtml(linkedin || '(not provided)')}</td></tr>
        <tr><td style="padding:6px 12px 6px 0"><strong>Portfolio / GitHub</strong></td><td>${escapeHtml(portfolio || '(not provided)')}</td></tr>
        <tr><td style="padding:6px 12px 6px 0"><strong>Resume file</strong></td><td>${escapeHtml(resumeName || '(not attached)')}</td></tr>
      </table>
      <h3 style="margin-top:20px">Why CadenceY</h3>
      <p style="white-space:pre-wrap;font-family:sans-serif;font-size:14px">${escapeHtml(why)}</p>
    `

    const from =
      process.env.CAREERS_FROM_EMAIL || 'CadenceY Careers <careers@cadencey.io>'
    const to = process.env.CAREERS_TO_EMAIL || 'careers@cadencey.io'

    const attachments =
      resumeBase64 && resumeName
        ? [
            {
              filename: resumeName,
              content: Buffer.from(resumeBase64, 'base64'),
              contentType: resumeType,
            },
          ]
        : []

    const resend = new Resend(apiKey)
    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Application: ${role} — ${fullName}`,
      text,
      html,
      attachments,
    })

    if (result.error) {
      return res.status(502).json({ ok: false, error: result.error.message })
    }

    return res.status(200).json({ ok: true, id: result.data?.id })
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
