import { useState } from 'react'
import { Link } from 'react-router-dom'
import { teamMembers } from '../data/team'

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V23h-4v-6.6c0-1.57-.03-3.59-2.19-3.59-2.19 0-2.53 1.71-2.53 3.48V23h-4V8.5z" />
    </svg>
  )
}

function MemberPhoto({
  src,
  name,
  initials,
  photoPosition,
}: {
  src?: string
  name: string
  initials: string
  photoPosition?: string
}) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(src) && !failed

  if (showImage) {
    return (
      <img
        className="team-photo"
        src={src}
        alt={name}
        loading="lazy"
        style={photoPosition ? { objectPosition: photoPosition } : undefined}
        onError={() => setFailed(true)}
      />
    )
  }

  return (
    <div className="team-photo team-photo-fallback" aria-hidden="true">
      {initials}
    </div>
  )
}

export function TeamPage() {
  return (
    <main className="team-page">
      <section className="wrap team-banner" aria-label="Team meeting">
        <div className="team-banner-inner">
          <img
            className="team-banner-image"
            src="/team/meeting.jpg"
            alt="CadenceY team members collaborating in a meeting"
          />
        </div>
      </section>

      <section className="wrap team-hero">
        <p className="eyebrow">Company</p>
        <h1>Meet the team</h1>
        <p className="team-lead">
          The people building CadenceY infinisoc and Pulse — shipping production capital
          flows across chains.
        </p>
      </section>

      <section className="wrap team-grid" aria-label="Team members">
        {teamMembers.map((member) => (
          <article key={member.name} className="team-card">
            <MemberPhoto
              src={member.image}
              name={member.name}
              initials={member.initials}
              photoPosition={member.photoPosition}
            />
            <div className="team-card-body">
              <h2>{member.name}</h2>
              <p className="team-role">{member.role}</p>
              <a
                className="team-linkedin"
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="wrap team-cta">
        <div className="team-cta-box">
          <h2>Want to build with us?</h2>
          <p>We&apos;re hiring remotely across engineering, product, and operations.</p>
          <Link className="btn btn-red" to="/careers">
            View open roles
          </Link>
        </div>
      </section>
    </main>
  )
}
