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
    Configuração do projeto (React + Node + PostgreSQL)    :s1, 2026-08-01, 14d
    Integração com ERP TOTVS (leitura de lotes e validades) :s1, 14d
    Autenticação e controle de acesso                        :s1, 7d
    Dashboard básico com heatmap                             :s1, 14d

    section Sprint 2 — Núcleo de Validade
    ML: cálculo de risco por lote (velocidade vs validade)   :s2, after s1, 14d
    Classificação verde/amarelo/vermelho                     :s2, 7d
    Sugestão de desconto dinâmico                            :s2, 7d
    Sugestão de realocação entre filiais                     :s2, 7d

    section Sprint 3 — Anomalias
    ML: Isolation Forest para detecção de anomalias          :s3, after s2, 14d
    Classificação automática de causa da perda                :s3, 10d
    Alertas em tempo real (WebSocket/Push)                    :s3, 7d
    Relatório mensal por causa                                :s3, 7d

    section Sprint 4 — Refino e Testes
    Testes de integração e aceitação                         :s4, after s3, 10d
    Ajustes no modelo ML (precisão < 85%)                   :s4, 10d
    Documentação da API (Swagger)                            :s4, 5d
    Validação com usuários reais (piloto 1 loja)             :s4, 10d
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
