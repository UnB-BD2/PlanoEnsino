---
semana: 9
tipo: conceitual
titular: docente
modulo: "II — O ciclo em detalhes: origem, armazenamento e ingestão"
titulo: "Ingestão"
resumo: >-
  Como o dado sai da origem e chega ao armazenamento: lote e fluxo, as garantias de entrega, e o que fazer com o que chega atrasado.
objetivos:
  - "Distinguir dados limitados de ilimitados e escolher a frequência de ingestão a partir do requisito, não do hábito"
  - "Comparar os padrões push, pull e poll e o custo operacional de cada um"
  - "Projetar ingestão em lote idempotente, com snapshot ou extração diferencial"
  - "Tratar dado atrasado, reordenação e reprocessamento num fluxo contínuo"
leitura_previa:
  - titulo: "Fundamentos de Engenharia de Dados, cap. 7"
    nota: "Na íntegra — dados limitados × ilimitados, frequência, e as considerações de lote e de streaming"
complementar:
  - titulo: "Kafka — Design"
    link: https://kafka.apache.org/documentation/#design
    nota: "Log distribuído, garantias de entrega e o que 'exactly-once' realmente significa"
---

A frase mais importante do capítulo é que **lote é um caso particular de fluxo**.
Dado do mundo real é ilimitado e contínuo; lote é uma decisão de recortá-lo em
pedaços por conveniência de processamento. Quem entende a ordem nessa direção
projeta melhor do que quem trata streaming como "lote mais rápido".

**Dado atrasado** é onde os projetos quebram. O evento aconteceu às 23h58 e
chegou às 00h03: ele pertence a ontem ou a hoje? Qualquer resposta é defensável,
mas só uma pode estar implementada, e ela precisa estar escrita. Janela sem
política de atraso declarada é um número que muda quando ninguém está olhando.

Idempotência não é sofisticação: é o que permite reexecutar o pipeline depois de
uma falha sem duplicar tudo. Reprocessamento vai acontecer. A pergunta é se você
projetou para ele ou vai descobrir na madrugada.
