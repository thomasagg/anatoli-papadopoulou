import { vision } from '../content.js'


export default function Vision() {
  return (
    <section className="vision" aria-label={vision.eyebrow}>
      <div className="container vision-inner reveal">
        <span className="eyebrow eyebrow-light">{vision.eyebrow}</span>
        <blockquote>
          <p>{vision.text}</p>
        </blockquote>
        <ul className="values">
          {vision.values.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
