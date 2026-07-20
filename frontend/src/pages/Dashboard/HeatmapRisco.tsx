// Dados das categorias para o heatmap de risco
const categorias = [
  { nome: 'HORTIFRÚTI', pct: 95, label: '95% (CRÍTICO)', cor: 'bg-error' },   // Vermelho
  { nome: 'CARNES', pct: 85, label: '85% (ALTO)', cor: 'bg-warning' },         // Laranja
  { nome: 'LATICÍNIOS', pct: 60, label: '60% (MODERADO)', cor: 'bg-primary' }, // Verde
  { nome: 'PADARIA', pct: 40, label: '40% (BAIXO)', cor: 'bg-primary' },       // Verde
]

// Componente que exibe o heatmap de risco por categoria
export default function HeatmapRisco() {
  return (
    <section className="bg-surface border border-outline-variant lg:col-span-12">
      {/* Cabeçalho com título e botão de ação */}
      <div className="p-gutter border-b border-outline-variant flex justify-between items-center">
        <h2 className="text-headline-md text-on-surface">Risco de Perda por Categoria</h2>
        <button className="px-4 py-2 bg-primary text-on-primary text-label-bold text-xs hover:opacity-90 transition-colors active:scale-95 cursor-pointer shrink-0">
          Relatório Completo
        </button>
      </div>
      {/* Lista de categorias com barra de progresso */}
      <div className="p-gutter space-y-6">
        {categorias.map((cat) => (
          <div key={cat.nome} className="space-y-2">
            {/* Nome da categoria e percentual */}
            <div className="flex justify-between text-xs text-label-bold text-on-surface-variant">
              <span>{cat.nome}</span>
              {/* Substitui "bg-" por "text-" para usar a cor no texto */}
              <span className={cat.cor.replace('bg-', 'text-')}>{cat.label}</span>
            </div>
            {/* Barra de progresso */}
            <div className="h-4 w-full bg-surface-container-low">
              <div className={`h-full ${cat.cor}`} style={{ width: `${cat.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
