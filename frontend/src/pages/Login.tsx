import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { formatCpf, isValidCpf } from '../utils/validators'

export default function Login() {
  const navigate = useNavigate()
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ cpf?: string; password?: string }>({})

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCpf(e.target.value)
    setCpf(formatted)
    if (errors.cpf) setErrors((prev) => ({ ...prev, cpf: undefined }))
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }))
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: typeof errors = {}
    if (!cpf) newErrors.cpf = 'CPF é obrigatório'
    else if (!isValidCpf(cpf)) newErrors.cpf = 'CPF inválido'
    if (!password) newErrors.password = 'Senha é obrigatória'
    else if (password.length < 4) newErrors.password = 'Senha deve ter no mínimo 4 caracteres'

    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/')
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
              inventory_2
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
              <h2 className="text-headline-md text-on-surface">Acesso ao Sistema</h2>
              <p className="text-body-md text-on-surface-variant mt-1">Informe suas credenciais para iniciar a operação.</p>
            </header>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1">
                <label className="text-label-bold text-on-surface-variant block" htmlFor="cpf">CPF</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">person</span>
                  <input
                    id="cpf"
                    value={cpf}
                    onChange={handleCpfChange}
                    className={`w-full pl-10 pr-4 py-3 bg-surface-container-low border outline-none transition-all text-body-md ${
                      errors.cpf ? 'border-error focus:border-error focus:ring-1 focus:ring-error' : 'border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary'
                    }`}
                    placeholder="000.000.000-00"
                    type="text"
                    maxLength={14}
                  />
                </div>
                {errors.cpf && <p className="text-error text-xs mt-1">{errors.cpf}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-label-bold text-on-surface-variant block" htmlFor="password">SENHA</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">lock</span>
                  <input
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className={`w-full pl-10 pr-10 py-3 bg-surface-container-low border outline-none transition-all text-body-md ${
                      errors.password ? 'border-error focus:border-error focus:ring-1 focus:ring-error' : 'border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary'
                    }`}
                    placeholder="••••••••"
                    type={showPassword ? 'text' : 'password'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
                {errors.password && <p className="text-error text-xs mt-1">{errors.password}</p>}
              </div>

              <div className="flex items-center justify-between">
                <Link to="/cadastro" className="text-primary text-label-bold hover:underline transition-all">Cadastre-se</Link>
                <Link to="/esqueceu-senha" className="text-primary text-label-bold hover:underline transition-all">Esqueceu a senha?</Link>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 text-headline-md bg-primary text-on-primary font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-70"
                >
                  {loading ? (
                    <>AUTENTICANDO...</>
                  ) : (
                    <>ENTRAR <span className="material-symbols-outlined">login</span></>
                  )}
                </button>
              </div>
            </form>

            <div className="flex items-center justify-center gap-2 pt-4 text-on-surface-variant/60">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              <span className="text-[11px] uppercase tracking-widest text-label-bold">Ambiente Seguro (RNF008)</span>
            </div>
          </div>

          <footer className="mt-6 text-center">
            <p className="text-body-md text-on-surface-variant">© MVP Atacadao - 2026</p>
            <div className="flex gap-4 justify-center mt-2">
              <a className="text-label-bold text-secondary hover:text-primary transition-colors cursor-pointer">Termos de Uso</a>
              <a className="text-label-bold text-secondary hover:text-primary transition-colors cursor-pointer">Suporte Técnico</a>
            </div>
          </footer>
        </div>
      </section>
    </main>
  )
}
