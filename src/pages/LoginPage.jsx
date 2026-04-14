import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './LoginPage.css'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  
  useScrollReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulating API call
    setTimeout(() => {
      setIsLoading(false)
      navigate('/')
    }, 1500)
  }

  return (
    <div className="login-page">
      {/* Background shape elements */}
      <div className="login-bg-shape login-bg-shape-1"></div>
      <div className="login-bg-shape login-bg-shape-2"></div>
      
      <div className="container login-container">
        <div className="login-card reveal reveal--scale">
          <div className="login-header">
            <h2>Selamat Datang</h2>
            <p>Silakan masuk ke akun Anda untuk melanjutkan akses ke portal GeoStone.</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group reveal delay-100">
              <label htmlFor="email">Alamat Email</label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </span>
                <input 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@geostone.com"
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
                  type="password" 
                  id="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan kata sandi Anda"
                  required
                />
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
