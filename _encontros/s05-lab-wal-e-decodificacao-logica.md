---
semana: 5
tipo: laboratorio
titular: monitoria
modulo: "I — Fundamentos e internals"
titulo: "WAL e decodificação lógica na prática"
resumo: >-
  Ligar um slot de replicação lógica no banco da Squad e ver as mudanças saindo, uma a uma.
objetivos:
  - "Configurar wal_level e criar um slot de replicação lógica"
  - "Consumir o fluxo de mudanças e correlacioná-lo com as transações que o geraram"
  - "Observar o efeito de um slot não consumido no crescimento do WAL"
requisitos_ambiente:
  - "PostgreSQL 16 via Docker Compose, com wal_level=logical"
  - "Esquema da E1 funcionando, com dado para alterar"
entregavel: >-
  Demonstração no repositório: script que altera linhas no OLTP e a saída correspondente do slot lógico. É a base técnica da E2.
---

Deixe um slot de replicação criado e **não consumido** por alguns minutos, e
observe o WAL crescer. É a falha de operação mais comum de quem monta CDC pela
primeira vez, e ela derruba o banco por disco cheio — vale ver acontecer aqui, e
não na véspera da E2.

Esta é a Semana da **E1**. O laboratório é curto de propósito; o resto do tempo
é da Squad.
