import { useState, useEffect, useRef } from 'react'

const categorias = [
  { nome: 'HORTIFRÚTI', pct: 95, label: '95% (CRÍTICO)', cor: 'bg-error' },
  { nome: 'CARNES', pct: 85, label: '85% (ALTO)', cor: 'bg-warning' },
  { nome: 'LATICÍNIOS', pct: 60, label: '60% (MODERADO)', cor: 'bg-primary' },
  { nome: 'PADARIA', pct: 40, label: '40% (BAIXO)', cor: 'bg-primary' },
]

export default function HeatmapRisco() {
  const ref = useRef<HTMLElement>(null)
  const [scanning, setScanning] = useState(false)
  const [larguras, setLarguras] = useState<number[]>(categorias.map(() => 0))

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScanning(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!scanning) return
    const timer = setInterval(() => {
      setLarguras((prev) => {
        const next = prev.map((v, i) => {
          if (v >= categorias[i].pct) return v
          return Math.min(v + Math.random() * 15, categorias[i].pct)
        })
        if (next.every((v, i) => v >= categorias[i].pct)) {
          clearInterval(timer)
          setScanning(false)
        }
        return next
      })
    }, 300)
    return () => clearInterval(timer)
  }, [scanning])

  return (
    <section ref={ref} className="bg-surface border border-outline-variant lg:col-span-12">
      <div className="p-gutter border-b border-outline-variant flex justify-between items-center">
        <h2 className="text-headline-md text-on-surface">Risco de Perda por Categoria</h2>
        <button className="px-4 py-2 bg-primary text-on-primary text-label-bold text-xs hover:opacity-90 transition-colors active:scale-95 cursor-pointer shrink-0">
          Relatório Completo
        </button>
      </div>
      <div className="p-gutter space-y-6">
        {categorias.map((cat, idx) => (
          <div key={cat.nome} className="space-y-2">
            <div className="flex justify-between text-xs text-label-bold text-on-surface-variant">
              <span>{cat.nome}</span>
              <span className={cat.cor.replace('bg-', 'text-')}>{cat.label}</span>
            </div>
            <div className="h-4 w-full bg-surface-container-low">
              <div
                className={`h-full ${cat.cor} transition-all duration-300 ease-out`}
                style={{ width: `${larguras[idx]}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
