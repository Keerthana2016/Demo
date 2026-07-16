import { COURSES, CONTACT } from '../data.js'
import { PageHeader, CtaBand } from '../components/Shared.jsx'

export default function Courses() {
  return (
    <>
      <PageHeader
        eyebrow="Courses"
        title="Courses & workshops"
        sub="From your first stitch to professional pattern making — pick the path that fits your goals."
        image="/images/course-class.jpeg"
      />

      <section className="section course-detail-wrap">
        <div className="container">
          {COURSES.map((c, i) => (
            <article
              className={`course-detail ${i % 2 ? 'course-detail--flip' : ''}`}
              id={c.id}
              key={c.id}
            >
              <div className="course-detail__media">
                <img src={c.image} alt={c.title} loading="lazy" />
                <span className="course-card__tag">{c.tag}</span>
              </div>
              <div className="course-detail__body">
                <div className="course-card__meta">
                  <span>{c.duration}</span>
                  <span>{c.level}</span>
                </div>
                <h2>{c.title}</h2>
                <p className="course-detail__desc">{c.desc}</p>
                <h3 className="course-detail__covers-head">What you&rsquo;ll learn</h3>
                <ul className="tabs__points">
                  {c.covers.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="course-detail__actions">
                  <a className="btn btn--primary" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
                    Enquire on WhatsApp
                  </a>
                  <a className="btn btn--outline" href={`tel:${CONTACT.phone}`}>
                    Call {CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
