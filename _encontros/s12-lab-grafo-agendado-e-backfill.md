---
semana: 12
tipo: laboratorio
titular: monitoria
modulo: "III — Modelagem analítica e transformação"
titulo: "Grafo agendado, retry e backfill"
resumo: >-
  Pôr o fluxo da Squad para rodar sozinho — e depois quebrá-lo de propósito para ver o que acontece.
objetivos:
  - "Montar o grafo de dependência do fluxo do domínio, agendado"
  - "Provocar a falha de uma dependência e observar o retry"
  - "Executar um backfill de um período e conferir que ele não duplicou nada"
requisitos_ambiente:
  - "Airflow ou Dagster em Docker Compose"
  - "As transformações da Semana 10 e os testes da Semana 11 funcionando"
entregavel: >-
  Grafo agendado no repositório, com evidência de um retry disparado e de um backfill executado — logs no diário de bordo.
---

Derrube uma dependência de propósito no meio da execução. O que o orquestrador
faz a seguir é a única informação que importa sobre ele.
