import { CONTACT } from '../data.js'
import { PageHeader } from '../components/Shared.jsx'

const ITEMS = [
  { label: 'Visit us', value: CONTACT.address, href: CONTACT.mapsUrl, action: 'Open in Google Maps' },
  { label: 'Call / WhatsApp', value: CONTACT.phoneDisplay, href: `tel:${CONTACT.phone}`, action: 'Tap to call' },
  { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}`, action: 'Send an email' },
  { label: 'Instagram', value: '@sowthasfashionacademy', href: CONTACT.instagram, action: 'Follow our work' },
]

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Your first stitch starts with one message"
        sub="Call, WhatsApp, or walk in — we’ll help you pick the right course and batch timing."
        image="/images/tools-flatlay.jpeg"
      />

      <section className="section contact">
        <div className="container">
          <div className="contact__panel">
            <div className="contact__intro">
              <h2 className="section__title section__title--onDark section__title--left">
                Reach the academy
              </h2>
              <p className="contact__sub">
                New batches start regularly. Message us on WhatsApp for the
                current schedule, fees and a free counselling chat about which
                course suits your goals.
              </p>
              <div className="contact__actions">
                <a className="btn btn--gold" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp us
                </a>
                <a className="btn btn--ghost" href={`tel:${CONTACT.phone}`}>
                  {CONTACT.phoneDisplay}
                </a>
              </div>
              <img
                className="contact__img"
                src="/images/academy-event.jpeg"
                alt="Moments from SOWTHAS Fashion Academy"
                loading="lazy"
              />
            </div>

            <ul className="contact__list">
              {ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    <span className="contact__label">{item.label}</span>
                    <span className="contact__value">{item.value}</span>
                    <span className="contact__action">{item.action} →</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
