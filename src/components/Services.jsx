import { useState } from 'react'
import './Services.css'

const services = [
  {
    title: 'Managementul Conformității Digitale',
    body: 'Automatizăm procesele de conformitate pentru a asigura respectarea continuă a reglementărilor în vigoare. Platforma Norvo monitorizează în timp real orice modificare legislativă și adaptează fluxurile operaționale ale organizației tale.'
  },
  {
    title: 'Gestiunea Inteligentă a Documentelor',
    body: 'Centralizăm și organizăm automat documentele esențiale ale afacerii tale. Prin clasificare inteligentă și arhivare structurată, reducem timpul dedicat administrării documentelor și eliminăm riscul pierderilor de date critice.'
  },
  {
    title: 'Analiză Predictivă',
    body: 'Transformăm datele operaționale în perspective valoroase. Algoritmii noștri identifică tendințe, anticipează riscuri și oferă recomandări acționabile pentru optimizarea continuă a proceselor din organizația ta.'
  },
  {
    title: 'Verificare și Validare Expertă',
    body: 'Combinăm inteligența artificială cu expertiza umană pentru a verifica și valida datele critice ale afacerii. Fiecare informație trece printr-un proces riguros de control care garantează acuratețea și integritatea datelor.'
  },
  {
    title: 'Gestiunea Automatizată a Contractelor',
    body: 'Simplificăm ciclul de viață al contractelor, de la creare și negociere până la semnare și monitorizare. Platforma Norvo alertează automat la apropierea termenelor cheie și asigură conformitatea fiecărui document contractual.'
  },
  {
    title: 'Monitorizare și Istoric de Audit',
    body: 'Înregistrăm și arhivăm toate acțiunile din sistem pentru a asigura trasabilitate completă. Rapoartele de audit generate automat oferă transparență totală și facilitează demonstrarea conformității în fața autorităților de reglementare.'
  }
]

function Services() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="services" id="services">
      <div className="services__header">
        <div className="services__header-right">
          <h2 className="services__main-heading">Soluțiile Norvo</h2>
        </div>
      </div>

      <div className="services__list">
        {services.map((s, i) => (
          <div className="services__item" key={i}>
            <button
              className="services__item-header"
              onClick={() => toggle(i)}
            >
              <span className="services__item-title">{s.title}</span>
              <span className="services__item-icon">{openIndex === i ? '−' : '+'}</span>
            </button>
            {openIndex === i && (
              <div className="services__item-body">
                <p>{s.body}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
