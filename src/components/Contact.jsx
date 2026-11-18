import { useState } from 'react'
import { profile } from '../content.js'
import SectionHeading from './SectionHeading.jsx'
import { MailIcon, PhoneIcon, PinIcon, ScreenIcon } from './Icons.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  // Χωρίς backend: ανοίγει το πρόγραμμα email του επισκέπτη με έτοιμο μήνυμα.
  const submit = (e) => {
    e.preventDefault()
    const subject = `Μήνυμα από την ιστοσελίδα — ${form.name}`
    const lines = [`Όνομα: ${form.name}`, `Email: ${form.email}`]
    if (form.phone) lines.push(`Τηλέφωνο: ${form.phone}`)
    lines.push('', form.message)
    window.location.href =
      `mailto:${profile.email}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(lines.join('\n'))}`
    setSent(true)
  }

  const details = [
    { icon: PhoneIcon, label: 'Τηλέφωνο', value: profile.phoneDisplay, href: profile.phoneHref },
    { icon: MailIcon, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: PinIcon, label: 'Γραφείο', value: profile.city },
    { icon: ScreenIcon, label: 'Συνεδρίες', value: 'Online και δια ζώσης' },
  ]

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-heading">
      <div className="container contact-grid">
        <div>
          <SectionHeading eyebrow="Επικοινωνία" title="Ας κάνουμε το πρώτο βήμα μαζί" id="contact-heading" />
          <p className="reveal contact-intro">
            Μπορείτε να επικοινωνήσετε μαζί μου τηλεφωνικά ή μέσω email για να κλείσουμε μια πρώτη
            συνάντηση.
          </p>
          <ul className="contact-details">
            {details.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="reveal">
                <span className="icon-circle">
                  <Icon />
                </span>
                <span>
                  <small>{label}</small>
                  {href ? <a href={href}>{value}</a> : <span>{value}</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <form className="contact-form reveal" onSubmit={submit}>
          <h3>Στείλτε μήνυμα</h3>
          <div className="field">
            <label htmlFor="name">Ονοματεπώνυμο</label>
            <input id="name" name="name" required autoComplete="name" value={form.name} onChange={update} />
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={update}
              />
            </div>
            <div className="field">
              <label htmlFor="phone">Τηλέφωνο (προαιρετικό)</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={update} />
            </div>
          </div>
          <div className="field">
            <label htmlFor="message">Μήνυμα</label>
            <textarea id="message" name="message" rows="5" required value={form.message} onChange={update} />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Αποστολή
          </button>
          {sent && (
            <p className="form-note" role="status">
              Ανοίγει το πρόγραμμα email σας με το μήνυμα έτοιμο προς αποστολή.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
