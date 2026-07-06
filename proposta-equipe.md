# Proposta Conceitual — Equipe

**Projeto:** Modernização da Gestão de Estoque — Rede de Supermercados Atacadão

---

## 1. Problemas Escolhidos

- [x] Planejamento de compras
- [x] Controle de estoque
- [x] Perdas
- [x] Inventário
- [x] Movimentação entre depósitos
- [x] Vendas para clientes CPF
- [x] Vendas para clientes CNPJ
- [x] Geração de indicadores

## 2. Visão Geral da Solução

Sistema integrado de gestão de estoque com módulo de vendas, que unifica o planejamento de compras com base no histórico de vendas (CPF e CNPJ), controla o saldo em tempo real e gera indicadores gerenciais.

## 3. Fluxo do Processo

```
Venda CPF/CNPJ → Baixa no estoque → Atualiza saldo →
  → Abaixo do mínimo? → Gera sugestão de compra →
    → Aprovado? → Pedido ao fornecedor → Entrada no estoque
```

## 4. Solução para Cada Problema

### Planejamento de compras
Com base no histórico de vendas e estoque mínimo, o sistema sugere automaticamente quais produtos comprar e em qual quantidade.

### Controle de estoque
Saldo atualizado em tempo real a cada venda ou entrada. Alertas de estoque baixo e excesso.

### Perdas
Registro de perdas por vencimento, avaria ou extravio. Notificação automática para descarte. Relatório mensal de perdas por categoria.

### Inventário
Módulo de contagem cíclica com coletor ou app mobile. Conferência por código de barras. Ajuste automático de saldo após validação.

### Movimentação entre depósitos
Registro de transferências entre filiais com controle de origem, destino e responsável. Rastreamento em tempo real da mercadoria em trânsito.

## 5. Tratamento de Clientes

### Vendas CPF (Pessoa Física)
Cadastro simplificado (nome, CPF, contato). Venda no balcão ou autoatendimento. Emissão de cupom fiscal.

### Vendas CNPJ (Pessoa Jurídica)
Cadastro completo com dados fiscais. Tabela de preço diferenciada. Emissão de NF-e. Pedido mínimo e condições de pagamento especiais.

## 6. Geração de Indicadores

- Giro de estoque
- Produtos mais vendidos (por cliente CPF e CNPJ)
- Taxa de ruptura (falta de produto)
- Ticket médio por tipo de cliente
- Valor total em estoque

## 7. Tecnologias Sugeridas

| Camada | Tecnologia |
|--------|-----------|
| Frontend | React |
| Backend | Node.js ou C# |
| Banco de Dados | PostgreSQL |
| Mobile | React Native (para inventário) |

## 8. Observações

...
