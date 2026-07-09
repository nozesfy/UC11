# Levantamento de Requisitos — William (Front-end e Banco de Dados)

## Requisitos Funcionais

### Módulo de Vendas (PDV)

| Código | Descrição |
|--------|-----------|
| RF001 | O sistema deve registrar vendas para clientes CPF com cadastro simplificado (nome, CPF, contato) |
| RF002 | O sistema deve registrar vendas para clientes CNPJ com cadastro completo (dados fiscais, tabela de preço diferenciada) |
| RF003 | O sistema deve emitir cupom fiscal para vendas CPF |
| RF004 | O sistema deve emitir NF-e para vendas CNPJ |
| RF005 | O sistema deve dar baixa automática no estoque a cada venda realizada |
| RF006 | O sistema deve suportar venda no balcão e autoatendimento |
| RF007 | O sistema deve permitir condições de pagamento especiais por tipo de cliente |

### Módulo de Indicadores Gerenciais

| Código | Descrição |
|--------|-----------|
| RF029 | O sistema deve calcular o giro de estoque por produto e categoria |
| RF030 | O sistema deve identificar os produtos mais vendidos (por cliente CPF e CNPJ) |
| RF031 | O sistema deve calcular a taxa de ruptura (falta de produto) |
| RF032 | O sistema deve calcular o ticket médio por tipo de cliente |
| RF033 | O sistema deve exibir o valor total em estoque |
| RF034 | O sistema deve permitir a visualização de indicadores consolidados por unidade e por rede |

## Requisitos Não Funcionais

| Código | Descrição |
|--------|-----------|
| RNF004 | Os dados devem ser armazenados em banco de dados relacional (PostgreSQL) |
| RNF005 | O sistema deve ter interface web responsiva (React) |
| RNF006 | O sistema deve ter aplicativo mobile para inventário (React Native) |
