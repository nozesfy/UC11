# Modelo Entidade-Relacionamento (ER)

**UC11:** Gerir Projetos de Tecnologia da Informação  
**Equipe:** William, Alaide, Ed  
**SGBD:** PostgreSQL 16

---

## Diagrama ER Completo

```mermaid
erDiagram
    FILIAIS ||--o{ LOTES : ""
    FILIAIS ||--o{ VENDAS : ""
    FILIAIS ||--o{ PERDAS : ""
    FILIAIS ||--o{ USUARIOS : ""

    FORNECEDORES ||--o{ PRODUTOS : ""

    CATEGORIAS ||--o{ PRODUTOS : ""
    CATEGORIAS ||--o{ CATEGORIAS : ""

    PRODUTOS ||--o{ LOTES : ""
    PRODUTOS ||--o{ VENDAS : ""
    PRODUTOS ||--o{ PERDAS : ""

    LOTES ||--o{ PERDAS : ""
    LOTES ||--o{ ACOES_SUGERIDAS : ""

    PERDAS ||--o{ ANOMALIAS : ""
    ANOMALIAS ||--o{ ALERTAS : ""
    LOTES ||--o{ ALERTAS : ""
    USUARIOS ||--o{ ALERTAS : ""
    USUARIOS ||--o{ ACOES_SUGERIDAS : ""

    FILIAIS {
        int id PK
        string nome
        string codigo
        string endereco
        string cidade
        string uf
        string regiao
        boolean ativa
        timestamp criado_em
        timestamp atualizado_em
    }

    FORNECEDORES {
        int id PK
        string nome
        string cnpj
        string contato
        string email
        string telefone
        boolean ativo
        timestamp criado_em
        timestamp atualizado_em
    }

    CATEGORIAS {
        int id PK
        string nome
        string descricao
        int categoria_pai_id FK
        boolean ativa
        timestamp criado_em
    }

    PRODUTOS {
        int id PK
        string nome
        string codigo_barras
        string sku
        int fornecedor_id FK
        int categoria_id FK
        string unidade_medida
        decimal preco_custo
        decimal preco_venda
        int validade_dias
        boolean perecivel
        boolean ativo
        timestamp criado_em
        timestamp atualizado_em
    }

    LOTES {
        int id PK
        int produto_id FK
        int filial_id FK
        string numero_lote
        date data_fabricacao
        date data_validade
        int quantidade_entrada
        int quantidade_atual
        decimal preco_custo_unitario
        string status
        string nivel_risco
        decimal velocidade_venda_diaria
        date data_projecao_vencimento
        timestamp criado_em
        timestamp atualizado_em
    }

    VENDAS {
        int id PK
        int produto_id FK
        int filial_id FK
        int quantidade
        decimal valor_unitario
        decimal valor_total
        string tipo_cliente
        date data_venda
        timestamp criado_em
    }

    PERDAS {
        int id PK
        int lote_id FK
        int produto_id FK
        int filial_id FK
        int quantidade
        decimal valor_perda
        string tipo_perda
        string causa_classificada
        string causa_sugerida_ml
        string turno
        int operador_responsavel_id
        string observacao
        timestamp criado_em
    }

    ANOMALIAS {
        int id PK
        int perda_id FK
        string tipo_anomalia
        string severidade
        string descricao
        string causa_provavel
        decimal score_anomalia
        boolean confirmada
        boolean falso_positivo
        timestamp detectada_em
        timestamp confirmada_em
    }

    ALERTAS {
        int id PK
        int lote_id FK
        int anomalia_id FK
        int usuario_id FK
        string tipo
        string mensagem
        string acao_sugerida
        string status
        timestamp criado_em
        timestamp lido_em
        timestamp resolvido_em
    }

    ACOES_SUGERIDAS {
        int id PK
        int lote_id FK
        int usuario_id FK
        string tipo_acao
        string descricao
        jsonb parametros
        string status
        string resultado
        timestamp criado_em
        timestamp executada_em
    }

    USUARIOS {
        int id PK
        string nome
        string email
        string cargo
        int filial_id FK
        string perfil_acesso
        boolean ativo
        timestamp criado_em
        timestamp ultimo_acesso
    }
```

---

## Diagrama Conceitual (Simplificado)

```mermaid
erDiagram
    FILIAL ||--o{ LOTE : "armazena"
    PRODUTO ||--o{ LOTE : "composto por"
    FORNECEDOR ||--o{ PRODUTO : "fornece"
    CATEGORIA ||--o{ PRODUTO : "classifica"
    LOTE ||--o{ PERDA : "gera"
    LOTE ||--o{ ACAO_SUGERIDA : "recebe"
    FILIAL ||--o{ PERDA : "registra"
    PRODUTO ||--o{ PERDA : "associado a"
    PERDA ||--|| ANOMALIA : "pode ser"
    ANOMALIA ||--o{ ALERTA : "dispara"
    LOTE ||--o{ ALERTA : "dispara"
    USUARIO ||--o{ ALERTA : "recebe"
    USUARIO ||--o{ ACAO_SUGERIDA : "executa"
    FILIAL ||--o{ VENDA : "realiza"
    PRODUTO ||--o{ VENDA : "vendido em"
    FILIAL ||--o{ USUARIO : "lotado em"

    FILIAL {
        nome "Nome da filial"
        uf "Estado"
    }
    PRODUTO {
        nome "Nome do produto"
        sku "Código SKU"
        validade_dias "Prazo de validade"
    }
    LOTE {
        numero "Número do lote"
        validade "Data de validade"
        qtd_atual "Quantidade em estoque"
        risco "Verde/Amarelo/Vermelho"
    }
    PERDA {
        quantidade "Unidades perdidas"
        valor "Valor financeiro"
        tipo "Vencimento/Avaria/Extravio/Erro"
    }
    ANOMALIA {
        tipo "Desvio/Padrão suspeito/Quebra"
        severidade "Baixa/Média/Alta/Crítica"
    }
    ALERTA {
        mensagem "Texto do alerta"
        acao "Ação sugerida"
    }
```

---

## Principais Relacionamentos

| Entidade A | Relacionamento | Entidade B | Significado |
|-----------|---------------|-----------|-------------|
| Filial | 1 → N | Lote | Uma filial possui vários lotes em estoque |
| Produto | 1 → N | Lote | Um produto pode ter vários lotes (diferentes datas) |
| Fornecedor | 1 → N | Produto | Um fornecedor fornece vários produtos |
| Categoria | 1 → N | Produto | Uma categoria agrupa vários produtos |
| Categoria | 1 → N | Categoria | Auto-relacionamento (subcategorias) |
| Lote | 1 → N | Perda | Um lote pode gerar várias perdas |
| Lote | 1 → N | Ação Sugerida | Um lote pode ter várias ações sugeridas |
| Perda | 1 → N | Anomalia | Uma perda pode gerar uma ou mais anomalias |
| Anomalia | 1 → N | Alerta | Uma anomalia dispara alertas para usuários |
| Lote | 1 → N | Alerta | Um lote em risco dispara alertas |
| Usuário | 1 → N | Alerta | Um usuário recebe vários alertas |
| Usuário | 1 → N | Ação Sugerida | Um usuário executa várias ações |
| Filial | 1 → N | Venda | Uma filial realiza várias vendas |
| Filial | 1 → N | Usuário | Uma filial tem vários usuários lotados |

---

## Regras de Negócio (Banco de Dados)

1. **Unicidade de lote por filial:** Um mesmo número de lote do fornecedor pode existir em múltiplas filiais (combinação `numero_lote + filial_id` não é única), mas cada registro de lote é único por `(produto_id, filial_id, numero_lote)`.
2. **Consistência de risco:** O `nivel_risco` do lote é calculado automaticamente pelo ML e atualizado diariamente ou sob demanda.
3. **Auditoria de perdas:** Toda perda registrada deve ter `lote_id` preenchido para rastreabilidade.
4. **Anomalia × falso positivo:** Uma anomalia marcada como `falso_positivo = true` deve ter `confirmada = true` também.
5. **Alertas ativos:** Alertas com `status = 'pendente'` são os únicos considerados para notificação em tempo real.
6. **Integridade referencial:** Todas as chaves estrangeiras possuem `ON DELETE RESTRICT` para evitar exclusão acidental de dados históricos.
