import { useState, useEffect } from 'react'
import logoNorvo from '../assets/logo-norvo.png'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`}>
      <div className="navbar__left">
        <div className="navbar__logo">
          <img src={logoNorvo} alt="Norvo logo" />
        </div>
        <span className="navbar__brand">NorvoAI - Solutions</span>
      </div>

      <div className="navbar__center">
        <a href="#about">Despre</a>
        <a href="#services">Soluții</a>
      </div>

      <div className="navbar__right">
        <a href="#contact">Contact</a>

        <button className="navbar__cta" aria-label="Navigate">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
