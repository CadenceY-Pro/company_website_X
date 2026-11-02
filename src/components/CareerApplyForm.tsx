import { useState } from 'react'
import type { FormEvent } from 'react'
import type { Job } from '../data/jobs'

const CAREERS_EMAIL = 'careers@cadencey.io'

type Props = {
  job: Job
}

export function CareerApplyForm({ job }: Props) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [portfolio, setPortfolio] = useState('')
  const [why, setWhy] = useState('')
  const [resumeName, setResumeName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const lines = [
      `Role: ${job.title}`,
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Location: ${location}`,
      `LinkedIn / resume URL: ${linkedin}`,
      `Portfolio / GitHub: ${portfolio}`,
      `Resume file: ${resumeName || '(attach in this email)'}`,
      '',
      'Why CadenceY:',
      why,
    ]

    const mailto = `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(
      `Application: ${job.title} — ${fullName}`,
    )}&body=${encodeURIComponent(lines.join('\n'))}`

    window.location.href = mailto
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <aside className="career-apply">
        <h2>Application ready</h2>
        <p>
          Your mail client should open with the application drafted to {CAREERS_EMAIL}.
          Attach your resume if you selected a file, then send.
        </p>
        <button className="btn btn-ghost career-apply-reset" type="button" onClick={() => setSubmitted(false)}>
          Edit application
        </button>
      </aside>
    )
  }

  return (
    <aside className="career-apply">
      <header className="career-apply-head">
        <h2>Apply for {job.title}</h2>
        <p>
          Send materials here or email{' '}
          <a href={`mailto:${CAREERS_EMAIL}`}>{CAREERS_EMAIL}</a>.
        </p>
      </header>

      <a
        className="career-apply-meeting"
        href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(
          `Book 30-minute meeting — ${job.title}`,
        )}`}
      >
        Book a 30 min meeting
      </a>

      <form className="career-apply-form" onSubmit={handleSubmit}>
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
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={(e) => setResumeName(e.target.files?.[0]?.name ?? '')}
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

        <button className="career-apply-submit" type="submit">
          Submit application
        </button>
      </form>
    </aside>
  )
}
