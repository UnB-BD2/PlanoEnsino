---
semana: 8
tipo: laboratorio
titular: monitoria
modulo: "II — Sistemas distribuídos e ingestão"
titulo: "Do CDC ao formato aberto"
resumo: >-
  Fechar o caminho: mudança no OLTP, fluxo, e chegada em Parquet ou tabela aberta.
objetivos:
  - "Ligar o fluxo de CDC a um destino em formato aberto"
  - "Demonstrar a idempotência do caminho, reexecutando e conferindo a contagem"
  - "Provocar um dado atrasado e observar em que janela ele cai"
requisitos_ambiente:
  - "Docker Compose com PostgreSQL, Redpanda ou Kafka, Debezium e MinIO"
  - "O slot lógico da Semana 5 funcionando"
entregavel: >-
  Caminho completo demonstrado: script que altera o OLTP e o arquivo resultante no armazenamento analítico, com a contagem conferida antes e depois de uma reexecução.
---

Reexecute a ingestão inteira e confira a contagem. Se ela dobrou, o caminho não
é idempotente — e a rubrica da E2 cobra isso como requisito, não como refinamento.
