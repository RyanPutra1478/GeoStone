import { useState, useEffect, useRef } from 'react'
import './Gallery.css'

function Gallery() {
  const sectionRef = useRef(null)
  const [selectedImg, setSelectedImg] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('gallery--visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      img: '/hero-mining.png',
      title: 'Nickel Mining Site',
      location: 'Southeast Sulawesi',
      category: 'Open-Pit Mining',
    },
    {
      img: '/service-mining.png',
      title: 'Geological Exploration',
      location: 'Central Kalimantan',
      category: 'Exploration',
    },
    {
      img: '/hauling-mining.png',
      title: 'Hauling Operations',
      location: 'South Sulawesi',
      category: 'Transportation',
    },
    {
      img: '/hero-mining.png',
      title: 'Overburden Removal',
      location: 'North Maluku',
      category: 'Mining Operations',
    },
    {
      img: '/service-mining.png',
      title: 'Core Drilling Project',
      location: 'Papua',
      category: 'Exploration',
    },
    {
      img: '/hauling-mining.png',
      title: 'Fleet Management',
      location: 'East Kalimantan',
      category: 'Transportation',
    },
  ]

  return (
    <section className="gallery" id="gallery" ref={sectionRef}>
      <div className="container">
        <div className="gallery__header">
          <span className="section-badge">Our Work</span>
          <h2 className="section-title">
            Project
            <br />
            <span className="gallery__title-accent">Gallery</span>
          </h2>
          <p className="section-subtitle">
            Explore our portfolio of completed and ongoing mining projects across
            Indonesia. Each project reflects our commitment to excellence.
          </p>
        </div>

        <div className="gallery__grid">
          {projects.map((project, i) => (
            <div
              className="gallery__item"
              key={i}
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => setSelectedImg(project)}
            >
              <img src={project.img} alt={project.title} className="gallery__item-img" />
              <div className="gallery__item-overlay">
                <span className="gallery__item-category">{project.category}</span>
                <h3 className="gallery__item-title">{project.title}</h3>
                <div className="gallery__item-location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  {project.location}
                </div>
              </div>
              <div className="gallery__item-zoom">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div className="gallery__lightbox" onClick={() => setSelectedImg(null)}>
          <div className="gallery__lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery__lightbox-close" onClick={() => setSelectedImg(null)} aria-label="Close lightbox">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <img src={selectedImg.img} alt={selectedImg.title} />
            <div className="gallery__lightbox-info">
              <h3>{selectedImg.title}</h3>
              <p>{selectedImg.location} — {selectedImg.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
