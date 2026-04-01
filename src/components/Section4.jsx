import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { supabase } from '../lib/supabase'
import './Section4.css'

function Section4() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setError('')

    if (!supabase) {
      setSubmitted(true)
      setLoading(false)
      return
    }

    const { error } = await supabase.from('waitlist').insert({ email })

    if (error) {
      if (error.code === '23505') {
        setError('Acest email este deja înregistrat.')
      } else {
        setError('A apărut o eroare. Încearcă din nou.')
      }
      setLoading(false)
    } else {
      setSubmitted(true)
      setLoading(false)
    }
  }

  return (
    <section className="s4" id="coming-soon">
      <svg style={{ display: 'none' }}>
        <filter id="s4-glass-distortion" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.001 0.005" numOctaves="1" seed="17" result="turbulence" />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feSpecularLighting in="softMap" surfaceScale="5" specularConstant="1" specularExponent="100" lightingColor="white" result="specLight">
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" />
          <feDisplacementMap in="SourceGraphic" in2="softMap" scale="200" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <span className="s4__label">Norvo — Platform</span>
      <h2 className="s4__heading">Lansăm platforma în curând.</h2>

      <div className="s4__bottom-row">
        <p className="s4__sub">
          Suntem în etapa de dezvoltare și calibrare a sistemului. Deschidem accesul treptat pentru un număr limitat de organizații care doresc să adopte standardul Norvo. Rezervă-ți locul pe lista de așteptare pentru a beneficia de 3 luni de utilizare gratuită și suport prioritar la configurare. Accesul la perioada de utilizare gratuită este supus unui proces de selecție. Norvo își rezervă dreptul de a aproba candidaturile în funcție de profilul și compatibilitatea organizației cu platforma.
        </p>

        {!submitted ? (
          <form className="s4__form" onSubmit={handleSubmit}>
            <div className="s4__field">
              <label className="s4__field-label">Email</label>
              <input
                type="email"
                className="s4__input"
                placeholder="adresa@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {error && <p className="s4__error">{error}</p>}
            <div className="s4__btn-wrap">
              <button type="submit" className="s4__glass-btn" disabled={loading}>
                <span className="s4__glass-btn-distort" />
                <span className="s4__glass-btn-bg" />
                <span className="s4__glass-btn-shine" />
                <span className="s4__glass-btn-content">
                  {loading ? 'Se trimite...' : 'Anunță-mă la lansare'}
                  {!loading && <ArrowRight size={16} strokeWidth={1.8} />}
                </span>
              </button>
            </div>
          </form>
        ) : (
          <div className="s4__confirm">
            <span className="s4__confirm-icon">✓</span>
            <p className="s4__confirm-text">Te-ai înscris cu succes.<br />Te vom anunța la lansare.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Section4
