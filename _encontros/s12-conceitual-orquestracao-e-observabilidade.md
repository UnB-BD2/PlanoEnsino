---
semana: 12
tipo: conceitual
titular: docente
modulo: "III — Modelagem analítica e transformação"
titulo: "Orquestração e observabilidade"
resumo: >-
  Grafo de dependência, agendamento, backfill e retry; e as métricas que dizem se o dado ainda merece confiança.
objetivos:
  - "Modelar um fluxo como grafo de dependência e justificar a granularidade das tarefas"
  - "Projetar backfill e retry sem produzir efeito colateral duplicado"
  - "Definir SLA e freshness para uma tabela de consumo"
  - "Tratar custo como métrica de engenharia, e não como assunto de outra área"
leitura_previa:
  - titulo: "Fundamentals of Data Engineering, cap. 2 e 10"
    nota: "As correntes de DataOps e orquestração"
  - titulo: "Airflow — Core Concepts"
    link: https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/index.html
complementar:
  - titulo: "Dagster — Assets vs. tasks"
    link: https://docs.dagster.io/guides/build/assets
    nota: "A tese de orientar a orquestração ao ativo de dado, e não à tarefa"
---

Um grafo que nunca falhou não foi exercitado. *Retry* que nunca disparou e
*backfill* que nunca rodou são código não testado no caminho mais crítico do
sistema — aquele que só é usado quando algo já deu errado.

Custo entra aqui, e não numa aula de gestão: uma consulta mal escrita que roda
de hora em hora é uma decisão de engenharia com consequência financeira, e quem
a escreveu é quem tem como perceber.

Esta é a Semana da **E3**.
