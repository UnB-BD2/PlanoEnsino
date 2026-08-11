---
semana: 7
tipo: conceitual
titular: docente
modulo: "II — O ciclo em detalhes: origem, armazenamento e ingestão"
titulo: "Armazenamento: os ingredientes crus"
resumo: >-
  Disco, memória, rede e CPU; serialização em linha, coluna e híbrida; compressão e cache — o que está embaixo de toda escolha de armazenamento.
objetivos:
  - "Comparar disco magnético, SSD e memória por latência, taxa e custo, e dizer o que cada um impõe ao projeto"
  - "Distinguir serialização baseada em linhas, colunar e híbrida a partir do padrão de acesso"
  - "Escolher um algoritmo de compressão pelo compromisso entre taxa e custo de CPU"
  - "Explicar por que cache é decisão de arquitetura, e não otimização de última hora"
leitura_previa:
  - titulo: "Fundamentos de Engenharia de Dados, cap. 6"
    nota: "Até o fim da seção de componentes básicos do armazenamento"
  - titulo: "Fundamentos de Engenharia de Dados, Apêndice A"
    nota: "Serialização e compressão em detalhe. Curto e denso"
complementar:
  - titulo: "Apache Parquet — File Format"
    link: https://parquet.apache.org/docs/file-format/
    nota: "Serialização híbrida na prática: grupos de linha com armazenamento colunar dentro"
---

Este capítulo parece elementar e não é. A pergunta "linha ou coluna?" não se
responde com preferência: responde-se com o padrão de acesso. Ler três colunas
de uma tabela de duzentas é barato em formato colunar e caro em formato de linha,
e o inverso vale para ler um registro inteiro. Parquet é híbrido justamente
porque a escolha não é binária.

Compressão é onde a intuição erra mais. Comprimir mais nem sempre é melhor: gzip
reduz mais que Snappy e custa muito mais CPU para descomprimir. Se a carga lê o
mesmo arquivo mil vezes, você paga essa CPU mil vezes para economizar disco uma
vez. É uma decisão medível — e portanto material de ADR.

Esta é a Semana da **E1**: a fonte transacional modelada e populada, com o esquema
físico justificado por medição. Vale reler o que a
[E1]({{ '/projeto/e1/' | relative_url }}) cobra antes de seguir.
