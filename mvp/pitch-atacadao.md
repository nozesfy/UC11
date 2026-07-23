# Pitch Executivo — Controle de Validade com IA

**UC11:** Gerir Projetos de Tecnologia da Informação  
**Equipe:** William (Frontend/BD), Alaide (UI/UX), Ed (Backend/DevOps/Docs)  
**Duração:** 8 minutos (+2 min perguntas)  
**Cliente:** Rede Atacadão (Camaçari/BA)

---

## Slide 1 — Abertura (1 min)

**Fala:** "Somos a equipe do Projeto de Controle de Validade com IA. Nosso cliente é o Atacadão, uma das maiores redes atacadistas do Brasil, com presença nacional e operação em Camaçari. Nosso desafio foi transformar um problema crítico de perdas em uma oportunidade de inovação com IA."

**Equipe:**
- **William** — Frontend e Banco de Dados
- **Alaide** — UI/UX
- **Ed** — Back-end, DevOps, Documentação

---

## Slide 2 — O Problema (1 min)

**Fala:** "O Atacadão enfrenta um problema grave e urgente: perdas por vencimento, avarias e fraudes."

**Os números:**
| Indicador | Dado |
|-----------|------|
| Perdas no varejo brasileiro | **R$ 42,1 bilhões/ano** (ABRAPPE 2025) |
| Alta em relação ao ano anterior | **+15,3%** |
| Causa principal | **35% por vencimento/validade** |
| Produtos vencidos em 1 loja | **113 unidades** (TAC MPDFT) |

**Evidências:**
- TAC nº 851/2023 com MPDFT por 113 produtos vencidos em loja de Samambaia/DF
- MP-BA investiga denúncias de carnes impróprias em Salvador (março/2026)
- Perdas detectadas apenas no inventário mensal — 30 dias para descobrir

---

## Slide 3 — A Solução (2 min)

**Fala:** "Nossa solução é um sistema de Controle de Validade e Prevenção de Perdas com Inteligência Artificial, que se integra ao ERP TOTVS Consinco/RMS já utilizado pelo Atacadão."

**Funcionalidades principais:**

### Controle de Validade Preditivo
- **Monitoramento em tempo real:** IA cruza data de vencimento com velocidade de venda
- **Classificação 3 níveis:** Verde (OK) → Amarelo (atenção) → Vermelho (crítico)
- **Ações automáticas:**
  - Desconto dinâmico (ex: 20% off para acelerar saída)
  - Realocação entre filiais (ex: transferir lote para loja com maior demanda)
  - Descarte programado com alerta para retirar da gôndola

### Detecção de Anomalias (ML)
- **Isolation Forest** para identificar padrões suspeitos
- **Classificação automática** de causa: vencimento, manuseio, furto, erro de sistema
- **Alertas em tempo real** para gerente com sugestão de ação
- **Relatório mensal** consolidado por causa para diretoria

**Arquitetura:**
```
React (Frontend) → Node.js (API) → PostgreSQL + Python ML → TOTVS ERP
```

---

## Slide 4 — Demonstração do Protótipo (2 min)

**Fala:** "Vamos demonstrar o protótipo funcionando. O sistema está disponível em plataforma web, acessível de qualquer dispositivo."

### Telas do Protótipo

**1. Login** (`/login`)
- Autenticação com CPF + senha
- Máscara e validação de CPF
- Link para cadastro e recuperação de senha

**2. Dashboard** (`/dashboard`)
- **KPIs:** Total de lotes, em risco, críticos, perda estimada
- **Heatmap de risco** por filial/categoria
- **Predições de IA:** ruptura, excesso, perda total
- **Alertas recentes** com prioridade

**3. Detalhe do Lote** (`/lote/:id`)
- Informações completas do lote
- Nível de risco (verde/amarelo/vermelho)
- Ações sugeridas pela IA (desconto, realocação, descarte)
- Recomendações com confiança do modelo

**4. Anomalias** (`/anomalias`)
- Detecção de padrões suspeitos
- Classificação por causa provável
- Sugestões de investigação

**5. Relatório Mensal** (`/relatorios`)
- KPIs fiscais
- Análise preditiva
- Comparativo mês a mês

> **Nota para apresentação:** Abrir o protótipo ao vivo em `https://senacsystemsdev.github.io/UC11/` ou localhost, navegar pelas telas principais, demonstrar a classificação de risco e os alertas de anomalia.

---

## Slide 5 — Benefícios Esperados (1 min)

**Fala:** "Os números falam por si. Nossa meta é clara e mensurável."

| Indicador | Antes | Depois (Meta) | Redução |
|-----------|-------|---------------|---------|
| Produtos vencidos por loja | 113 (MPDFT) | **Zero** | **100%** |
| Perda sobre faturamento | 1,65% | **1,40%** | **15%** |
| Tempo para detectar perda | 30 dias | **~9 dias** | **70%** |
| Precisão classificação ML | — | **> 85%** | — |
| Falsos positivos | — | **< 10%** | — |

**Impactos:**
- **Financeiro:** Redução direta de R$ 42,1 bi no setor
- **Legal:** Cumprimento do TAC MPDFT, prevenção de novas sanções
- **Reputacional:** Recuperação da confiança do consumidor
- **Cliente:** Garantia de produtos dentro da validade
- **Operacional:** Processos automatizados com visibilidade em tempo real

---

## Slide 6 — Encerramento (1 min)

**Fala:** "Resumindo: entregamos uma solução que transforma um passivo legal e financeiro em vantagem competitiva."

**Diferenciais:**
1. **IA preditiva** treinada para varejo atacadista
2. **Integração nativa** com TOTVS Consinco/RMS
3. **Alertas em tempo real** com baixa taxa de falso positivo
4. **ROI em 18 meses** com redução de perdas

**Próximos passos:**
1. Aprovação do orçamento
2. Setup de infraestrutura cloud
3. Início do piloto em 1 loja

**Contato:** Equipe UC11 — Projeto Acadêmico SENAC

> **"Nos ajude a zerar as perdas por validade no Atacadão."**

---

## Anexo — Perguntas e Respostas (2 min)

### Q: Qual problema vocês resolveram?
**R:** Perdas por vencimento de validade no Atacadão, que geram prejuízos financeiros (R$ 42,1 bi/ano no setor), riscos sanitários (TAC MPDFT vigente, investigação MP-BA) e danos reputacionais.

### Q: Como validaram essa necessidade?
**R:** Com dados reais: TAC nº 851/2023 do MPDFT (113 produtos vencidos), investigação do MP-BA em Salvador (março/2026), pesquisa ABRAPPE 2025 (R$ 42,1 bi em perdas), e reportagens do Estadão e BNews.

### Q: Por que escolheram essa solução?
**R:** Porque o Atacadão já possui ERP (TOTVS Consinco/RMS) com controle de lote, mas falha na execução. Nossa solução adiciona camada preditiva de IA, sem substituir o legado. Ataque direto aos 55% das perdas (validade + avaria/manuseio).

### Q: O que diferencia seu protótipo das soluções existentes?
**R:** Integração nativa com TOTVS, IA treinada para varejo atacadista (Isolation Forest), classificação 3 níveis com ações automáticas (desconto, realocação, descarte), e baixa taxa de falsos positivos (< 10%).

### Q: Como a empresa teria retorno sobre esse investimento?
**R:** Economia estimada de ~R$ 120.000/loja/ano com redução de 15% nas perdas. Custo total do projeto ~R$ 180.000. ROI em 18 meses, sem contar redução de multas e indenizações.

### Q: Quais seriam os riscos da implantação?
**R:** Qualidade dos dados do ERP (mitigado com limpeza na Sprint 1), resistência dos gerentes (treinamento presencial), integração com legado (PoC na Sprint 1), falsos positivos do ML (ajuste contínuo).

### Q: Quais melhorias futuras poderiam ser incorporadas?
**R:** Dashboard avançado com drill-down, painel de auditoria para MP, recomendação no PDV, app mobile para operadores, previsão de demanda integrada.

### Q: Como a solução impacta a experiência do cliente e a operação da loja?
**R:** Cliente: garante que todos os produtos na gôndola estão dentro da validade, eliminando risco à saúde. Operação: substitui processo manual e reativo por automação preditiva com alertas em tempo real, reduzindo retrabalho e multas.

---

## Formato de Apresentação

| Minuto | Seção | Quem |
|--------|-------|------|
| 0:00-1:00 | Apresentação da equipe e do cliente | Ed |
| 1:00-2:00 | Problema identificado | Alaide |
| 2:00-4:00 | Solução proposta | William |
| 4:00-6:00 | Demonstração do protótipo | William |
| 6:00-7:00 | Benefícios esperados | Alaide |
| 7:00-8:00 | Encerramento | Ed |
| 8:00-10:00 | Perguntas | Equipe |
