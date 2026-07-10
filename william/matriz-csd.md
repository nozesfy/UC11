# Matriz CSD — William (Front-end e Banco de Dados) | Carlos Silva (Operador de Caixa)

## Certezas

1. **O sistema atual trava em horários de pico**
   > O PDV demora a responder quando o movimento da loja aumenta, gerando filas e clientes insatisfeitos.

2. **A diferenciação de preço CPF/CNPJ não é clara no sistema**
   > O operador precisa memorizar ou consultar fora do sistema qual preço aplicar — não há indicação visual na tela.

3. **Não há consulta de estoque integrada ao PDV**
   > No momento da venda, o operador não consegue ver se o produto tem saldo disponível antes de finalizar a compra.

## Suposições

1. **Uma interface mais simples e responsiva reduziria filas no caixa**
   > Um PDV leve, com poucos cliques por venda, agilizaria o atendimento e melhoraria a experiência do cliente.

2. **A automação do preço CPF/CNPJ eliminaria erros no checkout**
   > Se o sistema identificar automaticamente o tipo de cliente e exibir o preço correto, o operador não precisaria decidir.

3. **A consulta de estoque na tela do PDV evitaria vendas sem produto**
   > Ver o saldo antes de finalizar permitiria ao operador avisar o cliente ou sugerir um similar.

## Dúvidas

1. **O hardware atual do PDV suporta um novo sistema?**
   > Máquinas antigas podem não rodar um front-end moderno ou integrar com novas bibliotecas de leitura de código de barras.

2. **Qual o volume de transações por hora nos horários de pico?**
   > Saber o pico de vendas ajuda a dimensionar o banco de dados e a infraestrutura para evitar lentidão.

3. **O sistema legado tem API de integração com o PDV?**
   > Para conectar o PDV ao estoque e à emissão fiscal, o sistema antigo precisa expor interfaces de comunicação.

---

## Fonte

- Google Play — Meu Atacadão (funcionalidades do app B2C)
- Atacadão S.A. — site oficial e Group Carrefour Brasil
- Times Brasil | CNBC — reportagem sobre integração do ERP do Atacadão
- Documentos do projeto: levantamento de requisitos, personas e mapa de empatia
