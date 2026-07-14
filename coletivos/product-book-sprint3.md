# Product Book — Sprint 3

**Projeto:** Modernização da Gestão de Estoque — Rede de Supermercados Atacadão  
**Data:** 08/07/2026  
**Equipe:** William, Alaide, Ed

---

## Resumo da Sprint

Sprint focada em desenvolver uma visão centrada no usuário, identificando perfis, necessidades, dores e expectativas dos usuários do sistema, além de consolidar o levantamento de requisitos.

---

## Artefatos Produzidos

| Artefato | Arquivo | Responsável |
|----------|---------|-------------|
| Personas (6 perfis) | `personas.md` | Equipe |
| Mapa de Empatia (Gerente de Loja) | `mapa-empatia.md` | Equipe |
| Jornada do Usuário | `jornada-usuario.md` | Equipe |
| Requisitos Funcionais (RF001-RF034) | `levantamento-requisitos.md` | Equipe |
| Requisitos Não Funcionais (RNF001-RNF010) | `levantamento-requisitos.md` | Equipe |
| Entrega Final da Sprint | `entrega-final-sprint.md` | Equipe |

---

## Personas Criadas

| Perfil | Nome | Idade |
|--------|------|-------|
| Operador de Caixa | Carlos Silva | 28 |
| Estoquista | Marcos Oliveira | 35 |
| Compradora | Juliana Costa | 42 |
| Gerente de Loja | Ricardo Almeida | 45 |
| Analista de Logística | Fernanda Santos | 38 |
| Diretora de Operações | Helena Martins | 52 |

---

## Principais Necessidades Identificadas

- Dashboard em tempo real para gerentes e diretoria
- Sugestão automática de compras baseada em histórico
- PDV (Ponto de Venda) rápido com leitor de código de barras e emissão fiscal automática
- Aplicativo mobile para inventário com código de barras
- Rastreamento de mercadorias em trânsito
- Indicadores consolidados de giro, ruptura e ticket médio

---

## Requisitos Funcionais (Resumo)

- **Módulo PDV (Ponto de Venda):** RF001-RF007 (vendas CPF/CNPJ, emissão fiscal, baixa no estoque)
- **Módulo Estoque:** RF008-RF012 (saldo em tempo real, alertas, consulta)
- **Módulo Compras:** RF013-RF016 (sugestão automática, aprovação, pedido)
- **Módulo Perdas:** RF017-RF020 (registro, notificação, relatório)
- **Módulo Inventário:** RF021-RF024 (contagem cíclica, código de barras, divergência)
- **Módulo Movimentação:** RF025-RF028 (transferências, rastreamento)
- **Módulo Indicadores:** RF029-RF034 (giro, ruptura, ticket médio)

---

## Requisitos Não Funcionais (Resumo)

- Disponibilidade de 99,5% em horário comercial
- Baixa no estoque em até 2 segundos
- Suporte a múltiplas filiais
- Banco de dados relacional (PostgreSQL)
- Interface web responsiva (React)
- App mobile para inventário (React Native)
- Backend em Node.js ou C#
- Autenticação e logs de operações críticas

---

## Lições Aprendidas

- A importância de basear personas em perfis reais de usuários, não em suposições genéricas
- O valor do Mapa de Empatia para entender as motivações e dores de cada perfil
- A Jornada do Usuário ajuda a visualizar oportunidades de melhoria em cada etapa

---

## Próximos Passos

- Prototipação das telas do sistema
- Validação dos requisitos com o cliente
- Definição da arquitetura e tecnologia
