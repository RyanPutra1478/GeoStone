import { useEffect, useRef, useState } from 'react'
import './AboutIntro.css'

function AboutIntro() {
  const sectionRef = useRef(null)
  const mapRef = useRef(null)
  const [mapVisible, setMapVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about-intro--visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMapVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )
    if (mapRef.current) observer.observe(mapRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about-intro" id="about-intro" ref={sectionRef}>
      <div className="container">
        {/* Top: Narrative + Feature Cards */}
        <div className="about-intro__grid">
          {/* Left - Main Content */}
          <div className="about-intro__content">
            <span className="about-intro__badge">
              <span className="about-intro__badge-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </span>
              Tentang Perusahaan
            </span>
            <h2 className="about-intro__title">
              PT Geostone Khamilah
              <span className="about-intro__title-accent"> Indonesia</span>
            </h2>
            <p className="about-intro__desc about-intro__desc--main">
              Perusahaan nasional yang bergerak di bidang pertambangan dan pemilik IUP
              Tambang Galian Tanah dan Batuan yang berlokasi di{' '}
              <strong>Belabori, Kecamatan Parangloe, Kabupaten Gowa</strong>.
            </p>
            <p className="about-intro__desc">
              Fokus utama adalah kegiatan penambangan untuk penyediaan material tanah
              timbunan dan batu untuk kegiatan konstruksi, pembangunan perumahan, dan
              lain-lain. Kegiatan pertambangan yang berwawasan lingkungan dan berkelanjutan.
            </p>
            <p className="about-intro__desc">
              Dalam menjalankan bisnisnya, PT Geostone Khamilah Indonesia akan mematuhi
              aturan dan prinsip-prinsip <strong>Good Corporate Governance (GCG)</strong> dan
              menjaga keseimbangan dengan para pemangku kepentingan <em>(stakeholder)</em>.
            </p>
          </div>

          {/* Right - Feature Cards */}
          <div className="about-intro__features">
            <div className="about-intro__feature-card">
              <div className="about-intro__feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h4>Material Konstruksi</h4>
              <p>Penyediaan material tanah timbunan dan batu berkualitas untuk kegiatan konstruksi dan pembangunan</p>
            </div>

            <div className="about-intro__feature-card">
              <div className="about-intro__feature-icon about-intro__feature-icon--accent">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2z"/><path d="M2 12h20"/><path d="M12 2a14.5 14.5 0 014 10 14.5 14.5 0 01-4 10 14.5 14.5 0 01-4-10A14.5 14.5 0 0112 2z"/>
                </svg>
              </div>
              <h4>Berwawasan Lingkungan</h4>
              <p>Pertambangan berkelanjutan yang menjaga keseimbangan lingkungan untuk generasi masa depan</p>
            </div>

            <div className="about-intro__feature-card">
              <div className="about-intro__feature-icon about-intro__feature-icon--success">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h4>Good Corporate Governance</h4>
              <p>Menjalankan bisnis dengan mematuhi aturan dan prinsip GCG serta menjaga kepentingan stakeholder</p>
            </div>
          </div>
        </div>

        {/* Bottom: Map Section */}
        <div className={`about-intro__map-section ${mapVisible ? 'about-intro__map-section--visible' : ''}`} ref={mapRef}>
          <div className="about-intro__map-container">
            {/* Map Embed */}
            <div className="about-intro__map-canvas">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.5!2d119.599937!3d-5.155791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee57d6ac0c7e9%3A0xfcaba47dedcf1598!2sPT.%20GEOSTONE%20KHAMILAH%20INDONESIA!5e0!3m2!1sid!2sid!4v1713200000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi PT Geostone Khamilah Indonesia"
              />
            </div>

            {/* Map Info Overlay */}
            <div className="about-intro__map-info">
              <div className="about-intro__map-info-card">
                <div className="about-intro__map-pin">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="about-intro__map-details">
                  <h4>PT. Geostone Khamilah Indonesia</h4>
                  <p>Belabori, Kec. Parangloe,<br/>Kab. Gowa, Sulawesi Selatan</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/xYAk9e9xE4z81SW16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-intro__map-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutIntro
