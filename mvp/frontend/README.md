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
| `/` | Dashboard | KPIs, heatmap de risco, alertas e predições IA |
| `/lote/:id` | Detalhe do Lote | Informações, ações sugeridas e recomendações de ML |
| `/anomalias` | Anomalias | Gestão de anomalias com detecção inteligente |
| `/relatorios` | Relatório Mensal | KPIs fiscais, faturamento e análise preditiva |

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
