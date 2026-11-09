import { Link } from 'react-router-dom'
import { COMPANY_LINKS } from '../seo/site'
import { Logo } from './Logo'

export function SiteFooter() {
  return (
    <footer className="footer" id="company">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>Seamless. Automated. Intelligent Apps.</p>
            <p className="footer-company-links">
              <a href={COMPANY_LINKS.website}>www.cadencey.io</a>
              <a href={COMPANY_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={COMPANY_LINKS.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={COMPANY_LINKS.calendly} target="_blank" rel="noopener noreferrer">
                Book a meeting
              </a>
            </p>
          </div>
          <div className="footer-cols">
            <div>
              <h4>Product</h4>
              <Link to="/pulse">Pulse</Link>
            </div>
            <div>
              <h4>Resources</h4>
              <a href={COMPANY_LINKS.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="/BLD_Tokenomics_Lite-Paper-2026.pdf" target="_blank" rel="noopener noreferrer">
                Litepaper
              </a>
              <Link to="/roadmap">Roadmap</Link>
            </div>
            <div>
              <h4>Company</h4>
              <Link to="/team">Team</Link>
              <Link to="/careers">Careers</Link>
              <a href={COMPANY_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} CadenceY. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
