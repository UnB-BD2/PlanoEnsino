---
semana: 4
tipo: laboratorio
titular: monitoria
modulo: "I — Fundamentos e internals"
titulo: "Reproduzindo anomalias de isolamento"
resumo: >-
  Duas sessões psql lado a lado, e cada anomalia acontecendo de propósito.
objetivos:
  - "Reproduzir leitura não repetível e leitura fantasma em read committed"
  - "Observar a mesma sequência falhar em serializable, e explicar por quê"
  - "Provocar e diagnosticar um deadlock"
requisitos_ambiente:
  - "PostgreSQL 16 via Docker Compose"
  - "Dois terminais psql abertos simultaneamente no mesmo banco"
entregavel: >-
  Roteiro reproduzível no repositório da Squad: a sequência exata de comandos que produz cada anomalia, com a saída observada.
---

Anomalia de isolamento é o tipo de erro que não aparece em teste e aparece em
produção sob carga. Reproduzi-la à mão, uma vez, muda a forma como você lê
`BEGIN` pelo resto da carreira.
