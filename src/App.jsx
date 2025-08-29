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
import WorkExp from './components/WorkExp'

const App = () => {
  return (
    <ReactLenis root>
      <Header/>
      <main>
        <Hero/>
        <About/>
        <WorkExp/>
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