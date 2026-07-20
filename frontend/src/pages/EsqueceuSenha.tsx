import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { isValidCpf } from '../utils/validators'

export default function EsqueceuSenha() {
  const navigate = useNavigate()
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ cpf?: string; email?: string }>({})

  const formatCpf = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 11)
    return digits
      .replace(/^(\d{3})(\d)/, '$1.$2')
      .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4')
  }

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(formatCpf(e.target.value))
    if (errors.cpf) setErrors((p) => ({ ...p, cpf: undefined }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: typeof errors = {}
    if (!cpf) newErrors.cpf = 'CPF é obrigatório'
    else if (!isValidCpf(cpf)) newErrors.cpf = 'CPF inválido'
    if (!email) newErrors.email = 'E-mail é obrigatório'
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'E-mail inválido'

    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1500)
  }

  return (
    <main className="min-h-screen flex bg-[#fcf9f8]">
      <section className="hidden md:flex flex-1 bg-[#313030] items-center justify-center p-8 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=800')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center max-w-md">
          <h1 className="text-white text-headline-lg mb-4 tracking-tight">MVP Atacadão</h1>
          <p className="text-white/90 text-headline-md italic font-light">"Gestão Inteligente de Varejo"</p>
          <div className="mt-8 flex justify-center">
            <span className="material-symbols-outlined text-white text-[64px] opacity-80" style={{ fontVariationSettings: "'wght' 200" }}>
              lock_reset
            </span>
          </div>
        </div>
      </section>

      <section className="flex-1 bg-white flex items-center justify-center p-4 md:p-6">
        <div className="w-full max-w-[400px]">
          <div className="bg-white border border-outline-variant p-6 md:p-8 space-y-6">
            <header className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-3xl fill">storefront</span>
                <span className="text-headline-md font-bold text-primary tracking-tighter">MVP Atacadão</span>
              </div>
              <h2 className="text-headline-md text-on-surface">Recuperar Senha</h2>
              <p className="text-body-md text-on-surface-variant mt-1">
                {sent ? 'Verifique sua caixa de entrada' : 'Informe CPF e e-mail cadastrado para redefinir sua senha.'}
              </p>
            </header>

            {sent ? (
              <div className="space-y-6">
                <div className="flex flex-col items-center gap-4 py-6">
                  <span className="material-symbols-outlined text-primary text-[64px]" style={{ fontVariationSettings: "'wght' 200" }}>
                    mail
                  </span>
                  <p className="text-body-md text-on-surface-variant text-center">
                    Enviamos um link de redefinição para <strong className="text-on-surface">{email}</strong>.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => navigate('/login')}
                  className="w-full py-4 text-headline-md  bg-primary text-on-primary font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer"
                >
                  VOLTAR AO LOGIN
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-label-bold text-on-surface-variant block" htmlFor="cpf">CPF</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">person</span>
                    <input
                      id="cpf"
                      value={cpf}
                      onChange={handleCpfChange}
                      className={`w-full pl-10 pr-4 py-3 bg-surface-container-low border outline-none transition-all text-body-md ${errors.cpf ? 'border-error focus:border-error focus:ring-1 focus:ring-error' : 'border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary'}`}
                      placeholder="000.000.000-00"
                      type="text"
                      maxLength={14}
                    />
                  </div>
                  {errors.cpf && <p className="text-error text-xs mt-1">{errors.cpf}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-label-bold text-on-surface-variant block" htmlFor="email">E-MAIL</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">mail</span>
                    <input
                      id="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors((p) => ({ ...p, email: undefined })) }}
                      className={`w-full pl-10 pr-4 py-3 bg-surface-container-low border outline-none transition-all text-body-md ${errors.email ? 'border-error focus:border-error focus:ring-1 focus:ring-error' : 'border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary'}`}
                      placeholder="seu@email.com"
                      type="text"
                    />
                  </div>
                  {errors.email && <p className="text-error text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 text-headline-md  bg-primary text-on-primary font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-70"
                  >
                    {loading ? <>ENVIANDO...</> : <>ENVIAR LINK <span className="material-symbols-outlined">send</span></>}
                  </button>
                  <Link to="/login" className="block w-full py-4 text-headline-md  border border-outline-variant text-on-surface font-bold text-center active:scale-[0.98] transition-all hover:bg-surface-container-low">
                    VOLTAR
                  </Link>
                </div>
              </form>
            )}
          </div>

          <footer className="mt-6 text-center">
            <p className="text-body-md text-on-surface-variant">© MVP Atacadao - 2026</p>
          </footer>
        </div>
      </section>
    </main>
  )
}
