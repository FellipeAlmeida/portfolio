export default function Footer() {
  return (
    <footer id="contato" className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        {/* CTA */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div>
            <h2
              className="font-display mb-3"
              style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 300, lineHeight: 1.05, color: 'white' }}
            >
              Vamos conversar?
            </h2>
            <p className="text-xs" style={{ color: 'var(--muted)' }}>
              Aberto a oportunidades, colaborações e boas conversas
              <br />
              sobre tecnologia.
            </p>
          </div>

          <a
            href="mailto:almeidafellipe237@gmail.com"
            className="flex items-center gap-2 px-5 py-3 text-xs transition-opacity duration-200"
            style={{
              background: 'var(--accent)',
              color: 'white',
              borderRadius: 8,
              textDecoration: 'none',
              fontFamily: 'DM Mono, monospace',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            ✉ almeidafellipe237@gmail.com ↗
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-8">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            © 2026 Fellipe Almeida
          </p>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Itapajé, CE
          </p>
        </div>
      </div>
    </footer>
  )
}
