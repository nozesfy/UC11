# MVP Atacadão — Frontend

Protótipo funcional do sistema de **Gestão de Perdas** para a rede Atacadão.

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** — tema personalizado com cores, fontes e espaçamentos próprios
- **react-router-dom v7** — navegação com 7 rotas
- **Material Symbols Outlined** — ícones

## Rotas

| Rota | Página | Descrição |
|------|--------|-----------|
| `/login` | Login | Autenticação com CPF (máscara + validação) e senha |
| `/cadastro` | Cadastro | Registro de novo usuário |
| `/esqueceu-senha` | Recuperar Senha | Recuperação via CPF e e-mail |
| `/dashboard` | Dashboard | KPIs, heatmap de risco, alertas e predições IA |
| `/lote/:id` | Detalhe do Lote | Informações, ações sugeridas e recomendações de ML |
| `/anomalias` | Anomalias | Gestão de anomalias com detecção inteligente |
| `/relatorios` | Relatório Mensal | KPIs fiscais, faturamento e análise preditiva |

## Validação de Formulários

Todas as validações são feitas **no frontend** (utils/validators.ts) no momento da submissão, com feedback visual por campo (borda vermelha + mensagem de erro).

### Login (`/login`)

| Campo | Validações |
|-------|-----------|
| CPF | Máscara `000.000.000-00` via `formatCpf`; obrigatório; valida dígitos verificadores via `isValidCpf` |
| Senha | Obrigatória; mínimo 4 caracteres |

### Cadastro (`/cadastro`)

| Campo | Validações |
|-------|-----------|
| Nome completo | Obrigatório; não pode ser vazio |
| E-mail | Obrigatório; regex `/\S+@\S+\.\S+/` |
| CPF | Máscara `000.000.000-00` via `formatCpf`; obrigatório; valida dígitos verificadores via `isValidCpf` |
| Senha | Obrigatória; mínimo 6 caracteres |
| Confirmar senha | Deve ser idêntica ao campo Senha |

### Recuperar Senha (`/esqueceu-senha`)

| Campo | Validações |
|-------|-----------|
| CPF | Máscara `000.000.000-00` via `formatCpf`; obrigatório; valida dígitos verificadores via `isValidCpf` |
| E-mail | Obrigatório; regex `/\S+@\S+\.\S+/` |

## Funcionalidades de IA (simuladas)

- **Análise Preditiva** — previsão de ruptura, excesso de estoque e perda total
- **Detecção de Anomalias** — identificação de padrões suspeitos com clusterização
- **Recomendações Inteligentes** — precificação dinâmica, realocação e doação fiscal
- **Barra de progresso** e **nível de confiança do modelo** em cada predição

## Layout

- Sidebar fixa no desktop, drawer lateral no mobile
- Botões com bordas quadradas
- Tema verde (#2a9462) com laranja para alertas e vermelho para crítico
- Responsivo: grid breakpoints, flex-wrap, padding adaptativo

## Como rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

## Deploy (GitHub Pages)

O deploy é automático via GitHub Actions. A cada push na branch `main` que alterar arquivos em `mvp/frontend/`:

1. O workflow em `.github/workflows/deploy.yml` faz o build do Vite
2. O artefato `dist/` é publicado no GitHub Pages

**URL de produção:** `https://senacsystemsdev.github.io/UC11/`

Para acionar manualmente o deploy, vá em **Actions → Deploy Frontend to GitHub Pages → Run workflow**.

> ⚠️ O `base` no `vite.config.ts` é `'./'` (caminhos relativos) e o `<BrowserRouter>` em `main.tsx` usa `basename="/UC11"` para匹配 as rotas no subdiretório do GitHub Pages.
