// Importa NavLink para navegação com destaque da rota ativa
import { NavLink } from 'react-router-dom'
// Importa o hook da sidebar para controlar abertura/fechamento
import { useSidebar } from './Layout'

// Itens de navegação do menu lateral
const navItems = [
  { to: '/', icon: 'dashboard', label: 'Dashboard' },
  { to: '/lote/4521', icon: 'inventory_2', label: 'Lotes & Estoque' },
  { to: '/anomalias', icon: 'warning', label: 'Anomalias' },
  { to: '/relatorios', icon: 'assessment', label: 'Relatórios' },
]

// Componente principal da Sidebar
export default function Sidebar() {
  // Acessa o estado de abertura e a função setOpen do contexto
  const { open, setOpen } = useSidebar()

  // Função chamada ao navegar — fecha a sidebar no mobile
  const handleNav = () => {
    setOpen(false)
  }

  return (
    <>
      {/* Sidebar para desktop: sempre visível em telas md ou maiores */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-64 border-r border-outline-variant bg-surface flex-col z-20">
        <SidebarContent onNav={handleNav} />
      </aside>
      {/* Sidebar para mobile: drawer deslizante, visível quando open = true */}
      <aside
        className={`fixed md:hidden top-0 left-0 h-full w-64 border-r border-outline-variant bg-surface flex-col z-40 transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SidebarContent onNav={handleNav} />
      </aside>
    </>
  )
}

// Conteúdo interno da sidebar (reutilizado no desktop e mobile)
function SidebarContent({ onNav }: { onNav: () => void }) {
  return (
    <>
      {/* Cabeçalho da sidebar com nome do projeto */}
      <div className="p-margin border-b border-outline-variant flex items-center justify-between">
        <div>
          <h1 className="text-headline-md text-primary font-bold tracking-tight">MVP Atacadão</h1>
          <p className="text-on-surface-variant text-label-bold uppercase tracking-widest mt-1">Gestão de Perdas</p>
        </div>
        {/* Botão fechar — visível apenas no mobile */}
        <button
          onClick={onNav}
          className="md:hidden material-symbols-outlined text-on-surface-variant cursor-pointer"
        >
          close
        </button>
      </div>
      {/* Navegação com links */}
      <nav className="flex-1 mt-4 overflow-y-auto custom-scrollbar">
        <div className="px-2 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              // end = true para a rota "/" não conflitar com outras
              end={item.to === '/'}
              // Fecha a sidebar ao clicar em um link (mobile)
              onClick={onNav}
              // Classe dinâmica baseada se a rota está ativa
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 border-l-4 transition-colors ${
                  isActive
                    ? 'border-l-primary bg-secondary-surface text-primary font-label-bold'
                    : 'border-l-transparent text-on-surface-variant hover:bg-surface-container-low'
                }`
              }
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
      {/* Rodapé da sidebar com perfil do usuário */}
      <div className="p-4 border-t border-outline-variant bg-surface flex items-center gap-3">
        <div className="w-10 h-10 bg-secondary-surface rounded-full overflow-hidden flex items-center justify-center text-primary font-bold">
          GR
        </div>
        <div>
          <p className="text-label-bold text-on-surface">Gestor Regional</p>
          <p className="text-[10px] text-on-surface-variant uppercase">Unidade Samambaia</p>
        </div>
      </div>
    </>
  )
}
