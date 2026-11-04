import { useState } from 'react'
import { Link } from 'react-router-dom'
import { teamMembers } from '../data/team'

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
