import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { Job } from '../data/jobs'

const CAREERS_EMAIL = 'careers@cadencey.io'
const MAX_RESUME_BYTES = 8 * 1024 * 1024

type Props = {
  job: Job
}

type ApplyPayload = {
  role: string
  fullName: string
  email: string
  location: string
  linkedin: string
  portfolio: string
  why: string
  resumeName: string
  resumeType: string
  resumeBase64: string
}

async function fileToBase64(file: File): Promise<string> {
  const buffer = await file.arrayBuffer()
  const bytes = new Uint8Array(buffer)
  let binary = ''
  const chunk = 0x8000
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk))
  }
  return btoa(binary)
}

async function sendViaApi(payload: ApplyPayload): Promise<boolean> {
  try {
    const response = await fetch('/api/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const data = (await response.json().catch(() => null)) as { ok?: boolean } | null
    return Boolean(response.ok && data?.ok)
  } catch {
    return false
  }
}

/**
 * Same path as early testing: a real browser form POST to FormSubmit
 * (not fetch/AJAX — that hits CORS/403 on the custom domain).
 */
function sendViaFormSubmit(
  payload: Omit<ApplyPayload, 'resumeBase64' | 'resumeType'>,
  resume: File,
) {
  const nextUrl = new URL(window.location.href)
  nextUrl.searchParams.set('applied', '1')

  const form = document.createElement('form')
  form.method = 'POST'
  form.action = `https://formsubmit.co/${CAREERS_EMAIL}`
  form.enctype = 'multipart/form-data'
  form.acceptCharset = 'UTF-8'
  form.style.display = 'none'

  const fields: Record<string, string> = {
    _subject: `Application: ${payload.role} — ${payload.fullName}`,
    _template: 'table',
    _captcha: 'false',
    _next: nextUrl.toString(),
    _replyto: payload.email,
    role: payload.role,
    fullName: payload.fullName,
    email: payload.email,
    location: payload.location,
    linkedin: payload.linkedin || '(not provided)',
    portfolio: payload.portfolio || '(not provided)',
    why: payload.why,
  }

  for (const [name, value] of Object.entries(fields)) {
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = name
    input.value = value
    form.appendChild(input)
  }

  const fileInput = document.createElement('input')
  fileInput.type = 'file'
  fileInput.name = 'attachment'
  const transfer = new DataTransfer()
  transfer.items.add(resume)
  fileInput.files = transfer.files
  form.appendChild(fileInput)

  document.body.appendChild(form)
  form.submit()
}

export function CareerApplyForm({ job }: Props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [portfolio, setPortfolio] = useState('')
  const [why, setWhy] = useState('')
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (searchParams.get('applied') === '1') {
      setSubmitted(true)
      const next = new URLSearchParams(searchParams)
      next.delete('applied')
      setSearchParams(next, { replace: true })
    }
  }, [searchParams, setSearchParams])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setSubmitting(true)

    try {
      if (!resumeFile) {
        throw new Error('Please attach your resume (PDF or DOC).')
      }

      if (resumeFile.size > MAX_RESUME_BYTES) {
        throw new Error('Resume must be under 8 MB.')
      }

      const base = {
        role: job.title,
        fullName: fullName.trim(),
        email: email.trim(),
        location: location.trim(),
        linkedin: linkedin.trim(),
        portfolio: portfolio.trim(),
        why: why.trim(),
        resumeName: resumeFile.name,
      }

      // Prefer Vercel API when RESEND_API_KEY / SMTP_PASS is configured.
      const sentByApi = await sendViaApi({
        ...base,
        resumeType: resumeFile.type || 'application/octet-stream',
        resumeBase64: await fileToBase64(resumeFile),
      })

      if (sentByApi) {
        setSubmitted(true)
        return
      }

      // Direct send like testing: browser POSTs straight to FormSubmit.
      sendViaFormSubmit(base, resumeFile)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not send application.')
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <aside className="career-apply">
        <h2>Application sent</h2>
        <p>
          Thanks — your application for {job.title}
          {resumeFile ? ` (with ${resumeFile.name})` : ''} was sent to{' '}
          <strong>{CAREERS_EMAIL}</strong>.
        </p>
        <button
          className="btn btn-ghost career-apply-reset"
          type="button"
          onClick={() => {
            setSubmitted(false)
            setFullName('')
            setEmail('')
            setLocation('')
            setLinkedin('')
            setPortfolio('')
            setWhy('')
            setResumeFile(null)
            setError('')
          }}
        >
          Submit another
        </button>
      </aside>
    )
  }

  return (
    <aside className="career-apply">
      <header className="career-apply-head">
        <h2>Apply for {job.title}</h2>
        <p>
          Submit below and we will receive everything at{' '}
          <a href={`mailto:${CAREERS_EMAIL}`}>{CAREERS_EMAIL}</a>.
        </p>
      </header>

      <a
        className="career-apply-meeting"
        href="https://calendly.com/careers-cadencey/30min"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a 30 min meeting
      </a>

      <form
        className="career-apply-form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="career-apply-row">
          <label>
            <span>Full name</span>
            <input
              required
              name="fullName"
              autoComplete="name"
              placeholder="Jordan Lee"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>
          <label>
            <span>Email</span>
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              placeholder="your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <div className="career-apply-row">
          <label>
            <span>Location</span>
            <input
              required
              name="location"
              autoComplete="address-level1"
              placeholder="your address"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <label>
            <span>LinkedIn or resume URL</span>
            <input
              type="url"
              name="linkedin"
              placeholder="https://linkedin.com/in/you"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </label>
        </div>

        <label>
          <span>Portfolio or GitHub</span>
          <input
            type="url"
            name="portfolio"
            placeholder="https://github.com/you"
            value={portfolio}
            onChange={(e) => setPortfolio(e.target.value)}
          />
        </label>

        <label className="career-apply-file">
          <span>Resume (PDF or DOC)</span>
          <input
            required
            type="file"
            name="Resume"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
          />
        </label>

        <label>
          <span>Why CadenceY</span>
          <textarea
            required
            name="why"
            rows={5}
            placeholder="Tell us about the work you want to do — systems you have shipped, and why CadenceY."
            value={why}
            onChange={(e) => setWhy(e.target.value)}
          />
        </label>

        {error ? <p className="career-apply-error">{error}</p> : null}

        <button className="career-apply-submit" type="submit" disabled={submitting}>
          {submitting ? 'Sending…' : 'Submit application'}
        </button>
      </form>
    </aside>
  )
}
