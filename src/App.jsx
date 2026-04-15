import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CompanyPage from './pages/CompanyPage'
import ServicesPage from './pages/ServicesPage'
import TradePage from './pages/TradePage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import { useScrollReveal } from './hooks/useScrollReveal'
import './App.css'

// Auth guard component
function ProtectedRoute({ children }) {
  const isAuth = sessionStorage.getItem('gs_auth') === 'true'
  if (!isAuth) {
    return <Navigate to="/login" replace />
  }
  return children
}

function App() {
  useScrollReveal()
  const location = useLocation()
  
  const isAuthPage = location.pathname === '/login'

  return (
    <div className="app">
      {!isAuthPage && <Navbar />}
      <main>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/company" element={<ProtectedRoute><CompanyPage /></ProtectedRoute>} />
          <Route path="/services" element={<ProtectedRoute><ServicesPage /></ProtectedRoute>} />
          <Route path="/trade" element={<ProtectedRoute><TradePage /></ProtectedRoute>} />
          <Route path="/gallery" element={<ProtectedRoute><GalleryPage /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><ContactPage /></ProtectedRoute>} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
    </div>
  )
}

export default App
