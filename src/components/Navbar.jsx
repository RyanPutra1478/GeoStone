import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    sessionStorage.removeItem('gs_auth')
    navigate('/login')
  }

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
            <span className="navbar__brand-name">Geostone Khamilah Indonesia</span>
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
            <button
              className="navbar__logout"
              onClick={handleLogout}
              title="Keluar dari akun"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Keluar
            </button>
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
