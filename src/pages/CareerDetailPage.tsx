import { Link, Navigate, useParams } from 'react-router-dom'
import { CareerApplyForm } from '../components/CareerApplyForm'
import { getJob, hiringSteps } from '../data/jobs'

export function CareerDetailPage() {
  const { slug = '' } = useParams()
  const job = getJob(slug)

  if (!job || job.filled) return <Navigate to="/careers" replace />

  return (
    <main className="career-detail">
      <section className="wrap career-detail-hero">
        <Link className="career-back" to="/careers">
          ← All open roles
        </Link>
        <div className="job-card-title-row">
          <h1>{job.title}</h1>
          <span className="job-level">{job.level}</span>
        </div>
        <p className="career-detail-summary">{job.summary}</p>
        <div className="job-tags">
          {job.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="career-detail-meta">
          <div>
            <span>Level</span>
            <strong>{job.level}</strong>
          </div>
          <div>
            <span>Compensation</span>
            <strong>{job.salaryFullTime}</strong>
            <em>{job.salaryPartTime} part-time / contract</em>
          </div>
          <div>
            <span>Location</span>
            <strong>{job.location}</strong>
          </div>
          <div>
            <span>Type</span>
            <strong>{job.type}</strong>
          </div>
        </div>
      </section>

      <section className="wrap career-detail-grid">
        <div className="career-detail-main">
          <h2>About the role</h2>
          <p>{job.about}</p>

          <h2>What you will do</h2>
          <ul>
            {job.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Qualifications</h2>
          <ul>
            {job.qualifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {job.niceToHave && job.niceToHave.length > 0 && (
            <>
              <h2>Nice to have</h2>
              <ul>
                {job.niceToHave.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {job.technologies && job.technologies.length > 0 && (
            <>
              <h2>Core technologies</h2>
              <p className="career-tech-note">Pick one or two as your primary strength.</p>
              <div className="job-tags">
                {job.technologies.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </>
          )}

          <h2>Compensation & benefits</h2>
          <p>
            {job.salaryFullTime} full-time · {job.salaryPartTime} part-time / contract
            (negotiable). Remote work allowance, training support, equipment subsidy,
            token-based compensation alongside base salary, and generous leave including
            an annual summer break.
          </p>

          <h2>How we hire</h2>
          <div className="career-hire-steps">
            {hiringSteps.map((step) => (
              <article key={step.title}>
                <span>{step.time}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>

        <CareerApplyForm job={job} />
      </section>
    </main>
  )
}
