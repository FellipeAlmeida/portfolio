
import React from 'react'

const EXPERIENCIAS = [
  {
    cargo: 'Desenvolvedor Full Stack',
    empresa: 'Empresa Júnior de ADS — IFCE',
    periodo: 'mar 2026 — presente',
    badge: { label: 'empresa júnior', variant: 'badge-purple' },
    bullets: [
      'Liderei o desenvolvimento de um sistema de agendamento de laboratório utilizado pela comunidade do campus IFCE Umirim.',
      'Participei de 1 projeto para clientes externos, da proposta ao deploy.',
    ],
  },
    {
    cargo: 'Bolsa de Desenvolvedor Back-end',
    empresa: 'Polo de Inovação do IFCE',
    periodo: 'jan 2026 — presente',
    badge: { label: 'bolsa', variant: 'badge-teal' },
    bullets: [
      'Desenvolvi juntamente com uma equipe e meu professor (como scrum master) um sistema de predição de desempenho de corredores.',
    ],
  },
  {
    cargo: 'Bolsista de Desenvolvimento Back-end',
    empresa: 'Polo de Inovação do IFCE',
    periodo: 'ago 2025 — dez 2025',
    badge: { label: 'bolsa', variant: 'badge-teal' },
    bullets: [
      'Desenvolvi juntamente com uma equipe e meu professor (como scrum master) um sistema de identificação de perigos e pontos críticos na indústria de alimentos.',
    ],
  }
]

function ExperienciaCard({ item }) {
  return (
    <div className="card flex flex-col gap-3">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="text-sm text-white">{item.cargo}</h3>
          <span className={`badge ${item.badge.variant}`}>{item.badge.label}</span>
        </div>
        <span className="text-xs whitespace-nowrap shrink-0" style={{ color: 'var(--muted)' }}>
          {item.periodo}
        </span>
      </div>

      <p className="text-xs" style={{ color: 'var(--muted)' }}>
        {item.empresa}
      </p>

      <ul className="flex flex-col gap-1">
        {item.bullets.map((bullet, i) => (
          <li key={i} className="text-xs flex items-start gap-2" style={{ color: 'var(--muted)' }}>
            <span className="shrink-0 mt-[3px]">•</span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Experiencia() {
  return (
    <section id="experiencia" className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="section-label">04 — Experiência</div>

        <div className="flex flex-col gap-4">
          {EXPERIENCIAS.map(item => (
            <ExperienciaCard key={item.cargo} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
