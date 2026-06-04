import { useState } from 'react'
import Nav          from './sections/Nav'
import Hero         from './sections/Hero'
import Projects     from './sections/Projects'
import Skills       from './sections/Skills'
import About        from './sections/About'
import Contact      from './sections/Contact'
import Footer       from './sections/Footer'
import ContactModal from './components/ContactModal'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Nav />
      <Hero onOpenModal={() => setModalOpen(true)} />
      <Projects />
      <Skills />
      <About />
      <Contact onOpenModal={() => setModalOpen(true)} />
      <Footer />
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  )
}
