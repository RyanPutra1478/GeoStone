import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navLinks = [
    { to: '/', label: 'Beranda' },
    { to: '/company', label: 'Perusahaan' },
    { to: '/services', label: 'Layanan' },
    { to: '/trade', label: 'Perdagangan' },
    { to: '/gallery', label: 'Galeri' },
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  // On non-home pages, navbar should always have a background
  const forceScrolled = location.pathname !== '/'

  return (
    <nav className={`navbar ${scrolled || forceScrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__brand">
          <img src="/logo_geostone .png" alt="GeoStone Logo" className="navbar__logo" />
          <div className="navbar__brand-text">
            <span className="navbar__brand-name">GeoStone</span>
            <span className="navbar__brand-tagline">Pertambangan & Geologi</span>
          </div>
        </Link>

        <ul className={`navbar__menu ${mobileOpen ? 'navbar__menu--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`navbar__link ${isActive(link.to) ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="navbar__cta">
              Hubungi Kami
            </Link>
          </li>
          <li>
            <Link to="/login" className="navbar__login">
              Masuk
            </Link>
          </li>
        </ul>

        <button
          className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          id="navbar-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
