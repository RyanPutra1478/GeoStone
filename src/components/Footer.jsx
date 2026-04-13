
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer" id="contact">
      {/* CTA Banner */}
      <div className="footer__cta-section">
        <div className="container">
          <div className="footer__cta">
            <div className="footer__cta-bg"></div>
            <div className="footer__cta-content reveal">
              <h2>Siap Memulai Proyek Pertambangan Anda Berikutnya?</h2>
              <p>
                Biarkan kami membawa keahlian dan teknologi mutakhir kami ke
                operasional Anda. Hubungi tim kami untuk konsultasi.
              </p>
              <a href="mailto:info@geostone.co.id" className="footer__cta-btn">
                Hubungi Kami
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid reveal">
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
                Perusahaan layanan pertambangan dan geologi terpercaya yang menghadirkan
                keunggulan dalam eksplorasi mineral, ekstraksi, dan manajemen
                sumber daya di seluruh Indonesia.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer__links-group">
              <h4 className="footer__link-title">Perusahaan</h4>
              <ul className="footer__link-list">
                <li><Link to="/company">Tentang Kami</Link></li>
                <li><Link to="/services">Layanan Kami</Link></li>
                <li><Link to="/gallery">Galeri Proyek</Link></li>
                <li><Link to="/trade">Layanan Perdagangan</Link></li>
                <li><Link to="/contact">Hubungi Kami</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer__links-group">
              <h4 className="footer__links-title">Layanan</h4>
              <ul className="footer__links">
                <li><Link to="/services">Operasi Pertambangan</Link></li>
                <li><Link to="/services">Hauling & Transportasi</Link></li>
                <li><Link to="/services">Manajemen Lingkungan</Link></li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="footer__links-group">
              <h4 className="footer__links-title">Sosial Media</h4>
              <ul className="footer__social-list">
                <li>
                  <a href="#" className="footer__social-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__social-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.525.02c1.31.036 2.512.356 3.58 1.1s1.755 1.764 1.956 3.036a6.27 6.27 0 0 0 3.916 1.903v3.31a9.51 9.51 0 0 1-3.89-1.22v7.11a7.25 7.25 0 0 1-1.39 4.38 7.38 7.38 0 0 1-10.74 0 7.26 7.26 0 0 1-1.39-4.38 7.26 7.26 0 0 1 1.39-4.38 7.38 7.38 0 0 1 5.37-2.19v3.42a3.89 3.89 0 0 0-2.82 1.15 3.82 3.82 0 0 0-.74 2.3 3.82 3.82 0 0 0 .74 2.3 3.89 3.89 0 0 0 5.66 0 3.82 3.82 0 0 0 .74-2.3V0h3.58z"/>
                    </svg>
                    <span>TikTok</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__social-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span>YouTube</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer__contact">
              <h4 className="footer__links-title">Kontak Kami</h4>
              <div className="footer__contact-items">
                <div className="footer__contact-item">
                  <div className="footer__contact-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <span>Makassar, Indonesia</span>
                    <span className="footer__contact-sub">Kantor Pusat</span>
                  </div>
                </div>
                <div className="footer__contact-item">
                  <div className="footer__contact-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <span>+62 852 4080 0124</span>
                    <span className="footer__contact-sub">Sen - Jum, 08:00 - 17:00</span>
                  </div>
                </div>
                <div className="footer__contact-item">
                  <div className="footer__contact-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <span>ahmadmushawwir1@gmail.com</span>
                    <span className="footer__contact-sub">Email Kami Kapan Saja</span>
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
            <p>&copy; {new Date().getFullYear()} GeoStone. Hak Cipta Dilindungi.</p>
            <div className="footer__bottom-links">
              <a href="#">Kebijakan Privasi</a>
              <a href="#">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
