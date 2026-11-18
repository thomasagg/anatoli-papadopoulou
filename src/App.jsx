import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Gestalt from './components/Gestalt.jsx'
import Vision from './components/Vision.jsx'
import Topics from './components/Topics.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import useReveal from './useReveal.js'

export default function App() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gestalt />
        <Vision />
        <Topics />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
