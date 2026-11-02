import { Link } from 'react-router-dom'
import type { PageContent } from './pageContent'

export function SubPage({ page }: { page: PageContent }) {
  return (
    <main className="subpage">
      <div className="wrap subpage-inner">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p className="subpage-lead">{page.lead}</p>
        <div className="subpage-body">
          {page.body.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
        {page.cta && (
          <div className="subpage-actions">
            {page.cta.to.endsWith('.pdf') || page.cta.to.startsWith('http') ? (
              <a
                className="btn btn-red"
                href={page.cta.to}
                target="_blank"
                rel="noopener noreferrer"
              >
                {page.cta.label}
              </a>
            ) : (
              <Link className="btn btn-red" to={page.cta.to}>
                {page.cta.label}
              </Link>
            )}
            <Link className="btn btn-ghost" to="/">
              Back Home
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
