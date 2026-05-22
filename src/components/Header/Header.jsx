import React, { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Experiência', href: '#experiencia' },
]

export default function Header() {
  const [active, setActive] = useState('Sobre')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 transition-all duration-300"
        style={{
          borderBottom: scrolled
            ? '1px solid var(--border)'
            : '1px solid transparent',
          background: scrolled
            ? 'rgba(13,13,15,0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        {/* Logo */}
        <a
          className="text-sm tracking-widest transition-colors duration-200 hover:text-[#0783ff]"
          style={{ fontFamily: 'DM Mono, monospace' }}
          href="#hero"
        >
          fa.dev
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setActive(label)}
                  className="flex items-center gap-2 text-xs tracking-wide transition-colors duration-200 hover:text-[#0783ff]"
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      background:
                        active === label
                          ? 'var(--accent)'
                          : 'var(--muted)',
                      display: 'inline-block',
                    }}
                  />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Button */}
        <a
          href="#contato"
          className="hidden md:block text-xs px-4 py-2"
          style={{
            border: '1px solid var(--border)',
            borderRadius: 6,
            color: 'var(--muted)',
            textDecoration: 'none',
            fontFamily: 'DM Mono, monospace',
          }}
        >
          Contato
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-2xl text-white"
        >
          ☰
        </button>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-[#111] z-50 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          borderLeft: '1px solid var(--border)',
        }}
      >
        <div className="flex justify-between items-center p-6">
          <span className="text-sm text-white">Menu</span>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-white"
          >
            ×
          </button>
        </div>

        <nav className="px-6">
          <ul className="flex flex-col gap-6">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => {
                    setActive(label)
                    setMenuOpen(false)
                  }}
                  className="text-white text-sm"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contato"
            className="inline-block mt-10 text-sm px-4 py-2"
            style={{
              border: '1px solid var(--border)',
              borderRadius: 6,
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Contato
          </a>
        </nav>
      </aside>
    </>
  )
}