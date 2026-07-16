import { useState, useEffect, useCallback } from 'react'
import { GALLERY } from '../data.js'
import { PageHeader, CtaBand } from '../components/Shared.jsx'

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null) // index or null

  const close = useCallback(() => setLightbox(null), [])
  const step = useCallback(
    (dir) => setLightbox((i) => (i === null ? null : (i + dir + GALLERY.length) % GALLERY.length)),
    []
  )

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, close, step])

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Inside the academy"
        sub="Classrooms, garments, and the everyday craft of our students."
        image="/images/garment-rack.jpeg"
      />

      <section className="section">
        <div className="container">
          <div className="gallery__grid">
            {GALLERY.map((g, i) => (
              <button className="gallery__item" key={g.src} onClick={() => setLightbox(i)}>
                <img src={g.src} alt={g.caption} loading="lazy" />
                <span className="gallery__caption">{g.caption}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={GALLERY[lightbox].caption} onClick={close}>
          <button className="lightbox__close" aria-label="Close" onClick={close}>×</button>
          <button
            className="lightbox__arrow lightbox__arrow--left"
            aria-label="Previous image"
            onClick={(e) => { e.stopPropagation(); step(-1) }}
          >‹</button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={GALLERY[lightbox].src} alt={GALLERY[lightbox].caption} />
            <figcaption>{GALLERY[lightbox].caption}</figcaption>
          </figure>
          <button
            className="lightbox__arrow lightbox__arrow--right"
            aria-label="Next image"
            onClick={(e) => { e.stopPropagation(); step(1) }}
          >›</button>
        </div>
      )}

      <CtaBand />
    </>
  )
}
