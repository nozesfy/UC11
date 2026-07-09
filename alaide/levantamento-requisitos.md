# Levantamento de Requisitos — Alaide (Documentação)

## Requisitos Funcionais

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

## Requisitos Não Funcionais

| Código | Descrição |
|--------|-----------|
| RNF008 | O sistema deve garantir que apenas usuários autenticados acessem as funcionalidades |
| RNF009 | O sistema deve registrar logs de todas as operações críticas (venda, ajuste, transferência) |
| RNF010 | O sistema deve permitir emissão de NF-e de acordo com a legislação fiscal brasileira |
