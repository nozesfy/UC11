// Importa os componentes que compõem o Dashboard
import CardsResumo from './CardsResumo'
import HeatmapRisco from './HeatmapRisco'
import TabelaAlertas from './TabelaAlertas'
import AiPredictions from './AiPredictions'

// Componente principal do Dashboard
export default function Dashboard() {
  return (
    // Container com padding superior responsivo
    <div className="pt-4 md:pt-6">
      {/* Seção dos 4 cards de KPI */}
      <CardsResumo />
      {/* Painel de predições de Machine Learning */}
      <AiPredictions />
      {/* Grid para o heatmap de risco */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-stack-lg">
        <HeatmapRisco />
      </div>
      {/* Tabela de alertas de estoque */}
      <TabelaAlertas />
    </div>
  )
}
