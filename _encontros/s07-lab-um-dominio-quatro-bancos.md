---
semana: 7
tipo: laboratorio
titular: monitoria
modulo: "II — Sistemas distribuídos e ingestão"
titulo: "Um domínio, quatro bancos"
resumo: >-
  A mesma consulta do domínio da Squad, implementada em famílias diferentes, e medida.
objetivos:
  - "Modelar um mesmo recorte do domínio em pelo menos duas famílias distintas"
  - "Medir a mesma pergunta nas duas modelagens, com o mesmo dado"
  - "Reunir a evidência que sustenta um ADR de escolha de família"
requisitos_ambiente:
  - "Docker Compose com PostgreSQL e ao menos um entre MongoDB, Neo4j e Redis"
  - "Um recorte do domínio pequeno o bastante para carregar em minutos"
entregavel: >-
  Comparação medida no diário de bordo: mesma pergunta, duas modelagens, tempo e complexidade de escrita da consulta.
---

Cuidado com a comparação injusta: modelar bem no banco que você conhece e mal no
que você não conhece produz o resultado que você já esperava. Se o número
confirmar exatamente a sua intuição inicial, desconfie do experimento antes de
comemorar.
