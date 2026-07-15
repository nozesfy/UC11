# Wireframes (Descritivos) — MVP Dashboard

**UC11:** Gerir Projetos de Tecnologia da Informação  
**Equipe:** William, Alaide, Ed

---

## Tela 1 — Dashboard Principal

```
┌─────────────────────────────────────────────────────────────┐
│  🔔 MVP Atacadão    [Loja: Samambaia/DF]    👤 Gerente João │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌──────────────┐   │
│  │ 🟢 1.240 │  │ 🟡 38   │  │ 🔴 5    │  │ Perda Mês    │   │
│  │ Lotes    │  │ Atenção │  │ Crítico │  │ R$ 12.340    │   │
│  │ Seguros  │  │         │  │         │  │ ▼ 8% vs mês  │   │
│  └─────────┘  └─────────┘  └─────────┘  └──────────────┘   │
├─────────────────────────────────────────────────────────────┤
│  Heatmap de Risco por Categoria                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Carnes    ████████████████████░░░░░ 85% 🟡           │   │
│  │ Laticínios ██████████████░░░░░░░░░ 60% 🟢            │   │
│  │ Hortifrúti ██████████████████████░ 95% 🔴           │   │
│  │ Bebidas   ██████████░░░░░░░░░░░░░ 40% 🟢            │   │
│  │ Limpeza   ██████░░░░░░░░░░░░░░░░░ 25% 🟢            │   │
│  └──────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│  Alertas Recentes                    │ Ranking Perdas       │
│  🔴 Carne bovina - lote #4521       │ 1. Carne bovina      │
│     vence em 3 dias. Ação: descarte │ 2. Leite integral    │
│  🟡 Iogurte - lote #3881            │ 3. Tomate            │
│     vence em 7 dias. Sugerir 20% off│ 4. Queijo muçarela   │
│  🔴 Frango - lote #4528             │ 5. Iogurte           │
│     vence em 2 dias. Ação: descarte │                      │
└─────────────────────────────────────────────────────────────┘
```

### Elementos
- **Navbar:** seleção de loja, perfil do usuário, notificações
- **Cards de resumo:** totais de lotes por status (verde/amarelo/vermelho), perda acumulada
- **Heatmap horizontal:** categorias com barra de risco e indicador de cor
- **Painel de alertas:** lista dos alertas mais recentes com ação sugerida
- **Ranking de perdas:** top 5 produtos com maior perda no mês

---

## Tela 2 — Detalhe do Lote

```
┌─────────────────────────────────────────────────────────────┐
│  ← Voltar                            Lote #4521 - Carne Bovina │
├─────────────────────────────────────────────────────────────┤
│  ┌─────── Informações do Lote ──────────────────────────┐   │
│  │ Produto:      Carne Bovina (dianteiro)               │   │
│  │ Fornecedor:   JBS S/A                                │   │
│  │ Data Entrada: 01/07/2026                             │   │
│  │ Validade:     18/07/2026                             │   │
│  │ Quantidade:   200 kg                                 │   │
│  │ Venda/dia:    15 kg                                  │   │
│  │ Risco:        🔴 Crítico (vence em 3 dias)          │   │
│  │ Projeção:     Vender tudo em 13 dias → vence antes   │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────── Ações Sugeridas ─────────────────────────────┐   │
│  │ [✅ Aplicar] Desconto: 30% — projeta vender 25 kg/dia│   │
│  │ [✅ Aplicar] Realocar 50 kg para Loja Taguatinga    │   │
│  │ [✅ Executar] Descartar lote (sem chance de venda)   │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Elementos
- Informações detalhadas do lote
- Indicador de risco com projeção de venda vs. vencimento
- Ações sugeridas com botão para aplicar/executar
- Timeline: linha do tempo do lote (entrada → alertas → ações → descarte/venda)

---

## Tela 3 — Anomalias

```
┌─────────────────────────────────────────────────────────────┐
│  🔍 Anomalias        Filtros: [Filial ✓] [Período ✓] [Tipo ✓] │
├─────────────────────────────────────────────────────────────┤
│  ┌────────────────────────────────────────────────────────┐ │
│  │ 🚨 Loja Samambaia | Turno Noturno | Perda 3x acima    │ │
│  │ Causa provável: Furto (extravio sem registro de venda) │ │
│  │ Produtos: 5 unidades de file mignon (R$ 340,00)        │ │
│  │ [Investigar] [Descartar Alerta] [Ver Histórico]       │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │ ⚠️ Loja Taguatinga | Corredor 3 | Avaria 2x acima    │ │
│  │ Causa provável: Manuseio (quebras frequentes)         │ │
│  │ Produtos: 12 unidades de azeite (R$ 180,00)            │ │
│  │ [Investigar] [Descartar Alerta] [Ver Histórico]       │ │
│  └────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│  Distribuição por Causa (Mês)                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ 🟥 Vencimento 45%  ████████████████████░░░░░░░░░░░  │   │
│  │ 🟧 Manuseio    25%  ██████████░░░░░░░░░░░░░░░░░░░░  │   │
│  │ 🟨 Furto       18%  ███████░░░░░░░░░░░░░░░░░░░░░░░  │   │
│  │ 🟩 Erro Sistema 12%  █████░░░░░░░░░░░░░░░░░░░░░░░░  │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Elementos
- Lista de anomalias detectadas com causa provável
- Botões de ação: Investigar, Descartar, Ver Histórico
- Gráfico de distribuição por causa
- Filtros por filial, período e tipo de anomalia

---

## Tela 4 — Relatório Mensal

```
┌─────────────────────────────────────────────────────────────┐
│  📊 Relatório Mensal     Julho/2026    [Exportar: PDF] [CSV] │
├─────────────────────────────────────────────────────────────┤
│  Totais:                                                   │
│  Perda total: R$ 524.300  |  Meta: R$ 445.655  |  ❌ -15%  │
│  Produtos vencidos: 3     |  Meta: Zero         |  ❌       │
│  Tempo detecção médio: 9d |  Meta: 9d           |  ✅       │
├─────────────────────────────────────────────────────────────┤
│  Perda por Filial                                          │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Samambaia     ████████████████████████░  R$ 142.340 │   │
│  │ Taguatinga    ██████████████████░░░░░░░  R$ 112.800 │   │
│  │ Ceilândia     ██████████████░░░░░░░░░░░  R$ 98.200  │   │
│  │ Asa Sul       ██████████░░░░░░░░░░░░░░░  R$ 72.400  │   │
│  │ Asa Norte     ████████░░░░░░░░░░░░░░░░░  R$ 58.560  │   │
│  │ Gama          ██████░░░░░░░░░░░░░░░░░░░  R$ 40.000  │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                             │
│  Anomalias do Mês: 4 detectadas | 3 confirmadas | 1 FP     │
│  Ações tomadas: 12 descontos | 8 realocações | 5 descartes │
└─────────────────────────────────────────────────────────────┘
```

### Elementos
- Indicadores de meta (atingiu/não atingiu)
- Gráfico de perda por filial
- Resumo de anomalias e ações tomadas
- Botões para exportar em PDF ou CSV
