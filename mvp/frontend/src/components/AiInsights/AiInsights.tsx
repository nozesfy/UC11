import { useState, useEffect, useRef } from 'react'

interface AiInsight {
  titulo: string
  descricao: string
  confianca: number
  impacto: 'alto' | 'medio' | 'baixo'
  icone: string
}

interface AiInsightsProps {
  titulo: string
  insights: AiInsight[]
  onScanComplete?: () => void
  autoScan?: boolean
}

function ImpactoBadge({ impacto }: { impacto: AiInsight['impacto'] }) {
  const styles = {
    alto: 'bg-error-container text-error',
    medio: 'bg-warning/10 text-warning',
    baixo: 'bg-secondary-surface text-on-surface-variant',
  }
  return (
    <span className={`text-[10px] px-2 py-0.5 text-label-bold uppercase ${styles[impacto]}`}>
      {impacto === 'alto' ? 'Prioridade Alta' : impacto === 'medio' ? 'Monitorar' : 'Informativo'}
    </span>
  )
}

export default function AiInsights({ titulo, insights, onScanComplete, autoScan }: AiInsightsProps) {
  const [scanning, setScanning] = useState(false)
  const [progresso, setProgresso] = useState(0)
  const [exibidos, setExibidos] = useState<number[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined)
  const iniciado = useRef(false)

  useEffect(() => {
    if (autoScan && !iniciado.current) {
      iniciado.current = true
      iniciarScan()
    }
  }, [autoScan])

  const iniciarScan = () => {
    setScanning(true)
    setProgresso(0)
    setExibidos([])
  }

  useEffect(() => {
    if (!scanning) return
    timerRef.current = setInterval(() => {
      setProgresso((p) => {
        const novo = p + Math.random() * 15
        if (novo >= 100) {
          clearInterval(timerRef.current)
          setExibidos(insights.map((_, i) => i))
          setScanning(false)
          onScanComplete?.()
          return 100
        }
        return novo
      })
    }, 400)
    return () => clearInterval(timerRef.current)
  }, [scanning, insights.length, onScanComplete])

  useEffect(() => {
    if (progresso <= 0 || progresso >= 100) return
    const qtd = Math.floor((progresso / 100) * insights.length)
    setExibidos(Array.from({ length: Math.min(qtd, insights.length) }, (_, i) => i))
  }, [progresso, insights.length])

  return (
    <div className="bg-surface border border-outline-variant">
      <div className="p-gutter border-b border-outline-variant flex items-center justify-between bg-gradient-to-r from-primary/5 to-transparent">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">neurology</span>
          <h3 className="text-headline-md text-on-surface">{titulo}</h3>
        </div>
        <button
          onClick={iniciarScan}
          disabled={scanning}
          className="px-4 py-2 bg-primary text-on-primary text-label-bold hover:opacity-90 transition-all active:scale-95 flex items-center gap-2 disabled:opacity-50 cursor-pointer"
        >
          <span className={`material-symbols-outlined text-lg ${scanning ? 'animate-spin' : ''}`}>
            {scanning ? 'progress_activity' : 'scan'}
          </span>
          {scanning ? 'ANALISANDO...' : 'ANALISAR COM IA'}
        </button>
      </div>

      {scanning && (
        <div className="p-gutter bg-secondary-surface">
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-outline-variant/30 h-2 border border-outline-variant">
              <div
                className="bg-primary h-full transition-all duration-300 ease-out"
                style={{ width: `${Math.min(progresso, 100)}%` }}
              />
            </div>
            <span className="text-label-bold text-primary text-[12px] font-mono min-w-[3ch] text-right">
              {Math.round(progresso)}%
            </span>
          </div>
          <p className="text-body-md text-on-surface-variant mt-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] animate-pulse">model_training</span>
            Modelo de ML processando {insights.length} predições...
          </p>
        </div>
      )}

      <div className="divide-y divide-outline-variant">
        {insights.map((item, idx) => (
          <div
            key={idx}
            className={`p-gutter transition-all duration-500 ${
              exibidos.includes(idx) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 flex items-center justify-center shrink-0 ${
                item.impacto === 'alto' ? 'bg-error-container text-error' :
                item.impacto === 'medio' ? 'bg-warning/10 text-warning' :
                'bg-primary/10 text-primary'
              }`}>
                <span className="material-symbols-outlined">{item.icone}</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h4 className="text-label-bold text-on-surface">{item.titulo}</h4>
                  <ImpactoBadge impacto={item.impacto} />
                </div>
                <p className="text-body-md text-on-surface-variant">{item.descricao}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] text-label-bold text-primary uppercase tracking-wider">
                    Confiança do Modelo
                  </span>
                  <div className="flex-1 max-w-[120px] bg-outline-variant/30 h-1.5 border border-outline-variant">
                    <div
                      className="bg-primary h-full transition-all duration-1000"
                      style={{ width: exibidos.includes(idx) ? `${item.confianca}%` : '0%' }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-on-surface-variant">{item.confianca}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!scanning && exibidos.length === insights.length && (
        <div className="p-gutter bg-secondary-surface border-t border-outline-variant text-center">
          <p className="text-body-md text-on-surface-variant flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
            Análise concluída pelo modelo de IA — {insights.length} predição(ões) gerada(s).
          </p>
        </div>
      )}
    </div>
  )
}
