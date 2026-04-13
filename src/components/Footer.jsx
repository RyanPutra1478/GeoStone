import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('footer--visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <footer className="footer" id="contact" ref={sectionRef}>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <div className="footer__brand-header">
                <img src="/logo_geostone .png" alt="GeoStone Logo" className="footer__logo" />
                <div>
                  <h3 className="footer__brand-name">GeoStone</h3>
                  <span className="footer__brand-tagline">Mining & Geological Services</span>
                </div>
              </div>
              <p className="footer__brand-desc">
                A trusted mining and geological services company delivering
                excellence in mineral exploration, extraction, and resource
                management across Indonesia.
              </p>
              <div className="footer__social">
                <a href="#" className="footer__social-link" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="#" className="footer__social-link" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="#" className="footer__social-link" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__links-group">
              <h4 className="footer__links-title">Quick Links</h4>
              <ul className="footer__links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/company">Our Company</Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/gallery">Project Gallery</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer__links-group">
              <h4 className="footer__links-title">Services</h4>
              <ul className="footer__links">
                <li><Link to="/services">Geological Exploration</Link></li>
                <li><Link to="/services">Mining Operations</Link></li>
                <li><Link to="/services">Hauling & Transport</Link></li>
                <li><Link to="/services">Environmental Management</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer__contact">
              <h4 className="footer__links-title">Contact Us</h4>
              <div className="footer__contact-items">
                <div className="footer__contact-item">
                  <div className="footer__contact-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <span>Jakarta, Indonesia</span>
                    <span className="footer__contact-sub">Head Office</span>
                  </div>
                </div>
                <div className="footer__contact-item">
                  <div className="footer__contact-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <span>+62 21 1234 5678</span>
                    <span className="footer__contact-sub">Mon - Fri, 8AM - 5PM</span>
                  </div>
                </div>
                <div className="footer__contact-item">
                  <div className="footer__contact-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <span>info@geostone.co.id</span>
                    <span className="footer__contact-sub">Email Us Anytime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-content">
            <p>&copy; {new Date().getFullYear()} GeoStone. All rights reserved.</p>
            <div className="footer__bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
