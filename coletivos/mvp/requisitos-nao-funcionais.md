# Requisitos Não Funcionais — MVP

**UC11:** Gerir Projetos de Tecnologia da Informação  
**Equipe:** William, Alaide, Ed

---

## 1. Performance

| ID | Requisito | Métrica |
|----|-----------|---------|
| RNF01 | O dashboard deve carregar em até 3 segundos | Tempo de carregamento < 3s |
| RNF02 | Alertas de anomalia devem ser entregues em até 1 minuto | Latência < 60s |
| RNF03 | O sistema deve suportar até 500 filiais simultâneas | 500 usuários concorrentes |
| RNF04 | Consultas no histórico de perdas devem retornar em até 5 segundos | Query < 5s para 12 meses |

## 2. Disponibilidade

| ID | Requisito | Métrica |
|----|-----------|---------|
| RNF05 | Disponibilidade do sistema em horário comercial (06h–22h) | 99,5% |
| RNF06 | Janela de manutenção programada: noturno (22h–05h) | Máx 2h/semana |
| RNF07 | Plano de recuperação de desastres (RPO) | Máx 15 minutos |

## 3. Segurança

| ID | Requisito | Descrição |
|----|-----------|-----------|
| RNF08 | Autenticação obrigatória | Login com SSO (Azure AD / Google Workspace) |
| RNF09 | Controle de acesso por papel | Gerente, Operador, Auditor, Administrador |
| RNF10 | Registro de auditoria | Todas as ações devem ser logadas com timestamp e usuário |
| RNF11 | Dados em trânsito criptografados | TLS 1.3 |
| RNF12 | Dados em repouso criptografados | AES-256 no banco de dados |

## 4. Usabilidade

| ID | Requisito | Descrição |
|----|-----------|-----------|
| RNF13 | Interface responsiva | Funcional em desktop e tablet (gerentes usam tablet na loja) |
| RNF14 | Idioma | Português (PT-BR) |
| RNF15 | Acessibilidade | Conformidade com WCAG 2.1 nível AA |

## 5. Compatibilidade

| ID | Requisito | Descrição |
|----|-----------|-----------|
| RNF16 | Navegadores suportados | Chrome, Firefox, Edge (2 versões mais recentes) |
| RNF17 | Integração com ERP | API REST para TOTVS Consinco/RMS |
| RNF18 | Exportação de relatórios | CSV, PDF |

## 6. Manutenibilidade

| ID | Requisito | Descrição |
|----|-----------|-----------|
| RNF19 | Código versionado | Git com GitFlow |
| RNF20 | Testes automatizados | Cobertura mínima de 70% |
| RNF21 | Documentação da API | OpenAPI 3.0 (Swagger) |
