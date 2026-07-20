// Importa o StrictMode do React para identificar problemas no desenvolvimento
import { StrictMode } from 'react'
// Importa a função createRoot para renderizar a aplicação no DOM
import { createRoot } from 'react-dom/client'
// Importa o BrowserRouter do react-router-dom para gerenciar as rotas
import { BrowserRouter } from 'react-router-dom'
// Importa o CSS global com as configurações do Tailwind
import './index.css'
// Importa o componente principal App
import App from './App'

// Seleciona o elemento com id "root" e renderiza a aplicação dentro dele
createRoot(document.getElementById('root')!).render(
  // StrictMode ativa checagens extras em desenvolvimento
  <StrictMode>
    {/* BrowserRouter fornece o contexto de roteamento para toda a app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
