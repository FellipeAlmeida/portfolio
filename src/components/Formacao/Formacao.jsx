import React from 'react'

const FORMACAO = [
  {
    titulo: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    instituicao: 'Instituo Federal de Ciência e Tecnologia do Ceará',
    descricao: 'Ênfase em sistemas distribuídos e desenvolvimento de software.',
    periodo: '2025 — presente',
    badge: { label: 'em andamento', variant: 'badge-purple' },
  },
  {
    titulo: 'Programa Residência TIC-20 - Ciência de Dados',
    instituicao: 'Capacita Brasil / C-Jovem / Uece',
    descricao: 'Ciência de Dados, Machine/Deep Learning.',
    periodo: '2025',
    badge: { label: 'concluído', variant: 'badge-green' },
  },
  {
    titulo: 'Programa Residência TIC-20 - Desenvolvimento IOS',
    instituicao: 'Capacita Brasil / C-Jovem / IFCE',
    descricao: 'Desenvolvimento IOS com swift.',
    periodo: '2025',
    badge: { label: 'concluído', variant: 'badge-green' },
  }
]

function FormacaoCard({ item }) {
  return (
    <div className="card flex flex-col gap-2">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="text-sm text-white">{item.titulo}</h3>
          <span className={`badge ${item.badge.variant}`}>{item.badge.label}</span>
        </div>
        <span className="text-xs whitespace-nowrap shrink-0" style={{ color: 'var(--muted)' }}>
          {item.periodo}
        </span>
      </div>

      <p className="text-xs" style={{ color: 'var(--muted)' }}>
        {item.instituicao}
      </p>

      <p className="text-xs leading-relaxed" style={{ color: '#3e3e46' }}>
        {item.descricao}
      </p>
    </div>
  )
}

export default function Formacao() {
  return (
    <section id="formacao" className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="section-label">03 — Formação</div>

        <div className="flex flex-col gap-4">
          {FORMACAO.map(item => (
            <FormacaoCard key={item.titulo} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
