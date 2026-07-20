// Importa hooks do React para gerenciar estado e contexto
import { useState, createContext, useContext, type ReactNode } from 'react'
// Importa Outlet do react-router-dom para renderizar as páginas filhas
import { Outlet } from 'react-router-dom'
// Importa o Sidebar e Header que compõem o layout
import Sidebar from './Sidebar'
import Header from './Header'

// Interface que define a estrutura do contexto da sidebar
interface SidebarContextType {
  open: boolean          // Estado: sidebar aberta ou fechada
  setOpen: (v: boolean) => void // Função para alterar o estado
}

// Cria o contexto da sidebar com valores padrão
const SidebarContext = createContext<SidebarContextType>({
  open: false,
  setOpen: () => {},
})

// Hook personalizado para acessar o contexto da sidebar de任何 componente
export const useSidebar = () => useContext(SidebarContext)

// Provider que envolve os componentes e fornece o estado da sidebar
export function SidebarProvider({ children }: { children: ReactNode }) {
  // Estado local: sidebar começa fechada (false)
  const [open, setOpen] = useState(false)
  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

// Componente principal de layout que estrutura a página
export default function Layout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background">
        {/* Sidebar de navegação */}
        <Sidebar />
        {/* Overlay escuro para fechar sidebar no mobile */}
        <Overlay />
        {/* Header fixo no topo */}
        <Header />
        {/* Área de conteúdo principal com padding responsivo */}
        <main className="md:ml-64 pt-16 min-h-screen overflow-y-auto custom-scrollbar bg-background px-4 md:px-margin py-margin">
          <div className="max-w-[1440px] mx-auto">
            {/* Outlet renderiza a página filho da rota atual */}
            <Outlet />
          </div>
          {/* Rodapé com copyright */}
          <footer className="text-center py-6 text-on-surface-variant/60 text-body-md">
            © MVP Atacadao - 2026
          </footer>
        </main>
      </div>
    </SidebarProvider>
  )
}

// Overlay que aparece no mobile para fechar a sidebar ao clicar fora
function Overlay() {
  // Acessa o estado da sidebar via contexto
  const { open, setOpen } = useSidebar()
  // Se a sidebar estiver fechada, não renderiza nada
  if (!open) return null
  return (
    <div
      className="fixed inset-0 bg-black/40 z-30 md:hidden"
      // Ao clicar no overlay, fecha a sidebar
      onClick={() => setOpen(false)}
    />
  )
}
