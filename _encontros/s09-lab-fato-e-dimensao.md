---
semana: 9
tipo: laboratorio
titular: monitoria
modulo: "III — Modelagem analítica e transformação"
titulo: "Fato, dimensão e granularidade"
resumo: >-
  Desenhar o modelo dimensional do domínio da Squad e carregá-lo a partir da camada analítica da E2.
objetivos:
  - "Declarar a granularidade do fato em uma frase, e defendê-la"
  - "Construir ao menos uma dimensão de variação lenta preservando o histórico"
  - "Responder à pergunta de gestão da E1 com uma consulta sobre o modelo dimensional"
requisitos_ambiente:
  - "DuckDB ou PostgreSQL para a camada analítica"
  - "A camada em formato aberto da E2 disponível para leitura"
entregavel: >-
  Modelo dimensional versionado, com a granularidade declarada no README, e a consulta que responde à pergunta de gestão.
---

Teste do modelo: peça a alguém de outra Squad para dizer o que uma linha da sua
tabela de fato representa. Se a pessoa hesitar, a granularidade não está clara —
e o problema é do modelo, não de quem leu.
