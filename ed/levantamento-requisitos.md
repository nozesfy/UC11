# Levantamento de Requisitos — Ed (Back-end e DevOps)

## Requisitos Funcionais

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

### Módulo de Movimentação entre Depósitos

| Código | Descrição |
|--------|-----------|
| RF025 | O sistema deve registrar transferências de mercadorias entre filiais |
| RF026 | O sistema deve controlar origem, destino e responsável pela movimentação |
| RF027 | O sistema deve permitir rastreamento em tempo real da mercadoria em trânsito |
| RF028 | O sistema deve atualizar o saldo de origem e destino automaticamente |

## Requisitos Não Funcionais

| Código | Descrição |
|--------|-----------|
| RNF001 | O sistema deve estar disponível 99,5% do tempo durante o horário comercial |
| RNF002 | A baixa no estoque deve ocorrer em até 2 segundos após a venda |
| RNF003 | O sistema deve suportar múltiplas filiais simultaneamente (escalabilidade) |
| RNF007 | O backend deve ser desenvolvido em Node.js ou C# |
