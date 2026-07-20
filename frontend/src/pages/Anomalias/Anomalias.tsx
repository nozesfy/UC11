// Importa o componente de insights de IA
import AiInsights from '../../components/AiInsights/AiInsights'

// Dados dos alertas de anomalia (estáticos para protótipo)
const alertas = [
  {
    id: 1,
    tipo: 'Divergência de Inventário',    // Título do alerta
    filial: 'Samambaia',                   // Filial envolvida
    idContagem: '#CC-882',                 // ID de referência
    impacto: '-R$ 1.240,00',              // Valor do impacto
    rotuloImpacto: 'Diferença Contábil',   // Rótulo do impacto
    categoria: 'Laticínios',               // Categoria afetada
    impactoOperacional: 'Alto - Ruptura Provável', // Impacto operacional
    cor: 'border-l-error',                 // Cor da borda lateral
    icone: 'difference',                   // Ícone do alerta
    bgIcone: 'bg-error-container',         // Fundo do ícone
    corIcone: 'text-error',                // Cor do ícone
  },
  {
    id: 2,
    tipo: 'Abaixo do Estoque Mínimo',
    filial: 'Samambaia',
    idContagem: 'Óleo de Soja 900ml',
    impacto: '12% Restante',
    rotuloImpacto: 'Status de Reposição',
    categoria: 'Estoque Atual: 45 un',
    impactoOperacional: 'Ponto de Pedido: 120 un',
    cor: 'border-l-tertiary',
    icone: 'trending_down',
    bgIcone: 'bg-warning/10',
    corIcone: 'text-tertiary',
  },
  {
    id: 3,
    tipo: 'Excesso de Estoque',
    filial: 'Samambaia',
    idContagem: 'Bebida Láctea X',
    impacto: '+150% Acima',
    rotuloImpacto: 'Giro Lento',
    categoria: 'Dias de Cobertura: 45 dias',
    impactoOperacional: 'Ação Promocional',
    cor: 'border-l-primary',
    icone: 'inventory',
    bgIcone: 'bg-secondary-surface',
    corIcone: 'text-primary',
  },
]

// Componente da página de Gestão de Anomalias
export default function Anomalias() {
  return (
    <div className="pt-4 md:pt-6">
      {/* Cabeçalho da página */}
      <section className="mb-stack-lg flex justify-between items-end">
        <div>
          <h3 className="text-headline-lg text-on-surface mb-unit">Gestão de Anomalias e Inventário</h3>
          <p className="text-body-md text-on-surface-variant">Monitoramento de estoque, perdas e divergências operacionais.</p>
        </div>
      </section>

      {/* Scanner de anomalias com IA — detecta padrões automaticamente */}
      <div className="mb-stack-lg">
        <AiInsights
          titulo="Detecção Inteligente de Anomalias"
          insights={[
            {
              titulo: 'Divergência Sistêmica — Laticínios',
              descricao: 'ML identificou padrão não usual de quebras no setor de laticínios (3.2σ acima da média). Provável causa: falha no receipto de carga refrigerada.',
              confianca: 94,
              impacto: 'alto',
              icone: 'warning',
            },
            {
              titulo: 'Grupo de Risco — Hortifrúti',
              descricao: 'Algoritmo de clusterização agrupou 7 ocorrências com mesma assinatura (horário, filial, SKU). Sugere furto interno organizado (precisão: 89%).',
              confianca: 89,
              impacto: 'alto',
              icone: 'groups',
            },
            {
              titulo: 'Padrão Sazonal — Bebidas',
              descricao: 'Previsão de excesso de estoque em bebidas para o próximo mês com base em série temporal (SARIMA). Ação preventiva recomendada.',
              confianca: 82,
              impacto: 'medio',
              icone: 'calendar_month',
            },
          ]}
        />
      </div>

      {/* Barra de filtros com 4 campos + botão */}
      <section className="mb-stack-lg bg-surface border border-outline-variant p-gutter grid grid-cols-1 md:grid-cols-5 gap-gutter items-end">
        <div className="space-y-unit">
          <label className="text-label-bold text-on-surface-variant block">Filial</label>
          <select className="w-full bg-surface border border-outline-variant px-3 py-2 text-body-md">
            <option>Todas as Filiais</option>
            <option selected>Samambaia/DF</option>
            <option>Taguatinga/DF</option>
          </select>
        </div>
        <div className="space-y-unit">
          <label className="text-label-bold text-on-surface-variant block">Período</label>
          <input className="w-full bg-surface border border-outline-variant px-3 py-2 text-body-md" type="date" defaultValue="2023-10-27" />
        </div>
        <div className="space-y-unit">
          <label className="text-label-bold text-on-surface-variant block">Tipo de Alerta</label>
          <select className="w-full bg-surface border border-outline-variant px-3 py-2 text-body-md">
            <option>Todos os Alertas</option>
            <option>Estoque Mínimo</option>
            <option>Excesso de Estoque</option>
            <option>Divergência de Inventário</option>
          </select>
        </div>
        <div className="space-y-unit">
          <label className="text-label-bold text-on-surface-variant block">Status</label>
          <select className="w-full bg-surface border border-outline-variant px-3 py-2 text-body-md">
            <option>Pendentes</option>
            <option>Em Investigação</option>
            <option>Resolvidos</option>
          </select>
        </div>
        <button className="bg-primary text-on-primary h-[42px] px-6 text-label-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer">
          <span className="material-symbols-outlined text-sm">filter_list</span>
          Aplicar Filtros
        </button>
      </section>

      {/* Grid: 2/3 lista de alertas + 1/3 sidebar com estatísticas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-stack-lg">
        {/* Lista de alertas ativos */}
        <div className="lg:col-span-2 space-y-gutter">
          <h4 className="text-headline-md text-on-surface mb-stack-sm flex items-center gap-2">
            Alertas Ativos
            <span className="bg-error text-white text-[10px] px-2 py-0.5 font-bold">{alertas.length} ALERTA(S)</span>
          </h4>
          {alertas.map((a) => (
            // Card de alerta individual com borda lateral colorida
            <article key={a.id} className={`bg-surface border border-outline-variant p-gutter shadow-sm border-l-4 ${a.cor}`}>
              {/* Header do card: ícone, título e impacto financeiro */}
              <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${a.bgIcone} flex items-center justify-center ${a.corIcone} shrink-0`}>
                    <span className="material-symbols-outlined text-2xl fill">{a.icone}</span>
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-label-bold text-on-surface text-base sm:text-lg">{a.tipo}</h5>
                    <p className="text-on-surface-variant text-body-md">Filial: {a.filial} • ID: {a.idContagem}</p>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <span className={`${a.corIcone} text-headline-md block`}>{a.impacto}</span>
                  <span className="text-on-surface-variant text-label-bold text-[10px] uppercase">{a.rotuloImpacto}</span>
                </div>
              </div>
              {/* Detalhes: categoria e impacto operacional */}
              <div className="grid grid-cols-2 gap-stack-md py-4 border-y border-outline-variant mb-4">
                <div className="flex flex-col">
                  <span className="text-label-bold text-on-surface-variant uppercase text-[10px]">Categoria</span>
                  <span className="text-body-lg text-on-surface font-semibold">{a.categoria}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-label-bold text-on-surface-variant uppercase text-[10px]">Impacto Operacional</span>
                  <span className={`text-body-lg font-semibold ${a.corIcone}`}>{a.impactoOperacional}</span>
                </div>
              </div>
              {/* Botões de ação */}
              <div className="flex justify-end gap-stack-sm flex-wrap">
                <button className="px-4 py-2 text-on-surface-variant hover:bg-secondary-surface text-label-bold transition-colors cursor-pointer text-xs sm:text-sm">
                  {a.id === 1 ? 'Recontar' : a.id === 2 ? 'Ver Fornecedor' : 'Criar Promoção'}
                </button>
                <button className="px-5 sm:px-6 py-2 bg-primary text-on-primary text-label-bold hover:shadow-lg transition-all cursor-pointer text-xs sm:text-sm">
                  {a.id === 1 ? 'Ajustar Estoque' : a.id === 2 ? 'Gerar Pedido' : 'Ação Promocional'}
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar direita: causas e acuracidade */}
        <aside className="space-y-gutter">
          {/* Top causas de divergência */}
          <div className="bg-surface border border-outline-variant p-gutter">
            <p className="text-label-bold text-on-surface-variant uppercase text-[10px] mb-4 tracking-widest">Top Causas de Divergência</p>
            <div className="space-y-4">
              {[
                { causa: 'Erro de Recebimento', pct: '42%', cor: 'text-error' },
                { causa: 'Avaria Não Registrada', pct: '28%', cor: 'text-tertiary' },
                { causa: 'Furto Identificado', pct: '15%', cor: 'text-on-surface-variant' },
                { causa: 'Erro de PDV', pct: '15%', cor: 'text-primary' },
              ].map((item) => (
                <div key={item.causa} className="flex justify-between items-center text-body-md">
                  <span className="text-on-surface">{item.causa}</span>
                  <span className={`font-mono font-bold ${item.cor}`}>{item.pct}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card de acuracidade global */}
          <div className="bg-primary p-gutter text-on-primary flex flex-col justify-between aspect-[4/3]">
            <div>
              <span className="text-label-bold uppercase tracking-widest opacity-80">Acuracidade Global</span>
              <h5 className="text-headline-lg mt-2">94.2%</h5>
              <p className="text-body-md opacity-90 mt-1">Meta: 98% para Q4</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">trending_up</span>
              <span className="text-label-bold">+2.1% vs Mês Anterior</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
