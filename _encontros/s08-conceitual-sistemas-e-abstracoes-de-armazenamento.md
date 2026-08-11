---
semana: 8
tipo: conceitual
titular: docente
modulo: "II — O ciclo em detalhes: origem, armazenamento e ingestão"
titulo: "Sistemas e abstrações de armazenamento"
resumo: >-
  De arquivo, bloco e objeto a warehouse, lake e lakehouse: as camadas que o mercado empilha sobre os ingredientes crus.
objetivos:
  - "Distinguir armazenamento de arquivos, de blocos e de objetos pelo que cada um garante e proíbe"
  - "Explicar consistência eventual e consistência forte a partir de um cenário concreto"
  - "Comparar data warehouse, data lake e lakehouse pelo problema que cada um resolve"
  - "Justificar a separação entre computação e armazenamento e o que ela cobra"
leitura_previa:
  - titulo: "Fundamentos de Engenharia de Dados, cap. 6"
    nota: "Da seção de sistemas de armazenamento até o fim do capítulo"
complementar:
  - titulo: "Apache Iceberg — Table Spec"
    link: https://iceberg.apache.org/spec/
    nota: "Como uma tabela aberta dá semântica de tabela a um monte de arquivos em objeto"
  - titulo: "Designing Data-Intensive Applications, cap. 5"
    nota: "Replicação e consistência com mais profundidade"
---

Armazenamento de objetos é a fundação silenciosa da maior parte das plataformas
modernas, e a característica dele que mais confunde é o que ele **não** faz:
objeto não se altera no lugar. Você reescreve o objeto inteiro. Toda a
engenhosidade de Iceberg e Delta existe para dar semântica de tabela — com
`UPDATE`, `DELETE` e viagem no tempo — sobre um substrato que só sabe escrever
arquivos novos.

**Consistência eventual** merece um exemplo, não uma definição: você escreve um
arquivo, lista o diretório e ele não está lá. Não é bug; é o contrato. Pipelines
que assumem leitura-após-escrita quebram de forma intermitente, que é o pior modo
de quebrar.

A **separação entre computação e armazenamento** é o que torna o lakehouse
economicamente possível: dado parado custa barato, e você paga processamento só
quando pergunta. O preço é a rede entre os dois, que passa a ser o gargalo.
