# Matriz CSD — Ed (Back-end e DevOps) | Ricardo Almeida (Gerente de Loja)

## Certezas

1. **Não há dashboard com indicadores gerenciais consolidados**
   > O gerente não tem acesso a KPIs como giro de estoque, ruptura, margem por produto ou taxa de perda em uma única tela.

2. **Transferências entre lojas não têm rastreamento digital**
   > Quando uma unidade envia produto para outra, não é possível acompanhar o trajeto nem prever a chegada.

3. **O ERP do Atacadão existe, mas falta interface gerencial amigável**
   > O sistema interno controla estoque e vendas, porém não oferece dashboards ou alertas acessíveis para o gerente.

## Suposições

1. **Um dashboard em tempo real integrado ao ERP agilizaria decisões**
   > Como o ERP já tem os dados de estoque e venda, um painel extraindo essas informações daria visibilidade imediata ao gerente.

2. **Alertas automáticos de estoque baixo evitariam rupturas**
   > Notificações disparadas quando um produto atinge o mínimo permitiriam reabastecimento antes da falta na gôndola.

3. **Transferências com registro digital reduziriam extravios**
   > Um fluxo com aprovação, coleta, transporte e conferência registrados no sistema daria visibilidade total da movimentação.

## Dúvidas

1. **O ERP do Atacadão possui API REST para consumo de dados?**
   > A viabilidade do dashboard depende de o ERP expor endpoints de consulta — sem API, seria necessário acesso direto ao banco.

2. **Quantas lojas e depósitos o sistema precisará integrar?**
   > A escala da solução (386 lojas + 36 centros de distribuição) impacta a arquitetura de back-end e a estratégia de deploy.

3. **As transferências interestaduais exigem prazos fiscais específicos?**
   > Movimentações entre estados envolvem ICMS e prazos de NF-e que o sistema de rastreio precisa contemplar.

---

## Fonte

- Google Play — Meu Atacadão (funcionalidades do app B2C)
- Atacadão S.A. — site oficial e Group Carrefour Brasil
- Times Brasil | CNBC — reportagem sobre integração do ERP do Atacadão
- Documentos do projeto: levantamento de requisitos, personas e mapa de empatia
