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
      title: 'Safety First',
      desc: 'Industry-leading safety standards and protocols ensuring zero-harm across all operations.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ),
      title: 'Community',
      desc: 'Empowering local communities through job creation, education, and sustainable development programs.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 22l1-1h3l9-9"/><path d="M15.5 2.5a2.12 2.12 0 013 3L6 18l-4 1 1-4z"/>
        </svg>
      ),
      title: 'Innovation',
      desc: 'Leveraging cutting-edge technology and modern methodology to optimize mining operations.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2z"/><path d="M2 12h20"/><path d="M12 2a14.5 14.5 0 014 10 14.5 14.5 0 01-4 10 14.5 14.5 0 01-4-10A14.5 14.5 0 0112 2z"/>
        </svg>
      ),
      title: 'Sustainability',
      desc: 'Committed to environmental stewardship through responsible mining and land rehabilitation.',
    },
  ]

  const milestones = [
    { year: '2015', title: 'Company Founded', desc: 'GeoStone was established in Jakarta with a vision to transform Indonesia\'s mining landscape.' },
    { year: '2017', title: 'First Major Project', desc: 'Secured first large-scale nickel mining project in Southeast Sulawesi.' },
    { year: '2019', title: 'Fleet Expansion', desc: 'Expanded fleet capacity to 50+ heavy equipment units across multiple project sites.' },
    { year: '2021', title: 'Environmental Certification', desc: 'Achieved ISO 14001 Environmental Management System certification.' },
    { year: '2023', title: 'Regional Expansion', desc: 'Extended operations to 5 provinces across Sulawesi, Kalimantan, and Maluku.' },
    { year: '2025', title: 'Digital Transformation', desc: 'Launched integrated digital mining management platform for all operations.' },
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
          <span className="page-hero__badge">About Us</span>
          <h1 className="page-hero__title">Our Company</h1>
          <p className="page-hero__desc">
            Pioneering mining excellence since 2015, delivering world-class
            geological and mining solutions across Indonesia.
          </p>
        </div>
      </section>

      {/* About Story */}
      <section className="cp-story">
        <div className="container">
          <div className="cp-story__grid">
            <div className="cp-story__content">
              <span className="section-badge">Who We Are</span>
              <h2 className="section-title">
                Pioneering Mining
                <span className="cp-accent"> Excellence</span>
              </h2>
              <p>
                Founded with a vision to transform Indonesia's mining landscape,
                GeoStone has grown from a small geological services provider into
                a comprehensive mining solutions company. Our team of experienced
                geologists, engineers, and mining professionals bring decades of
                combined expertise to every project.
              </p>
              <p>
                We believe in responsible mining that balances economic growth
                with environmental preservation, creating lasting value for our
                stakeholders and the communities we serve.
              </p>
              <div className="cp-story__stats">
                <div className="cp-story__stat">
                  <span className="cp-story__stat-num">10+</span>
                  <span className="cp-story__stat-label">Years Experience</span>
                </div>
                <div className="cp-story__stat">
                  <span className="cp-story__stat-num">50+</span>
                  <span className="cp-story__stat-label">Projects Completed</span>
                </div>
                <div className="cp-story__stat">
                  <span className="cp-story__stat-num">100+</span>
                  <span className="cp-story__stat-label">Team Members</span>
                </div>
                <div className="cp-story__stat">
                  <span className="cp-story__stat-num">5</span>
                  <span className="cp-story__stat-label">Provinces</span>
                </div>
              </div>
            </div>
            <div className="cp-story__image">
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
            <div className="cp-vm__card cp-vm__card--vision">
              <div className="cp-vm__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>
                To become the most trusted and innovative mining company in
                Southeast Asia, setting the standard for responsible resource
                extraction and sustainable development.
              </p>
            </div>
            <div className="cp-vm__card cp-vm__card--mission">
              <div className="cp-vm__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M12 16l4-4-4-4"/><path d="M8 12h8"/>
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To deliver innovative and sustainable mining solutions that unlock
                the earth's potential while safeguarding our environment for
                future generations, empowering communities, and creating lasting
                stakeholder value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="cp-values">
        <div className="container">
          <div className="cp-values__header">
            <span className="section-badge">Our Principles</span>
            <h2 className="section-title">Core Values</h2>
          </div>
          <div className="cp-values__grid">
            {values.map((val, i) => (
              <div className="cp-values__card" key={i}>
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
          <div className="cp-org__header">
            <span className="section-badge">Leadership & Management</span>
            <h2 className="section-title">Organizational Structure</h2>
            <p className="section-desc">Guided by experienced commissioners and directors to ensure excellence and sustainability.</p>
          </div>

          <div className="cp-org__groups">
            {/* BOC - Board of Commissioners */}
            <div className="org-group">
              <h3 className="org-group__title">Board of Commissioners (BOC)</h3>
              <div className="org-level">
                <div className="org-card org-card--primary">
                  <div className="org-card__content">
                    <h4>Dr. Ir. Suharto, ST., MT.</h4>
                    <span className="org-card__role">Komisaris Utama</span>
                  </div>
                </div>
                <div className="org-card">
                  <div className="org-card__content">
                    <h4>Ir. Jamal Rauf, MT</h4>
                    <span className="org-card__role">Komisaris</span>
                  </div>
                </div>
                <div className="org-card">
                  <div className="org-card__content">
                    <h4>A Najemiah</h4>
                    <span className="org-card__role">Komisaris</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BOD - Board of Directors */}
            <div className="org-group">
              <h3 className="org-group__title">Board of Directors (BOD)</h3>
              <div className="org-level">
                <div className="org-card org-card--primary">
                  <div className="org-card__content">
                    <h4>Ir. Hamsah Alim</h4>
                    <span className="org-card__role">Direktur Utama (Presdir)</span>
                  </div>
                </div>
                <div className="org-card">
                  <div className="org-card__content">
                    <h4>Ir. Ahmad Mushawwir Suharto, S.Tr.T., MT.</h4>
                    <span className="org-card__role">Direktur</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Management */}
            <div className="org-group">
              <h3 className="org-group__title">Executive Management</h3>
              <div className="org-level org-level--management">
                {/* Reports to CEO */}
                <div className="org-card">
                  <div className="org-card__content">
                    <h4>M. Amin</h4>
                    <span className="org-card__role">KTT</span>
                  </div>
                </div>
                <div className="org-card">
                  <div className="org-card__content">
                    <h4>Akbar</h4>
                    <span className="org-card__role">Manager Operasional</span>
                  </div>
                </div>
                <div className="org-card">
                  <div className="org-card__content">
                    <h4>Andi Nurul Fauziah R</h4>
                    <span className="org-card__role">Corporate Affair & Secretary</span>
                  </div>
                </div>
                <div className="org-card">
                  <div className="org-card__content">
                    <h4>TBA</h4>
                    <span className="org-card__role">Manager Commercial</span>
                  </div>
                </div>
                <div className="org-card">
                  <div className="org-card__content">
                    <h4>TBA</h4>
                    <span className="org-card__role">Manager External & Security</span>
                  </div>
                </div>
                {/* Reports to CFO */}
                <div className="org-card">
                  <div className="org-card__content">
                    <h4>Arpaisal</h4>
                    <span className="org-card__role">Manager HRGA</span>
                  </div>
                </div>
                <div className="org-card">
                  <div className="org-card__content">
                    <h4>Arpaisal</h4>
                    <span className="org-card__role">Manager Keuangan</span>
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
            <span className="section-badge">Our Journey</span>
            <h2 className="section-title">Company Milestones</h2>
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
