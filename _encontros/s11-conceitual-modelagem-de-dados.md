---
semana: 11
tipo: conceitual
titular: docente
modulo: "III — Consultas, modelagem, transformação e disponibilização"
titulo: "Modelagem de dados"
resumo: >-
  Do modelo conceitual ao físico, e as escolas de modelagem analítica: Inmon, Kimball, Data Vault e tabelas largas.
objetivos:
  - "Distinguir modelo conceitual, lógico e físico e dizer a quem cada um serve"
  - "Justificar normalização e sua reversão deliberada a partir da carga de trabalho"
  - "Comparar Inmon, Kimball, Data Vault e tabelas largas pelo que cada abordagem otimiza"
  - "Modelar fato e dimensão com granularidade declarada e tratar dimensão de variação lenta"
leitura_previa:
  - titulo: "Fundamentos de Engenharia de Dados, cap. 8"
    nota: "A seção de modelagem de dados, inteira"
complementar:
  - titulo: "The Data Warehouse Toolkit, cap. 1 a 3"
    nota: "Kimball na fonte. É onde fato, dimensão e granularidade ganham precisão"
---

A pergunta que abre esta Semana não é "qual modelagem é a melhor", e sim **para
quem o modelo está sendo escrito**. Modelo normalizado serve a quem escreve;
modelo dimensional serve a quem pergunta. São objetivos diferentes, e é por isso
que a mesma organização mantém os dois.

**Granularidade** é a decisão mais consequente e a que mais passa despercebida:
uma linha do fato é o quê? Uma venda, um item da venda, um dia de vendas por
loja? Escolher errado não dá erro — dá um modelo que responde a perguntas
próximas da que interessava, e ninguém percebe.

**Dimensão de variação lenta** é onde dados públicos brasileiros cobram caro.
Município que muda de nome, órgão que é extinto e recriado, código que é
reaproveitado: se a dimensão sobrescreve, o histórico mente. Todo domínio de
vocês tem pelo menos uma dessas — vale procurá-la antes de ela procurar vocês.
