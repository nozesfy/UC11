import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { formatCpf, isValidCpf } from '../utils/validators'

export default function Cadastro() {
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ nome?: string; email?: string; cpf?: string; password?: string; confirmarSenha?: string }>({})

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(formatCpf(e.target.value))
    if (errors.cpf) setErrors((p) => ({ ...p, cpf: undefined }))
  }

  const limparErro = (campo: keyof typeof errors) => {
    if (errors[campo]) setErrors((p) => ({ ...p, [campo]: undefined }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs: typeof errors = {}
    if (!nome.trim()) errs.nome = 'Nome é obrigatório'
    if (!email) errs.email = 'E-mail é obrigatório'
    else if (!/\S+@\S+\.\S+/.test(email)) errs.email = 'E-mail inválido'
    if (!cpf) errs.cpf = 'CPF é obrigatório'
    else if (!isValidCpf(cpf)) errs.cpf = 'CPF inválido'
    if (!password) errs.password = 'Senha é obrigatória'
    else if (password.length < 6) errs.password = 'Mínimo 6 caracteres'
    if (password !== confirmarSenha) errs.confirmarSenha = 'Senhas não conferem'

    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/login')
    }, 1500)
  }

  const campoClasse = (campo: keyof typeof errors) =>
    `w-full pl-10 pr-10 py-3 bg-surface-container-low border outline-none transition-all text-body-md ${
      errors[campo]
        ? 'border-error focus:border-error focus:ring-1 focus:ring-error'
        : 'border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary'
    }`

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
              how_to_reg
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
              <h2 className="text-headline-md text-on-surface">Criar Conta</h2>
              <p className="text-body-md text-on-surface-variant mt-1">Preencha os dados para se cadastrar no sistema.</p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-label-bold text-on-surface-variant block" htmlFor="nome">NOME COMPLETO</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">badge</span>
                  <input id="nome" value={nome} onChange={(e) => { setNome(e.target.value); limparErro('nome') }} className={campoClasse('nome')} placeholder="Seu nome completo" type="text" />
                </div>
                {errors.nome && <p className="text-error text-xs mt-1">{errors.nome}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-label-bold text-on-surface-variant block" htmlFor="email">E-MAIL</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">mail</span>
                  <input id="email" value={email} onChange={(e) => { setEmail(e.target.value); limparErro('email') }} className={campoClasse('email')} placeholder="seu@email.com" type="text" />
                </div>
                {errors.email && <p className="text-error text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-label-bold text-on-surface-variant block" htmlFor="cpf">CPF</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">person</span>
                  <input id="cpf" value={cpf} onChange={handleCpfChange} className={campoClasse('cpf')} placeholder="000.000.000-00" type="text" maxLength={14} />
                </div>
                {errors.cpf && <p className="text-error text-xs mt-1">{errors.cpf}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-label-bold text-on-surface-variant block" htmlFor="password">SENHA</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">lock</span>
                  <input id="password" value={password} onChange={(e) => { setPassword(e.target.value); limparErro('password') }} className={campoClasse('password')} placeholder="Mínimo 6 caracteres" type={showPassword ? 'text' : 'password'} />
                  <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary cursor-pointer">
                    <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
                {errors.password && <p className="text-error text-xs mt-1">{errors.password}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-label-bold text-on-surface-variant block" htmlFor="confirmarSenha">CONFIRMAR SENHA</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">lock</span>
                  <input id="confirmarSenha" value={confirmarSenha} onChange={(e) => { setConfirmarSenha(e.target.value); limparErro('confirmarSenha') }} className={campoClasse('confirmarSenha')} placeholder="Repita a senha" type={showConfirm ? 'text' : 'password'} />
                  <button type="button" onClick={() => setShowConfirm((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary cursor-pointer">
                    <span className="material-symbols-outlined text-[20px]">{showConfirm ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
                {errors.confirmarSenha && <p className="text-error text-xs mt-1">{errors.confirmarSenha}</p>}
              </div>

              <div className="pt-2 space-y-3">
                <button type="submit" disabled={loading} className="w-full py-4 text-headline-md bg-primary text-on-primary font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-70">
                  {loading ? <>CADASTRANDO...</> : <>CADASTRAR <span className="material-symbols-outlined">how_to_reg</span></>}
                </button>
                <Link to="/login" className="block w-full py-4 text-headline-md border border-outline-variant text-on-surface font-bold text-center active:scale-[0.98] transition-all hover:bg-surface-container-low">
                  VOLTAR AO LOGIN
                </Link>
              </div>
            </form>
          </div>

          <footer className="mt-6 text-center">
            <p className="text-body-md text-on-surface-variant">© MVP Atacadao - 2026</p>
          </footer>
        </div>
      </section>
    </main>
  )
}
