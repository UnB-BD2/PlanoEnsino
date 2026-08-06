---
semana: 2
tipo: laboratorio
titular: monitoria
modulo: "I — Fundamentos e internals"
titulo: "Medindo páginas e lendo planos de execução"
resumo: >-
  Primeiro contato com a medição: quanto ocupa uma tabela, onde o espaço vai parar, e o que o EXPLAIN está de fato dizendo.
objetivos:
  - "Medir o tamanho físico de tabela, índice e TOAST com as funções de administração do PostgreSQL"
  - "Ler um plano de execução e identificar o método de acesso escolhido"
  - "Relacionar o número de páginas lidas ao tempo de resposta observado"
requisitos_ambiente:
  - "PostgreSQL 16 via Docker Compose"
  - "Um recorte do domínio da Squad já carregado, ainda que parcial"
  - "psql ou outro cliente SQL de sua preferência"
entregavel: >-
  Registro no diário de bordo da Squad com as medições da sessão: tamanho de cada tabela, número de páginas e o plano de execução da consulta que a pergunta de gestão exige.
---

O objetivo não é otimizar nada hoje. É estabelecer a **linha de base**: sem
medir antes, não há como afirmar depois que algo melhorou — e a rubrica de ADR
cobra exatamente isso.

Guarde a saída do `EXPLAIN (ANALYZE, BUFFERS)` desta sessão no repositório. Ela
é o "antes" que a E1 vai comparar com o "depois".

