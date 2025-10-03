// ...existing code...
import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import useReveal from '../hooks/useReveal'
import useScrollSpy from '../hooks/useScrollSpy'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const active = useScrollSpy(['home', 'services', 'why-choose-us', 'about', 'contact'])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsMenuOpen(false) }
    const onKey = (e) => { if (e.key === 'Escape') setIsMenuOpen(false) }
    window.addEventListener('resize', onResize)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <nav className="w-full bg-transparent navbar-sticky" role="navigation" aria-label="Main">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center">
        {/* logo - left */}
        <a href="#" aria-label="Home" className="flex items-center">
          <img ref={useReveal(60)} src={logo} alt="ANEMX logo" className="h-10 w-auto" />
        </a>

        {/* spacer + links container (takes remaining space) */}
        <div className="flex-1 flex items-center justify-end">
          {/* fixed max width so links distribute evenly */}
          <div ref={useReveal(120)} className="hidden md:flex w-full max-w-[520px] justify-between text-lg font-medium text-white reveal">
            <a href="#services" aria-current={active === 'services' ? 'page' : undefined} className={`hover:text-gray-300 transition ${active === 'services' ? 'text-blue-400' : ''}`}>Our Services</a>
            <a href="#why-choose-us" aria-current={active === 'why-choose-us' ? 'page' : undefined} className={`hover:text-gray-300 transition ${active === 'why-choose-us' ? 'text-blue-400' : ''}`}>Why Choose us</a>
            <a href="#about" aria-current={active === 'about' ? 'page' : undefined} className={`hover:text-gray-300 transition ${active === 'about' ? 'text-blue-400' : ''}`}>About</a>
            <a href="#contact" aria-current={active === 'contact' ? 'page' : undefined} className={`hover:text-gray-300 transition ${active === 'contact' ? 'text-blue-400' : ''}`}>Contact</a>
          </div>

          {/* mobile toggle (right-most) */}
          <div className="md:hidden ml-4">
            <button
              onClick={() => setIsMenuOpen(prev => !prev)}
              className="text-white focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile dropdown */}
      <div id="mobile-menu" className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="max-w-6xl mx-auto px-4 pb-4">
          <nav className="mt-2 bg-black/80 rounded-md p-3 flex flex-col gap-2 text-white">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="py-2 px-3 rounded hover:bg-white/5">Our Services</a>
            <a href="#why-choose-us" onClick={() => setIsMenuOpen(false)} className="py-2 px-3 rounded hover:bg-white/5">Why Choose us</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="py-2 px-3 rounded hover:bg-white/5">About</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="py-2 px-3 rounded hover:bg-white/5">Contact</a>
          </nav>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
// ...existing code...