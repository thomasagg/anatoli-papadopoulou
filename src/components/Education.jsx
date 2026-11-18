import { education } from '../content.js'
import SectionHeading from './SectionHeading.jsx'

export default function Education() {
  return (
    <section id="education" className="section education" aria-labelledby="education-heading">
      <div className="container edu-grid">
        <div>
          <SectionHeading eyebrow={education.eyebrow} title={education.title} id="education-heading" />
          <ul className="timeline">
            {education.degrees.map((d) => (
              <li key={d.title} className="reveal">
                <h3>{d.title}</h3>
                <p>{d.org}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="collab-card reveal">
          <h3>{education.collabTitle}</h3>
          <ul>
            {education.collaborations.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
