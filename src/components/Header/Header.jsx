import React from 'react'

import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Experiência', href: '#experiencia' },
]

export default function Header() {
  const [active, setActive] = useState('Sobre')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['sobre', 'projetos', 'formacao', 'experiencia']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 80 && rect.bottom > 80) {
          const label = NAV_ITEMS.find(n => n.href === `#${id}`)?.label
          if (label) setActive(label)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 transition-all duration-300"
      style={{
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        background: scrolled ? 'rgba(13,13,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      {/* Logo */}
      <a
        className="text-sm tracking-widest transition-colors duration-200 hover:text-[#066ace]"
        style={{ fontFamily: 'DM Mono, monospace' }}
        href="#hero"
      >
        fa.dev
      </a>

      {/* Nav */}
      <nav>
        <ul className="flex items-center gap-6">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setActive(label)}
                className="flex items-center gap-2 text-xs tracking-wide transition-colors duration-200 hover:text-[#066ace]"
                style={{
                  textDecoration: 'none',
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: active === label ? 'var(--accent)' : 'var(--muted)',
                    display: 'inline-block',
                    flexShrink: 0,
                    transition: 'background 0.2s',
                  }}
                />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact button */}
      <a
        href="#contato"
        className="text-xs px-4 py-2 transition-colors duration-200"
        style={{
          border: '1px solid var(--border)',
          borderRadius: 6,
          color: 'var(--muted)',
          textDecoration: 'none',
          fontFamily: 'DM Mono, monospace',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = '#45454f'
          e.currentTarget.style.color = 'var(--text)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'var(--border)'
          e.currentTarget.style.color = 'var(--muted)'
        }}
      >
        Contato
      </a>
    </header>
  )
}
