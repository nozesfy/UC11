// Importa useNavigate para navegação programática
import { useNavigate } from 'react-router-dom'
// Importa hook para controlar a abertura da sidebar
import { useSidebar } from './Layout'

// Componente do Header (barra superior fixa)
export default function Header() {
  const navigate = useNavigate()
  // Função para abrir a sidebar (usada no botão hamburger)
  const { setOpen } = useSidebar()

  return (
    <header className="fixed top-0 right-0 left-0 md:left-64 h-16 border-b border-outline-variant bg-surface flex justify-between items-center px-4 md:px-margin z-10">
      {/* Lado esquerdo: botão hamburger + nome do projeto + localização */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Botão hamburger — visível apenas no mobile */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden material-symbols-outlined text-on-surface cursor-pointer active:scale-95"
        >
          menu
        </button>
        {/* Nome do projeto */}
        <span className="text-headline-md font-bold text-primary truncate">MVP Atacadão</span>
        {/* Separador vertical — escondido em telas pequenas */}
        <div className="hidden sm:block h-6 w-px bg-outline-variant" />
        {/* Localização — escondido em telas pequenas */}
        <div className="hidden sm:flex items-center gap-2 text-primary text-label-bold">
          <span className="material-symbols-outlined text-sm">location_on</span>
          <span>Samambaia/DF</span>
        </div>
      </div>
      {/* Lado direito: notificações e perfil */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Botão de notificações com indicador vermelho */}
        <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors relative cursor-pointer active:scale-95">
          notifications
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-error ring-2 ring-surface" />
        </button>
        {/* Botão de perfil — navega para a tela de login */}
        <button
          onClick={() => navigate('/login')}
          className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:scale-95"
        >
          account_circle
        </button>
      </div>
    </header>
  )
}
