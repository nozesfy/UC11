# Frontend — Changelog

## [1.8.1] — 2026-07-22

### Corrigido

- Página em branco no GitHub Pages: `BrowserRouter` sem `basename` fazia o React Router não matching as rotas quando o site está em subdiretório (`/UC11/`)

### Alterado

- Rota raiz `/` agora redireciona para `/login` (página de login como landing page)
- Dashboard movido para `/dashboard`; link na Sidebar atualizado

## [1.8.0] — 2026-07-20

### Adicionado

- Página de Cadastro (`/cadastro`) com validação de CPF, e-mail e confirmação de senha
- Página de Recuperação de Senha (`/esqueceu-senha`) com formulário CPF + e-mail
- Componente `AiInsights` com simulação de análise por ML (barra de progresso, confiança do modelo, badges de prioridade)
- Painel de predições de IA no Dashboard, Anomalias, Detalhe do Lote e Relatório Mensal
- Utilitário `utils/validators.ts` com funções `formatCpf` e `isValidCpf`

### Corrigido

- `--color-on-primary` faltando no tema Tailwind, fazendo `text-on-primary` não aplicar cor branca nos botões verdes
- Botão "Exportar PDF" no RelatórioMensal usava `text-surface` em vez de `text-on-primary`

### Alterado

- Login agora com máscara de CPF, toggle de senha e validação com feedback visual
- Todos os botões de Login, Cadastro e Recuperação de Senha alterados para bordas quadradas (sem `rounded-full`)
- Link "Cadastre-se" adicionado na tela de Login

## [1.7.0] — 2026-07-17

### Adicionado

- Deploy automatizado via GitHub Actions (`.github/workflows/deploy.yml`)
- Configuração inicial do Vite + React + TypeScript + Tailwind CSS v4
- Roteamento com `react-router-dom` (7 rotas)
- Layout com Sidebar fixa (desktop) e drawer lateral (mobile)
- Header com notificações e perfil
- Páginas: Login, Dashboard, Detalhe do Lote, Anomalias, Relatório Mensal
- Design system com tema verde (#2a9462), tipografia Inter e Material Symbols
- Responsividade mobile-first com grid breakpoints
- Cards de KPI, heatmap de risco e tabela de alertas no Dashboard
