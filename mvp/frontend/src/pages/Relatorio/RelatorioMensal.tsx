// Importa o componente de análise preditiva de IA
import AiInsights from '../../components/AiInsights/AiInsights'

// Dados das filiais para o gráfico de faturamento
const filiais = [
  { nome: 'Samambaia', valor: 'M$ 1.4', pct: 85 },
  { nome: 'Taguatinga', valor: 'M$ 1.1', pct: 70 },
  { nome: 'Ceilândia', valor: 'M$ 1.6', pct: 95 },
  { nome: 'Asa Sul', valor: 'M$ 0.5', pct: 45 },
  { nome: 'Gama', valor: 'M$ 0.9', pct: 60 },
]

// Componente da página de Relatório Mensal
export default function RelatorioMensal() {
  return (
    <>
      {/* Cabeçalho com título, subtítulo e botões de exportação */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-stack-lg gap-stack-md pt-4 md:pt-6">
        <div>
          <h2 className="text-headline-lg text-on-surface">Relatório Mensal - Julho/2026</h2>
          <p className="text-on-surface-variant text-body-md mt-unit">KPIs de Faturamento, Perdas e Emissões Fiscais.</p>
        </div>
        {/* Botões de exportação (ícone no mobile, texto completo no desktop) */}
        <div className="flex gap-stack-sm">
          <button className="flex items-center gap-stack-sm px-3 md:px-margin py-2 bg-primary text-on-primary text-label-bold transition-transform active:scale-95 hover:opacity-90 cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
            <span className="hidden sm:inline">Exportar PDF</span>
          </button>
          <button className="flex items-center gap-stack-sm px-3 md:px-margin py-2 border border-primary text-primary bg-transparent text-label-bold transition-transform active:scale-95 hover:bg-background cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">csv</span>
            <span className="hidden sm:inline">Exportar CSV</span>
          </button>
        </div>
      </div>

      {/* Análise preditiva gerada por ML para o período */}
      <div className="mb-stack-lg">
        <AiInsights
          titulo="Análise Preditiva — ML"
          insights={[
            {
              titulo: 'Projeção de Perda — Agosto/2026',
              descricao: 'Modelo SARIMA prevê perda de R$ 612k (±R$ 43k) para o próximo mês, alta de 16.8% vs. julho. Categoria crítica: perecíveis (73% da perda projetada).',
              confianca: 91,
              impacto: 'alto',
              icone: 'trending_down',
            },
            {
              titulo: 'Otimização Fiscal Automática',
              descricao: 'ML identificou 23 NF-e com crédito fiscal não aproveitado (R$ 18.340,00). Regime tributário permite compensação no próximo fechamento.',
              confianca: 96,
              impacto: 'alto',
              icone: 'receipt_long',
            },
            {
              titulo: 'Sazonalidade — Fim de Mês',
              descricao: 'Padrão histórico indica aumento de 34% no fluxo de caixa nos últimos 5 dias úteis. Preparar logística e estoque para pico de vendas B2B.',
              confianca: 85,
              impacto: 'medio',
              icone: 'analytics',
            },
          ]}
        />
      </div>

      {/* Grid de 4 KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-gutter">
        {[
          { label: 'Taxa de Ruptura', valor: '4.2%', sub: '-0.8% vs Jun', icon: 'inventory', cor: 'text-primary', barra: 'bg-primary' },
          { label: 'Ticket Médio CPF', valor: 'R$ 142,50', sub: 'CNPJ: R$ 2.450,00', icon: 'payments', cor: 'text-warning', barra: 'bg-warning' },
          { label: 'Perda Total', valor: 'R$ 524k', sub: '+12% Meta', icon: 'trending_down', cor: 'text-error', barra: 'bg-error' },
          { label: 'Emissões Fiscais', valor: 'NF-e 1.240', sub: 'CFC-e 45.890', icon: 'receipt_long', cor: 'text-on-surface-variant', barra: 'bg-outline-variant' },
        ].map((kpi) => (
          // Card KPI individual
          <div key={kpi.label} className="bg-surface border border-outline-variant p-container-padding flex flex-col justify-between h-32 relative">
            <div className="flex justify-between items-start">
              <span className="text-label-bold text-on-surface-variant uppercase tracking-wider">{kpi.label}</span>
              <span className={`material-symbols-outlined ${kpi.cor}`}>{kpi.icon}</span>
            </div>
            <div className="flex items-baseline gap-stack-sm">
              <span className="text-headline-lg">{kpi.valor}</span>
              <span className={`${kpi.cor} text-label-bold text-[10px]`}>{kpi.sub}</span>
            </div>
            {/* Barra decorativa inferior */}
            <div className={`absolute bottom-0 left-0 h-1 ${kpi.barra} w-full`} />
          </div>
        ))}
      </div>

      {/* Grid inferior: gráfico de filiais + distribuição de receita + tabela */}
      <div className="grid grid-cols-12 gap-gutter">
        {/* Gráfico de barras: faturamento por filial */}
        <div className="col-span-12 lg:col-span-8 bg-surface border border-outline-variant p-container-padding flex flex-col">
          <div className="flex justify-between items-center mb-stack-lg">
            <h3 className="text-headline-md">Faturamento por Filial</h3>
            <div className="flex items-center gap-stack-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span className="text-label-bold uppercase">Julho 2026</span>
            </div>
          </div>
          {/* Container das barras */}
          <div className="flex-1 flex items-end justify-between gap-gutter pt-stack-lg h-[280px]">
            {filiais.map((f) => (
              <div key={f.nome} className="flex-1 flex flex-col items-center gap-stack-sm group">
                {/* Barra com altura proporcional ao valor */}
                <div
                  className="w-full bg-background border border-outline-variant relative hover:bg-primary/20 transition-colors cursor-pointer"
                  style={{ height: `${f.pct}%` }}
                >
                  {/* Rótulo do valor da barra */}
                  <div className="absolute -top-6 w-full text-center font-mono text-[10px]">{f.valor}</div>
                </div>
                {/* Nome da filial abaixo da barra */}
                <span className="text-label-bold text-[10px] uppercase text-on-surface-variant truncate w-full text-center">{f.nome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar: distribuição de receita CPF vs CNPJ */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
          <div className="bg-surface border border-outline-variant p-container-padding flex-1 flex flex-col gap-stack-md">
            <h3 className="text-label-bold text-on-surface-variant uppercase border-b border-outline-variant pb-2">Distribuição de Receita</h3>
            <div className="flex-1 flex flex-col justify-center gap-stack-lg">
              {[
                { label: 'Pessoa Física (CPF)', pct: 62, cor: 'bg-primary' },
                { label: 'Vendas Atacado (CNPJ)', pct: 38, cor: 'bg-warning' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-unit">
                  <div className="flex justify-between items-end">
                    <span className="text-label-bold text-primary">{item.label}</span>
                    <span className="font-mono text-[12px] font-bold">{item.pct}%</span>
                  </div>
                  {/* Barra de progresso */}
                  <div className="w-full bg-background h-3 border border-outline-variant">
                    <div className={`${item.cor} h-full`} style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabela de histórico de emissões fiscais */}
        <div className="col-span-12 bg-surface border border-outline-variant">
          <div className="p-container-padding border-b border-outline-variant bg-background flex justify-between items-center">
            <span className="text-label-bold text-on-surface uppercase">Histórico de Emissões & Divergências</span>
            <span className="text-label-bold text-primary cursor-pointer hover:underline">Ver Relatório Completo</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-background border-b border-outline-variant">
                  <th className="px-container-padding py-stack-sm text-label-bold text-on-surface">DATA</th>
                  <th className="px-container-padding py-stack-sm text-label-bold text-on-surface">FILIAL</th>
                  <th className="px-container-padding py-stack-sm text-label-bold text-on-surface">CATEGORIA</th>
                  <th className="px-container-padding py-stack-sm text-label-bold text-on-surface">DOC. FISCAL</th>
                  <th className="px-container-padding py-stack-sm text-label-bold text-on-surface text-right">VALOR TOTAL</th>
                </tr>
              </thead>
              <tbody className="font-mono text-[13px]">
                {[
                  { data: '29 Jul 2026', filial: 'Samambaia Norte', tipo: 'VAREJO (CPF)', cor: 'border-primary text-primary', doc: 'CFC-e #4492', valor: 'R$ 382,10' },
                  { data: '29 Jul 2026', filial: 'Ceilândia Sul', tipo: 'ATACADO (CNPJ)', cor: 'border-secondary text-secondary', doc: 'NF-e #88102', valor: 'R$ 4.290,00' },
                  { data: '28 Jul 2026', filial: 'Asa Norte', tipo: 'VAREJO (CPF)', cor: 'border-primary text-primary', doc: 'CFC-e #4489', valor: 'R$ 112,45' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-outline-variant hover:bg-background transition-colors">
                    <td className="px-container-padding py-stack-md">{row.data}</td>
                    <td className="px-container-padding py-stack-md font-bold">{row.filial}</td>
                    <td className="px-container-padding py-stack-md">
                      <span className={`px-2 py-0.5 border ${row.cor} text-[10px] font-bold`}>{row.tipo}</span>
                    </td>
                    <td className="px-container-padding py-stack-md">{row.doc}</td>
                    <td className="px-container-padding py-stack-md text-right font-bold">{row.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
