import { useState } from 'react'
import type { FormEvent } from 'react'
import type { Job } from '../data/jobs'

const CAREERS_EMAIL = 'careers@cadencey.io'
const MAX_RESUME_BYTES = 8 * 1024 * 1024

type Props = {
  job: Job
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

/** Prefer Resend API when configured on Vercel (supports real attachments). */
async function sendViaResendApi(payload: Record<string, string>): Promise<boolean> {
  try {
    const response = await fetch('/api/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const data = (await response.json().catch(() => null)) as
      | { ok?: boolean; error?: string }
      | null

    if (response.ok && data?.ok) return true

    if (
      response.status === 404 ||
      response.status === 500 ||
      data?.error?.includes('RESEND_API_KEY')
    ) {
      return false
    }

    throw new Error(data?.error || 'Could not send application via API.')
  } catch (error) {
    if (error instanceof TypeError) return false
    throw error
  }
}

/**
 * FormSubmit file uploads only work on the non-AJAX endpoint with multipart FormData.
 * The /ajax/ endpoint delivers field text but drops attachments.
 */
async function sendViaFormSubmit(fields: {
  role: string
  fullName: string
  email: string
  location: string
  linkedin: string
  portfolio: string
  why: string
  resumeFile: File | null
}) {
  const formData = new FormData()
  formData.append('_subject', `Application: ${fields.role} — ${fields.fullName}`)
  formData.append('_template', 'table')
  formData.append('_captcha', 'false')
  formData.append('_replyto', fields.email)
  formData.append('email', fields.email)
  formData.append('Role', fields.role)
  formData.append('Full name', fields.fullName)
  formData.append('Applicant email', fields.email)
  formData.append('Location', fields.location)
  formData.append('LinkedIn / resume URL', fields.linkedin || '(not provided)')
  formData.append('Portfolio / GitHub', fields.portfolio || '(not provided)')
  formData.append('Why CadenceY', fields.why)

  if (fields.resumeFile) {
    // FormSubmit attaches any named file input; use a clear filename.
    formData.append('Resume', fields.resumeFile, fields.resumeFile.name)
  }

  const response = await fetch(`https://formsubmit.co/${CAREERS_EMAIL}`, {
    method: 'POST',
    body: formData,
    headers: { Accept: 'application/json' },
  })

  const data = (await response.json().catch(() => null)) as
    | { success?: string | boolean; message?: string }
    | null

  const ok =
    response.ok &&
    (data == null ||
      data?.success === true ||
      data?.success === 'true' ||
      Boolean(data?.message && /sent|success|deliver/i.test(data.message)))

  if (!response.ok || (data && data.success === false)) {
    throw new Error(
      data?.message ||
        `Could not deliver to ${CAREERS_EMAIL}. Please try again or email us directly.`,
    )
  }

  // Some FormSubmit responses are empty HTML/redirects that still succeed (200).
  if (!ok && response.status >= 400) {
    throw new Error(`Could not deliver to ${CAREERS_EMAIL}. Please try again.`)
  }
}

export function CareerApplyForm({ job }: Props) {
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

      const trimmed = {
        role: job.title,
        fullName: fullName.trim(),
        email: email.trim(),
        location: location.trim(),
        linkedin: linkedin.trim(),
        portfolio: portfolio.trim(),
        why: why.trim(),
      }

      const apiPayload: Record<string, string> = {
        ...trimmed,
        resumeName: resumeFile.name,
        resumeType: resumeFile.type || 'application/octet-stream',
        resumeBase64: await fileToBase64(resumeFile),
      }

      const sentViaApi = await sendViaResendApi(apiPayload)

      if (!sentViaApi) {
        await sendViaFormSubmit({
          ...trimmed,
          resumeFile,
        })
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not send application.')
    } finally {
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
