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
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      ),
      title: 'Geological Exploration',
      desc: 'Comprehensive geological surveys, mapping, and core drilling to identify and evaluate mineral deposits with precision and accuracy.',
      features: ['Geological Mapping & Surveying', 'Core & RC Drilling', 'Resource Estimation & Modelling', 'Geochemical Analysis'],
      image: '/service-mining.png',
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2" /><path d="M12 12h.01" /><path d="M17 12h.01" />
          <path d="M7 12h.01" /><path d="M2 10h20" /><path d="M2 14h20" />
        </svg>
      ),
      title: 'Mining Operations',
      desc: 'Full-scale mining operations including open-pit mining, overburden removal, and ore extraction using state-of-the-art heavy equipment.',
      features: ['Open-Pit Mining', 'Overburden Removal', 'Ore Extraction & Blasting', 'Mine Site Management'],
      image: '/hero-mining.png',
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
      title: 'Mine Planning & Design',
      desc: 'Strategic mine planning and engineering design services to optimize resources, minimize waste, and maximize operational efficiency.',
      features: ['Pit Optimization Design', 'Production Scheduling', 'Feasibility Studies', 'Cost Analysis & Budgeting'],
      image: '/service-mining.png',
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: 'Environmental Management',
      desc: 'Responsible environmental stewardship including impact assessments, reclamation planning, and sustainable land rehabilitation programs.',
      features: ['Environmental Impact Assessment', 'Land Reclamation & Rehabilitation', 'Waste Management Systems', 'Compliance Monitoring'],
      image: '/hauling-mining.png',
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: 'Hauling & Transportation',
      desc: 'Reliable fleet management and mineral transportation services ensuring safe and efficient delivery from mine site to processing facilities.',
      features: ['Fleet Management & Dispatch', 'Haul Road Construction', 'Logistics & Route Planning', 'Equipment Maintenance'],
      image: '/hauling-mining.png',
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: 'Consulting & Compliance',
      desc: 'Expert advisory services covering regulatory compliance, permitting, mine safety audits, and technical consulting for mining operations.',
      features: ['Regulatory Compliance', 'Safety Audits & Training', 'Permit Acquisition', 'Technical Advisory'],
      image: '/hero-mining.png',
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
          <span className="page-hero__badge">What We Do</span>
          <h1 className="page-hero__title">Our Services</h1>
          <p className="page-hero__desc">
            From initial exploration to environmental rehabilitation, we provide
            comprehensive end-to-end mining solutions.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="sp-services">
        <div className="container">
          {services.map((service, i) => (
            <div className={`sp-service ${i % 2 !== 0 ? 'sp-service--reverse' : ''}`} key={i}>
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
