---
semana: 7
tipo: conceitual
titular: docente
modulo: "II — Sistemas distribuídos e ingestão"
titulo: "Famílias não relacionais"
resumo: >-
  Documento, chave-valor, colunar largo e grafo: o que cada família otimiza, o que cobra em troca, e como decidir entre elas com método.
objetivos:
  - "Caracterizar uma carga de trabalho de modo que ela discrimine entre famílias de banco"
  - "Explicar o que cada família ganha ao abrir mão de garantias do modelo relacional"
  - "Conduzir a comparação pelo Método de Decisão, com a opção nula incluída"
leitura_previa:
  - titulo: "NoSQL Distilled, cap. 2 a 5"
    nota: "Os modelos de agregação e o de grafo"
  - titulo: "Designing Data-Intensive Applications, cap. 2"
    nota: "Data Models and Query Languages"
complementar:
  - titulo: "MongoDB — Data Modeling"
    link: https://www.mongodb.com/docs/manual/data-modeling/
  - titulo: "Neo4j — Graph Data Modeling"
    link: https://neo4j.com/docs/getting-started/data-modeling/
---

O erro que este Encontro existe para desarmar: escolher a família pela
reputação. A pergunta certa nunca é "documento é melhor que relacional?", e sim
"para **esta** carga, com **este** padrão de acesso e **estas** restrições, o
que cada família me dá e o que me tira?".

A opção nula — continuar no PostgreSQL — costuma ganhar mais vezes do que o
mercado sugere, inclusive porque ele acumulou tipo JSON, busca textual e vetor.
Ganhar por medição é diferente de ganhar por inércia, e a diferença é o ADR.
