import { gestalt } from '../content.js'
import SectionHeading from './SectionHeading.jsx'

export default function Gestalt() {
  return (
    <section id="gestalt" className="section gestalt" aria-labelledby="gestalt-heading">
      <div className="container">
        <SectionHeading eyebrow={gestalt.eyebrow} title={gestalt.title} id="gestalt-heading" align="center" />
        <ol className="reasons">
          {gestalt.reasons.map((r, i) => (
            <li key={r.title} className="reason reveal" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
              <span className="reason-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
