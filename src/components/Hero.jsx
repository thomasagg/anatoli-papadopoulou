import { profile } from '../content.js'
import Sunrise from './Sunrise.jsx'
import { MailIcon, PhoneIcon } from './Icons.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Ψυχοθεραπεία Gestalt · {profile.city}</span>
          <h1 id="hero-heading">{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-training">{profile.training}</p>
          <p className="hero-sessions">
            <span className="dot" aria-hidden="true" />
            {profile.sessions}
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Επικοινωνία
            </a>
            <a href="#about" className="btn btn-ghost">
              Γνωρίστε με
            </a>
          </div>
          <ul className="hero-contact">
            <li>
              <a href={profile.phoneHref}>
                <PhoneIcon /> {profile.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`}>
                <MailIcon /> {profile.email}
              </a>
            </li>
          </ul>
        </div>
        <div className="hero-art">
          <Sunrise className="sunrise" />
        </div>
      </div>
    </section>
  )
}
