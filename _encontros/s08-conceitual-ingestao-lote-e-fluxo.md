---
semana: 8
tipo: conceitual
titular: docente
modulo: "II — Sistemas distribuídos e ingestão"
titulo: "Ingestão: lote e fluxo contínuo"
resumo: >-
  Batch e streaming, semântica de entrega, janelas e dado atrasado — e os formatos abertos que recebem o resultado.
objetivos:
  - "Escolher entre lote e fluxo a partir da latência exigida e do custo de operação"
  - "Distinguir as semânticas de entrega e o que cada uma exige do consumidor"
  - "Justificar a escolha entre Parquet puro e uma tabela aberta como Iceberg ou Delta"
leitura_previa:
  - titulo: "Fundamentals of Data Engineering, cap. 7"
    nota: "Ingestion, na íntegra"
  - titulo: "Lakehouse: A New Generation of Open Platforms…"
    link: https://www.cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf
    nota: "O paper do CIDR 2021. Leia com ceticismo: é também um artigo de posição"
complementar:
  - titulo: "Apache Parquet — File Format"
    link: https://parquet.apache.org/docs/file-format/
  - titulo: "Apache Iceberg — Table Spec"
    link: https://iceberg.apache.org/spec/
---

"Exatamente uma vez" quase nunca é o que parece. Na prática, o que existe é
entrega no mínimo uma vez somada a **processamento idempotente** — e a diferença
entre as duas formulações é o que separa um pipeline que sobrevive a um
reprocessamento de um que duplica silenciosamente a receita do município.

Esta é a Semana da **E2**.
