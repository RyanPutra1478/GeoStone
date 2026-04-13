import { useEffect, useRef } from 'react'
import './Services.css'

function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('services--visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
        </svg>
      ),
      title: 'Geological Exploration',
      desc: 'Comprehensive geological surveys, mapping, and core drilling to identify and evaluate mineral deposits with precision and accuracy.',
      features: ['Geological Mapping', 'Core Drilling', 'Resource Estimation'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2"/><path d="M12 12h.01"/><path d="M17 12h.01"/>
          <path d="M7 12h.01"/><path d="M2 10h20"/><path d="M2 14h20"/>
        </svg>
      ),
      title: 'Mining Operations',
      desc: 'Full-scale mining operations including open-pit mining, overburden removal, and ore extraction using state-of-the-art heavy equipment.',
      features: ['Open-Pit Mining', 'Overburden Removal', 'Ore Extraction'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 18H3a2 2 0 01-2-2V8a2 2 0 012-2h3.19M15 6h2a2 2 0 012 2v1"/><path d="M14 2l-3 6h4l-3 6"/>
          <rect x="14" y="14" width="8" height="8" rx="1"/><path d="M18 14v4"/><path d="M14 18h8"/>
        </svg>
      ),
      title: 'Mine Planning & Design',
      desc: 'Strategic mine planning and engineering design services to optimize resources, minimize waste, and maximize operational efficiency.',
      features: ['Pit Optimization', 'Production Scheduling', 'Feasibility Studies'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
        </svg>
      ),
      title: 'Environmental Management',
      desc: 'Responsible environmental stewardship including impact assessments, reclamation planning, and sustainable land rehabilitation programs.',
      features: ['Impact Assessment', 'Land Reclamation', 'Waste Management'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      title: 'Hauling & Transportation',
      desc: 'Reliable fleet management and mineral transportation services ensuring safe and efficient delivery from mine site to processing facilities.',
      features: ['Fleet Management', 'Road Construction', 'Logistics Planning'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
      title: 'Consulting & Compliance',
      desc: 'Expert advisory services covering regulatory compliance, permitting, mine safety audits, and technical consulting for mining operations.',
      features: ['Regulatory Compliance', 'Safety Audits', 'Technical Advisory'],
    },
  ]

  return (
    <section className="services" id="services" ref={sectionRef}>
      <div className="services__bg-shape"></div>
      <div className="container">
        <div className="services__header">
          <span className="section-badge">What We Do</span>
          <h2 className="section-title">
            Comprehensive Mining
            <br />
            <span className="services__title-accent">Services</span>
          </h2>
          <p className="section-subtitle">
            From initial exploration to environmental rehabilitation, we provide
            end-to-end solutions for the mining industry.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <div className="services__card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="services__card-icon">{service.icon}</div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.desc}</p>
              <ul className="services__card-features">
                {service.features.map((feat, j) => (
                  <li key={j}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <div className="services__card-number">{String(i + 1).padStart(2, '0')}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
