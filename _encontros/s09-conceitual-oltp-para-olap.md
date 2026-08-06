---
semana: 9
tipo: conceitual
titular: docente
modulo: "III — Modelagem analítica e transformação"
titulo: "De OLTP para OLAP e modelagem dimensional"
resumo: >-
  Por que analítico é outro problema, e por que fato e dimensão continuam sendo a resposta depois de trinta anos.
objetivos:
  - "Explicar por que o esquema que serve bem ao transacional serve mal ao analítico"
  - "Modelar fato e dimensão com granularidade declarada"
  - "Escolher entre estrela e floco de neve com critério explícito"
  - "Tratar dimensões de variação lenta sem perder histórico"
leitura_previa:
  - titulo: "The Data Warehouse Toolkit, cap. 1 e 2"
    nota: "Os fundamentos dimensionais e o processo de quatro passos"
complementar:
  - titulo: "Kimball Group — Dimensional Modeling Techniques"
    link: https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/
    nota: "Referência de consulta, organizada por técnica"
---

O passo que mais se pula, e o mais barato de fazer: **declarar a granularidade
por extenso** antes de desenhar qualquer coisa. "Uma linha por município por
mês." Escrever essa frase resolve metade das ambiguidades do modelo, e a sua
ausência é a origem quase certa da agregação dupla que ninguém percebe.

Dimensão de variação lenta parece detalhe acadêmico até o município mudar de
nome, o prestador trocar de razão social ou a classificação ser revista. Em
dados públicos brasileiros, isso acontece o tempo todo.
