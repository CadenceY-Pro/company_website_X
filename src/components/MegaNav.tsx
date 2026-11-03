import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  Caret,
  IconCalendar,
  IconGitHub,
  IconLinkedIn,
  IconLitepaper,
  IconRoadmap,
} from './Icons'
import { BrandMark, Logo } from './Logo'

type MenuKey = 'product' | 'resources' | null

function ExtArrow() {
  return (
    <svg className="ext-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M4 10 10 4M5.5 4H10v4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function MegaNav() {
  const [open, setOpen] = useState<MenuKey>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    setOpen(null)
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(null)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const toggle = (key: MenuKey) => setOpen((cur) => (cur === key ? null : key))

  return (
    <>
      <header className="nav">
        <div className="nav-inner" ref={wrapRef}>
          <Logo />

          <nav className="nav-pill" aria-label="Primary">
            <NavLink to="/" end className={({ isActive }) => (isActive && !open ? 'active' : undefined)}>
              Home
            </NavLink>

            <button
              type="button"
              className={open === 'product' ? 'nav-active' : undefined}
              aria-expanded={open === 'product'}
              onClick={() => toggle('product')}
            >
              Product <Caret />
            </button>
            <button
              type="button"
              className={open === 'resources' ? 'nav-active' : undefined}
              aria-expanded={open === 'resources'}
              onClick={() => toggle('resources')}
            >
              Resources <Caret />
            </button>
            <NavLink
              to="/team"
              className={({ isActive }) => (isActive && !open ? 'active' : undefined)}
              onClick={() => setOpen(null)}
            >
              Team
            </NavLink>
            <NavLink
              to="/careers"
              className={({ isActive }) => (isActive && !open ? 'active' : undefined)}
              onClick={() => setOpen(null)}
            >
              Careers
            </NavLink>

            {open && (
              <div className={`mega-panel mega-${open}`} role="region" aria-label={`${open} menu`}>
                {open === 'product' && (
                  <Link to="/pulse" className="mega-pulse-feature" onClick={() => setOpen(null)}>
                    <div className="mega-pulse-feature-main">
                      <div className="mega-pulse-feature-brand">
                        <span className="mega-pulse-feature-mark" aria-hidden="true">
                          P
                        </span>
                        <div>
                          <span className="mega-product-kicker">Product</span>
                          <strong>Pulse</strong>
                        </div>
                      </div>
                      <h3>Your capital, orchestrated.</h3>
                      <p>
                        The cross-chain DeFi command center that moves, allocates, and
                        rebalances your stablecoin portfolio with one signature — built on
                        CadenceY infinisoc.
                      </p>
                      <div className="mega-pulse-feature-actions">
                        <span className="btn btn-red">Explore Pulse</span>
                        <span className="mega-pulse-feature-link">
                          Early Access <ExtArrow />
                        </span>
                      </div>
                    </div>
                    <div className="mega-pulse-feature-aside" aria-hidden="true">
                      <div className="mega-pulse-feature-stat">
                        <span>One signature</span>
                        <strong>Any chain</strong>
                      </div>
                      <div className="mega-pulse-feature-stat">
                        <span>Non-custodial</span>
                        <strong>Keys stay yours</strong>
                      </div>
                      <div className="mega-pulse-feature-stat">
                        <span>Powered by</span>
                        <strong>infinisoc</strong>
                      </div>
                    </div>
                  </Link>
                )}

                {open === 'resources' && (
                  <div className="mega-split">
                    <div className="mega-feature">
                      <BrandMark className="logo-mark mega-feature-mark" />
                      <h3>CDN powers infinisoc. infinisoc powers products.</h3>
                      <p>
                        Open source, research, and the path ahead — resources for builders
                        shipping on CadenceY.
                      </p>
                    </div>
                    <div className="mega-links">
                      <div className="mega-links-label">Resources</div>
                      <Link to="/github" onClick={() => setOpen(null)}>
                        <span className="mega-link-icon" aria-hidden="true">
                          <IconGitHub />
                        </span>
                        <span>GitHub</span>
                        <ExtArrow />
                      </Link>
                      <a
                        href="/BLD_Tokenomics_Lite-Paper-2026.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(null)}
                      >
                        <span className="mega-link-icon" aria-hidden="true">
                          <IconLitepaper />
                        </span>
                        <span>Litepaper</span>
                        <ExtArrow />
                      </a>
                      <Link to="/roadmap" onClick={() => setOpen(null)}>
                        <span className="mega-link-icon" aria-hidden="true">
                          <IconRoadmap />
                        </span>
                        <span>Roadmap</span>
                        <ExtArrow />
                      </Link>
                    </div>
                  </div>
                )}

              </div>
            )}
          </nav>

          <div className="nav-right">
            <div className="social" aria-label="Quick links">
              <a
                href="https://calendly.com/careers-cadencey/30min"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a meeting"
              >
                <IconCalendar />
              </a>
              <Link to="/github" aria-label="GitHub">
                <IconGitHub />
              </Link>
              <a
                href="https://www.linkedin.com/company/cadencey-tech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <IconLinkedIn />
              </a>
            </div>
            <button
              className="menu-btn"
              aria-label="Menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                {mobileOpen ? (
                  <path d="M4 4l10 10M14 4 4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                ) : (
                  <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-drawer${mobileOpen ? ' open' : ''}`}>
        <div className="mobile-group">
          <strong>Product</strong>
          <Link to="/pulse" onClick={() => setMobileOpen(false)}>
            Pulse
          </Link>
        </div>
        <div className="mobile-group">
          <strong>Resources</strong>
          <Link to="/github" onClick={() => setMobileOpen(false)}>
            GitHub
          </Link>
          <a
            href="/BLD_Tokenomics_Lite-Paper-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
          >
            Litepaper
          </a>
          <Link to="/roadmap" onClick={() => setMobileOpen(false)}>
            Roadmap
          </Link>
        </div>
        <div className="mobile-group">
          <strong>Team</strong>
          <Link to="/team" onClick={() => setMobileOpen(false)}>
            Team
          </Link>
        </div>
        <div className="mobile-group">
          <strong>Careers</strong>
          <Link to="/careers" onClick={() => setMobileOpen(false)}>
            Careers
          </Link>
        </div>
        <Link to="/pulse" className="btn btn-red" onClick={() => setMobileOpen(false)}>
          Early Access
        </Link>
      </div>
    </>
  )
}
