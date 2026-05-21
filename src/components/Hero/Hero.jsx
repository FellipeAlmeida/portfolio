const TECHS = ['Javascript', 'React', 'Node.js', 'PostgreSQL', 'Python', 'Docker', 'FastApi', 'Flask']

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/FellipeAlmeida', icon: '⌥' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fellipe-almeida-143923298/', icon: '⌘' },
  { label: 'E-mail', href: 'mailto:almeidafellipe237@gmail.com', icon: '✉' },
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6"
      style={{ paddingTop: 80 }}
      id='hero'
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Label */}
        <p
          className="text-xs tracking-[0.2em] uppercase mb-6"
          style={{ color: 'var(--muted)' }}
        >
          Desenvolvedor de Software
        </p>

        {/* Name */}
        <h1 className="font-display mb-6" style={{ lineHeight: 1.05 }}>
          <span className="block text-[clamp(64px,10vw,120px)] font-light text-white">
            Fellipe
          </span>
          <span
            className="block text-[clamp(64px,10vw,120px)] font-light"
            style={{ color: 'var(--accent)' }}
          >
            Almeida.
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="text-sm leading-relaxed max-w-xl mb-8"
          style={{ color: 'var(--muted)' }}
        >
          Construo sistemas que funcionam de verdade — do backend ao frontend (com foco em backend),
          do banco de dados ao deploy. Apaixonado por código limpo e interfaces honestas.
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TECHS.map(tech => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6 mb-12">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs flex items-center gap-2 transition-colors duration-200"
              style={{ color: 'var(--muted)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Scroll hint */}
        <a
          href="#sobre"
          className="flex items-center gap-2 text-xs"
          style={{ color: 'var(--muted)', textDecoration: 'none' }}
        >
          <span>↓</span> rolar para baixo
        </a>
      </div>

      {/* Available badge — positioned top-right of content */}
      <div
        className="absolute"
        style={{ right: '8%', bottom: '18%' }}
      >
        <div
          className="card text-xs"
          style={{ minWidth: 160, textAlign: 'center', padding: '12px 16px' }}
        >
          <div className="flex items-center justify-center gap-2 mb-1">
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#34a853',
                display: 'inline-block',
              }}
            />
            <span style={{ color: 'var(--accent)', fontWeight: 400 }}>disponível</span>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: 11, lineHeight: 1.5 }}>
            Aberto a oportunidades
            <br />e projetos freelance
          </p>
        </div>
      </div>
    </section>
  )
}
