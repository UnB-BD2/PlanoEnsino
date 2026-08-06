---
semana: 13
tipo: conceitual
titular: docente
modulo: "IV — Dados não estruturados, IA e governança"
titulo: "Dados não estruturados e representações vetoriais"
resumo: >-
  Texto, imagem e log como dado de primeira classe: chunking, embeddings, medidas de similaridade e o compromisso entre recall e latência.
objetivos:
  - "Explicar como um embedding transforma similaridade semântica em distância geométrica"
  - "Escolher uma estratégia de chunking a partir da estrutura do documento"
  - "Comparar HNSW e IVF pelo compromisso entre recall, latência e custo de construção"
leitura_previa:
  - titulo: "Efficient and robust approximate nearest neighbor search using HNSW graphs"
    link: https://arxiv.org/abs/1603.09320
    nota: "O paper do HNSW. Leia a intuição do grafo em camadas"
  - titulo: "pgvector — README"
    link: https://github.com/pgvector/pgvector
complementar:
  - titulo: "Fundamentals of Data Engineering, cap. 6"
    nota: "Storage — a seção de dados não estruturados"
---

Índice vetorial é **aproximado**, e essa palavra costuma passar batida. Ele
troca *recall* por latência de forma explícita e ajustável, e o parâmetro que
controla essa troca é uma decisão de engenharia com evidência — exatamente o
material de um ADR.

*Chunking* parece detalhe de implementação e determina o teto de qualidade da
busca. Um pedaço curto demais perde contexto; longo demais dilui o sinal. Não há
valor universal: depende da estrutura do seu documento.

A partir desta Semana, o Encontro de laboratório dá lugar aos
[Seminários Técnicos](/seminarios/).
