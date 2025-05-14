import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ReactLenis from 'lenis/react'
import Education from './components/Education'

const App = () => {
  return (
    <ReactLenis root>
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Education/>
        <Skill/>
        <Work/>
        <Contact/>
      </main>
      <Footer/>
    </ReactLenis>
  )
}

export default App