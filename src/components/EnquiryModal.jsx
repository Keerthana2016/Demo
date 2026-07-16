import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react'
import { CONTACT } from '../data.js'

const EnquiryContext = createContext({ openEnquiry: () => {} })
export const useEnquiry = () => useContext(EnquiryContext)

const ENQUIRE_FOR = ['Courses', 'Workshops', 'Certification', 'One-on-one training', 'Other']
const HEARD_FROM = ['Instagram', 'Google Search', 'Friends & Family', 'WhatsApp', 'Walk-in / Nearby', 'Other']

/* Session flag so the popup auto-opens only once per visit.
   Wrapped in try/catch: if storage is unavailable, the site still works. */
const FLAG = 'sowthas-enquiry-shown'
const wasShown = () => { try { return sessionStorage.getItem(FLAG) === '1' } catch { return false } }
const markShown = () => { try { sessionStorage.setItem(FLAG, '1') } catch { /* ignore */ } }

export function EnquiryProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const dialogRef = useRef(null)

  const openEnquiry = useCallback(() => {
    setSent(false)
    setOpen(true)
  }, [])
  const close = useCallback(() => setOpen(false), [])

  // Auto-open shortly after first load, once per session
  useEffect(() => {
    if (wasShown()) return
    const t = setTimeout(() => {
      markShown()
      setOpen(true)
    }, 1600)
    return () => clearTimeout(t)
  }, [])

  // Escape to close + focus the dialog + lock scroll
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && close()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    dialogRef.current?.querySelector('input')?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, close])

  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const lines = [
      'New enquiry — SOWTHAS Fashion Academy website',
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Mobile: ${data.get('mobile')}`,
      `Enquiring for: ${data.get('enquireFor')}`,
      `Heard about us via: ${data.get('heardFrom')}`,
    ]
    // Send the enquiry to the academy's WhatsApp with details prefilled
    window.open(`${CONTACT.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener')
    setSent(true)
  }

  return (
    <EnquiryContext.Provider value={{ openEnquiry }}>
      {children}

      {open && (
        <div className="modal" role="presentation" onClick={close}>
          <div
            className="modal__card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            ref={dialogRef}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal__close" aria-label="Close" onClick={close}>×</button>

            {sent ? (
              <div className="modal__thanks">
                <h2 id="enquiry-title" className="modal__title">Thank you!</h2>
                <p className="modal__sub">
                  Your enquiry is ready in WhatsApp — just press send there and
                  we&rsquo;ll reach you soon. You can also call us directly at{' '}
                  <a href={`tel:${CONTACT.phone}`}>{CONTACT.phoneDisplay}</a>.
                </p>
                <button className="btn btn--primary modal__submit" onClick={close}>Close</button>
              </div>
            ) : (
              <>
                <h2 id="enquiry-title" className="modal__title">Enquire Now</h2>
                <p className="modal__sub">Please share your details. We will reach you soon.</p>

                <form className="modal__form" onSubmit={onSubmit}>
                  <label className="field">
                    <span className="field__label">Name <em aria-hidden="true">*</em></span>
                    <input name="name" type="text" placeholder="Your name" required autoComplete="name" />
                  </label>

                  <label className="field">
                    <span className="field__label">Email ID <em aria-hidden="true">*</em></span>
                    <input name="email" type="email" placeholder="yourname@example.com" required autoComplete="email" />
                  </label>

                  <label className="field">
                    <span className="field__label">Mobile Number <em aria-hidden="true">*</em></span>
                    <input
                      name="mobile"
                      type="tel"
                      placeholder="Enter phone number"
                      required
                      autoComplete="tel"
                      inputMode="numeric"
                      pattern="[0-9+\-\s]{10,15}"
                      title="Please enter a valid 10-digit mobile number"
                    />
                  </label>

                  <label className="field">
                    <span className="field__label">Enquire for <em aria-hidden="true">*</em></span>
                    <select name="enquireFor" required defaultValue="Courses">
                      {ENQUIRE_FOR.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </label>

                  <label className="field">
                    <span className="field__label">Where did you hear about this site? <em aria-hidden="true">*</em></span>
                    <select name="heardFrom" required defaultValue="">
                      <option value="" disabled>Select</option>
                      {HEARD_FROM.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </label>

                  <button type="submit" className="modal__submit">Submit</button>
                  <p className="modal__note">Submitting opens WhatsApp with your details — press send there to reach us.</p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </EnquiryContext.Provider>
  )
}
