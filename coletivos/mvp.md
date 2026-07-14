# MVP — Central de Inteligência de Estoque (Atacadão)

**UC11:** Gerir Projetos de Tecnologia da Informação  
**Equipe:** William, Alaide, Ed

---

## Visão Geral

MVP de um sistema complementar de inteligência de estoque com IA para a rede Atacadão, acoplado ao ERP existente (TOTVS Consinco/RMS). Foco em reduzir ruptura, perdas por validade e fraudes operacionais.

> **Nota:** O Atacadão já utiliza inteligência de dados para prever demanda e ajustar estoques (fonte: declaração do diretor de TI em 2025). Este MVP propõe funcionalidades específicas não contempladas ou com baixa maturidade na operação atual.

---

## 1. Previsão de Demanda

### Sistema Atual (Real)
- Atacadão já utiliza algoritmos e IA para prever demanda, ajustar estoques e otimizar rotas (declarado em 2025)
- ERP TOTVS Consinco/RMS integrado ao PDV com sugestão de compra por giro
- Comprador ainda aprova manualmente as sugestões geradas pelo sistema
- Ruptura ainda ocorre: em novembro de 2024, Carrefour admitiu desabastecimento de cortes de carne bovina nas lojas Atacadão (fonte: Estadão)
- Dados setoriais (Neogrid 2026): ruptura média no varejo alimentar é de 12,4%, com ovos em 28,4% e leite UHT em 20,7%

### Problemas Reais Identificados
- Previsão atual não considera sazonalidade regional com granularidade fina (ex: feriado municipal, eventos locais)
- Ruptura em perecíveis de alto giro ainda é crítica (carnes, leite, ovos)
- Estoques de segurança são calculados de forma genérica, sem ajuste dinâmico por filial

### Sistema com IA (MVP)
- Modelo preditivo adicional que cruza dados internos de venda com variáveis externas:
  - Clima (temperatura, estação chuvosa) — impacto direto em perecíveis e bebidas
  - Feriados regionais e estaduais
  - Datas sazonais do comércio (Black Friday, Dia das Mães, Natal)
  - Histórico de promoções e elasticidade de preço
- Gera previsão por filial com 3 cenários: otimista, esperado, pessimista
- Sugestão de ajuste dinâmico do estoque mínimo com base na previsão

---

## 2. Controle de Validade e Prevenção de Perdas

### Sistema Atual (Real)
- MPDFT firmou TAC nº 851/2023 com o Atacadão Dia a Dia após fiscalização encontrar **113 produtos vencidos** em uma única loja (fonte: MPDFT)
- Em março de 2026, MP-BA investiga denúncias de venda de carnes impróprias em Salvador (fonte: BNews)
- Perdas no varejo brasileiro totalizaram **R$ 42,1 bilhões em 2025**, alta de 15,3% (fonte: ABRAPPE)
- Atacadão possui controle de lote e validade no ERP, mas falhas na execução geram riscos sanitários e multas

### Sistema com IA (MVP)
- Algoritmo de **priorização de vencimento** que sugere descontos dinâmicos automáticos para produtos próximos ao vencimento
- Notificação preditiva: com base no histórico de venda, projeta se o produto vai vencer antes de ser vendido
- Sugestão de realocação entre filiais: *"Loja A vende 50 unidades/dia, Loja B vende 5 — transferir 30 unidades para Loja A antes do vencimento"*
- Dashboard para o gerente com heatmap de risco de perda por categoria/filial

---

## 3. Detecção de Anomalias em Perdas e Fraudes

### Sistema Atual (Real)
- Perdas no varejo brasileiro: 1,65% do faturamento total (R$ 42,1 bilhões em 2025)
- Atacarejo é o formato mais eficiente, mas ainda sofre com:
  - Furto interno e externo
  - Erro operacional (quebra, avaria no manuseio)
  - Fraude fiscal e logística (desvio de carga)
- Controles atuais são reativos: perda só é detectada no inventário físico

### Sistema com IA (MVP)
- ML monitora padrões de perda por:
  - Loja, turno, operador, categoria, dia da semana
  - Análise de desvio: *"Loja X tem 3x mais perda por avaria que a média — investigar"*
  - Correlação entre queda de venda e aumento de perda (possível fraude)
- Alerta em tempo real para o gerente quando anomalia é detectada
- Relatório mensal classificado por causa provável: vencimento, manuseio, furto, erro de sistema

---

## 4. Recomendação no PDV

### Sistema Atual (Real)
- PDV Atacadão possui autoatendimento e self-checkout
- Atacadão já usa IA para personalizar ofertas com base em hábitos de consumo (declarado em 2025)
- Não há informação pública sobre recomendação cross-sell no momento da venda no PDV físico
- App Meu Atacadão já envia ofertas personalizadas

### Sistema com IA (MVP)
- Algoritmo de **market basket analysis** treinado com histórico de vendas por filial
- Sugestão de item complementar na tela do PDV no momento da compra:
  - Ex: leva carne → sugere carvão + refrigerante
  - Ex: leva feijão → sugere arroz
  - Ex: leva fralda → sugere lenço umedecido
- Operador pergunta: *"O(a) senhor(a) também vai levar [produto]?"*
- Meta: aumentar ticket médio em 10% nas lojas participantes

---

## Fluxo do MVP

### Cenário Atual (Real)
```
ERP TOTVS → Sugestão de compra por giro → Comprador aprova →
  → Pedido ao fornecedor → Entrada no estoque → PDV registra venda →
    → Baixa no estoque → Ruptura/Perda detectada só no inventário
```

### Cenário com IA
```
ERP + ML Previsão → Sugestão de compra inteligente →
  → Pedido ao fornecedor → Entrada no estoque → PDV registra venda →
    → Baixa no estoque → ML monitora validade e sugere desconto/realocação
                      → ML detecta anomalias em perdas em tempo real
                      → PDV sugere item complementar → + ticket médio
```

---

## Tecnologias

| Camada | Tecnologia |
|--------|-----------|
| Frontend | React + TypeScript |
| Backend | Node.js (API) + Python (ML) |
| Banco de Dados | PostgreSQL |
| ML | scikit-learn, pandas, numpy |
| Vizualização | Chart.js / Recharts (dashboard) |
| Mobile | React Native (para inventário futuro) |

---

## Critérios de Sucesso

| Indicador | Meta | Referência Setorial |
|-----------|------|---------------------|
| Redução de ruptura nas categorias monitoradas | 20% | Média do varejo: 12,4% (Neogrid 2026) |
| Redução de perdas | 15% | Perdas no varejo: R$ 42,1 bi / 1,65% faturamento (ABRAPPE 2025) |
| Aumento do ticket médio (recomendação) | 10% | — |
| Precisão da previsão de demanda | > 80% | — |
| Produtos vencidos em loja | Zero | TAC MPDFT vigente |

---

## Fontes

- Estadão — Carrefour admite desabastecimento de carnes em lojas do Atacadão (nov/2024)
- MPDFT — TAC nº 851/2023 com Atacadão Dia a Dia (atualizado jun/2026)
- BNews — Atacadão investigado por carnes impróprias em Salvador (mar/2026)
- ABRAPPE — 9ª Pesquisa de Prevenção de Perdas no Varejo Brasileiro (2025)
- Neogrid — Índice de Ruptura (abr/mai 2026)
- Diário do Comércio — Atacadão acelera transformação digital (2025)
- SA+ — Carrefour inicia unificação do sistema comercial (2026)
- Blog Atacadão — Cuidar do Estoque é Fundamental (2021)
