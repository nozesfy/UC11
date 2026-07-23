// Importa useNavigate para navegação (botão voltar)
import { useNavigate } from 'react-router-dom'
// Importa componente de análise preditiva de IA
import AiInsights from '../../components/AiInsights/AiInsights'

// Componente de detalhamento do lote
export default function LoteDetail() {
  const navigate = useNavigate()

  return (
    <div className="pt-4 md:pt-6">
      {/* Cabeçalho com breadcrumb, título e botões de ação */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-stack-lg gap-4">
        {/* Lado esquerdo: botão voltar + breadcrumb + título */}
        <div className="flex items-center gap-stack-md">
          <button
            onClick={() => navigate('/')}
            className="w-10 h-10 flex items-center justify-center bg-surface border border-outline-variant hover:bg-surface-container-low transition-all active:scale-90 cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-on-surface">arrow_back</span>
          </button>
          <div className="min-w-0">
            {/* Breadcrumb: Lotes / Detalhes */}
            <nav className="flex text-[10px] uppercase tracking-wider text-on-surface-variant text-label-bold mb-1">
              <span>Lotes</span>
              <span className="mx-2">/</span>
              <span className="text-primary">Detalhes</span>
            </nav>
            <h2 className="text-headline-lg text-on-surface truncate">Lote #4521 - Carne Bovina</h2>
          </div>
        </div>
        {/* Botões de ação (ícone no mobile, texto completo no desktop) */}
        <div className="flex gap-stack-sm">
          <button className="px-3 md:px-gutter py-2 border border-outline text-on-surface text-label-bold hover:bg-surface-container-low transition-colors cursor-pointer flex items-center gap-1">
            <span className="material-symbols-outlined text-lg">print</span>
            <span className="hidden sm:inline">Imprimir Etiqueta</span>
          </button>
          <button className="px-3 md:px-gutter py-2 bg-primary text-on-primary text-label-bold hover:opacity-90 transition-opacity flex items-center gap-1 cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">edit</span>
            <span className="hidden sm:inline">Editar Lote</span>
          </button>
        </div>
      </div>

      {/* Grid principal: 8 colunas (info) + 4 colunas (ações) */}
      <div className="grid grid-cols-12 gap-gutter">
        {/* Coluna da esquerda: informações do lote */}
        <div className="col-span-12 lg:col-span-8 bg-secondary-surface border border-outline-variant p-stack-lg flex flex-col gap-stack-lg">
          {/* Cabeçalho: título + badges de status */}
          <div className="flex justify-between items-start">
            <h3 className="text-headline-md text-on-surface">Informações do Lote</h3>
            <div className="flex flex-col gap-1 items-end">
              <div className="px-3 py-1 bg-error text-white text-label-bold text-[10px] uppercase">
                Status: Risco Crítico
              </div>
              <div className="px-3 py-1 bg-[#313030] text-white text-label-bold text-[10px] uppercase flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">block</span>
                Bloqueado para Venda
              </div>
            </div>
          </div>

          {/* Grid de informações: 3 colunas no desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-stack-lg gap-x-stack-md">
            <div className="space-y-1">
              <p className="text-[10px] uppercase text-label-bold text-on-surface-variant">Produto</p>
              <p className="text-body-lg font-semibold">Alcatra Bovina Resfriada</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase text-label-bold text-on-surface-variant">Fornecedor</p>
              <p className="text-body-lg">JBS S/A</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase text-label-bold text-on-surface-variant">Quantidade Atual</p>
              <p className="text-headline-md font-bold text-primary">200kg</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase text-label-bold text-on-surface-variant">Data Entrada</p>
              <p className="text-body-md">12 Out 2023</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase text-label-bold text-on-surface-variant">Validade</p>
              <p className="text-body-md text-error font-bold underline">18 Out 2023</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase text-label-bold text-on-surface-variant">Venda Média/Dia</p>
              <p className="text-body-md">15kg</p>
            </div>
          </div>

          {/* Tabelas de precificação CPF e CNPJ lado a lado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter bg-white p-4 border border-outline-variant">
            <div>
              <h4 className="text-label-bold text-on-surface-variant mb-2 uppercase">Precificação CPF (Varejo)</h4>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-outline-variant text-[10px] text-label-bold uppercase text-on-surface-variant">
                    <th className="py-1">Faixa</th>
                    <th className="py-1">Preço/Kg</th>
                  </tr>
                </thead>
                <tbody className="text-body-md">
                  <tr>
                    <td className="py-1">Padrão</td>
                    <td className="py-1 font-semibold">R$ 45,90</td>
                  </tr>
                  <tr className="text-primary">
                    <td className="py-1">Promoção</td>
                    <td className="py-1 font-semibold">R$ 32,13</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="text-label-bold text-on-surface-variant mb-2 uppercase">Precificação CNPJ (Atacado)</h4>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-outline-variant text-[10px] text-label-bold uppercase text-on-surface-variant">
                    <th className="py-1">Volume</th>
                    <th className="py-1">Preço/Kg</th>
                  </tr>
                </thead>
                <tbody className="text-body-md">
                  <tr>
                    <td className="py-1">&gt; 50kg</td>
                    <td className="py-1 font-semibold">R$ 38,50</td>
                  </tr>
                  <tr className="text-primary">
                    <td className="py-1">&gt; 100kg</td>
                    <td className="py-1 font-semibold">R$ 34,20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Card de alerta de projeção logística */}
          <div className="p-stack-md border-l-4 border-error bg-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-error">analytics</span>
              <span className="text-label-bold text-error uppercase">Projeção Logística</span>
            </div>
            <p className="text-body-md text-on-surface">
              <span className="font-bold">Alerta:</span> Na cadência atual de venda, restará{' '}
              <span className="font-bold">110kg</span> no estoque na data de vencimento.
              O lote irá <span className="text-error font-bold italic underline">vencer antes de vender</span> completamente.
            </p>
          </div>

          {/* Recomendações geradas por IA para este lote específico */}
          <AiInsights
            titulo="Recomendações de ML para este Lote"
            autoScan
            insights={[
              {
                titulo: 'Precificação Dinâmica',
                descricao: 'Modelo de elasticidade sugere desconto de 25% para zerar estoque até o vencimento. Preço ideal: R$ 34,42/kg. Receita projetada: R$ 6.884,00.',
                confianca: 88,
                impacto: 'alto',
                icone: 'price_change',
              },
              {
                titulo: 'Realocação Inteligente',
                descricao: 'Filial Taguatinga tem giro 40% maior para este SKU. Transferir 80kg reduz perda projetada em R$ 2.340,00.',
                confianca: 83,
                impacto: 'medio',
                icone: 'local_shipping',
              },
              {
                titulo: 'Doação Fiscal',
                descricao: 'Lei 14.592/2023: doação a entidades locais gera crédito fiscal de 32% do valor. Alternativa ao descarte total com benefício tributário.',
                confianca: 76,
                impacto: 'baixo',
                icone: 'volunteer_activism',
              },
            ]}
          />
        </div>

        {/* Coluna da direita: ações sugeridas */}
        <div className="col-span-12 lg:col-span-4 bg-secondary-surface border border-outline-variant p-stack-lg flex flex-col gap-stack-lg">
          <h3 className="text-headline-md text-on-surface">Ações Sugeridas</h3>
          <div className="space-y-gutter">
            {/* Ação 1: Desconto */}
            <div className="bg-white p-stack-md border border-outline-variant flex flex-col gap-3 hover:border-primary transition-colors">
              <div className="flex justify-between items-start">
                <span className="text-label-bold text-primary uppercase">Otimização de Preço</span>
                <span className="text-[10px] text-label-bold px-2 py-0.5 bg-secondary-surface text-on-surface-variant">Eficácia 85%</span>
              </div>
              <p className="text-body-md">
                Aplicar desconto de <span className="font-bold text-primary">30%</span> (Sugestão RN002).
                Projeção: <span className="font-bold">25 kg/dia</span>.
              </p>
              <button className="w-full py-2 bg-primary text-on-primary text-label-bold hover:shadow-lg transition-all active:scale-95 cursor-pointer">
                Aplicar Desconto
              </button>
            </div>

            {/* Ação 2: Realocação com campos de formulário */}
            <div className="bg-white p-stack-md border border-outline-variant flex flex-col gap-3 border-primary">
              <div className="flex justify-between items-start">
                <span className="text-label-bold text-tertiary uppercase">Remanejamento</span>
              </div>
              <div className="space-y-3 mt-1">
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-[10px] text-label-bold uppercase text-on-surface-variant">Origem</label>
                    <input className="w-full bg-surface-container text-body-md p-1 border border-outline-variant" disabled value="Samambaia/DF" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-label-bold uppercase text-on-surface-variant">Destino</label>
                    <select className="w-full bg-white text-body-md p-1 border border-primary">
                      <option>Taguatinga/DF</option>
                      <option>Ceilândia/DF</option>
                      <option>Águas Claras/DF</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-label-bold uppercase text-on-surface-variant">Responsável</label>
                  <input className="w-full bg-white text-body-md p-1 border border-outline-variant" placeholder="Nome do Responsável" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-label-bold uppercase text-on-surface-variant">Quantidade a Transferir</label>
                  <input className="w-full bg-white text-body-md p-1 border border-outline-variant" type="number" defaultValue={50} />
                </div>
              </div>
              <button className="w-full py-2 bg-tertiary text-white text-label-bold hover:opacity-90 transition-all active:scale-95 mt-2 cursor-pointer">
                Aplicar Realocação
              </button>
            </div>

            {/* Ação 3: Descarte */}
            <div className="bg-white p-stack-md border border-outline-variant flex flex-col gap-3 opacity-80 hover:opacity-100 transition-opacity">
              <div className="flex justify-between items-start">
                <span className="text-label-bold text-error uppercase">Perda Total</span>
              </div>
              <p className="text-body-md">Descartar lote por inviabilidade sanitária (Prazo expira em 24h).</p>
              <button className="w-full py-2 border border-error text-error text-label-bold hover:bg-error hover:text-white transition-all active:scale-95 cursor-pointer">
                Executar Descarte
              </button>
            </div>
          </div>
        </div>

        {/* Mapa de rastreabilidade geográfica (rodapé) */}
        <div className="col-span-12 lg:col-span-12 h-64 bg-surface border border-outline-variant overflow-hidden relative">
          <div className="w-full h-full bg-gradient-to-br from-secondary-surface to-surface flex items-center justify-center">
            <div className="text-center text-on-surface-variant">
              <span className="material-symbols-outlined text-4xl">map</span>
              <p className="text-label-bold mt-2">Mapa de Rastreabilidade</p>
              <p className="text-body-md">Origem: JBS - Goianira/GO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
