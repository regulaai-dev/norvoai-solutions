import { useState, Suspense, lazy } from 'react'
import './Footer.css'

const Dithering = lazy(() =>
  import('@paper-design/shaders-react').then((mod) => ({ default: mod.Dithering }))
)

function Footer() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <footer
      className="footer"
      id="contact"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Suspense fallback={<div className="footer__shader-fallback" />}>
        <div className="footer__shader">
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

      <div className="footer__content">
        <div className="footer__inner">
          <div className="footer__nav">
            <div className="footer__nav-col footer__nav-col--row">
              <a href="#contact">Contact</a>
              <span className="footer__nav-phones">+40 744 983 421 / +40 751 087 127</span>
            </div>
          </div>
        </div>

        <div className="footer__social-row">
          <div className="footer__social">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">X</a>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copyright">
            © 2026. NorvoAI Solutions. Toate drepturile rezervate.
          </span>
          <span className="footer__credit">Made by NorvoAI - Solutions</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
