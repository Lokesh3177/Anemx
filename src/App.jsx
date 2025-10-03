import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Hero from './Components/Hero'
import CoreTeam from './Components/CoreTeam'
import Contact from './Components/Contact'
import About from './Components/About'
import WhyChooseUs from './Components/Whychoose Us'
import Services from './Components/Servies'
import Projects from './Components/Projects'
const App = () => {
  return (
    <div>
      <Navbar />
      <main id="main">
        <Hero />
        <CoreTeam />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Contact />
        <About />
      </main>
    </div>
  )
}

export default App

