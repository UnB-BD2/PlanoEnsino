---
semana: 13
tipo: conceitual
titular: docente
modulo: "III — Consultas, modelagem, transformação e disponibilização"
titulo: "Disponibilizando dados para análise, ML e ETL reverso"
resumo: >-
  O último estágio do ciclo: produtos de dados, camadas semânticas e de métricas, e o dado que volta para o sistema operacional.
objetivos:
  - "Definir produto de dados e o que distingue disponibilizar de apenas dar acesso"
  - "Projetar uma camada semântica e de métricas que impeça a mesma métrica de ter dois valores"
  - "Distinguir análise de negócios, operacional e incorporada pelos requisitos que impõem"
  - "Explicar o que é ETL reverso e por que ele fecha o ciclo de vida do dado"
leitura_previa:
  - titulo: "Fundamentos de Engenharia de Dados, cap. 9"
    nota: "Na íntegra. Fecha a Parte II e o percurso pelo ciclo de vida"
complementar:
  - titulo: "dbt — Semantic layer e métricas"
    link: https://docs.getdbt.com/docs/build/build-metrics-intro
    nota: "Definição de métrica como código, versionada junto com a transformação"
---

O capítulo abre com **confiança**, e não com tecnologia — porque o modo mais
comum de uma plataforma falhar não é ficar fora do ar: é entregar um número que
ninguém acredita. Basta duas telas mostrarem "receita" com valores diferentes uma
vez, e o painel inteiro perde autoridade.

É esse o problema que a **camada semântica e de métricas** resolve. Definir
"município atendido" ou "contrato ativo" num lugar só, versionado, faz a
definição parar de ser reinventada em cada consulta. Sem ela, a plataforma serve
dados; com ela, serve respostas.

**ETL reverso** é o movimento que fecha o ciclo: o dado tratado volta para o
sistema operacional onde alguém age. Analítico deixa de ser um terminal e vira
uma volta. É a diferença entre um painel que informa e um dado que muda o que
acontece amanhã.

Esta é a Semana da **E3**: camada analítica transformada, testada e orquestrada.
E é onde começam os **Seminários Técnicos**.
