---
semana: 4
tipo: conceitual
titular: docente
modulo: "I — Fundamentos e internals"
titulo: "Transações, concorrência e projeto físico"
resumo: >-
  ACID na prática, os níveis de isolamento e as anomalias que cada um deixa passar — e o que isso implica para o desenho do esquema.
objetivos:
  - "Relacionar cada nível de isolamento às anomalias que ele permite"
  - "Explicar como o MVCC implementa isolamento sem bloqueio de leitura"
  - "Justificar uma desnormalização deliberada a partir da carga, e não da conveniência"
leitura_previa:
  - titulo: "Designing Data-Intensive Applications, cap. 7"
    nota: "Transactions"
  - titulo: "Database System Concepts, cap. 17 e 18"
    nota: "Transações e controle de concorrência"
complementar:
  - titulo: "PostgreSQL — Transaction Isolation"
    link: https://www.postgresql.org/docs/current/transaction-iso.html
  - titulo: "Jepsen — Consistency Models"
    link: https://jepsen.io/consistency
    nota: "O mapa dos modelos de consistência, útil já pensando na Semana 6"
---

O ponto que costuma desestabilizar a turma: o nível de isolamento padrão do
PostgreSQL é *read committed*, e ele **permite** anomalias que a maioria dos
sistemas escritos em cima dele assume não existirem. Não é defeito — é uma
escolha de compromisso, e quem escreve a aplicação precisa saber qual foi.
