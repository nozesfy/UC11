# Requisitos por Caso de Uso

**Projeto:** Modernização da Gestão de Estoque — Rede de Supermercados Atacadão  
**UC11:** Gerir Projetos de Tecnologia da Informação  
**Equipe:** William, Alaide, Ed

---

## 1. Matriz de Rastreabilidade Caso de Uso × Requisitos

| Caso de Uso | Requisitos Funcionais | Requisitos Não Funcionais | Regras de Negócio |
|-------------|----------------------|--------------------------|-------------------|
| UC01 - Monitorar Risco de Vencimento | RF008, RF012, RF018, RF029 | RNF002, MVP RNF01 | RN004 |
| UC02 - Visualizar Classificação por Risco | RF012, RF018, RF022 | MVP RNF01, MVP RNF13 | — |
| UC03 - Sugerir Desconto Dinâmico | RF013, RF017, RF018, RF029 | RNF002 | RN004 |
| UC04 - Sugerir Realocação entre Filiais | RF008, RF011, RF025, RF026, RF028 | RNF003 | RN006 |
| UC05 - Alertar Descarte Programado | RF017, RF018, RF020 | RNF009 | RN005 |
| UC06 - Monitorar Padrões de Perda | RF017, RF019, RF020 | RNF009, MVP RNF04 | — |
| UC07 - Comparar Indicadores entre Filiais | RF011, RF031, RF034 | MVP RNF01 | — |
| UC08 - Notificar Anomalia em Tempo Real | RF009, RF010 | RNF002, RNF009, MVP RNF02 | — |
| UC09 - Classificar Causa de Perda | RF017, RF020 | MVP RNF10 | — |
| UC10 - Gerar Relatório Mensal por Causa | RF019, RF024, RF034 | MVP RNF18 | — |
| UC11 - Visualizar Heatmap de Risco | RF012, RF034 | MVP RNF01, MVP RNF13 | — |
| UC12 - Visualizar Ranking de Produtos Críticos | RF029, RF030, RF033, RF034 | MVP RNF01 | — |

---

## 2. Detalhamento por Caso de Uso

### Módulo Controle de Validade

#### UC01 — Monitorar Risco de Vencimento

**Ator:** Gerente de Loja  
**Descrição:** Visualizar risco de vencimento de cada lote em tempo real

| Tipo | Código | Relação |
|------|--------|---------|
| RF | RF008 | Manter saldo atualizado em tempo real para calcular risco por lote |
| RF | RF012 | Permitir consulta de saldo por produto e lote |
| RF | RF018 | Notificar automaticamente produtos próximos ao vencimento |
| RF | RF029 | Calcular giro de estoque para estimar tempo até venda |
| RNF | RNF002 | Atualização em até 2 segundos para risco refletir vendas recentes |
| RNF | MVP RNF01 | Dashboard deve carregar em até 3 segundos |
| RN | RN004 | Produto abaixo do mínimo aciona sugestão de compra |

#### UC02 — Visualizar Classificação por Risco

**Ator:** Operador de Estoque  
**Descrição:** Ver lotes classificados como verde/amarelo/vermelho

| Tipo | Código | Relação |
|------|--------|---------|
| RF | RF012 | Consultar saldo por produto, lote e filial |
| RF | RF018 | Receber notificação de produtos próximos ao vencimento |
| RF | RF022 | Realizar conferência por código de barras |
| RNF | MVP RNF01 | Carregamento do dashboard em até 3 segundos |
| RNF | MVP RNF13 | Interface responsiva para uso em tablet e coletor |

#### UC03 — Sugerir Desconto Dinâmico

**Ator:** Gerente de Loja  
**Descrição:** Receber sugestão automática de desconto para lotes em risco

| Tipo | Código | Relação |
|------|--------|---------|
| RF | RF013 | Sugerir produtos com base em histórico de vendas |
| RF | RF017 | Registrar perda caso o desconto não evite o vencimento |
| RF | RF018 | Notificar produtos em risco que podem receber desconto |
| RF | RF029 | Calcular giro para definir percentual de desconto ideal |
| RNF | RNF002 | Sugestão deve considerar baixas em até 2 segundos |
| RN | RN004 | Estoque mínimo como insumo para priorização de descontos |

#### UC04 — Sugerir Realocação entre Filiais

**Ator:** Coordenador de Operações  
**Descrição:** Ser alertado quando uma filial tem excesso e outra tem demanda

| Tipo | Código | Relação |
|------|--------|---------|
| RF | RF008 | Saldo em tempo real para identificar excesso e falta |
| RF | RF011 | Controle de estoque por filial/unidade |
| RF | RF025 | Registrar transferências de mercadorias entre filiais |
| RF | RF026 | Controlar origem, destino e responsável pela movimentação |
| RF | RF028 | Atualizar saldo de origem e destino automaticamente |
| RNF | RNF003 | Suportar múltiplas filiais simultaneamente |
| RN | RN006 | Transferência com origem, destino e responsável registrados |

#### UC05 — Alertar Descarte Programado

**Ator:** Operador de Estoque  
**Descrição:** Receber notificação para retirar da gôndola lotes críticos

| Tipo | Código | Relação |
|------|--------|---------|
| RF | RF017 | Registrar perda por vencimento |
| RF | RF018 | Notificar automaticamente produtos próximos ao vencimento |
| RF | RF020 | Ajustar saldo do estoque automaticamente após descarte |
| RNF | RNF009 | Registrar log da operação de descarte |
| RN | RN005 | Produto vencido deve ser bloqueado para venda |

---

### Módulo Detecção de Anomalias

#### UC06 — Monitorar Padrões de Perda

**Ator:** Analista de Prevenção de Perdas  
**Descrição:** Cruzar registros de perda com dados de filial, turno e operador

| Tipo | Código | Relação |
|------|--------|---------|
| RF | RF017 | Registrar perdas por vencimento, avaria ou extravio |
| RF | RF019 | Gerar relatório mensal de perdas por categoria |
| RF | RF020 | Ajustar saldo do estoque após perda |
| RNF | RNF009 | Log de todas as operações críticas |
| RNF | MVP RNF04 | Consultas no histórico de perdas em até 5 segundos |

#### UC07 — Comparar Indicadores entre Filiais

**Ator:** Gerente Regional  
**Descrição:** Comparar indicadores de perda entre filiais

| Tipo | Código | Relação |
|------|--------|---------|
| RF | RF011 | Controle de estoque por filial |
| RF | RF031 | Calcular taxa de ruptura por filial |
| RF | RF034 | Visualizar indicadores consolidados por unidade |
| RNF | MVP RNF01 | Dashboard comparativo carregar em até 3 segundos |

#### UC08 — Notificar Anomalia em Tempo Real

**Ator:** Gerente de Loja  
**Descrição:** Receber notificação quando anomalia é detectada

| Tipo | Código | Relação |
|------|--------|---------|
| RF | RF009 | Disparar alerta de estoque mínimo |
| RF | RF010 | Disparar alerta de excesso de estoque |
| RNF | RNF002 | Atualização em tempo real (até 2 segundos) |
| RNF | RNF009 | Log da detecção e da notificação |
| RNF | MVP RNF02 | Alerta entregue em até 1 minuto |

#### UC09 — Classificar Causa de Perda

**Ator:** Auditor  
**Descrição:** Classificar automaticamente cada perda por causa raiz

| Tipo | Código | Relação |
|------|--------|---------|
| RF | RF017 | Registrar perda com tipo (vencimento, avaria, extravio) |
| RF | RF020 | Ajustar saldo automaticamente |
| RNF | MVP RNF10 | Trilha de auditoria para todas as classificações |

#### UC10 — Gerar Relatório Mensal por Causa

**Ator:** Diretoria  
**Descrição:** Relatório consolidado de perdas por causa

| Tipo | Código | Relação |
|------|--------|---------|
| RF | RF019 | Relatório mensal de perdas por categoria |
| RF | RF024 | Relatório de divergência entre saldo contábil e físico |
| RF | RF034 | Indicadores consolidados por unidade e rede |
| RNF | MVP RNF18 | Exportação em CSV e PDF |

---

### Módulo Dashboard

#### UC11 — Visualizar Heatmap de Risco

**Ator:** Gerente Regional  
**Descrição:** Visualizar heatmap por filial, categoria e fornecedor

| Tipo | Código | Relação |
|------|--------|---------|
| RF | RF012 | Consulta de saldo por produto, categoria e filial |
| RF | RF034 | Indicadores consolidados por unidade |
| RNF | MVP RNF01 | Dashboard carregar em até 3 segundos |
| RNF | MVP RNF13 | Interface responsiva |

#### UC12 — Visualizar Ranking de Produtos Críticos

**Ator:** Comprador  
**Descrição:** Ranking dos produtos com maior risco de perda

| Tipo | Código | Relação |
|------|--------|---------|
| RF | RF029 | Giro de estoque por produto |
| RF | RF030 | Produtos mais vendidos por cliente |
| RF | RF033 | Valor total em estoque |
| RF | RF034 | Indicadores consolidados |
| RNF | MVP RNF01 | Dashboard carregar em até 3 segundos |

---

## 3. Matriz Inversa: Requisito → Casos de Uso

### Requisitos Funcionais

| Requisito | Casos de Uso |
|-----------|--------------|
| RF008 - Saldo atualizado em tempo real | UC01, UC04 |
| RF009 - Alerta de estoque mínimo | UC08 |
| RF010 - Alerta de excesso de estoque | UC08 |
| RF011 - Controle por filial | UC04, UC07 |
| RF012 - Consulta de saldo | UC01, UC02, UC11 |
| RF013 - Sugerir compra por histórico | UC03 |
| RF017 - Registrar perdas | UC03, UC05, UC06, UC09 |
| RF018 - Notificar vencimento | UC01, UC02, UC03, UC05 |
| RF019 - Relatório mensal de perdas | UC06, UC10 |
| RF020 - Ajustar saldo após perda | UC05, UC06, UC09 |
| RF022 - Conferência por código de barras | UC02 |
| RF024 - Relatório de divergência | UC10 |
| RF025 - Registrar transferências | UC04 |
| RF026 - Controle origem/destino | UC04 |
| RF028 - Atualizar saldo origem/destino | UC04 |
| RF029 - Giro de estoque | UC01, UC03, UC12 |
| RF030 - Produtos mais vendidos | UC12 |
| RF031 - Taxa de ruptura | UC07 |
| RF033 - Valor total em estoque | UC12 |
| RF034 - Indicadores consolidados | UC07, UC10, UC11, UC12 |

### Requisitos Não Funcionais

| Requisito | Casos de Uso |
|-----------|--------------|
| RNF002 - Baixa em até 2 segundos | UC01, UC03, UC08 |
| RNF003 - Escalabilidade | UC04 |
| RNF009 - Log de operações | UC05, UC06, UC08 |
| MVP RNF01 - Dashboard em 3s | UC01, UC02, UC07, UC11, UC12 |
| MVP RNF02 - Alerta em 1 minuto | UC08 |
| MVP RNF04 - Consulta em 5s | UC06 |
| MVP RNF10 - Auditoria | UC09 |
| MVP RNF13 - Interface responsiva | UC02, UC11 |
| MVP RNF18 - Exportação CSV/PDF | UC10 |

---

## 4. Casos de Uso sem Requisito Direto

Os casos de uso abaixo dependem de funcionalidades de inteligência artificial e machine learning que não estão mapeadas nos requisitos RF001-RF034:

| Caso de Uso | Funcionalidade ML Necessária |
|-------------|------------------------------|
| UC03 - Sugerir Desconto Dinâmico | Algoritmo de precificação dinâmica com base em risco de vencimento |
| UC06 - Monitorar Padrões de Perda | Modelo de detecção de anomalias (Isolation Forest) |
| UC08 - Notificar Anomalia em Tempo Real | Pipeline de inferência em tempo real |
| UC09 - Classificar Causa de Perda | Modelo de classificação multiclasse |
| UC11 - Heatmap de Risco | Agregação de score de risco por dimensão |

> **Nota:** Essas funcionalidades ML serão especificadas como requisitos complementares na arquitetura do MVP (consulte `mvp/arquitetura.md`).

---

*Documento gerado em 17/07/2026 — Versão 1.0*
