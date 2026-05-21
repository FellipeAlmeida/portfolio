const INTERESSES = [
  'Sistemas Embarcados',
  'User Experience',
  'Código Aberto',
  'Machine Learning',
  'Arquitetura de Software',
  'Engenharia de Software',
  'Desenvolvimento Web',
  'Desenvolvimento Mobile',
]

const TECNOLOGIAS_COL1 = [
  'JavaScript',
  'Node.js / Express',
  'PostgreSQL',
  'Python / Flask',
]

const TECNOLOGIAS_COL2 = [
  'React',
  'Python / FastAPI',
  'Docker / Linux',
]

export default function Sobre() {
  return (
    <section id="sobre" className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="section-label">01 — Sobre Mim</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: text */}
          <div>
            <h2 className="font-display mb-6" style={{ fontSize: 48, lineHeight: 1.1, fontWeight: 300 }}>
              Código é meio,{' '}
              <span className="italic" style={{ color: 'var(--accent)' }}>
                não fim.
              </span>
            </h2>

            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
              Sou estudante de Análise e Desenvolvimento de Sistemas no IFCE e desenvolvo software desde 2024.
              Comecei pelos tutoriais de YouTube e não parei mais — hoje construo APIs, sistemas
              web completos e ferramentas que pessoas reais usam.
            </p>

            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              Gosto de entender o problema antes de abrir o editor. Acredito em código simples,
              tests que valem a pena e deploys que não dão medo. Fora do computador: jogos, energético
              e estudos.
            </p>
          </div>

          {/* Right: interests + tech + goals */}
          <div className="flex flex-col gap-8">
            {/* Interesses */}
            <div>
              <p className="text-xs tracking-[0.15em] uppercase mb-3" style={{ color: 'var(--muted)' }}>
                Interesses
              </p>
              <div className="flex flex-wrap gap-2">
                {INTERESSES.map(item => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>

            {/* Tecnologias */}
            <div>
              <p className="text-xs tracking-[0.15em] uppercase mb-3" style={{ color: 'var(--muted)' }}>
                Tecnologias que uso
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                <ul className="flex flex-col gap-1">
                  {TECNOLOGIAS_COL1.map(tech => (
                    <li key={tech} className="text-xs flex items-center gap-2" style={{ color: 'var(--muted)' }}>
                      <span style={{ color: 'var(--accent)' }}>•</span> {tech}
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-1">
                  {TECNOLOGIAS_COL2.map(tech => (
                    <li key={tech} className="text-xs flex items-center gap-2" style={{ color: 'var(--muted)' }}>
                      <span style={{ color: 'var(--accent)' }}>•</span> {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Objetivos */}
            <div>
              <p className="text-xs tracking-[0.15em] uppercase mb-2" style={{ color: 'var(--muted)' }}>
                Objetivos
              </p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                Contribuir com projetos de impacto real, crescer como engenheiro e um dia liderar
                uma equipe técnica comprometida com excelência e propósito.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
