// Dados dos 4 cards de indicadores (KPIs) do Dashboard
const cards = [
  {
    titulo: 'Valor Total em Estoque',    // Título do card
    valor: 'R$ 842.500',                  // Valor principal
    status: 'Estoque saudável',           // Status/indicação
    icon: 'inventory',                    // Ícone Material Symbols
    cor: 'text-primary',                  // Cor do texto principal
    bgBar: 'bg-primary',                  // Cor da barra inferior
    iconCor: 'text-primary',              // Cor do ícone
  },
  {
    titulo: 'Ticket Médio (CPF/CNPJ)',
    valor: 'R$ 142,50',
    status: '+2.4% vs semana anterior',
    icon: 'person_search',
    cor: 'text-primary',
    bgBar: 'bg-primary',
    iconCor: 'text-primary',
  },
  {
    titulo: 'Perda Acumulada',
    valor: 'R$ 12.340',
    status: '-8% foco em perecíveis',
    icon: 'warning',
    cor: 'text-warning',
    bgBar: 'bg-warning',
    iconCor: 'text-warning',
  },
  {
    titulo: 'Lotes Críticos',
    valor: '12',
    status: 'Ação imediata necessária',
    icon: 'dangerous',
    cor: 'text-error',
    bgBar: 'bg-error',
    iconCor: 'text-error',
  },
]

// Componente que renderiza os 4 cards em grid responsivo
export default function CardsResumo() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-stack-lg">
      {cards.map((card) => (
        // Card individual com borda e padding
        <div key={card.titulo} className="bg-surface border border-outline-variant p-gutter">
          {/* Linha superior: título + ícone */}
          <div className="flex justify-between items-start mb-2">
            <span className="text-label-bold text-on-surface-variant uppercase">{card.titulo}</span>
            <span className={`material-symbols-outlined ${card.iconCor}`}>{card.icon}</span>
          </div>
          {/* Valor principal em destaque */}
          <p className={`text-headline-lg ${card.cor}`}>{card.valor}</p>
          {/* Status com indicador de tendência */}
          <div className="flex items-center gap-1 mt-2 text-label-bold text-[11px]">
            <span className={`material-symbols-outlined text-sm ${card.cor}`}>show_chart</span>
            <span className={card.cor}>{card.status}</span>
          </div>
        </div>
      ))}
    </section>
  )
}
