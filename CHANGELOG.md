# Changelog

## [1.8.1] — 2026-07-22

### Corrigido

- `frontend/` — página em branco no GitHub Pages: `BrowserRouter` sem `basename` fazia o React Router não匹配 as rotas quando o site está em subdiretório (`/UC11/`)

## [1.8.0] — 2026-07-20

### Adicionado

- `frontend/` — página de Cadastro (`/cadastro`) com validação de CPF, e-mail e confirmação de senha
- `frontend/` — página de Recuperação de Senha (`/esqueceu-senha`) com formulário CPF + e-mail
- `frontend/` — componente `AiInsights` com simulação de análise por ML (barra de progresso, confiança do modelo, badges de prioridade)
- `frontend/` — painel de predições de IA no Dashboard, Anomalias, Detalhe do Lote e Relatório Mensal
- `frontend/` — utilitário `utils/validators.ts` com funções `formatCpf` e `isValidCpf`

### Corrigido

- `frontend/` — `--color-on-primary` faltando no tema Tailwind, fazendo `text-on-primary` não aplicar cor branca nos botões verdes
- `frontend/` — botão "Exportar PDF" no RelatórioMensal usava `text-surface` em vez de `text-on-primary`

### Alterado

- `frontend/` — Login agora com máscara de CPF, toggle de senha e validação com feedback visual
- `frontend/` — todos os botões de Login, Cadastro e Recuperação de Senha alterados para bordas quadradas (sem `rounded-full`)
- `frontend/` — link "Cadastre-se" adicionado na tela de Login

## [1.7.0] — 2026-07-17

### Adicionado

- `mvp/` movida de `coletivos/mvp/` para a raiz do projeto
- `mvp/levantamento-requisitos.md` — levantamento de requisitos específico do MVP com 21 RFs (RF-MVP001 a RF-MVP021), 30 RNFs (RNF-MVP01 a RNF-MVP30), 8 perfis de usuário, 7 regras de negócio, 7 critérios de aceitação e matriz de rastreabilidade casos de uso × requisitos

## [1.6.0] — 2026-07-17

### Adicionado

- `coletivos/requisitos-por-caso-de-uso.md` — matriz de rastreabilidade entre casos de uso (UC01-UC12) e requisitos funcionais/não funcionais, com detalhamento por UC, matriz inversa e identificação de funcionalidades ML sem requisito direto

## [1.5.0] — 2026-07-16

### Adicionado

- 6 novos artefatos em `coletivos/mvp/` para a 6ª microentrega:
  - `casos-de-uso.md` — diagrama de casos de uso (Mermaid) com 12 UC, descrições e matriz ator vs UC
  - `fluxo-navegacao.md` — sitemap, fluxo por ator, mapa de telas e caminhos de navegação
  - `arquitetura.md` — diagrama de arquitetura em camadas (frontend, API, ML, BD, integração TOTVS), stack tecnológica e decisões arquiteturais
  - `banco-dados.md` — dicionário completo de 10 tabelas (PostgreSQL), índices e views SQL
  - `modelo-er.md` — diagrama ER completo e conceitual (Mermaid) com regras de negócio
  - `estrutura-projeto.md` — estrutura de diretórios do repositório, estratégia de branches (Git Flow), convenção de commits e responsabilidades

## [1.4.0] — 2026-07-15

### Adicionado

- Pasta `coletivos/mvp/` com 7 novos artefatos expandindo a documentação do MVP:
  - `user-stories.md` — 12 user stories e critérios de aceitação
  - `requisitos-nao-funcionais.md` — performance, segurança, usabilidade e compatibilidade
  - `mvp-canvas.md` — MVP Canvas (problema, solução, métricas, riscos)
  - `roadmap-sprints.md` — 4 sprints com cronograma (gantt chart) e release plan
  - `riscos-mitigacao.md` — 8 riscos com matriz e planos de contingência
  - `wireframes.md` — descrição textual de 4 telas do dashboard
  - `lgpd-conformidade.md` — mapeamento LGPD, medidas de proteção e checklist

### Removido

- `coletivos/mvp.md` (movido para dentro de `coletivos/mvp/mvp.md`)

## [1.3.0] — 2026-07-14

### Adicionado

- MVP com dados reais do Atacadão e fontes (Estadão, MPDFT, ABRAPPE, Neogrid, BNews)
- Gráficos Mermaid no MVP: fluxo de decisão, arquitetura do sistema, pizza (distribuição de perdas), barras (ganhos esperados)
- Seção "Panorama das Perdas no Varejo" com tabela comparativa Antes vs Depois
- Plataforma Web + Mobile no cabeçalho do documento
- Justificativa das tecnologias no MVP

### Alterado

- MVP refatorado para foco em **Controle de Validade e Prevenção de Perdas** e **Detecção de Anomalias em Perdas e Fraudes**
- Canvas Model removido após teste de layout
- Tecnologias movidas para o final do documento

## [1.2.0] — 2026-07-14

### Alterado

- MVP scopo ajustado para **Controle de Validade e Prevenção de Perdas** e **Detecção de Anomalias em Perdas e Fraudes**, removendo previsão de demanda e recomendação no PDV

## [1.1.10] — 2026-07-14

### Alterado

- Artefatos coletivos organizados na pasta `coletivos/` (antes estavam soltos na raiz)

## [1.1.9] — 2026-07-13

### Alterado

- Matriz CSD dos 3 integrantes unificada para a visão do usuário do app Meu Atacadão, com informações simples e diretas para sala de aula

## [1.1.8] — 2026-07-10

### Alterado

- Matriz CSD do Ed alterada para perspectiva de usuário comum do app Meu Atacadão

## [1.1.7] — 2026-07-10

### Adicionado

- Seção "Fonte" com referências das informações nas matrizes CSD

## [1.1.6] — 2026-07-10

### Alterado

- Matriz CSD reduzida para 3 itens por seção com explicações individuais

## [1.1.5] — 2026-07-10

### Alterado

- Matriz CSD de todos os integrantes atualizada com dados reais do app Meu Atacadão e ERP do Atacadão

## [1.1.4] — 2026-07-10

### Adicionado

- Matriz CSD individual nas pastas alaide/, ed/ e william/

## [1.1.3] — 2026-07-09

### Adicionado

- Descrição da Sprint 3 (`sprint3-visao-usuario.md`)
- Product Book da Sprint 3 (`product-book-sprint3.md`)
- Pastas individuais william/, alaide/, ed/ com personas, mapas de empatia e requisitos individuais

### Alterado

- Individualização dos requisitos por integrante
- Ajuste para 1 persona por integrante
- Data do changelog corrigida

## [1.1.2] — 2026-07-08

### Adicionado

- Sprint de visão do usuário (`sprint-visao-usuario.md`)
- Personas de todos os perfis do sistema (`personas.md`)
- Mapa de Empatia do Gerente de Loja (`mapa-empatia.md`)
- Jornada do Usuário para todos os perfis (`jornada-usuario.md`)
- Entrega final da sprint de visão do usuário (`entrega-final-sprint.md`)
### Alterado

- Reflexão revisada com nova perspectiva acadêmica (`reflexao-1.md`)
- Microentrega 1 atualizada com divisão de papéis da equipe

## [1.1.1] — 2026-07-07

### Adicionado

- 1ª microentrega (`microentrega-1.md`) com visão do cliente, problema, usuários e organização da equipe
- Reflexão sobre desenvolvimento sem contato com o cliente (`reflexao-1.md`)

### Alterado

- Especificação da regularidade no abastecimento para clientes transformadores na proposta

## [1.1.0] — 2026-07-06

### Adicionado

- História do Atacadão baseada na Wikipédia (`historia-atacadao.md`)
- Levantamento de requisitos funcionais e não funcionais (`levantamento-requisitos.md`)
- Seção de modelo de negócio do Atacadão na proposta
- Detalhamento dos perfis de clientes (CPF, CNPJ, internacional)
- Seção de usuários do sistema
- Créditos da equipe

### Alterado

- README atualizado com estrutura do projeto
- Proposta reestruturada e seções renumeradas

## [1.0.0] — 2026-07-06

### Adicionado

- Documento inicial do projeto (`ATIVIDADE.md`) com descrição do contexto, dificuldades atuais e proposta de modernização da gestão de estoque para a rede de supermercados.
- Proposta conceitual da equipe (`proposta-equipe.md`)