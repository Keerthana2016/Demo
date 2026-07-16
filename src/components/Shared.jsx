import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CONTACT, NAV } from '../data.js'

/* Scroll to top on route change; honour #hash anchors */
export function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])
  return null
}

export function PageHeader({ eyebrow, title, sub, image }) {
  return (
    <section className="page-head" style={image ? { '--page-head-img': `url(${image})` } : undefined}>
      <div className="container">
        {eyebrow && <p className="eyebrow eyebrow--onDark">{eyebrow}</p>}
        <h1 className="page-head__title">{title}</h1>
        {sub && <p className="page-head__sub">{sub}</p>}
      </div>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <h2 className="cta-band__title">Ready to take your first stitch?</h2>
          <p className="cta-band__sub">Call or WhatsApp us — we&rsquo;ll help you pick the right course and batch timing.</p>
        </div>
        <div className="cta-band__actions">
          <a className="btn btn--gold" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">WhatsApp us</a>
          <a className="btn btn--ghost" href={`tel:${CONTACT.phone}`}>{CONTACT.phoneDisplay}</a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand-col">
          <p className="footer__brand">SOWTHAS <em>Fashion Academy</em></p>
          <p className="footer__line">
            Practical tailoring &amp; fashion designing courses for women —
            hands-on training, individual guidance, and perfect-fitting techniques.
          </p>
        </div>
        <div>
          <h3 className="footer__head">Pages</h3>
          <ul className="footer__list">
            {NAV.map((n) => (
              <li key={n.label}><Link to={n.to}>{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="footer__head">Reach us</h3>
          <ul className="footer__list">
            <li><a href={CONTACT.mapsUrl} target="_blank" rel="noreferrer">{CONTACT.address}</a></li>
            <li><a href={`tel:${CONTACT.phone}`}>{CONTACT.phoneDisplay}</a></li>
            <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><a href={CONTACT.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} SOWTHAS Fashion Academy, Teynampet, Chennai. All rights reserved.</p>
      </div>
    </footer>
  )
}
