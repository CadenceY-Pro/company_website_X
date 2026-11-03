import { useState } from 'react'
import { partners, type Partner } from '../data/partners'

function PartnerLogo({ partner }: { partner: Partner }) {
  const [failed, setFailed] = useState(!partner.logo)

  return (
    <span className="partner-logo" aria-hidden="true">
      {!failed && partner.logo ? (
        <img
          src={partner.logo}
          alt=""
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="partner-logo-fallback">{partner.initials}</span>
      )}
    </span>
  )
}

function PartnerItem({ partner }: { partner: Partner }) {
  const content = (
    <>
      <PartnerLogo partner={partner} />
      <span className="partner-name">{partner.name}</span>
    </>
  )

  if (partner.href) {
    return (
      <a
        className="partner-item"
        href={partner.href}
        target="_blank"
        rel="noopener noreferrer"
        title={partner.relation}
      >
        {content}
      </a>
    )
  }

  return (
    <span className="partner-item" title={partner.relation}>
      {content}
    </span>
  )
}

export function PartnerMarquee() {
  return (
    <section className="partner-marquee" aria-label="Ecosystem partners">
      <div className="wrap partner-marquee-head">
        <p className="eyebrow">Ecosystem</p>
        <h2>Related networks &amp; partners</h2>
        <p>
          Companies with CadenceY orchestration partnerships or close Interchain /
          CadenceY ecosystem ties.
        </p>
      </div>

      <div className="partner-marquee-viewport">
        <div className="partner-marquee-track">
          {partners.map((partner) => (
            <PartnerItem key={partner.name} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  )
}
