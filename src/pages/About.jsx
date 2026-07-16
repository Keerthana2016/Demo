import { JOURNEY } from '../data.js'
import { PageHeader, CtaBand } from '../components/Shared.jsx'

const PILLARS = [
  { title: 'Hands-on from day one', text: 'You stitch real garments from the first week — not just theory and notes.' },
  { title: 'Individual guidance', text: 'Small batches so every student\u2019s work is personally reviewed and corrected.' },
  { title: 'Beginner friendly', text: 'Pattern making broken into simple steps anyone can follow, in Tamil and English.' },
]

function Story() {
  return (
    <section className="section about">
      <div className="container about__grid">
        <div className="about__visual">
          <img
            className="about__img"
            src="/images/fabric-work.jpeg"
            alt="Working with fabric at SOWTHAS Fashion Academy"
          />
          <div className="about__swatch about__swatch--gold" aria-hidden="true" />
          <div className="about__swatch about__swatch--navy" aria-hidden="true" />
        </div>

        <div className="about__copy">
          <p className="eyebrow">Our story</p>
          <h2 className="section__title section__title--left">
            More than an institute — a place where passion becomes a profession
          </h2>
          <p>
            SOWTHAS Fashion Academy grew out of <strong>SOWTHAS Fashion</strong>,
            a tailoring practice whose perfect fitting and precise pattern making
            earned the trust of customers across Chennai. Encouraged by them, founder
            Mrs. Sandhya began teaching the craft she has loved since childhood.
          </p>
          <p>
            We believe anyone can learn tailoring with the right guidance. Our
            methods simplify pattern making and garment construction so that even
            complete beginners understand — through hands-on practice, professional
            techniques and individual attention at every step.
          </p>
          <p>
            Our mission is simple: empower women with a valuable skill, inspire
            creativity, and support them in building careers or businesses of
            their own in the fashion industry.
          </p>
        </div>
      </div>
    </section>
  )
}

function Mentor() {
  return (
    <section className="section mentor" id="mentor">
      <div className="container mentor__grid">
        <div className="mentor__card">
          <img
            className="mentor__photo"
            src="/images/founder.jpeg"
            alt="Mrs. Sandhya, founder of SOWTHAS Fashion Academy"
          />
          <h3 className="mentor__name">Mrs. Sandhya</h3>
          <p className="mentor__role">Founder &amp; Lead Trainer</p>
          <p className="mentor__quote">
            &ldquo;Tailoring gave me an identity of my own. My goal is for every
            student to walk out with a skill nobody can take away from her.&rdquo;
          </p>
        </div>

        <div className="mentor__copy">
          <p className="eyebrow">Your mentor</p>
          <h2 className="section__title section__title--left">Learn directly from the founder</h2>
          <p className="mentor__intro">
            Every batch at SOWTHAS is taught personally by Mrs. Sandhya — a
            professionally trained fashion designer whose fitting and pattern
            work built the academy&rsquo;s reputation, one satisfied customer at a time.
          </p>
          <ul className="mentor__pillars">
            {PILLARS.map((p) => (
              <li key={p.title}>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Journey() {
  return (
    <section className="section journey" id="journey">
      <div className="container">
        <p className="eyebrow">Our journey</p>
        <h2 className="section__title">Built stitch by stitch</h2>

        <ol className="journey__timeline">
          {JOURNEY.map((step, i) => (
            <li className={`journey__item ${i % 2 ? 'journey__item--right' : ''}`} key={step.title}>
              <div className="journey__marker" aria-hidden="true" />
              <div className="journey__card">
                <span className="journey__year">{step.year}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="The story behind SOWTHAS"
        sub="From a lifelong passion for tailoring to a trusted academy for aspiring designers."
        image="/images/classroom.jpeg"
      />
      <Story />
      <Mentor />
      <Journey />
      <CtaBand />
    </>
  )
}
