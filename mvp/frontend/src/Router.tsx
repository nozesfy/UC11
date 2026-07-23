// Importa Routes, Route e Navigate do react-router-dom para definir as rotas
import { Routes, Route, Navigate } from 'react-router-dom'
// Importa o Layout que envolve as páginas com Sidebar e Header
import Layout from './components/Layout/Layout'
// Importa todas as páginas do sistema
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import EsqueceuSenha from './pages/EsqueceuSenha'
import Dashboard from './pages/Dashboard/Dashboard'
import LoteDetail from './pages/LoteDetail/LoteDetail'
import Anomalias from './pages/Anomalias/Anomalias'
import RelatorioMensal from './pages/Relatorio/RelatorioMensal'

// Componente que define todas as rotas da aplicação
export default function Router() {
  return (
    <Routes>
      {/* Rotas sem sidebar nem header */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Navigate to="/" replace />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
      {/* Layout envolvendo as rotas protegidas (com sidebar) */}
      <Route element={<Layout />}>
        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Rota de detalhe do lote com parâmetro :id */}
        <Route path="/lote/:id" element={<LoteDetail />} />
        {/* Rota da página de anomalias */}
        <Route path="/anomalias" element={<Anomalias />} />
        {/* Rota da página de relatórios */}
        <Route path="/relatorios" element={<RelatorioMensal />} />
      </Route>
    </Routes>
  )
}
