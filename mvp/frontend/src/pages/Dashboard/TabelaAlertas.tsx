// Importa useNavigate para navegar ao clicar em "Detalhes"
import { useNavigate } from 'react-router-dom'

// Dados dos alertas de intervenção de estoque
const alertas = [
  { produto: 'Carne Bovina (Patinho)', lote: 'LOTE #4521', status: 'crítico', motivo: 'Vencimento em 3 dias', acao: 'Remover e Descartar', acaoCor: 'text-error' },
  { produto: 'Iogurte Grego Frutas', lote: 'LOTE #5582', status: 'crítico', motivo: 'Quebra Cadeia Frio (+8°C)', acao: 'Bloqueio para Auditoria', acaoCor: 'text-error' },
  { produto: 'Leite UHT Integral 1L', lote: 'LOTE #9902', status: 'atenção', motivo: 'Vencimento em 7 dias', acao: 'Promover Desconto (50%)', acaoCor: 'text-warning' },
]

// Componente que exibe a tabela de alertas
export default function TabelaAlertas() {
  const navigate = useNavigate()

  return (
    <section className="bg-surface border border-outline-variant">
      {/* Cabeçalho da seção com badges de quantidade */}
      <div className="p-gutter border-b border-outline-variant flex justify-between items-center">
        <h2 className="text-headline-md text-on-surface">Alertas de Intervenção de Estoque</h2>
        <div className="flex gap-2 flex-wrap justify-end">
          <span className="flex items-center gap-1 text-[10px] text-label-bold px-2 py-1 bg-error text-on-primary">Crítico: 02</span>
          <span className="flex items-center gap-1 text-[10px] text-label-bold px-2 py-1 bg-warning text-on-primary">AVISO: 01</span>
        </div>
      </div>
      {/* Tabela com scroll horizontal em mobile */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          {/* Cabeçalho da tabela */}
          <thead className="bg-secondary-surface text-primary text-label-bold text-xs uppercase">
            <tr>
              <th className="p-4">Produto / Lote</th>
              <th className="p-4">Status</th>
              <th className="p-4">Motivo / Alerta</th>
              <th className="p-4">Ação Recomendada</th>
              <th className="p-4 text-right">Intervenção</th>
            </tr>
          </thead>
          {/* Corpo da tabela com os dados */}
          <tbody className="divide-y divide-outline-variant">
            {alertas.map((a) => (
              <tr key={a.lote} className="hover:bg-surface-container-low transition-colors">
                {/* Produto e número do lote */}
                <td className="p-4">
                  <div className="text-label-bold">{a.produto}</div>
                  <div className="text-[11px] text-on-surface-variant font-mono">{a.lote}</div>
                </td>
                {/* Badge de status (crítico ou atenção) */}
                <td className="p-4">
                  <span className={`px-2 py-1 text-[10px] text-label-bold uppercase ${
                    a.status === 'crítico' ? 'bg-error text-on-primary' : 'bg-warning text-on-primary'
                  }`}>
                    {a.status}
                  </span>
                </td>
                {/* Motivo do alerta */}
                <td className="p-4 text-body-md">{a.motivo}</td>
                {/* Ação recomendada */}
                <td className={`p-4 text-body-md text-label-bold ${a.acaoCor}`}>{a.acao}</td>
                {/* Botão para ver detalhes do lote */}
                <td className="p-4 text-right">
                  <button
                    onClick={() => navigate('/lote/4521')}
                    className="px-4 py-1.5 bg-primary text-on-primary text-xs text-label-bold hover:opacity-90 transition-colors active:scale-95 cursor-pointer"
                  >
                    Detalhes
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
