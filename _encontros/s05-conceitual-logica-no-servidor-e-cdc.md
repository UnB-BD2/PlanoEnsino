---
semana: 5
tipo: conceitual
titular: docente
modulo: "I — Fundamentos e internals"
titulo: "Lógica no servidor e captura de mudanças"
resumo: >-
  O que colocar dentro do banco e o que deixar fora; e como o log de escrita, que existe para durabilidade, vira o alicerce do CDC.
objetivos:
  - "Decidir, com critério explícito, o que fica em função ou trigger e o que fica na aplicação"
  - "Explicar o papel do write-ahead log na durabilidade e na recuperação"
  - "Descrever como a decodificação lógica transforma o WAL num fluxo de mudanças consumível"
leitura_previa:
  - titulo: "Fundamentals of Data Engineering, cap. 7"
    nota: "Ingestion — a seção de CDC"
  - titulo: "PostgreSQL — Logical Decoding"
    link: https://www.postgresql.org/docs/current/logicaldecoding.html
complementar:
  - titulo: "Debezium — Architecture"
    link: https://debezium.io/documentation/reference/stable/architecture.html
  - titulo: "Using logs to build a solid data infrastructure"
    link: https://martin.kleppmann.com/2015/05/27/logs-for-data-infrastructure.html
    nota: "O argumento do log como abstração unificadora, que originou boa parte da arquitetura de streaming atual"
---

Há uma bonita reviravolta conceitual aqui. O WAL existe por um motivo puramente
defensivo: garantir que uma transação confirmada sobreviva a uma queda de
energia. Décadas depois, descobriu-se que esse mesmo registro é a fonte mais
fiel e mais barata de "o que mudou no banco" — e uma indústria inteira de
integração de dados nasceu de ler um arquivo que ninguém pretendia publicar.

A E2 vive dessa reviravolta.
