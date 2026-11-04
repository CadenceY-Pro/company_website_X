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

/**
 * Always submit through same-origin /api/apply.
 * Browser → FormSubmit CORS fails on custom domains ("Failed to fetch");
 * the API sends via Resend or server-side FormSubmit instead.
 */
async function sendApplication(payload: Record<string, string>) {
  const response = await fetch('/api/apply', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const data = (await response.json().catch(() => null)) as
    | { ok?: boolean; error?: string; details?: string[] }
    | null

  if (!response.ok || !data?.ok) {
    const detail =
      data?.details?.length ? ` (${data.details.join('; ')})` : ''
    throw new Error(
      (data?.error ||
        (response.status === 404
          ? 'Application API is not available on this deployment. Redeploy with /api/apply.'
          : 'Could not send application. Please try again.')) + detail,
    )
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

      await sendApplication({
        role: job.title,
        fullName: fullName.trim(),
        email: email.trim(),
        location: location.trim(),
        linkedin: linkedin.trim(),
        portfolio: portfolio.trim(),
        why: why.trim(),
        resumeName: resumeFile.name,
        resumeType: resumeFile.type || 'application/octet-stream',
        resumeBase64: await fileToBase64(resumeFile),
      })

      setSubmitted(true)
    } catch (err) {
      const message =
        err instanceof TypeError
          ? 'Network error talking to the server. Open the site on www.cadencey.io (not a redirecting URL) and try again.'
          : err instanceof Error
            ? err.message
            : 'Could not send application.'
      setError(message)
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
