# User Stories — MVP Controle de Validade e Prevenção de Perdas

**UC11:** Gerir Projetos de Tecnologia da Informação  
**Equipe:** William, Alaide, Ed

---

## 1. Controle de Validade

### US01 — Monitoramento de Risco de Vencimento
**Como** gerente de loja  
**Quero** visualizar o risco de vencimento de cada lote em tempo real  
**Para** priorizar ações antes que os produtos expirem

### US02 — Classificação por Nível de Risco
**Como** operador de estoque  
**Quero** ver lotes classificados como verde/amarelo/vermelho  
**Para** saber rapidamente quais precisam de intervenção

### US03 — Sugestão de Desconto Dinâmico
**Como** gerente de loja  
**Quero** receber sugestão automática de desconto para lotes em risco  
**Para** acelerar a venda antes do vencimento

### US04 — Sugestão de Realocação entre Filiais
**Como** coordenador de operações  
**Quero** ser alertado quando uma filial tem excesso de estoque e outra tem demanda  
**Para** transferir produtos e evitar perda

### US05 — Alerta de Descarte Programado
**Como** operador de estoque  
**Quero** receber notificação para retirar da gôndola lotes críticos sem chance de venda  
**Para** evitar comercialização de produtos vencidos

---

## 2. Detecção de Anomalias

### US06 — Monitoramento Contínuo de Perdas
**Como** analista de prevenção de perdas  
**Quero** que o sistema cruze automaticamente registros de perda com dados de filial, turno e operador  
**Para** identificar padrões anômalos

### US07 — Detecção de Desvio entre Filiais
**Como** gerente regional  
**Quero** comparar indicadores de perda entre filiais  
**Para** identificar lojas com desempenho fora do esperado

### US08 — Alerta de Anomalia em Tempo Real
**Como** gerente de loja  
**Quero** receber notificação push quando uma anomalia for detectada  
**Para** investigar e agir imediatamente

### US09 — Classificação Automática de Causa
**Como** auditor  
**Quero** que cada perda seja classificada automaticamente (vencimento, manuseio, furto, erro de sistema)  
**Para** direcionar ações corretivas por causa raiz

### US10 — Relatório Mensal por Causa
**Como** diretoria  
**Quero** um relatório mensal consolidado de perdas por causa  
**Para** tomar decisões estratégicas de prevenção

---

## 3. Dashboard e Visualização

### US11 — Heatmap de Risco
**Como** gerente regional  
**Quero** um heatmap por filial, categoria e fornecedor  
**Para** identificar rapidamente onde concentrar esforços

### US12 — Ranking de Produtos Críticos
**Como** comprador  
**Quero** ver o ranking dos produtos com maior risco de perda no mês  
**Para** negociar prazos de validade com fornecedores

---

## Critérios de Aceitação Gerais

| Critério | Descrição |
|----------|-----------|
| CA01 | Alertas devem ser emitidos em até 5 minutos após a detecção |
| CA02 | Dashboard deve atualizar em tempo real (WebSocket) |
| CA03 | Taxa de falsos positivos em anomalias < 10% |
| CA04 | Precisão da classificação de causa > 85% |
| CA05 | Sistema deve registrar trilha de auditoria para todas as ações |
