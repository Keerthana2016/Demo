import { useState } from 'react'
import { Link } from 'react-router-dom'
import { STATS, OFFERINGS, COURSES, TESTIMONIALS, CONTACT } from '../data.js'
import { Star } from '../components/Motifs.jsx'
import { CtaBand } from '../components/Shared.jsx'

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            Teynampet, Chennai · Women-focused academy
          </p>
          <h1 className="hero__title">
            Stitch your passion<br />
            into a <span className="hero__title-accent">career</span>
          </h1>
          <p className="hero__sub">
            Practical tailoring and fashion designing courses — pattern making,
            perfect fitting and garment construction made simple, even for
            complete beginners.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--gold" to="/courses">Explore courses</Link>
            <a className="btn btn--ghost" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp us
            </a>
          </div>
          <dl className="hero__stats">
            {STATS.map((s) => (
              <div key={s.label} className="hero__stat">
                <dt className="hero__stat-value">{s.value}</dt>
                <dd className="hero__stat-label">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__media">
          <img
            src="/images/founder.jpeg"
            alt="SOWTHAS Fashion Academy students celebrating with their course certificates"
            className="hero__img"
          />
        </div>
      </div>
    </section>
  )
}

function Offerings() {
  const [active, setActive] = useState(OFFERINGS[0].id)
  const current = OFFERINGS.find((o) => o.id === active)

  return (
    <section className="section offerings" id="offerings">
      <div className="container">
        <p className="eyebrow">What we offer</p>
        <h2 className="section__title">
          Learn tailoring the <em>simple</em> way
        </h2>
        <p className="section__sub">
          Basic and advanced training that fits your lifestyle and time commitments.
        </p>

        <div className="tabs" role="tablist" aria-label="Our offerings">
          {OFFERINGS.map((o) => (
            <button
              key={o.id}
              role="tab"
              aria-selected={active === o.id}
              className={`tabs__tab ${active === o.id ? 'is-active' : ''}`}
              onClick={() => setActive(o.id)}
            >
              {o.tab}
            </button>
          ))}
        </div>

        <div className="tabs__panel" role="tabpanel">
          <img className="tabs__img" src={current.image} alt="" />
          <div className="tabs__panel-copy">
            <h3>{current.title}</h3>
            <p>{current.text}</p>
            <ul className="tabs__points">
              {current.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function CoursesPreview() {
  return (
    <section className="section courses">
      <div className="container">
        <p className="eyebrow">Trending courses</p>
        <h2 className="section__title">Choose the course that suits you</h2>
        <p className="section__sub">
          Not sure which one fits? <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer">Message us on WhatsApp</a> and we&rsquo;ll guide you.
        </p>

        <div className="courses__grid">
          {COURSES.map((c) => (
            <article className="course-card" key={c.id}>
              <div className="course-card__media">
                <img src={c.image} alt={c.title} loading="lazy" />
                <span className="course-card__tag">{c.tag}</span>
              </div>
              <div className="course-card__body">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="course-card__meta">
                  <span>{c.duration}</span>
                  <span>{c.level}</span>
                </div>
                <Link className="course-card__link" to={`/courses#${c.id}`}>
                  Course details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section testimonials" id="reviews">
      <div className="container">
        <p className="eyebrow eyebrow--onDark">Student stories</p>
        <h2 className="section__title section__title--onDark">
          What our students are saying
        </h2>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t) => (
            <figure className="testimonial" key={t.name}>
              <div className="testimonial__stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="testimonial__star" />
                ))}
              </div>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <span className="testimonial__name">{t.name}</span>
                <span className="testimonial__role">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Offerings />
      <CoursesPreview />
      <Testimonials />
      <CtaBand />
    </>
  )
}
