---
semana: 6
tipo: conceitual
titular: docente
modulo: "II — Sistemas distribuídos e ingestão"
titulo: "Compromissos de sistemas distribuídos"
resumo: >-
  Replicação, particionamento e consistência: o que se ganha ao distribuir, e a conta que sempre vem junto.
objetivos:
  - "Comparar os modos de replicação pelo que cada um garante e pelo que cada um custa em latência"
  - "Explicar particionamento e o problema de rebalanceamento"
  - "Situar um cenário concreto num modelo de consistência, em vez de recitar o teorema CAP"
leitura_previa:
  - titulo: "Designing Data-Intensive Applications, cap. 5 e 6"
    nota: "Replication e Partitioning. São os dois capítulos centrais do módulo"
complementar:
  - titulo: "Jepsen — análises de sistemas reais"
    link: https://jepsen.io/analyses
    nota: "O que os bancos prometem e o que eles entregam sob partição de rede"
  - titulo: "Designing Data-Intensive Applications, cap. 9"
    nota: "Consistency and Consensus, para quem quiser ir além"
---

"CAP" é citado com muito mais frequência do que é aplicado. O enunciado útil não
é "escolha dois entre três" — é: **quando a partição de rede acontecer, e ela
vai acontecer, o seu sistema vai recusar escrita ou vai aceitar divergência?**
Essa pergunta tem resposta concreta para cada sistema, e é ela que entra num ADR.
