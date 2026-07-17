# Matriz CSD — MVP Controle de Validade e Prevenção de Perdas com IA

**Projeto:** Modernização da Gestão de Estoque — Rede de Supermercados Atacadão  
**UC11:** Gerir Projetos de Tecnologia da Informação  
**Equipe:** William, Alaide, Ed

---

## Certezas

1. **O varejo brasileiro perdeu R$ 42,1 bilhões em 2025 (ABRAPPE)**
   > 1,65% do faturamento total do setor, alta de 15,3% em relação ao ano anterior.

2. **35% das perdas no varejo são por vencimento**
   > Dado da ABRAPPE que justifica o foco do MVP em controle de validade.

3. **MPDFT firmou TAC nº 851/2023 com o Atacadão após encontrar 113 produtos vencidos**
   > Fiscalização em loja de Samambaia/DF comprova falha no controle de validade.

4. **O ERP TOTVS Consinco/RMS já controla lote e validade**
   > O MVP não precisa recriar o cadastro, apenas integrar com o sistema existente.

5. **O algoritmo Isolation Forest é eficaz para detecção de anomalias**
   > Biblioteca consolidada (scikit-learn) para identificar padrões suspeitos em dados de alta dimensão.

6. **A equipe definiu 12 casos de uso e 12 user stories para o MVP**
   > Escopo documentado em `casos-de-uso.md` e `user-stories.md`.

---

## Suposições

1. **Os gerentes de loja adotarão o dashboard como ferramenta diária**
   > Acreditamos que a interface intuitiva e os alertas em tempo real gerarão engajamento.

2. **A integração com o TOTVS Consinco/RMS será via API REST**
   > O ERP expõe APIs REST para consulta de lotes, validade e vendas.

3. **Os dados históricos de venda estão disponíveis e íntegros**
   > O ML depende de dados consistentes para calcular velocidade média de venda.

4. **Gerentes utilizarão tablet para acessar o dashboard na loja**
   > A interface responsiva foi pensada para uso em desktop e tablet.

5. **O desconto dinâmico sugerido será aceito pela gestão**
   > As sugestões consideram margem do produto para não gerar prejuízo.

6. **Os registros de perda são feitos corretamente pelos operadores**
   > O ML de anomalias depende da qualidade do lançamento de perdas.

---

## Dúvidas

1. **A qualidade dos dados do ERP é suficiente para treinar o modelo ML?**
   > Dados inconsistentes ou incompletos podem comprometer a precisão do Isolation Forest.

2. **Os gerentes confiarão nos alertas de anomalia gerados pelo sistema?**
   > Falsos positivos podem gerar desconfiança e ignorância dos alertas.

3. **A taxa de falsos positivos ficará abaixo de 10%?**
   > Critério de aceitação do MVP que precisa ser validado com dados reais.

4. **A integração com o sistema legado será mais complexa que o previsto?**
   > O TOTVS Consinco/RMS pode ter limitações técnicas não mapeadas.

5. **O desempenho do dashboard será satisfatório em filiais com baixa conectividade?**
   > O WebSocket exige conexão estável para notificações em tempo real.

6. **Os operadores de estoque registrarão as perdas corretamente no sistema?**
   > O treinamento dos usuários será suficiente para garantir a qualidade dos dados?

---

*Documento gerado em 17/07/2026 — Versão 1.0*
