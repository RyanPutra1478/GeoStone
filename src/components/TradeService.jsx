import { useEffect, useRef } from 'react'
import './TradeService.css'

function TradeService() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('trade--visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const tradeItems = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
        </svg>
      ),
      title: 'Nickel Ore',
      desc: 'High-grade nickel ore sourced from premium mining sites across Indonesia.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Coal & Minerals',
      desc: 'Reliable coal supply and mineral commodities for industrial and energy needs.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a14.5 14.5 0 014 10 14.5 14.5 0 01-4 10 14.5 14.5 0 01-4-10A14.5 14.5 0 0112 2z"/>
        </svg>
      ),
      title: 'Global Trading',
      desc: 'International commodity trading network connecting Indonesian resources to the world.',
    },
  ]

  return (
    <section className="trade" id="trade" ref={sectionRef}>
      <div className="container">
        <div className="trade__wrapper">
          {/* Left Content */}
          <div className="trade__content">
            <span className="section-badge trade__badge">Coming Soon</span>
            <h2 className="section-title trade__title">
              Trade Service
              <br />
              <span className="trade__title-accent">Platform</span>
            </h2>
            <p className="section-subtitle">
              We're developing a comprehensive mineral trading platform that will
              connect mining operations directly with global buyers, enabling
              transparent and efficient commodity transactions.
            </p>

            <div className="trade__items">
              {tradeItems.map((item, i) => (
                <div className="trade__item" key={i}>
                  <div className="trade__item-icon">{item.icon}</div>
                  <div className="trade__item-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="trade__notify">
              <div className="trade__notify-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>
                </svg>
              </div>
              <span>Stay tuned — this feature is under development</span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="trade__visual">
            <div className="trade__visual-card">
              <div className="trade__visual-header">
                <div className="trade__visual-dots">
                  <span></span><span></span><span></span>
                </div>
                <span className="trade__visual-label">Trade Dashboard</span>
              </div>
              <div className="trade__visual-body">
                <div className="trade__visual-chart">
                  <div className="trade__visual-bar" style={{ height: '45%' }}></div>
                  <div className="trade__visual-bar" style={{ height: '72%' }}></div>
                  <div className="trade__visual-bar" style={{ height: '58%' }}></div>
                  <div className="trade__visual-bar" style={{ height: '85%' }}></div>
                  <div className="trade__visual-bar" style={{ height: '65%' }}></div>
                  <div className="trade__visual-bar" style={{ height: '92%' }}></div>
                  <div className="trade__visual-bar" style={{ height: '78%' }}></div>
                </div>
                <div className="trade__visual-stats">
                  <div className="trade__visual-stat">
                    <span className="trade__visual-stat-label">Total Volume</span>
                    <span className="trade__visual-stat-value">24,500 MT</span>
                  </div>
                  <div className="trade__visual-stat">
                    <span className="trade__visual-stat-label">Active Buyers</span>
                    <span className="trade__visual-stat-value">---</span>
                  </div>
                  <div className="trade__visual-stat">
                    <span className="trade__visual-stat-label">Status</span>
                    <span className="trade__visual-stat-status">In Development</span>
                  </div>
                </div>
              </div>
              <div className="trade__visual-overlay">
                <div className="trade__visual-lock">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                  </svg>
                  <span>Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TradeService
