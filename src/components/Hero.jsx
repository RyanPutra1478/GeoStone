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
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Trusted Mining Partner Since 2015
          </div>
          <h1 className="hero__title">
            Building the Future
            <br />
            <span className="hero__title-highlight">Through Earth's</span>
            <br />
            Resources
          </h1>
          <p className="hero__description">
            GeoStone delivers excellence in mining exploration, extraction, and
            geological services. We combine cutting-edge technology with
            sustainable practices to unlock the potential beneath the surface.
          </p>
          <div className="hero__actions">
            <Link to="/company" className="hero__btn hero__btn--primary">
              Discover More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/services" className="hero__btn hero__btn--outline">
              Our Services
            </Link>
          </div>
        </div>

        {/* Stats Row */}
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">10+</span>
            <span className="hero__stat-label">Years Experience</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">50+</span>
            <span className="hero__stat-label">Projects Completed</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">100+</span>
            <span className="hero__stat-label">Team Members</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  )
}

export default Hero
