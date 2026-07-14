# Levantamento de Requisitos

**Projeto:** Modernização da Gestão de Estoque — Rede de Supermercados Atacadão  
**Data:** 06/07/2026

---

## 1. Requisitos Funcionais

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

### Módulo de Controle de Estoque

| Código | Descrição |
|--------|-----------|
| RF008 | O sistema deve manter saldo atualizado em tempo real a cada venda ou entrada |
| RF009 | O sistema deve disparar alerta quando o estoque atingir o nível mínimo |
| RF010 | O sistema deve disparar alerta quando houver excesso de estoque |
| RF011 | O sistema deve controlar estoque por filial/unidade |
| RF012 | O sistema deve permitir consulta de saldo por produto, categoria e filial |

### Módulo de Planejamento de Compras

| Código | Descrição |
|--------|-----------|
| RF013 | O sistema deve sugerir automaticamente quais produtos comprar com base no histórico de vendas |
| RF014 | O sistema deve sugerir a quantidade ideal de compra com base no estoque mínimo e no histórico |
| RF015 | O sistema deve permitir que o comprador aprove ou ajuste as sugestões geradas |
| RF016 | O sistema deve gerar pedido de compra ao fornecedor após aprovação |

### Módulo de Perdas

| Código | Descrição |
|--------|-----------|
| RF017 | O sistema deve permitir registro de perdas por vencimento, avaria ou extravio |
| RF018 | O sistema deve notificar automaticamente sobre produtos próximos ao vencimento |
| RF019 | O sistema deve gerar relatório mensal de perdas por categoria |
| RF020 | O sistema deve ajustar o saldo do estoque automaticamente após registro de perda |

### Módulo de Inventário

| Código | Descrição |
|--------|-----------|
| RF021 | O sistema deve permitir contagem cíclica por coletor ou aplicativo mobile |
| RF022 | O sistema deve realizar conferência por código de barras |
| RF023 | O sistema deve ajustar automaticamente o saldo após validação da contagem |
| RF024 | O sistema deve gerar relatório de divergência entre saldo contábil e físico |

### Módulo de Movimentação entre Depósitos

| Código | Descrição |
|--------|-----------|
| RF025 | O sistema deve registrar transferências de mercadorias entre filiais |
| RF026 | O sistema deve controlar origem, destino e responsável pela movimentação |
| RF027 | O sistema deve permitir rastreamento em tempo real da mercadoria em trânsito |
| RF028 | O sistema deve atualizar o saldo de origem e destino automaticamente |

### Módulo de Indicadores Gerenciais

| Código | Descrição |
|--------|-----------|
| RF029 | O sistema deve calcular o giro de estoque por produto e categoria |
| RF030 | O sistema deve identificar os produtos mais vendidos (por cliente CPF e CNPJ) |
| RF031 | O sistema deve calcular a taxa de ruptura (falta de produto) |
| RF032 | O sistema deve calcular o ticket médio por tipo de cliente |
| RF033 | O sistema deve exibir o valor total em estoque |
| RF034 | O sistema deve permitir a visualização de indicadores consolidados por unidade e por rede |

---

## 2. Requisitos Não Funcionais

| Código | Descrição |
|--------|-----------|
| RNF001 | O sistema deve estar disponível 99,5% do tempo durante o horário comercial |
| RNF002 | A baixa no estoque deve ocorrer em até 2 segundos após a venda |
| RNF003 | O sistema deve suportar múltiplas filiais simultaneamente (escalabilidade) |
| RNF004 | Os dados devem ser armazenados em banco de dados relacional (PostgreSQL) |
| RNF005 | O sistema deve ter interface web responsiva (React) |
| RNF006 | O sistema deve ter aplicativo mobile para inventário (React Native) |
| RNF007 | O backend deve ser desenvolvido em Node.js ou C# |
| RNF008 | O sistema deve garantir que apenas usuários autenticados acessem as funcionalidades |
| RNF009 | O sistema deve registrar logs de todas as operações críticas (venda, ajuste, transferência) |
| RNF010 | O sistema deve permitir emissão de NF-e de acordo com a legislação fiscal brasileira |

---

## 3. Perfis de Usuário

| Perfil | Módulos Acessíveis |
|--------|-------------------|
| Operador de Caixa | PDV (RF001 a RF007) |
| Estoquista | Estoque (RF008-RF012), Perdas (RF017-RF020), Inventário (RF021-RF024) |
| Comprador | Planejamento de Compras (RF013-RF016), Indicadores (RF029-RF034) |
| Gerente de Loja | Todos os módulos da sua unidade |
| Logística | Movimentação (RF025-RF028), Estoque (RF008-RF012) |
| Diretoria | Indicadores (RF029-RF034) |

---

## 4. Regras de Negócio

| Código | Descrição |
|--------|-----------|
| RN001 | Cliente CNPJ deve ter cadastro completo com dados fiscais para emissão de NF-e |
| RN002 | Cliente CNPJ pode ter tabela de preço diferenciada por volume |
| RN003 | Venda CNPJ pode exigir pedido mínimo |
| RN004 | Produto com estoque abaixo do mínimo deve gerar sugestão de compra |
| RN005 | Produto vencido deve ser bloqueado para venda |
| RN006 | Transferência entre depósitos deve ter origem, destino e responsável registrados |
