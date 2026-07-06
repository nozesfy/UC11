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

## 2. Modelo de Negócio do Atacadão

O Atacadão opera no modelo **atacarejo (cash & carry)**, que combina atacado e varejo em um único canal de vendas. Sua estratégia se baseia em:

- **Formato misto:** autosserviço (lojas físicas com prateleiras abertas ao público) e atacado de entrega (centros de distribuição para grandes volumes)
- **Público-alvo:** classes C e D, oferecendo preços competitivos com margens reduzidas e alto giro de produtos
- **Mix de produtos:** foco em itens essenciais de alta rotatividade (alimentos, bebidas, limpeza, higiene)
- **Fontes de receita:** venda direta ao consumidor (B2C) e venda para comerciantes e empresas (B2B)
- **Serviços complementares:** postos de gasolina, drogarias, e-commerce próprio e parceiros (Rappi, iFood)
- **Operação enxuta:** lojas com estrutura simples, exposição de produtos em paletes e autoatendimento, reduzindo custos operacionais

## 3. Visão Geral da Solução

Sistema integrado de gestão de estoque com módulo de vendas, que unifica o planejamento de compras com base no histórico de vendas (CPF e CNPJ), controla o saldo em tempo real e gera indicadores gerenciais.

## 4. Fluxo do Processo

```
Venda CPF/CNPJ → Baixa no estoque → Atualiza saldo →
  → Abaixo do mínimo? → Gera sugestão de compra →
    → Aprovado? → Pedido ao fornecedor → Entrada no estoque
```

## 5. Solução para Cada Problema

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

## 6. Tratamento de Clientes

O Atacadão atende dois grandes perfis de clientes no modelo de atacarejo (cash & carry):

### Cliente CPF (Pessoa Física)
Consumidor final que compra para uso próprio ou familiar. Foco nas classes C e D, buscando preços competitivos e variedade.
- Cadastro simplificado (nome, CPF, contato)
- Venda no balcão ou autoatendimento
- Emissão de cupom fiscal
- Compra avulsa sem pedido mínimo

### Cliente CNPJ (Pessoa Jurídica)
Empresas que compram para revenda ou consumo institucional. Dividem-se em três subperfis:

#### Pequenos e Médios Comerciantes
Mercados, mercearias, padarias e restaurantes que compram para revenda direta.
- Cadastro completo com dados fiscais
- Tabela de preço diferenciada (desconto por volume)
- Emissão de NF-e
- Pedido mínimo e condições de pagamento especiais

#### Transformadores
Empresas que utilizam os produtos como insumo (ex.: confeitarias, lanchonetes, indústrias alimentícias).
- Compram em maior volume
- Necessitam de regularidade no abastecimento
- Preço diferenciado por categoria

#### Grandes Lojistas e Empresas
Atendidos pelo formato de **atacado de entrega** (central de distribuição), com entregas programadas e condições comerciais negociadas.

### Cliente Internacional
O Atacadão também opera fora do Brasil por meio de lojas físicas e parcerias do Grupo Carrefour, atendendo clientes nos seguintes países:
- **Marrocos** — 11 lojas em Casablanca, Marraquexe, Rabat, entre outras
- **França** — primeira loja inaugurada em 2024 em Aulnay-sous-Bois
- **Argentina, Romênia, Tunísia, Egito e Espanha** — operações sob as bandeiras Carrefour Cash & Carry, Supeco e Carrefour Maxi

## 7. Usuários do Sistema

O sistema será utilizado pelos seguintes perfis dentro da rede Atacadão:

| Perfil | Função |
|--------|--------|
| **Operador de Caixa** | Registra vendas CPF e CNPJ no PDV, acionando a baixa no estoque |
| **Estoquista** | Realiza recebimento de mercadorias, contagem de inventário, registro de perdas e ajustes de saldo |
| **Comprador** | Acessa sugestões de compra baseadas no histórico, aprova e emite pedidos aos fornecedores |
| **Gerente de Loja** | Monitora saldo em tempo real, aprova transferências, acompanha indicadores da unidade |
| **Logística** | Gerencia movimentação entre depósitos e filiais, rastreia cargas em trânsito |
| **Diretoria** | Visualiza indicadores consolidados de todas as unidades (giro, ruptura, ticket médio) |

## 8. Geração de Indicadores

- Giro de estoque
- Produtos mais vendidos (por cliente CPF e CNPJ)
- Taxa de ruptura (falta de produto)
- Ticket médio por tipo de cliente
- Valor total em estoque

## 9. Tecnologias Sugeridas

| Camada | Tecnologia |
|--------|-----------|
| Frontend | React |
| Backend | Node.js ou C# |
| Banco de Dados | PostgreSQL |
| Mobile | React Native (para inventário) |

## 10. Créditos

- **William**
- **Alaide**
- **Ed**

## 11. Observações

...
