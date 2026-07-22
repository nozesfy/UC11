# UC11 — Gerir Projetos de Tecnologia da Informação

**Modernização da Gestão de Estoque — Rede de Supermercados Atacadão**

## Sobre o Projeto

Projeto acadêmico da UC11 (Gerir Projetos de TI) do curso Técnico em Desenvolvimento de Sistemas.

MVP de um sistema com IA para **controle de validade, prevenção de perdas e detecção de anomalias** na rede Atacadão.

## Equipe

| Membro | Papel | Pasta |
|--------|-------|-------|
| William | Front-end e Banco de Dados | `individual/william/` |
| Alaide | UI/UX | `individual/alaide/` |
| Ed | Back-end, DevOps e Documentação | `individual/ed/` |

## Estrutura do Repositório

### Raiz

- `CHANGELOG.md` — histórico de alterações do projeto

## Branches

Trabalhamos diretamente na branch `main` (projeto acadêmico, sem necessidade de Git Flow).

### `mvp/frontend/` — Aplicação React (Vite + TypeScript + Tailwind CSS)

Protótipo funcional do MVP com as seguintes páginas:

| Rota | Página | Descrição |
|------|--------|-----------|
| `/login` | Login | Autenticação com CPF (máscara + validação) e senha |
| `/cadastro` | Cadastro | Registro de novo usuário com validação completa |
| `/esqueceu-senha` | Recuperar Senha | Recuperação de senha via CPF e e-mail |
| `/dashboard` | Dashboard | KPIs, heatmap de risco, alertas de estoque, predições IA |
| `/lote/:id` | Detalhe do Lote | Informações do lote, ações sugeridas, recomendações de ML |
| `/anomalias` | Anomalias | Gestão de anomalias com detecção inteligente por IA |
| `/relatorios` | Relatório Mensal | KPIs fiscais, faturamento por filial, análise preditiva |

**Funcionalidades simuladas com IA:** análise preditiva de perdas, detecção de anomalias, recomendações de precificação dinâmica, realocação inteligente e otimização fiscal — com barra de progresso, nível de confiança do modelo e badges de prioridade.

Para executar:

```bash
cd mvp/frontend
npm install
npm run dev
```

### `coletivos/` — Artefatos Coletivos

- `proposta-equipe.md` — proposta conceitual da solução
- `levantamento-requisitos.md` — requisitos funcionais e não funcionais (sistema completo)
- `requisitos-por-caso-de-uso.md` — matriz de rastreabilidade entre casos de uso e requisitos
- `canvas-atacadao.md` — Business Model Canvas
- `historia-atacadao.md` — história e perfil do Atacadão
- `personas.md`, `mapa-empatia.md`, `jornada-usuario.md` — artefatos de UX
- `microentrega-1.md`, `reflexao-1.md` — entregas acadêmicas
- `sprint-visao-usuario.md`, `sprint3-visao-usuario.md`, `entrega-final-sprint.md`, `product-book-sprint3.md` — sprints de visão do usuário

### `mvp/` — Documentação do MVP

- `mvp.md` — visão geral do MVP com dados reais do setor
- `mvp-canvas.md` — MVP Canvas
- `casos-de-uso.md` — 12 casos de uso com diagrama Mermaid
- `user-stories.md` — 12 user stories com critérios de aceitação
- `levantamento-requisitos.md` — requisitos específicos do MVP
- `requisitos-nao-funcionais.md` — requisitos não funcionais do MVP
- `arquitetura.md` — arquitetura em camadas, componentes e fluxo de dados
- `banco-dados.md` — dicionário de dados (PostgreSQL 16)
- `modelo-er.md` — diagrama entidade-relacionamento
- `fluxo-navegacao.md` — sitemap e fluxo de navegação
- `wireframes.md` — descrição textual das telas
- `roadmap-sprints.md` — cronograma do MVP em 4 sprints
- `riscos-mitigacao.md` — matriz de riscos
- `lgpd-conformidade.md` — mapeamento LGPD
- `estrutura-projeto.md` — estrutura de diretórios e convenções

### `individual/` — Artefatos Individuais

- `individual/william/` — personas, mapas de empatia, matriz CSD e requisitos individuais
- `individual/alaide/` — personas, mapas de empatia, matriz CSD e requisitos individuais
- `individual/ed/` — personas, mapas de empatia, matriz CSD e requisitos individuais
