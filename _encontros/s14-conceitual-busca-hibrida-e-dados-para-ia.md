---
semana: 14
tipo: conceitual
titular: docente
modulo: "IV — Dados não estruturados, IA e governança"
titulo: "Busca híbrida e dados para IA"
resumo: >-
  Léxica, semântica e híbrida; reranking; RAG como problema de engenharia de dados; feature store e o desvio entre treino e serviço.
objetivos:
  - "Combinar busca léxica e semântica, e explicar o que cada uma recupera que a outra perde"
  - "Descrever RAG como um pipeline de dados, com seus pontos de falha"
  - "Explicar feature skew e por que ele é problema de engenharia de dados"
  - "Especificar uma avaliação mínima de qualidade de recuperação"
leitura_previa:
  - titulo: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"
    link: https://arxiv.org/abs/2005.11401
    nota: "O paper original de RAG"
  - titulo: "PostgreSQL — Full Text Search"
    link: https://www.postgresql.org/docs/current/textsearch.html
    nota: "A metade léxica da busca híbrida, que já existe no banco que vocês têm"
complementar:
  - titulo: "Fundamentals of Data Engineering, cap. 11"
    nota: "Machine learning e engenharia de dados"
---

Busca semântica erra de um jeito que busca léxica não erra, e vice-versa. A
léxica não encontra "saneamento básico" quando o documento diz "esgotamento
sanitário"; a semântica traz documentos plausíveis que não contêm o número de
contrato que você digitou. Híbrido não é modismo — é a resposta a dois modos de
falha complementares.

E o ponto que fecha o módulo: **RAG é um problema de engenharia de dados.** A
qualidade da resposta é limitada pela qualidade da recuperação, que é limitada
pela qualidade do *chunking*, que é limitada pela qualidade da extração. Nada
disso é modelagem de linguagem; é pipeline.

Sem conjunto de avaliação, você não sabe se a sua busca funciona. Vinte pares de
pergunta e resposta esperada já revelam quase tudo.
