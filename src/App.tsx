import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { GrowthServices } from './components/GrowthServices'
import { Skills } from './components/Skills'
import { Portfolio } from './components/Portfolio'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-cream text-ink dark:bg-ink dark:text-cream">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <GrowthServices />
          <Skills />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
