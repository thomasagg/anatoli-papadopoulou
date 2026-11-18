import { nav, profile } from '../content.js'


export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">
            {profile.name}
          </p>
          <p className="footer-role">
            {profile.role} · {profile.training}
          </p>
        </div>
        <ul className="footer-nav">
          {nav.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`}>{n.label}</a>
            </li>
          ))}
        </ul>
        <div className="footer-contact">
          <a href={profile.phoneHref}>{profile.phoneDisplay}</a>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {profile.name}. Με επιφύλαξη παντός δικαιώματος.
        </span>
      </div>
    </footer>
  )
}
