---
semana: 6
tipo: laboratorio
titular: monitoria
modulo: "II — Sistemas distribuídos e ingestão"
titulo: "Replicação e particionamento — um experimento"
resumo: >-
  Uma réplica, uma partição de rede provocada, e a medição do atraso de replicação sob carga.
objetivos:
  - "Subir uma réplica de leitura e medir o atraso de replicação sob escrita contínua"
  - "Provocar uma partição de rede entre primário e réplica e observar o comportamento"
  - "Medir o efeito do particionamento por data numa consulta com recorte temporal"
requisitos_ambiente:
  - "PostgreSQL 16 com dois contêineres — primário e réplica — no mesmo Compose"
  - "Uma carga de escrita contínua, ainda que simples"
entregavel: >-
  Medição do atraso de replicação sob carga, e o registro do que aconteceu durante a partição provocada, no diário de bordo.
---

Derrubar a rede entre dois contêineres é uma linha de `docker network
disconnect`. O que acontece depois — quem aceita escrita, o que a réplica serve,
quanto tempo leva para reconciliar — é a parte que nenhum diagrama de
arquitetura mostra.
