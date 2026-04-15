import { useEffect, useState } from 'react'
import './ContactPage.css'
import './PageTransition.css'

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', delivery: '', message: '' })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.')
    setFormData({ name: '', email: '', phone: '', subject: '', delivery: '', message: '' })
  }

  return (
    <div className="page page--contact">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="/hauling-mining.png" alt="Contact Us" className="page-hero__img" />
          <div className="page-hero__overlay"></div>
        </div>
        <div className="page-hero__content container">
          <span className="page-hero__badge reveal delay-100">Hubungi Kami</span>
          <h1 className="page-hero__title reveal delay-200">Kontak</h1>
          <p className="page-hero__desc reveal delay-300">
            Punya pertanyaan atau ingin mendiskusikan potensi proyek? Hubungi
            tim kami — kami akan senang mendengar dari Anda.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info reveal reveal--left">
              <h2 className="contact-info__title">
                Mari Membangun <span className="contact-accent">Bersama</span>
              </h2>
              <p className="contact-info__desc">
                Apakah Anda memerlukan eksplorasi geologi, operasional penambangan,
                atau layanan konsultasi, tim kami siap membantu Anda.
              </p>

              <div className="contact-info__items">
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Alamat Kantor</h4>
                    <p>Jakarta, Indonesia</p>
                    <span>Kantor Pusat</span>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Telepon</h4>
                    <p>+62 852 4080 0124</p>
                    <span>Sen – Jum, 08:00 – 17:00 WIB</span>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>info@geostone.co.id</p>
                    <span>Kami membalas dalam 24 jam</span>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="contact-info__social">
                <h4>Ikuti Kami</h4>
                <div className="contact-info__social-links">
                  <a href="#" aria-label="LinkedIn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="Facebook">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper reveal reveal--right">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Kirim Pesan</h3>
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="name">Nama Lengkap</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Nama lengkap Anda" required />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="nama@perusahaan.com" required />
                  </div>
                </div>
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="phone">Telepon</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+62 812 3456 7890" />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="subject">Subjek</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Pertanyaan proyek" required />
                  </div>
                </div>
                <div className="contact-form__field">
                  <label>Metode Pengambilan</label>
                  <div className="contact-form__radio-group">
                    <label className={`contact-form__radio ${formData.delivery === 'pickup' ? 'contact-form__radio--active' : ''}`}>
                      <input type="radio" name="delivery" value="pickup" checked={formData.delivery === 'pickup'} onChange={handleChange} required />
                      <span className="contact-form__radio-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                        </svg>
                      </span>
                      <span className="contact-form__radio-text">
                        <strong>Ambil Sendiri</strong>
                        <small>Pengambilan langsung di lokasi</small>
                      </span>
                    </label>
                    <label className={`contact-form__radio ${formData.delivery === 'delivery' ? 'contact-form__radio--active' : ''}`}>
                      <input type="radio" name="delivery" value="delivery" checked={formData.delivery === 'delivery'} onChange={handleChange} required />
                      <span className="contact-form__radio-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                        </svg>
                      </span>
                      <span className="contact-form__radio-text">
                        <strong>Antar</strong>
                        <small>Dikirim ke lokasi tujuan</small>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="contact-form__field">
                  <label htmlFor="message">Pesan</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Ceritakan tentang proyek Anda..." rows="5" required></textarea>
                </div>
                <button type="submit" className="contact-form__submit">
                  Kirim Pesan
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
