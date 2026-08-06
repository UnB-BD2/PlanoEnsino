---
semana: 3
tipo: laboratorio
titular: monitoria
modulo: "I — Fundamentos e internals"
titulo: "Índices, seletividade e o otimizador"
resumo: >-
  Criar, medir e derrubar índices no banco da Squad até que a decisão esteja sustentada por número, e não por intuição.
objetivos:
  - "Medir o efeito de um índice na consulta que a pergunta de gestão exige, antes e depois"
  - "Provocar deliberadamente uma escolha ruim do otimizador e explicar por que ela aconteceu"
  - "Quantificar o custo de escrita que o índice introduz"
requisitos_ambiente:
  - "PostgreSQL 16 via Docker Compose, com o esquema da E1 em andamento"
  - "Volume suficiente para que a varredura sequencial não seja sempre a melhor opção"
entregavel: >-
  Tabela comparativa no diário de bordo: consulta, plano antes, plano depois, tempo e páginas lidas em cada caso. É a medição que o ADR da E1 vai citar.
---

Rode `ANALYZE` e observe o plano mudar sem que nada no dado tenha mudado. É a
demonstração mais econômica de que o otimizador decide com base em estatística,
e de que estatística velha é uma causa comum de plano ruim em produção.
