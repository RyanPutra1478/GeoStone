import { useEffect } from 'react'
import './ServicesPage.css'
import './PageTransition.css'

function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2" /><path d="M12 12h.01" /><path d="M17 12h.01" />
          <path d="M7 12h.01" /><path d="M2 10h20" /><path d="M2 14h20" />
        </svg>
      ),
      title: 'Operasi Pertambangan',
      desc: 'Operasi penambangan skala penuh termasuk penambangan terbuka, pengupasan tanah pucuk, dan ekstraksi bijih menggunakan alat berat mutakhir.',
      features: ['Penambangan Terbuka', 'Pengupasan Overburden', 'Ekstraksi Bijih & Peledakan', 'Manajemen Lokasi Tambang'],
      image: '/hero-mining.png',
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: 'Manajemen Lingkungan',
      desc: 'Tanggung jawab pengelolaan lingkungan termasuk penilaian dampak, perencanaan reklamasi, dan program rehabilitasi lahan yang berkelanjutan.',
      features: ['Analisis Mengenai Dampak Lingkungan', 'Reklamasi & Rehabilitasi Lahan', 'Sistem Manajemen Limbah', 'Pemantauan Kepatuhan'],
      image: '/hauling-mining.png',
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: 'Hauling & Transportasi',
      desc: 'Manajemen armada yang andal dan layanan transportasi mineral untuk memastikan pengiriman yang aman dan efisien dari lokasi tambang ke fasilitas pengolahan.',
      features: ['Manajemen Armada & Dispatch', 'Konstruksi Jalan Angkut', 'Logistik & Perencanaan Rute', 'Pemeliharaan Peralatan'],
      image: '/hauling-mining.png',
    },
  ]

  return (
    <div className="page page--services">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="/hauling-mining.png" alt="Mining Services" className="page-hero__img" />
          <div className="page-hero__overlay"></div>
        </div>
        <div className="page-hero__content container">
          <h1 className="page-hero__title reveal delay-200">Layanan Kami</h1>
          <p className="page-hero__desc reveal delay-300">
            Dari eksplorasi awal hingga rehabilitasi lingkungan, kami menyediakan
            solusi pertambangan end-to-end yang komprehensif.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="sp-services">
        <div className="container">
          {services.map((service, i) => (
            <div className={`sp-service ${i % 2 !== 0 ? 'sp-service--reverse' : ''} reveal ${i % 2 === 0 ? 'reveal--left' : 'reveal--right'}`} key={i}>
              <div className="sp-service__content">
                <div className="sp-service__header">
                  <div className="sp-service__icon">{service.icon}</div>
                  <span className="sp-service__num">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h2 className="sp-service__title">{service.title}</h2>
                <p className="sp-service__desc">{service.desc}</p>
                <ul className="sp-service__features">
                  {service.features.map((feat, j) => (
                    <li key={j}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sp-service__image">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
