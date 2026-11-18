import { useEffect, useState } from 'react'
import { nav, profile } from '../content.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="container header-inner">
        <a href="#home" className="brand" onClick={close}>
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-text">
            <span className="brand-name">{profile.name}</span>
            <span className="brand-role">{profile.role}</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          aria-label={open ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού'}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>

        <nav id="main-nav" className="main-nav" aria-label="Κύρια πλοήγηση">
          <ul>
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={profile.phoneHref} className="btn btn-primary btn-sm nav-cta">
            Κλείστε ραντεβού
          </a>
        </nav>
      </div>
    </header>
  )
}
