import { about, profile } from '../content.js'
import SectionHeading from './SectionHeading.jsx'

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-heading">
      <div className="container about-grid">
        <div className="about-portrait reveal">
          {/* Για φωτογραφία: βάλτε το αρχείο στο public/portrait.jpg και αντικαταστήστε
              το placeholder με: <img src="/portrait.jpg" alt={profile.name} /> */}
          <div className="portrait-placeholder" role="img" aria-label={profile.name}>
            <span className="portrait-initials">ΑΠ</span>
          </div>
          <div className="portrait-badge">
            <strong>Gestalt</strong>
            <span>{profile.city}</span>
          </div>
        </div>
        <div className="about-copy">
          <SectionHeading eyebrow={about.eyebrow} title={about.title} id="about-heading" />
          {about.paragraphs.map((p, i) => (
            <p key={i} className={i === 1 ? 'reveal lead' : 'reveal'}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
