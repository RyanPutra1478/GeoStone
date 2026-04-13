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
    { year: '2015', title: 'Perusahaan Didirikan', desc: 'GeoStone didirikan di Jakarta dengan visi untuk mentransformasi lanskap pertambangan Indonesia.' },
    { year: '2017', title: 'Proyek Besar Pertama', desc: 'Mengamankan proyek pertambangan nikel skala besar pertama di Sulawesi Tenggara.' },
    { year: '2019', title: 'Ekspansi Armada', desc: 'Memperluas kapasitas armada hingga lebih dari 50 unit alat berat di berbagai lokasi proyek.' },
    { year: '2021', title: 'Sertifikasi Lingkungan', desc: 'Berhasil meraih sertifikasi Sistem Manajemen Lingkungan ISO 14001.' },
    { year: '2023', title: 'Ekspansi Regional', desc: 'Memperluas operasional ke 5 provinsi di Sulawesi, Kalimantan, dan Maluku.' },
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
          <span className="page-hero__badge reveal delay-100">Tentang Kami</span>
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
                Didirikan dengan visi untuk mentransformasi lanskap pertambangan Indonesia,
                GeoStone telah tumbuh dari penyedia layanan geologi kecil menjadi
                perusahaan solusi pertambangan yang komprehensif. Tim ahli geologi,
                insinyur, dan profesional pertambangan kami menghadirkan puluhan tahun
                keahlian gabungan di setiap proyek.
              </p>
              <p>
                Kami percaya pada penambangan yang bertanggung jawab yang menyeimbangkan pertumbuhan ekonomi
                dengan pelestarian lingkungan, menciptakan nilai yang berkelanjutan bagi para
                pemangku kepentingan dan masyarakat yang kami layani.
              </p>
              <div className="cp-story__stats">
                <div className="cp-story__stat">
                  <span className="cp-story__stat-num">10+</span>
                  <span className="cp-story__stat-label">Tahun Pengalaman</span>
                </div>
                <div className="cp-story__stat">
                  <span className="cp-story__stat-num">50+</span>
                  <span className="cp-story__stat-label">Proyek Selesai</span>
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
                Menjadi perusahaan pertambangan yang paling terpercaya dan inovatif di
                Asia Tenggara, menetapkan standar untuk ekstraksi sumber daya yang
                bertanggung jawab dan pembangunan berkelanjutan.
              </p>
            </div>
            <div className="cp-vm__card cp-vm__card--mission reveal reveal--right">
              <div className="cp-vm__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M12 16l4-4-4-4"/><path d="M8 12h8"/>
                </svg>
              </div>
              <h3>Misi Kami</h3>
              <p>
                Memberikan solusi pertambangan yang inovatif dan berkelanjutan untuk membuka
                potensi bumi sambil menjaga lingkungan kita untuk generasi mendatang,
                memberdayakan masyarakat, dan menciptakan nilai pemangku kepentingan yang abadi.
              </p>
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

      {/* Organizational Structure */}
      <section className="cp-org">
        <div className="container">
          <div className="cp-org__header reveal">
            <span className="section-badge">Manajemen Kami</span>
            <h2 className="section-title">Struktur Organisasi</h2>
          </div>

          <div className="cp-org__tree">
            {/* BOC - Level 1 */}
            <div className="org-group-label reveal">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              DEWAN KOMISARIS (BOARD OF COMMISSIONERS - BOC)
            </div>
            
            <div className="org-trunk"></div>

            <div className="org-level org-level--branched org-level--boc">
              <div className="org-card org-card--blue reveal delay-100">
                <div className="org-card__header">KOMISARIS UTAMA (CHAIRMAN)</div>
                <div className="org-card__body">
                  <span className="org-card__name">Dr. Ir. SUHARTO, ST., MT.</span>
                </div>
              </div>
              <div className="org-card org-card--blue reveal delay-200">
                <div className="org-card__header">KOMISARIS (COMMISSIONER)</div>
                <div className="org-card__body">
                  <span className="org-card__name">Ir. JAMAL RAUF, MT.</span>
                </div>
              </div>
              <div className="org-card org-card--blue reveal delay-300">
                <div className="org-card__header">KOMISARIS (COMMISSIONER)</div>
                <div className="org-card__body">
                  <span className="org-card__name">A NAJEMIAH</span>
                </div>
              </div>
            </div>

            <div className="org-trunk"></div>

            {/* BOD - Level 2 */}
            <div className="org-group-label reveal">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/>
              </svg>
              DEWAN DIREKSI (BOARD OF DIRECTORS - BOD)
            </div>

            <div className="org-trunk"></div>

            <div className="org-level org-level--branched org-level--bod">
              <div className="org-card org-card--green reveal delay-100">
                <div className="org-card__header">DIREKTUR UTAMA (PRESDIR/CEO)</div>
                <div className="org-card__body">
                  <span className="org-card__name">Ir. HAMSAH ALIM</span>
                </div>
              </div>
              <div className="org-card org-card--green reveal delay-200">
                <div className="org-card__header">DIREKTUR</div>
                <div className="org-card__body">
                  <span className="org-card__name">Ir. AHMAD MUSHAWWIR SUHARTO, S.Tr.T., MT.</span>
                </div>
              </div>
            </div>

            {/* Management Splits */}
            <div className="org-mgmt-row">
              {/* CEO Branch */}
              <div className="org-mgmt-branch">
                <div className="org-card org-card--grey org-branch-head reveal">
                  <div className="org-card__header">DIREKTUR UTAMA (CEO)</div>
                  <div className="org-card__body">
                    <span className="org-card__name">Ir. HAMSAH ALIM</span>
                  </div>
                </div>
                
                <div className="org-v-list">
                  <div className="org-card org-card--grey reveal delay-100">
                    <div className="org-card__header">KEPALA TEKNIK TAMBANG (KTT)</div>
                    <div className="org-card__body">
                      <span className="org-card__name">M AMIN</span>
                    </div>
                  </div>
                  <div className="org-card org-card--grey reveal delay-200">
                    <div className="org-card__header">MANAGER OPERASIONAL</div>
                    <div className="org-card__body">
                      <span className="org-card__name">AKBAR</span>
                    </div>
                  </div>
                  <div className="org-card org-card--grey reveal delay-300">
                    <div className="org-card__header">CORPORATE AFFAIR & SECRETARY</div>
                    <div className="org-card__body">
                      <span className="org-card__name">ANDI NURUL FAUZIAH R</span>
                    </div>
                  </div>
                  <div className="org-card org-card--grey reveal delay-400">
                    <div className="org-card__header">MANAGER COMMERCIAL</div>
                    <div className="org-card__body">
                      <span className="org-card__name">*(LOWONGAN/TBA)*</span>
                    </div>
                  </div>
                  <div className="org-card org-card--grey reveal delay-500">
                    <div className="org-card__header">MANAGER EXTERNAL & SECURITY</div>
                    <div className="org-card__body">
                      <span className="org-card__name">*(LOWONGAN/TBA)*</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CFO Branch */}
              <div className="org-mgmt-branch">
                <div className="org-card org-card--grey org-branch-head reveal">
                  <div className="org-card__header">DIREKTUR UMUM & KEUANGAN (CFO)</div>
                  <div className="org-card__body">
                    <span className="org-card__name">ARPAISAL</span>
                  </div>
                </div>

                <div className="org-v-list">
                  <div className="org-card org-card--grey reveal delay-100">
                    <div className="org-card__header">MANAGER HRGA</div>
                    <div className="org-card__body">
                      <span className="org-card__name">ARPAISAL</span>
                    </div>
                  </div>
                  <div className="org-card org-card--grey reveal delay-200">
                    <div className="org-card__header">MANAGER KEUANGAN</div>
                    <div className="org-card__body">
                      <span className="org-card__name">ARPAISAL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
