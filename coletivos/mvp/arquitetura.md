# Arquitetura do Sistema — MVP Controle de Validade e Prevenção de Perdas

**UC11:** Gerir Projetos de Tecnologia da Informação  
**Equipe:** William, Alaide, Ed

---

## Visão Geral da Arquitetura

```mermaid
graph TB
    subgraph "Camada de Apresentação (Frontend)"
        REACT[React + TypeScript<br/>Dashboard Web]
        CHART[Chart.js / Recharts<br/>Gráficos e Visualizações]
        WS[WebSocket Client<br/>Notificações em Tempo Real]
    end

    subgraph "Camada de API (Backend)"
        API[Node.js API REST<br/>Express.js]
        SOCK[Socket.io<br/>WebSocket Server]
        AUTH[Serviço de Autenticação<br/>JWT / SSO]
    end

    subgraph "Camada de ML"
        ML[Python ML Service<br/>Flask / FastAPI]
        SKLEARN[scikit-learn<br/>Isolation Forest]
        PANDAS[pandas + numpy<br/>Processamento de Dados]
    end

    subgraph "Camada de Dados"
        PG[PostgreSQL<br/>Banco de Dados Relacional]
        CACHE[Redis<br/>Cache em Memória]
    end

    subgraph "Integração Externa"
        TOTVS[ERP TOTVS Consinco/RMS<br/>Sistema Legado]
    end

    subgraph "Infraestrutura"
        DOCKER[Docker<br/>Containerizaçao]
        NGINX[NGINX<br/>Proxy Reverso]
    end

    REACT --> API
    REACT --> CHART
    REACT --> WS
    WS --> SOCK
    API --> AUTH
    API --> SOCK
    API --> PG
    API --> CACHE
    API --> ML
    API --> TOTVS
    ML --> PG
    ML --> CACHE
```

---

## Diagrama de Componentes

```mermaid
graph TD
    subgraph Frontend
        F1[App.tsx]
        F2[Components/Dashboard]
        F3[Components/LoteDetail]
        F4[Components/Anomalias]
        F5[Components/Relatorio]
        F6[Services/api.ts]
        F7[Services/websocket.ts]
        F8[Hooks/useAuth.ts]
        F1 --> F2
        F1 --> F3
        F1 --> F4
        F1 --> F5
        F2 --> F6
        F3 --> F6
        F4 --> F6
        F5 --> F6
        F1 --> F7
        F1 --> F8
    end

    subgraph Backend
        B1[server.js]
        B2[routes/auth.js]
        B3[routes/lotes.js]
        B4[routes/anomalias.js]
        B5[routes/relatorios.js]
        B6[services/validadeService.js]
        B7[services/anomaliaService.js]
        B8[services/totvsIntegration.js]
        B9[models/]
        B1 --> B2
        B1 --> B3
        B1 --> B4
        B1 --> B5
        B3 --> B6
        B4 --> B7
        B3 --> B8
        B4 --> B8
        B2 --> B9
        B3 --> B9
        B4 --> B9
        B5 --> B9
    end

    subgraph ML
        M1[app.py]
        M2[models/isolationForest.py]
        M3[services/preprocess.py]
        M4[services/predict.py]
        M1 --> M2
        M1 --> M3
        M1 --> M4
    end

    subgraph Database
        D1[(PostgreSQL)]
    end

    F6 --> B1
    B6 --> M1
    B7 --> M1
    B6 --> D1
    B7 --> D1
```

---

## Fluxo de Dados

### 1. Monitoramento de Validade

```
TOTVS ERP
   │ (Webhook / Job Agendado)
   ▼
Node.js API ──► PostgreSQL (armazena lote)
   │
   ├──► Python ML (calcula risco)
   │       │
   │       └──► PostgreSQL (atualiza risco)
   │
   └──► WebSocket (notifica dashboard)
          │
          └──► React (exibe no frontend)
```

### 2. Detecção de Anomalias

```
PostgreSQL (dados de perda)
   │
   ▼
Python ML (Isolation Forest)
   │
   ├──► Normal → Arquiva
   │
   └──► Anomalia Detectada
          │
          ├──► PostgreSQL (registra anomalia)
          │
          └──► WebSocket (alerta gerente)
                 │
                 └──► React (notificação em tempo real)
```

### 3. Sugestão de Ação (Desconto / Realocação / Descarte)

```
Dashboard React
   │ (usuário clica em "Aplicar Ação")
   ▼
Node.js API
   │
   ├──► PostgreSQL (atualiza status do lote)
   │
   └──► TOTVS ERP (aplica desconto no PDV / gera transferência)
```

---

## Stack Tecnológica Detalhada

| Camada | Tecnologia | Versão | Função |
|--------|-----------|--------|--------|
| **Frontend** | React + TypeScript | 18.x | Interface web do dashboard |
| **Visualização** | Chart.js / Recharts | 4.x / 2.x | Gráficos do dashboard |
| **Estilização** | CSS Modules / Tailwind | 3.x | Estilização dos componentes |
| **Backend** | Node.js + Express | 20.x LTS | API REST principal |
| **WebSocket** | Socket.io | 4.x | Notificações em tempo real |
| **Autenticação** | JWT + Passport.js | — | Controle de acesso |
| **ML** | Python + Flask | 3.11 / 2.x | Serviço de machine learning |
| **ML Libs** | scikit-learn, pandas, numpy | 1.3.x | Algoritmos de detecção |
| **BD Relacional** | PostgreSQL | 16.x | Dados estruturados do sistema |
| **Cache** | Redis | 7.x | Cache de consultas frequentes |
| **Proxy** | NGINX | 1.24.x | Proxy reverso e SSL |
| **Container** | Docker + Docker Compose | 24.x | Ambiente padronizado |
| **Documentação API** | Swagger / OpenAPI 3.0 | — | Documentação dos endpoints |

---

## Decisões Arquiteturais

| Decisão | Opção Escolhida | Alternativa | Justificativa |
|---------|----------------|-------------|---------------|
| API Style | REST | GraphQL | Simplicidade, integração com TOTVS via REST, ecossistema maduro |
| ML Integration | Serviço separado (Python) | Node.js ML | Ecossistema Python é superior para ML (scikit-learn, pandas) |
| Realtime | WebSocket (Socket.io) | Polling | Baixa latência, notificações instantâneas |
| Cache | Redis | In-memory | Persistência, compartilhamento entre instâncias |
| Containerização | Docker | VM | Portabilidade, leveza, escalabilidade horizontal |
| Integração ERP | API REST | Webhook + Pull | TOTVS expõe APIs REST; webhook para eventos, pull para sincronia |

---

## Requisitos de Infraestrutura

| Recurso | Especificação | Justificativa |
|---------|--------------|---------------|
| Servidor Frontend | 2 vCPU, 4 GB RAM | Aplicação React estática servida via NGINX |
| Servidor Backend | 4 vCPU, 8 GB RAM | API Node.js + WebSocket + conexões simultâneas |
| Servidor ML | 4 vCPU, 16 GB RAM | Processamento de dados e inferência do modelo |
| Banco de Dados | 4 vCPU, 16 GB RAM, SSD NVMe | Consultas complexas, índices, crescimento de dados |
| Redis | 2 vCPU, 4 GB RAM | Cache de sessão e consultas frequentes |
| Armazenamento | 500 GB SSD | Logs, backups, exportações |
