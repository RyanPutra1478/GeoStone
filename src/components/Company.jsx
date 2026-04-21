import { useEffect, useRef } from 'react'
import './Company.css'

function Company() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('company--visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
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

  return (
    <section className="company" id="company" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="company__header">
          <div className="company__header-left">
            <span className="section-badge">About Us</span>
            <h2 className="section-title">
              Pioneering Mining
              <br />
              <span className="company__title-accent">Excellence</span>
            </h2>
          </div>
          <div className="company__header-right">
            <p className="section-subtitle">
              PT Geostone Khamilah Indonesia is a leading mining and geological services company
              committed to delivering world-class solutions in mineral
              exploration, extraction, and resource management across Indonesia.
            </p>
          </div>
        </div>

        {/* About Content */}
        <div className="company__grid">
          <div className="company__story">
            <div className="company__story-card">
              <div className="company__story-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3>Our Story</h3>
              <p>
                Founded with a vision to transform Indonesia's mining landscape,
                PT Geostone Khamilah Indonesia has grown from a small geological services provider into
                a comprehensive mining solutions company. Our team of experienced
                geologists, engineers, and mining professionals bring decades of
                combined expertise to every project.
              </p>
              <p>
                We believe in responsible mining that balances economic growth
                with environmental preservation, creating lasting value for our
                stakeholders and the communities we serve.
              </p>
            </div>

            <div className="company__mission-card">
              <h3>Our Mission</h3>
              <p>
                To be Indonesia's most trusted mining partner, delivering
                innovative and sustainable solutions that unlock the earth's
                potential while safeguarding our environment for future
                generations.
              </p>
            </div>
          </div>

          <div className="company__image-block">
            <img src="/service-mining.png" alt="Mining Geological Exploration" className="company__image" />
            <div className="company__image-badge">
              <span className="company__image-badge-number">10+</span>
              <span className="company__image-badge-text">Years of<br/>Excellence</span>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="company__values">
          <h3 className="company__values-title">Our Core Values</h3>
          <div className="company__values-grid">
            {values.map((val, i) => (
              <div className="company__value-card" key={i}>
                <div className="company__value-icon">{val.icon}</div>
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Company
