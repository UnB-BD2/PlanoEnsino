---
semana: 3
tipo: conceitual
titular: docente
modulo: "I — Fundamentos e componentes essenciais"
titulo: "Princípios de uma boa arquitetura de dados"
resumo: >-
  Nove princípios que separam arquitetura de preferência, e o que significa projetar para a decisão que ainda não foi tomada.
objetivos:
  - "Distinguir arquitetura corporativa de arquitetura de dados"
  - "Aplicar os nove princípios de boa arquitetura a um caso concreto"
  - "Classificar uma decisão como reversível ou irreversível e ajustar o rigor à classificação"
  - "Justificar por que planejar para falhas é requisito, e não pessimismo"
leitura_previa:
  - titulo: "Fundamentos de Engenharia de Dados, cap. 3"
    nota: "Até a seção de conceitos de arquitetura — os nove princípios são o núcleo desta Semana"
complementar:
  - titulo: "Architectural Decision Records, de Michael Nygard"
    link: https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions
    nota: "O formato de ADR que a disciplina adota, na fonte"
---

Dos nove princípios, dois merecem atenção porque contradizem o instinto.

**"Tome decisões que possam ser revertidas."** A pergunta útil não é "qual é a
melhor tecnologia?", e sim "o quanto custa mudar de ideia?". Decisão barata de
reverter pode ser tomada rápido e errada; decisão cara pede medição. É o
princípio que sustenta o Método de Decisão desta disciplina e que separa um ADR
de nota 9 de um de nota 5.

**"Planeje para falhas."** Não é pessimismo — é aritmética. Todo componente tem
disponibilidade menor que 1, e a plataforma tem muitos componentes. Projetar como
se nada falhasse é projetar para um sistema que não existe.

Repare que o princípio de **priorizar a segurança** aparece aqui, na terceira
Semana, e não na décima quarta. O capítulo 10 aprofunda; o princípio, porém, é
de arquitetura, e chega antes de propósito.
