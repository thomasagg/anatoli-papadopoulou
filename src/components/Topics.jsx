import { topics } from '../content.js'
import SectionHeading from './SectionHeading.jsx'

export default function Topics() {
  return (
    <section id="topics" className="section topics" aria-labelledby="topics-heading">
      <div className="container">
        <SectionHeading eyebrow={topics.eyebrow} title={topics.title} id="topics-heading" align="center" />
        <ul className="topic-list">
          {topics.items.map((t, i) => (
            <li key={t} className="topic reveal" style={{ transitionDelay: `${(i % 4) * 50}ms` }}>
              {t}
            </li>
          ))}
        </ul>
        <p className="topics-closing reveal">
          {topics.closing}
        </p>
      </div>
    </section>
  )
}
