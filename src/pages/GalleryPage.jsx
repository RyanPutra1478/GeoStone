import { useState, useEffect } from 'react'
import './GalleryPage.css'
import './PageTransition.css'
const imageProjects = Array.from({ length: 56 }, (_, i) => ({
  type: 'image',
  url: `/gallerry/gambar/gallerry (${i + 1}).jpeg`,
  title: `Gambar Dokumentasi ${i + 1}`,
  category: 'Gambar',
}))

const videoProjects = Array.from({ length: 13 }, (_, i) => ({
  type: 'video',
  url: `/gallerry/video/gallerry (${i + 1}).mp4`,
  title: `Video Dokumentasi ${i + 1}`,
  category: 'Video',
}))

const projects = [...imageProjects, ...videoProjects]

const categories = ['All', 'Gambar', 'Video']

function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })
  const [resolution, setResolution] = useState('1080p')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  const handlePrev = (e) => {
    e.stopPropagation()
    setZoom(1)
    setPan({ x: 0, y: 0 })
    const currentIndex = filteredProjects.findIndex((p) => p === selectedImg)
    const newIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1
    setSelectedImg(filteredProjects[newIndex])
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setZoom(1)
    setPan({ x: 0, y: 0 })
    const currentIndex = filteredProjects.findIndex((p) => p === selectedImg)
    const newIndex = currentIndex === filteredProjects.length - 1 ? 0 : currentIndex + 1
    setSelectedImg(filteredProjects[newIndex])
  }

  const handleClose = () => {
    setSelectedImg(null)
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      setZoom((prev) => Math.min(prev + 0.2, 4))
    } else {
      setZoom((prev) => {
        const newZoom = Math.max(prev - 0.2, 1)
        if (newZoom === 1) setPan({ x: 0, y: 0 })
        return newZoom
      })
    }
  }

  const handleMouseDown = (e) => {
    if (zoom <= 1) return
    e.preventDefault()
    setIsDragging(true)
    setStartPos({ x: e.clientX - pan.x, y: e.clientY - pan.y })
  }

  const handleMouseMove = (e) => {
    if (!isDragging || zoom <= 1) return
    setPan({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const zoomBtnIn = () => setZoom(z => Math.min(z + 0.2, 4))
  const zoomBtnOut = () => {
    setZoom(z => {
      const newZoom = Math.max(z - 0.2, 1)
      if (newZoom === 1) setPan({ x: 0, y: 0 })
      return newZoom
    })
  }

  return (
    <>
      <div className="page page--gallery">
        {/* Hero */}
        <section className="page-hero">
          <div className="page-hero__bg">
            <img src="/hauling-mining.png" alt="Project Gallery" className="page-hero__img" />
            <div className="page-hero__overlay"></div>
          </div>
          <div className="page-hero__content container">
            <span className="page-hero__badge">Our Portfolio</span>
            <h1 className="page-hero__title">Project Gallery</h1>
            <p className="page-hero__desc">
              Explore our portfolio of completed and ongoing mining projects across Indonesia.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className="gp-gallery">
          <div className="container">
            {/* Filter */}
            <div className="gp-gallery__filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`gp-gallery__filter ${
                    activeFilter === cat ? 'gp-gallery__filter--active' : ''
                  }`}
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
                  {project.type === 'video' ? (
                    <video src={project.url} className="gp-gallery__item-video" style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'}} />
                  ) : (
                    <img src={project.url} alt={project.title} className="gp-gallery__item-img" />
                  )}

                  <div className="gp-gallery__item-overlay">
                    <span className="gp-gallery__item-cat">{project.category}</span>
                    <h3>{project.title}</h3>
                    <div className="gp-gallery__item-meta">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <div className="gp-gallery__item-zoom">+</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Popup dipindah ke luar .page agar tidak terkena efek CSS transform animasi */}
      {selectedImg && (
        <div className="gp-lightbox" onClick={handleClose}>
          <div 
            className="gp-lightbox__content" 
            onClick={(e) => e.stopPropagation()} 
            onWheel={handleWheel}
          >
            <div className="gp-lightbox__top-controls">
              {selectedImg.type === 'video' && (
                <select 
                  className="gp-lightbox__res-select" 
                  value={resolution} 
                  onChange={(e) => setResolution(e.target.value)}
                >
                  <option value="1080p">1080p (HD)</option>
                  <option value="720p">720p</option>
                  <option value="480p">480p</option>
                  <option value="360p">360p</option>
                </select>
              )}
              {selectedImg.type === 'image' && (
                <div className="gp-lightbox__zoom-group">
                  <button className="gp-lightbox__zoom-btn" onClick={zoomBtnOut}>-</button>
                  <button className="gp-lightbox__zoom-btn" onClick={zoomBtnIn}>+</button>
                </div>
              )}
              <button
                className="gp-lightbox__close"
                onClick={handleClose}
              >
                ✕
              </button>
            </div>

            <button className="gp-lightbox__nav gp-lightbox__nav--prev" onClick={handlePrev}>
              ❮
            </button>

            {selectedImg.type === 'video' ? (
              <video 
                key={`${selectedImg.url}-${resolution}`}
                src={resolution === '1080p' ? selectedImg.url : selectedImg.url.replace('.mp4', `_${resolution}.mp4`)} 
                controls 
                autoPlay 
                style={{ 
                  transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`, 
                  transition: isDragging ? 'none' : 'transform 0.2s ease', 
                  cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
                }} 
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              />
            ) : (
              <img 
                src={selectedImg.url} 
                alt={selectedImg.title} 
                draggable="false"
                style={{ 
                  transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`, 
                  transition: isDragging ? 'none' : 'transform 0.2s ease', 
                  cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
                }} 
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              />
            )}

            <button className="gp-lightbox__nav gp-lightbox__nav--next" onClick={handleNext}>
              ❯
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default GalleryPage