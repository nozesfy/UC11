# Levantamento de Requisitos — MVP

**Projeto:** Modernização da Gestão de Estoque — Rede de Supermercados Atacadão  
**MVP:** Controle de Validade e Prevenção de Perdas com IA  
**UC11:** Gerir Projetos de Tecnologia da Informação  
**Equipe:** William, Alaide, Ed  
**Data:** 17/07/2026

---

## 1. Requisitos Funcionais

### 1.1 Módulo de Controle de Validade

| Código | Descrição | User Story |
|--------|-----------|------------|
| RF-MVP001 | O sistema deve calcular o risco de vencimento de cada lote com base na data de validade e na velocidade média de venda do produto na filial | US01 |
| RF-MVP002 | O sistema deve classificar automaticamente cada lote em três níveis de risco: verde (baixo), amarelo (médio) e vermelho (crítico) | US02 |
| RF-MVP003 | O sistema deve sugerir automaticamente um percentual de desconto para lotes classificados como amarelo ou vermelho | US03 |
| RF-MVP004 | O sistema deve identificar filiais com excesso de estoque e sugerir realocação para filiais com maior demanda | US04 |
| RF-MVP005 | O sistema deve emitir alerta para retirada de gôndola de lotes em estado crítico sem chance de venda | US05 |
| RF-MVP006 | O sistema deve permitir que o gerente visualize o risco de vencimento em tempo real no dashboard | US01 |

### 1.2 Módulo de Detecção de Anomalias

| Código | Descrição | User Story |
|--------|-----------|------------|
| RF-MVP007 | O sistema deve monitorar continuamente os padrões de perda cruzando dados de filial, turno, operador, categoria e dia da semana | US06 |
| RF-MVP008 | O sistema deve detectar anomalias em perdas utilizando algoritmo de machine learning (Isolation Forest) | US06 |
| RF-MVP009 | O sistema deve comparar indicadores de perda entre filiais para identificar desvios significativos | US07 |
| RF-MVP010 | O sistema deve notificar o gerente em tempo real quando uma anomalia for detectada, com detalhes da suspeita | US08 |
| RF-MVP011 | O sistema deve classificar automaticamente a causa provável de cada perda: vencimento, manuseio, furto ou erro de sistema | US09 |
| RF-MVP012 | O sistema deve gerar relatório mensal consolidado de perdas por causa, permitindo exportação em CSV e PDF | US10 |

### 1.3 Módulo de Dashboard

| Código | Descrição | User Story |
|--------|-----------|------------|
| RF-MVP013 | O sistema deve exibir um heatmap de risco por filial, categoria e fornecedor | US11 |
| RF-MVP014 | O sistema deve exibir um ranking dos produtos com maior risco de perda no período | US12 |
| RF-MVP015 | O dashboard deve atualizar os dados em tempo real via WebSocket | US01, US11, US12 |

### 1.4 Módulo de Integração com ERP

| Código | Descrição |
|--------|-----------|
| RF-MVP016 | O sistema deve integrar com o ERP TOTVS Consinco/RMS via API REST para obter dados de lote, validade e vendas |
| RF-MVP017 | O sistema deve aplicar ações (desconto no PDV, transferência entre filiais) no ERP após aprovação do usuário |
| RF-MVP018 | O sistema deve registrar trilha de auditoria para todas as ações executadas |

### 1.5 Módulo de Perdas (Base)

| Código | Descrição |
|--------|-----------|
| RF-MVP019 | O sistema deve permitir registro de perdas por vencimento, avaria ou extravio |
| RF-MVP020 | O sistema deve notificar automaticamente sobre produtos próximos ao vencimento |
| RF-MVP021 | O sistema deve ajustar o saldo do estoque automaticamente após registro de perda |

---

## 2. Requisitos Não Funcionais

### 2.1 Performance

| ID | Requisito | Métrica |
|----|-----------|---------|
| RNF-MVP01 | O dashboard deve carregar em até 3 segundos | Tempo de carregamento < 3s |
| RNF-MVP02 | Alertas de anomalia devem ser entregues em até 1 minuto após a detecção | Latência < 60s |
| RNF-MVP03 | O sistema deve suportar até 500 filiais simultâneas | 500 usuários concorrentes |
| RNF-MVP04 | Consultas no histórico de perdas devem retornar em até 5 segundos para 12 meses de dados | Query < 5s |
| RNF-MVP05 | O heatmap deve refletir dados com no máximo 5 minutos de atraso | Atraso máximo 5min |

### 2.2 Disponibilidade

| ID | Requisito | Métrica |
|----|-----------|---------|
| RNF-MVP06 | Disponibilidade do sistema em horário comercial (06h–22h) | 99,5% |
| RNF-MVP07 | Janela de manutenção programada: noturno (22h–05h) | Máx 2h/semana |
| RNF-MVP08 | Plano de recuperação de desastres (RPO) | Máx 15 minutos |

### 2.3 Segurança

| ID | Requisito | Descrição |
|----|-----------|-----------|
| RNF-MVP09 | Autenticação obrigatória | Login com SSO (Azure AD / Google Workspace) |
| RNF-MVP10 | Controle de acesso por papel | Gerente, Operador, Auditor, Administrador |
| RNF-MVP11 | Registro de auditoria | Todas as ações devem ser logadas com timestamp e usuário |
| RNF-MVP12 | Dados em trânsito criptografados | TLS 1.3 |
| RNF-MVP13 | Dados em repouso criptografados | AES-256 no banco de dados |

### 2.4 Usabilidade

| ID | Requisito | Descrição |
|----|-----------|-----------|
| RNF-MVP14 | Interface responsiva | Funcional em desktop e tablet (gerentes usam tablet na loja) |
| RNF-MVP15 | Idioma | Português (PT-BR) |
| RNF-MVP16 | Acessibilidade | Conformidade com WCAG 2.1 nível AA |

### 2.5 Compatibilidade

| ID | Requisito | Descrição |
|----|-----------|-----------|
| RNF-MVP17 | Navegadores suportados | Chrome, Firefox, Edge (2 versões mais recentes) |
| RNF-MVP18 | Integração com ERP | API REST para TOTVS Consinco/RMS |
| RNF-MVP19 | Exportação de relatórios | CSV, PDF |

### 2.6 Manutenibilidade

| ID | Requisito | Descrição |
|----|-----------|-----------|
| RNF-MVP20 | Código versionado | Git com GitFlow |
| RNF-MVP21 | Testes automatizados | Cobertura mínima de 70% |
| RNF-MVP22 | Documentação da API | OpenAPI 3.0 (Swagger) |

### 2.7 Stack Tecnológica

| ID | Requisito | Descrição |
|----|-----------|-----------|
| RNF-MVP23 | Frontend | React + TypeScript com Chart.js / Recharts |
| RNF-MVP24 | Backend | Node.js com Express |
| RNF-MVP25 | Serviço de ML | Python com Flask/FastAPI e scikit-learn |
| RNF-MVP26 | Banco de dados | PostgreSQL 16 |
| RNF-MVP27 | Cache | Redis |
| RNF-MVP28 | Notificações em tempo real | WebSocket (Socket.io) |
| RNF-MVP29 | Containerização | Docker + Docker Compose |
| RNF-MVP30 | Proxy reverso | NGINX |

---

## 3. Perfis de Usuário

| Perfil | Descrição | Casos de Uso |
|--------|-----------|--------------|
| Gerente de Loja | Monitora risco de vencimento, recebe sugestões de desconto e alertas de anomalia | UC01, UC02, UC03, UC08 |
| Operador de Estoque | Visualiza classificação de risco e recebe alertas de descarte programado | UC02, UC05 |
| Coordenador de Operações | Gerencia realocação de produtos entre filiais | UC04 |
| Analista de Prevenção de Perdas | Monitora padrões de perda e investiga anomalias | UC06 |
| Gerente Regional | Compara indicadores entre filiais e visualiza heatmap de risco | UC07, UC11 |
| Auditor | Classifica causas de perda e audita o processo | UC09 |
| Comprador | Visualiza ranking de produtos críticos para negociar com fornecedores | UC12 |
| Diretoria | Acompanha relatórios consolidados de perdas | UC10 |

---

## 4. Regras de Negócio

| Código | Descrição |
|--------|-----------|
| RN-MVP01 | Produto vencido deve ser bloqueado para venda |
| RN-MVP02 | Transferência entre depósitos deve ter origem, destino e responsável registrados |
| RN-MVP03 | Lote com risco alto (vermelho) deve gerar alerta imediato para retirada da gôndola |
| RN-MVP04 | Desconto sugerido não pode exceder o custo do produto |
| RN-MVP05 | Anomalia detectada com confiança superior a 90% deve gerar notificação automática ao gerente |
| RN-MVP06 | Relatório mensal de perdas por causa deve ser disponibilizado até o 5º dia útil do mês seguinte |
| RN-MVP07 | Aprovação do usuário é obrigatória antes de aplicar desconto ou transferência no ERP |

---

## 5. Critérios de Aceitação

| Critério | Descrição |
|----------|-----------|
| CA-MVP01 | Alertas devem ser emitidos em até 5 minutos após a detecção |
| CA-MVP02 | Dashboard deve atualizar em tempo real via WebSocket |
| CA-MVP03 | Taxa de falsos positivos em anomalias < 10% |
| CA-MVP04 | Precisão da classificação de causa > 85% |
| CA-MVP05 | Sistema deve registrar trilha de auditoria para todas as ações |
| CA-MVP06 | Heatmap deve refletir dados com no máximo 5 minutos de atraso |
| CA-MVP07 | Sugestão de desconto deve considerar a margem do produto |

---

## 6. Matriz de Rastreabilidade Casos de Uso × Requisitos

| Caso de Uso | Requisitos Funcionais | Requisitos Não Funcionais |
|-------------|----------------------|--------------------------|
| UC01 - Monitorar Risco de Vencimento | RF-MVP001, RF-MVP002, RF-MVP006 | RNF-MVP01, RNF-MVP05, RNF-MVP23 |
| UC02 - Visualizar Classificação por Risco | RF-MVP002 | RNF-MVP01, RNF-MVP14 |
| UC03 - Sugerir Desconto Dinâmico | RF-MVP003, RF-MVP016, RF-MVP017 | RNF-MVP05, RNF-MVP28 |
| UC04 - Sugerir Realocação entre Filiais | RF-MVP004, RF-MVP016, RF-MVP017 | RNF-MVP03, RNF-MVP18 |
| UC05 - Alertar Descarte Programado | RF-MVP005, RF-MVP019, RF-MVP021 | RNF-MVP01, RNF-MVP11 |
| UC06 - Monitorar Padrões de Perda | RF-MVP007, RF-MVP008 | RNF-MVP04, RNF-MVP25 |
| UC07 - Comparar Indicadores entre Filiais | RF-MVP009 | RNF-MVP01, RNF-MVP03 |
| UC08 - Notificar Anomalia em Tempo Real | RF-MVP010 | RNF-MVP02, RNF-MVP28 |
| UC09 - Classificar Causa de Perda | RF-MVP011 | RNF-MVP11, RNF-MVP25 |
| UC10 - Gerar Relatório Mensal por Causa | RF-MVP012 | RNF-MVP04, RNF-MVP19 |
| UC11 - Visualizar Heatmap de Risco | RF-MVP013 | RNF-MVP01, RNF-MVP05 |
| UC12 - Visualizar Ranking de Produtos Críticos | RF-MVP014 | RNF-MVP01 |

---

*Documento gerado em 17/07/2026 — Versão 1.0 (MVP)*
