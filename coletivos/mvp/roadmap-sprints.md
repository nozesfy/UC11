# Roadmap / Sprints — MVP

**UC11:** Gerir Projetos de Tecnologia da Informação  
**Equipe:** William, Alaide, Ed

---

```mermaid
gantt
    title Roadmap MVP — Controle de Validade com IA
    dateFormat  YYYY-MM-DD
    axisFormat  %b/%Y

    section Sprint 1 — Fundação
    Configuração do projeto (React + Node + PostgreSQL)    :a1, 2026-08-01, 14d
    Integração com ERP TOTVS                               :a2, after a1, 14d
    Autenticação e controle de acesso                      :a3, after a2, 7d
    Dashboard básico com heatmap                            :a4, after a3, 14d

    section Sprint 2 — Núcleo de Validade
    ML: cálculo de risco por lote                           :b1, after a4, 14d
    Classificação verde/amarelo/vermelho                    :b2, after b1, 7d
    Sugestão de desconto dinâmico                           :b3, after b2, 7d
    Sugestão de realocação entre filiais                    :b4, after b3, 7d

    section Sprint 3 — Anomalias
    ML: Isolation Forest para detecção de anomalias        :c1, after b4, 14d
    Classificação automática de causa da perda              :c2, after c1, 10d
    Alertas em tempo real (WebSocket/Push)                  :c3, after c2, 7d
    Relatório mensal por causa                              :c4, after c3, 7d

    section Sprint 4 — Refino e Testes
    Testes de integração e aceitação                       :d1, after c4, 10d
    Ajustes no modelo ML (precisão < 85%)                  :d2, after d1, 10d
    Documentação da API (Swagger)                           :d3, after d2, 5d
    Validação com usuários reais (piloto 1 loja)            :d4, after d3, 10d
```

## Detalhamento das Sprints

### Sprint 1 — Fundação (30 dias)
- Setup do ambiente (React + TypeScript, Node.js API, PostgreSQL)
- Conector para ler dados do TOTVS (lotes, validades, vendas)
- Tela de login com SSO
- Dashboard com heatmap (mockado)

### Sprint 2 — Núcleo de Validade (35 dias)
- Modelo ML que cruza data de vencimento com velocidade média de venda
- Indicadores verde/amarelo/vermelho no dashboard
- Módulo de sugestão: desconto automático
- Módulo de sugestão: realocação entre filiais

### Sprint 3 — Anomalias (38 dias)
- Modelo Isolation Forest para detecção de anomalias
- Classificador automático de causa raiz
- Sistema de notificações push
- Relatório mensal consolidado

### Sprint 4 — Refino e Testes (35 dias)
- Testes E2E, integração e aceitação
- Otimização do modelo ML
- Documentação da API
- Piloto em 1 loja por 2 semanas

## Release Plan

| Release | Conteúdo | Entrega |
|---------|----------|---------|
| v1.0.0 (MVP) | Monitoramento de validade + sugestões + anomalias | Final Sprint 4 |
| v1.1.0 | Dashboard avançado com drill-down | Pós-MVP |
| v1.2.0 | Painel de auditoria para MP | Pós-MVP |
