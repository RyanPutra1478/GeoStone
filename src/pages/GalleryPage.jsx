import { useState, useEffect } from 'react'
import './GalleryPage.css'
import './PageTransition.css'

function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projects = [
    { img: '/hero-mining.png', title: 'Open-Pit Nickel Mining', location: 'Southeast Sulawesi', category: 'Mining', year: '2024' },
    { img: '/service-mining.png', title: 'Geological Core Drilling', location: 'Central Kalimantan', category: 'Exploration', year: '2024' },
    { img: '/hauling-mining.png', title: 'Hauling Fleet Operations', location: 'South Sulawesi', category: 'Hauling', year: '2023' },
    { img: '/hero-mining.png', title: 'Overburden Removal Project', location: 'North Maluku', category: 'Mining', year: '2023' },
    { img: '/service-mining.png', title: 'Mineral Resource Assessment', location: 'Papua', category: 'Exploration', year: '2022' },
    { img: '/hauling-mining.png', title: 'Logistics & Transportation', location: 'East Kalimantan', category: 'Hauling', year: '2022' },
    { img: '/hero-mining.png', title: 'Mine Pit Development', location: 'Southeast Sulawesi', category: 'Mining', year: '2021' },
    { img: '/service-mining.png', title: 'Geological Mapping Survey', location: 'West Papua', category: 'Exploration', year: '2021' },
    { img: '/hauling-mining.png', title: 'Heavy Equipment Deployment', location: 'Central Sulawesi', category: 'Hauling', year: '2020' },
  ]

  const categories = ['All', 'Mining', 'Exploration', 'Hauling']

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <div className="page page--gallery">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="/hauling-mining.png" alt="Project Gallery" className="page-hero__img" />
          <div className="page-hero__overlay"></div>
        </div>
        <div className="page-hero__content container">
          <span className="page-hero__badge">Our Portfolio</span>
          <h1 className="page-hero__title">Project Gallery</h1>
          <p className="page-hero__desc">
            Explore our portfolio of completed and ongoing mining projects
            across Indonesia.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gp-gallery">
        <div className="container">
          {/* Filter Tabs */}
          <div className="gp-gallery__filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`gp-gallery__filter ${activeFilter === cat ? 'gp-gallery__filter--active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="gp-gallery__grid">
            {filteredProjects.map((project, i) => (
              <div
                className="gp-gallery__item"
                key={`${project.title}-${i}`}
                onClick={() => setSelectedImg(project)}
              >
                <img src={project.img} alt={project.title} className="gp-gallery__item-img" />
                <div className="gp-gallery__item-overlay">
                  <span className="gp-gallery__item-cat">{project.category}</span>
                  <h3>{project.title}</h3>
                  <div className="gp-gallery__item-meta">
                    <span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                      {project.location}
                    </span>
                    <span>{project.year}</span>
                  </div>
                </div>
                <div className="gp-gallery__item-zoom">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImg && (
        <div className="gp-lightbox" onClick={() => setSelectedImg(null)}>
          <div className="gp-lightbox__content" onClick={(e) => e.stopPropagation()}>
            <button className="gp-lightbox__close" onClick={() => setSelectedImg(null)} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <img src={selectedImg.img} alt={selectedImg.title} />
            <div className="gp-lightbox__info">
              <h3>{selectedImg.title}</h3>
              <p>{selectedImg.location} — {selectedImg.category} — {selectedImg.year}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryPage
