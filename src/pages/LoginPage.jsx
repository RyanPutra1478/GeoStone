import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './LoginPage.css'

// Obfuscated credentials (base64)
const _u = atob('ZXBvY2gxMjM=')   // epoch123
const _p = atob('ZXBvY2gzMjE=')   // epoch321

function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [shake, setShake] = useState(false)
  const navigate = useNavigate()
  
  useScrollReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
    // If already logged in, redirect to home
    if (sessionStorage.getItem('gs_auth') === 'true') {
      navigate('/')
    }
  }, [navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simulate a brief loading delay
    setTimeout(() => {
      if (username === _u && password === _p) {
        sessionStorage.setItem('gs_auth', 'true')
        navigate('/')
      } else {
        setError('Username atau password salah. Silakan coba lagi.')
        setShake(true)
        setTimeout(() => setShake(false), 600)
      }
      setIsLoading(false)
    }, 800)
  }

  return (
    <div className="login-page">
      {/* Background shape elements */}
      <div className="login-bg-shape login-bg-shape-1"></div>
      <div className="login-bg-shape login-bg-shape-2"></div>
      
      <div className="container login-container">
        <div className={`login-card reveal reveal--scale ${shake ? 'login-card--shake' : ''}`}>
          {/* Logo */}
          <div className="login-logo">
            <img src="/logo_geostone .png" alt="GeoStone" />
          </div>

          <div className="login-header">
            <h2>Selamat Datang</h2>
            <p>Silakan masuk untuk mengakses portal GeoStone.</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="login-error">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
              </svg>
              <span>{error}</span>
            </div>
          )}

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group reveal delay-100">
              <label htmlFor="username">Username</label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <input 
                  type="text" 
                  id="username" 
                  value={username}
                  onChange={(e) => { setUsername(e.target.value); setError('') }}
                  placeholder="Masukkan username"
                  autoComplete="username"
                  required
                />
              </div>
            </div>

            <div className="form-group reveal delay-200">
              <label htmlFor="password">Kata Sandi</label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input 
                  type={showPassword ? 'text' : 'password'}
                  id="password" 
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError('') }}
                  placeholder="Masukkan kata sandi"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="login-options reveal delay-300">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Ingat Saya</span>
              </label>
              <Link to="/contact" className="forgot-password">Lupa Kata Sandi?</Link>
            </div>

            <button 
              type="submit" 
              className="login-button reveal delay-400" 
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loader"></span>
              ) : (
                'Masuk Sekarang'
              )}
            </button>
          </form>

          <div className="login-footer reveal delay-500">
            <p>Belum memiliki akun? <Link to="/contact">Hubungi Administrator</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
