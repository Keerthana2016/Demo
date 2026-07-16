import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV, ANNOUNCEMENTS, CONTACT } from '../data.js'
import { useEnquiry } from './EnquiryModal.jsx'

function Caret() {
  return (
    <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true">
      <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.7 3.9 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.2 1.1l-2.2 2z" fill="currentColor" />
    </svg>
  )
}

function PenIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path d="M3 17.2V21h3.8L18 9.8 14.2 6 3 17.2zM20.7 7.1c.4-.4.4-1 0-1.4l-2.4-2.4c-.4-.4-1-.4-1.4 0l-1.8 1.8 3.8 3.8 1.8-1.8z" fill="currentColor" />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)          // mobile menu
  const [openDrop, setOpenDrop] = useState(null)   // which dropdown (mobile tap / desktop keyboard)
  const location = useLocation()
  const { openEnquiry } = useEnquiry()
  const navRef = useRef(null)

  // Close menus on route change
  useEffect(() => {
    setOpen(false)
    setOpenDrop(null)
  }, [location])

  // Close dropdowns on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenDrop(null)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <header className="nav" ref={navRef}>
      {/* Tier 1 — announcement strip */}
      <div className="announce" role="region" aria-label="Admission announcements">
        <div className="announce__track">
          {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((a, i) => (
            <span key={i} className="announce__item" aria-hidden={i >= ANNOUNCEMENTS.length}>
              {a} <span className="announce__sep">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* Tier 2 — main bar */}
      <div className="nav__main">
        <div className="nav__inner container">
          <Link to="/" className="nav__logo">
            <img src="/images/logo-mark.png" alt="" className="nav__logo-img" />
            <span className="nav__logo-block">
              <span className="nav__logo-tamil">சௌதாஸ் பேஷன் அகாடமி</span>
              <span className="nav__logo-name">SOWTHAS <em>Fashion Academy</em></span>
              <span className="nav__logo-tag">Tailoring · Designing · Teynampet, Chennai</span>
            </span>
          </Link>

          <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Main">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className={`nav__drop ${openDrop === item.label ? 'is-open' : ''}`}>
                  <button
                    className="nav__link nav__drop-btn"
                    aria-expanded={openDrop === item.label}
                    onClick={() => setOpenDrop(openDrop === item.label ? null : item.label)}
                  >
                    {item.label} <Caret />
                  </button>
                  <div className="nav__drop-menu">
                    {item.children.map((c) => (
                      <Link key={c.label} to={c.to} className="nav__drop-item">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              )
            )}

            <div className="nav__actions">
              <a href={`tel:${CONTACT.phone}`} className="btn btn--nav">
                <PhoneIcon /> Contact
              </a>
              <button type="button" className="btn btn--nav btn--nav-gold" onClick={() => { setOpen(false); openEnquiry() }}>
                <PenIcon /> Enroll now
              </button>
            </div>
          </nav>

          <button
            className="nav__burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
