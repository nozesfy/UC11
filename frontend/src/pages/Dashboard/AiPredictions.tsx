import AiInsights from '../../components/AiInsights/AiInsights'

const insightsPrevisao = [
  {
    titulo: 'Ruptura Crítica — Laticínios',
    descricao: 'Modelo preditivo indica 92% de probabilidade de ruptura na filial Samambaia nos próximos 3 dias. Estoque atual cobre apenas 1.2 dias de venda.',
    confianca: 92,
    impacto: 'alto' as const,
    icone: 'emergency',
  },
  {
    titulo: 'Excesso Projetado — Bebidas Lácteas',
    descricao: 'ML detecta acúmulo atípico: 150% acima do giro ideal. Recomenda ação promocional ou realocação para filiais com menor cobertura.',
    confianca: 87,
    impacto: 'medio' as const,
    icone: 'trending_up',
  },
  {
    titulo: 'Oportunidade — Desconto Inteligente',
    descricao: 'Algoritmo de precificação sugere desconto gradual de 15-30% em 3 lotes próximos ao vencimento. Potencial de recuperação: R$ 8.240,00.',
    confianca: 78,
    impacto: 'medio' as const,
    icone: 'sell',
  },
  {
    titulo: 'Anomalia Estatística — Inventário',
    descricao: 'Divergência de 4.2% detectada na categoria "Hortifrúti" vs. padrão histórico. Sugere-se auditoria direcionada (p=0.03).',
    confianca: 95,
    impacto: 'alto' as const,
    icone: 'account_balance',
  },
]

export default function AiPredictions() {
  return (
    <div className="mb-stack-lg">
      <AiInsights
        titulo="Análise Preditiva — Machine Learning"
        insights={insightsPrevisao}
      />
    </div>
  )
}
