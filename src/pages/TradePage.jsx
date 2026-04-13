import { useEffect } from 'react'
import './TradePage.css'
import './PageTransition.css'

function TradePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const commodities = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
        </svg>
      ),
      title: 'Nickel Ore',
      grade: 'High Grade (1.8%+ Ni)',
      desc: 'Premium nickel laterite ore sourced from certified mining sites across Sulawesi and Maluku.',
      status: 'Available',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Chromite Ore',
      grade: 'Metallurgical Grade',
      desc: 'High-quality chromite for metallurgical and chemical applications, consistent supply chain.',
      status: 'Coming Soon',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
      title: 'Iron Ore',
      grade: 'Fe 58%+',
      desc: 'Consistent quality iron ore supply for steel manufacturing and industrial processing.',
      status: 'Coming Soon',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a14.5 14.5 0 014 10 14.5 14.5 0 01-4 10 14.5 14.5 0 01-4-10A14.5 14.5 0 0112 2z"/>
        </svg>
      ),
      title: 'Manganese Ore',
      grade: 'Mn 35%+',
      desc: 'High manganese content ore for steel alloys and battery manufacturing industries.',
      status: 'Coming Soon',
    },
  ]

  const features = [
    { title: 'Direct Sourcing', desc: 'Mine-to-market model ensures quality control and competitive pricing.' },
    { title: 'Quality Assurance', desc: 'SGS & Sucofindo certified lab analysis for every shipment.' },
    { title: 'Logistics Support', desc: 'Comprehensive shipping and port logistics management.' },
    { title: 'Legal Compliance', desc: 'Full regulatory compliance with Indonesian mining export laws.' },
  ]

  return (
    <div className="page page--trade">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="/hero-mining.png" alt="Trade Services" className="page-hero__img" />
          <div className="page-hero__overlay"></div>
        </div>
        <div className="page-hero__content container">
          <span className="page-hero__badge page-hero__badge--soon">Coming Soon</span>
          <h1 className="page-hero__title">Trade Service</h1>
          <p className="page-hero__desc">
            Our upcoming mineral trading platform — connecting Indonesian
            resources to the global market with transparency and efficiency.
          </p>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="tp-banner">
        <div className="container">
          <div className="tp-banner__card">
            <div className="tp-banner__icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
            </div>
            <div className="tp-banner__text">
              <h2>This Feature is Under Development</h2>
              <p>
                We're building a comprehensive mineral trading platform that will
                enable direct transactions between mine operators and global
                buyers. Stay tuned for updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commodities Preview */}
      <section className="tp-commodities">
        <div className="container">
          <div className="tp-commodities__header">
            <span className="section-badge">Our Commodities</span>
            <h2 className="section-title">Minerals We <span className="tp-accent">Trade</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Preview of commodities that will be available through our trading platform.
            </p>
          </div>

          <div className="tp-commodities__grid">
            {commodities.map((item, i) => (
              <div className="tp-commodity-card" key={i}>
                <div className="tp-commodity-card__icon">{item.icon}</div>
                <div className="tp-commodity-card__status" data-status={item.status}>
                  {item.status}
                </div>
                <h3>{item.title}</h3>
                <span className="tp-commodity-card__grade">{item.grade}</span>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="tp-features">
        <div className="container">
          <div className="tp-features__header">
            <span className="section-badge">Platform Preview</span>
            <h2 className="section-title">Why Trade With <span className="tp-accent">GeoStone</span></h2>
          </div>
          <div className="tp-features__grid">
            {features.map((feat, i) => (
              <div className="tp-feature-card" key={i}>
                <div className="tp-feature-card__num">{String(i + 1).padStart(2, '0')}</div>
                <h4>{feat.title}</h4>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="tp-preview">
        <div className="container">
          <div className="tp-preview__card">
            <div className="tp-preview__header">
              <div className="tp-preview__dots">
                <span></span><span></span><span></span>
              </div>
              <span className="tp-preview__label">GeoStone Trade Dashboard</span>
            </div>
            <div className="tp-preview__body">
              <div className="tp-preview__chart">
                {[45, 72, 58, 85, 65, 92, 78, 55, 88, 70].map((h, i) => (
                  <div className="tp-preview__bar" key={i} style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }}></div>
                ))}
              </div>
              <div className="tp-preview__stats">
                <div className="tp-preview__stat">
                  <span>Total Volume</span>
                  <span className="tp-preview__stat-value">---</span>
                </div>
                <div className="tp-preview__stat">
                  <span>Active Buyers</span>
                  <span className="tp-preview__stat-value">---</span>
                </div>
                <div className="tp-preview__stat">
                  <span>Shipments</span>
                  <span className="tp-preview__stat-value">---</span>
                </div>
              </div>
            </div>
            <div className="tp-preview__overlay">
              <div className="tp-preview__lock">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
                <span>Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TradePage
