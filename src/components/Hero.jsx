import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scroll = window.scrollY
        const overlay = heroRef.current.querySelector('.hero__overlay-gradient')
        if (overlay) {
          overlay.style.opacity = Math.min(0.8 + scroll / 1000, 1)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero__bg">
        <img src="/hero-mining.png" alt="Mining Operations" className="hero__bg-img" />
        <div className="hero__overlay-gradient"></div>
      </div>

      {/* Floating particles */}
      <div className="hero__particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`hero__particle hero__particle--${i + 1}`}></div>
        ))}
      </div>

      <div className="hero__content container">
        <div className="hero__text">
          <h1 className="hero__title reveal delay-200">
            Membangun Masa Depan
            <br />
            <span className="hero__title-highlight">Lewat Kekayaan</span>
            <br />
            Alam Bumi
          </h1>
          <p className="hero__description reveal delay-300">
            PT Geostone Khamilah Indonesia memberikan keunggulan dalam eksplorasi tambang, ekstraksi, dan
            layanan geologi. Kami memadukan teknologi mutakhir dengan
            praktik berkelanjutan untuk membuka potensi di bawah permukaan bumi.
          </p>
          <div className="hero__actions reveal delay-400">
            <Link to="/company" className="hero__btn hero__btn--primary">
              Jelajahi Lebih Lanjut
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/services" className="hero__btn hero__btn--outline">
              Layanan Kami
            </Link>
          </div>
        </div>

        {/* Stats Row */}
        <div className="hero__stats reveal delay-500">
          <div className="hero__stat">
            <span className="hero__stat-number">10+</span>
            <span className="hero__stat-label">Tahun Pengalaman</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">50+</span>
            <span className="hero__stat-label">Proyek Selesai</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">100+</span>
            <span className="hero__stat-label">Anggota Tim</span>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
