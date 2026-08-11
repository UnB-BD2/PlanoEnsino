---
semana: 12
tipo: conceitual
titular: docente
modulo: "III — Consultas, modelagem, transformação e disponibilização"
titulo: "Transformações"
resumo: >-
  Transformação em lote e em fluxo, visualizações materializadas, federação e virtualização — e os elementos subjacentes entrando em ação.
objetivos:
  - "Organizar transformações em camadas com critério explícito de promoção entre elas"
  - "Escolher entre visualização materializada, federação e virtualização de consultas"
  - "Projetar uma transformação idempotente e reprocessável"
  - "Aplicar gerenciamento de dados, DataOps e orquestração à camada de transformação"
leitura_previa:
  - titulo: "Fundamentos de Engenharia de Dados, cap. 8"
    nota: "A seção de transformações, e os elementos subjacentes no fim do capítulo"
complementar:
  - titulo: "dbt — Tests"
    link: https://docs.getdbt.com/docs/build/data-tests
    nota: "Teste de dado como parte da transformação, não como etapa separada"
  - titulo: "Great Expectations — Core concepts"
    link: https://docs.greatexpectations.io/docs/core/introduction/
---

Esta é a Semana em que os **elementos subjacentes** deixam de ser abstração. A
seção final do capítulo mostra gerenciamento de dados, DataOps e orquestração
aplicados à transformação — e é daí que saem dois requisitos do Projeto
Integrado que não têm Semana própria: testes de qualidade e orquestração
agendada.

Transformação versionada e declarativa muda o que significa "corrigir um número".
Sem ela, alguém roda um `UPDATE` em produção e o número muda sem rastro. Com ela,
a correção é um *commit*, revisável, reexecutável e reversível — o princípio de
decisão reversível do capítulo 3 aplicado ao dado.

**Visualização materializada, federação e virtualização** resolvem o mesmo
desconforto de formas opostas: materializar paga custo antes e entrega rápido;
federar e virtualizar não pagam custo antes e podem entregar devagar, ou nem
entregar, se a origem estiver fora do ar. É compromisso, não moda.
