import React from 'react'

const PROJETOS = [
  {
    num: '01',
    year: '2023',
    name: 'Fernanda',
    description:
      'Chatbot/IA educadora sobre educação fiscal, o intuito é ensinar através de conversas e fontes confiáveis.',
    techs: ['React', 'Python', 'FastApi', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/FellipeAlmeida/Fernanda',
  },
  {
    num: '02',
    year: '2026',
    name: 'StockFlow',
    description:
      'API REST para controle de estoque, com foco no backend em node.js e express.',
    techs: ['Python', 'FastAPI', 'Redis', 'Docker'],
    github: 'https://github.com/FellipeAlmeida/Express-API',
    demo: null,
  },
  {
    num: '03',
    year: '2025',
    name: 'Sistema de Gestão Financeira',
    description:
      'Dashboard de finanças pessoais com gráficos interativos, categorização de gastos e despesas',
    techs: ['Javascript', 'Python', 'Chart.js', 'FastApi'],
    github: 'https://github.com/FellipeAlmeida/Sistema-de-Gest-o-Financeira',
  },
]

function ProjetoCard({ projeto }) {
  return (
    <div className="card flex flex-col gap-4">
      {/* Header row */}
      <div className="flex items-start justify-between">
        <span className="text-xs" style={{ color: 'var(--muted)' }}>
          {projeto.num}
        </span>
        <span className="text-xs" style={{ color: 'var(--muted)' }}>
          {projeto.year}
        </span>
      </div>

      {/* Name */}
      <h3 className="font-display text-2xl font-light text-white" style={{ lineHeight: 1.1 }}>
        {projeto.name}
      </h3>

      {/* Description */}
      <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--muted)' }}>
        {projeto.description}
      </p>

      {/* Techs */}
      <div className="flex flex-wrap gap-2">
        {projeto.techs.map(tech => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-2" style={{ borderTop: '1px solid var(--border)' }}>
        <a
          href={projeto.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs transition-colors duration-200"
          style={{ color: 'var(--muted)', textDecoration: 'none' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
        >
          ⌥ GitHub
        </a>

        {projeto.demo && (
          <a
            href={projeto.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs flex items-center gap-1 transition-colors duration-200"
            style={{ color: 'var(--accent)', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            ↗ Demo ao vivo
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projetos() {
  return (
    <section id="projetos" className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="section-label">02 — Projetos</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJETOS.map(projeto => (
            <ProjetoCard key={projeto.num} projeto={projeto} />
          ))}
        </div>
      </div>
    </section>
  )
}
