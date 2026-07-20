// Importa ReactNode para tipar o children
import type { ReactNode } from 'react'

// Interface que define as props do botão
interface ButtonProps {
  children: ReactNode    // Conteúdo do botão (texto, ícones, etc.)
  variant?: 'primary' | 'outline' | 'ghost' // Estilo visual
  size?: 'sm' | 'md' | 'lg'                 // Tamanho
  icon?: string          // Nome do ícone Material Symbols
  onClick?: () => void   // Função ao clicar
  className?: string     // Classes extras
  type?: 'button' | 'submit' // Tipo HTML do botão
}

// Componente Button reutilizável
export default function Button({ children, variant = 'primary', size = 'md', icon, onClick, className = '', type = 'button' }: ButtonProps) {
  // Classes base comuns a todos os botões
  const base = 'font-label-bold transition-all active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2'
  // Classes específicas para cada variante
  const variants = {
    primary: 'bg-primary text-on-primary rounded-full hover:opacity-90',
    outline: 'border border-primary text-primary rounded-full hover:bg-secondary-surface',
    ghost: 'text-on-surface-variant hover:bg-surface-container-low rounded-lg',
  }
  // Classes específicas para cada tamanho
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-xs',
    lg: 'px-6 py-3 text-sm',
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {/* Ícone opcional antes do texto */}
      {icon && <span className="material-symbols-outlined text-sm">{icon}</span>}
      {children}
    </button>
  )
}
