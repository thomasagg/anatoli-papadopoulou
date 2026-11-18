export default function SectionHeading({ eyebrow, title, id, align = 'left' }) {
  return (
    <div className={`section-heading reveal align-${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
    </div>
  )
}
