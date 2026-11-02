import { Link } from 'react-router-dom'
import { careerBenefits, hiringSteps, jobs, type Job } from '../data/jobs'

function JobCardContent({ job }: { job: Job }) {
  return (
    <>
      <div className="job-card-top">
        <div>
          <div className="job-card-title-row">
            <h2>{job.title}</h2>
            <span className="job-level">{job.level}</span>
            {job.filled ? (
              <span className="job-filled-badge">Position filled</span>
            ) : null}
          </div>
          <p>{job.summary}</p>
        </div>
        <div className="job-salary">
          <strong>{job.salaryFullTime}</strong>
          <span>Part-time / contract: {job.salaryPartTime}</span>
        </div>
      </div>
      <div className="job-tags">
        {job.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </>
  )
}

export function CareersPage() {
  const openCount = jobs.filter((job) => !job.filled).length

  return (
    <main className="careers-page">
      <section className="wrap careers-hero" aria-label="Careers intro">
        <div className="careers-hero-panel">
          <p className="eyebrow">Company</p>
          <h1>Open roles</h1>
          <p className="careers-hero-lead">
            CadenceY is hiring remotely across infinisoc, Pulse, and Fast USDC. Every
            listing shows compensation up front. Apply with your resume, portfolio, or
            anything that shows your best work.
          </p>
          <div className="careers-hero-meta">
            <span>Remote · US or compatible time zones</span>
            <span>Full-time & part-time</span>
            <span>
              {openCount} open role{openCount === 1 ? '' : 's'}
            </span>
          </div>
        </div>
      </section>

      <section className="wrap careers-list" aria-label="Open roles">
        {jobs.map((job) =>
          job.filled ? (
            <div
              key={job.slug}
              className="job-card job-card-filled"
              aria-disabled="true"
            >
              <JobCardContent job={job} />
            </div>
          ) : (
            <Link
              key={job.slug}
              to={`/careers/${job.slug}`}
              className="job-card"
            >
              <JobCardContent job={job} />
            </Link>
          ),
        )}
      </section>

      <section className="wrap careers-values">
        <h2>A team built for people who take production seriously</h2>
        <div className="careers-values-grid">
          <article>
            <span>01</span>
            <h3>Ship in the real world</h3>
            <p>
              We measure work by what holds up in production: live infinisoc flows,
              Fast USDC settlement, and operators who refuse opaque bridges.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Senior rooms only</h3>
            <p>
              You will work with people who have already shipped. We hire for judgment,
              not theater, and we keep teams small on purpose.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Custody is the product</h3>
            <p>
              Capability hygiene, honest transaction state, and keys that stay with the
              user are not a compliance layer — they are how CadenceY earns trust.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>Remote, serious collaboration</h3>
            <p>
              Remote-first across US-compatible time zones, with flexible hours and tools
              that keep async work crisp.
            </p>
          </article>
        </div>
      </section>

      <section className="wrap careers-benefits">
        <h2>Compensation & benefits</h2>
        <div className="careers-benefits-grid">
          {careerBenefits.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap careers-process">
        <h2>Three conversations. No mystery maze.</h2>
        <div className="careers-process-grid">
          {hiringSteps.map((step) => (
            <article key={step.title}>
              <span>{step.time}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap careers-cta">
        <div className="careers-cta-box">
          <h2>Do not wait for the perfect listing</h2>
          <p>
            We keep a confidential pipeline for engineers, designers, PMs, and operators.
            Email careers@cadence.xyz or open a role above.
          </p>
          <div className="subpage-actions">
            <a className="btn btn-red" href="mailto:careers@cadence.xyz">
              careers@cadence.xyz
            </a>
            <Link className="btn btn-ghost" to="/team">
              Meet the team
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
