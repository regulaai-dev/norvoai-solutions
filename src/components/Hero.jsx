import { useState, Suspense, lazy } from 'react'
import { ArrowRight } from 'lucide-react'
import './Hero.css'

const Dithering = lazy(() =>
  import('@paper-design/shaders-react').then((mod) => ({ default: mod.Dithering }))
)

function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section
      className="hero"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Suspense fallback={<div className="hero__fallback" />}>
        <div className="hero__shader">
          <Dithering
            colorBack="#0d1680"
            colorFront="#1925aa"
            shape="warp"
            type="4x4"
            speed={isHovered ? 0.6 : 0.2}
            style={{ width: '100%', height: '100%' }}
            minPixelRatio={1}
          />
        </div>
      </Suspense>

      <svg style={{ display: 'none' }}>
        <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.001 0.005" numOctaves="1" seed="17" result="turbulence" />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feDisplacementMap in="SourceGraphic" in2="softMap" scale="80" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__title-line1">Sistem dinamic</span><br />
          <span className="hero__title-line2">de conformitate.</span>
        </h1>
        <div className="hero__btn-wrap">
          <button
            className="hero__glass-btn"
            onClick={() => document.getElementById('coming-soon').scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="hero__glass-btn-distort" />
            <span className="hero__glass-btn-bg" />
            <span className="hero__glass-btn-shine" />
            <span className="hero__glass-btn-content">
              Anunță-mă la lansare
              <ArrowRight size={16} strokeWidth={1.8} />
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
