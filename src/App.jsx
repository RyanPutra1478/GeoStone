import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CompanyPage from './pages/CompanyPage'
import ServicesPage from './pages/ServicesPage'
import TradePage from './pages/TradePage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/trade" element={<TradePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
