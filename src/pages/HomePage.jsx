import Hero from '../components/Hero'
import AboutIntro from '../components/AboutIntro'
import './PageTransition.css'

function HomePage() {
  return (
    <div className="page page--home">
      <Hero />
      <AboutIntro />
    </div>
  )
}

export default HomePage
