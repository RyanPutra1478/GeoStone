import { useEffect } from 'react'
import './CompanyPage.css'

function CompanyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const values = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Keselamatan Utama',
      desc: 'Standar dan protokol keselamatan terdepan di industri untuk memastikan nihil kecelakaan di seluruh operasi kami.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ),
      title: 'Komunitas',
      desc: 'Memberdayakan masyarakat lokal melalui penciptaan lapangan kerja, pendidikan, dan program pembangunan berkelanjutan.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 22l1-1h3l9-9"/><path d="M15.5 2.5a2.12 2.12 0 013 3L6 18l-4 1 1-4z"/>
        </svg>
      ),
      title: 'Inovasi',
      desc: 'Memanfaatkan teknologi mutakhir dan metodologi modern untuk mengoptimalkan operasional pertambangan.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2z"/><path d="M2 12h20"/><path d="M12 2a14.5 14.5 0 014 10 14.5 14.5 0 01-4 10 14.5 14.5 0 01-4-10A14.5 14.5 0 0112 2z"/>
        </svg>
      ),
      title: 'Keberlanjutan',
      desc: 'Berkomitmen pada pengelolaan lingkungan melalui praktik penambangan yang bertanggung jawab dan rehabilitasi lahan.',
    },
  ]

  const milestones = [
    { year: '2015', title: 'Perusahaan Didirikan', desc: 'PT Geostone Khamilah Indonesia didirikan di Jakarta dengan visi untuk mentransformasi lanskap pertambangan Indonesia.' },
    { year: '2017', title: 'Proyek Besar Pertama', desc: 'Mengamankan proyek pertambangan nikel skala besar pertama di Sulawesi Tenggara.' },
    { year: '2019', title: 'Ekspansi Armada', desc: 'Memperluas kapasitas armada hingga lebih dari 50 unit alat berat di berbagai lokasi proyek.' },
    { year: '2025', title: 'Transformasi Digital', desc: 'Meluncurkan platform manajemen pertambangan digital terintegrasi untuk seluruh operasi.' },
  ]

  return (
    <div className="page page--company">
      {/* Page Hero Banner */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="/service-mining.png" alt="Mining Operations" className="page-hero__img" />
          <div className="page-hero__overlay"></div>
        </div>
        <div className="page-hero__content container">
          <h1 className="page-hero__title reveal delay-200">Perusahaan Kami</h1>
          <p className="page-hero__desc reveal delay-300">
            Mempelopori keunggulan pertambangan sejak 2015, menghadirkan solusi
            geologi dan pertambangan kelas dunia di seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* About Story */}
      <section className="cp-story">
        <div className="container">
          <div className="cp-story__grid">
            <div className="cp-story__content reveal reveal--left">
              <span className="section-badge">Siapa Kami</span>
              <h2 className="section-title">
                Mempelopori Keunggulan
                <span className="cp-accent"> Pertambangan</span>
              </h2>
              <p>
                PT. GEOSTONE KHAMILAH INDONESIA adalah perusahaan swasta yang bergerak di bidang
                pertambangan dan perdagangan Batuan Andesit dan Tanah Urug yang berlokasi di Desa Belabori
                Kecamatan Parangloe Kabupaten Gowa Provinsi Sulawesi Selatan. Perusahaan ini telah berdiri sejak
                tahun 2016 dengan wilayah konsesi seluas 70 Hektar yang berizin resmi.
              </p>
              <div className="cp-story__stats">
                <div className="cp-story__stat">
                  <span className="cp-story__stat-num">2016</span>
                  <span className="cp-story__stat-label">Tahun Berdiri</span>
                </div>
                <div className="cp-story__stat">
                  <span className="cp-story__stat-num">70</span>
                  <span className="cp-story__stat-label">Luas Konsesi</span>
                </div>
                <div className="cp-story__stat">
                  <span className="cp-story__stat-num">100+</span>
                  <span className="cp-story__stat-label">Anggota Tim</span>
                </div>
                <div className="cp-story__stat">
                  <span className="cp-story__stat-num">5</span>
                  <span className="cp-story__stat-label">Provinsi</span>
                </div>
              </div>
            </div>
            <div className="cp-story__image reveal reveal--right">
              <img src="/hero-mining.png" alt="Mining Site" />
              <div className="cp-story__image-accent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="cp-vm">
        <div className="container">
          <div className="cp-vm__grid">
            <div className="cp-vm__card cp-vm__card--vision reveal reveal--left">
              <div className="cp-vm__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3>Visi Kami</h3>
              <p>
                Menjadi Perusahaan Tambang Batuan Andesit dan Tanah Urug Terbaik dan Terbesar
              </p>
            </div>
            <div className="cp-vm__card cp-vm__card--mission reveal reveal--right">
              <div className="cp-vm__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M12 16l4-4-4-4"/><path d="M8 12h8"/>
                </svg>
              </div>
              <h3>Misi Kami</h3>
              <ul className="cp-vm__list">
                <li>Mengutamakan keselamatan dan kelestarian lingkungan</li>
                <li>Menjadi contoh bagi perusahan sejenis yang lain dalam menerapkan kaidah pertambangan yang baik</li>
                <li>Memelihara hubungan baik antara stake holder dan lingkungan secara menyeluruh</li>
                <li>Mendukung pembangunan dan pengembangan masyarakat di sekitar wilayah tambang</li>
                <li>Memaksimalkan produksi dan potensi bahan galian yang berada dalam wilyah konsesi.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="cp-values">
        <div className="container">
          <div className="cp-values__header">
            <span className="section-badge">Prinsip Kami</span>
            <h2 className="section-title">Nilai-Nilai Inti</h2>
          </div>
          <div className="cp-values__grid">
            {values.map((val, i) => (
              <div className="cp-values__card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="cp-values__card-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="cp-values__card-icon">{val.icon}</div>
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Timeline / Milestones */}
      <section className="cp-timeline">
        <div className="container">
          <div className="cp-timeline__header">
            <span className="section-badge">Perjalanan Kami</span>
            <h2 className="section-title">Tonggak Sejarah Perusahaan</h2>
          </div>
          <div className="cp-timeline__track">
            {milestones.map((m, i) => (
              <div className="cp-timeline__item" key={i}>
                <div className="cp-timeline__dot"></div>
                <div className="cp-timeline__content">
                  <span className="cp-timeline__year">{m.year}</span>
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CompanyPage
