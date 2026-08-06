---
semana: 11
tipo: conceitual
titular: docente
modulo: "III — Modelagem analítica e transformação"
titulo: "Qualidade, testes e contratos de dados"
resumo: >-
  O que se testa num fluxo de dados, por que teste de software não basta, e o que um contrato de dados precisa ter para valer alguma coisa.
objetivos:
  - "Nomear as dimensões de qualidade e escolher a que importa para o domínio"
  - "Distinguir teste de esquema, de volume e de distribuição pelo tipo de erro que cada um pega"
  - "Especificar um contrato de dados com produtor, consumidor e consequência de quebra"
  - "Projetar uma transformação idempotente e reprocessável"
leitura_previa:
  - titulo: "Fundamentals of Data Engineering, cap. 9"
    nota: "Serving Data for Analytics — a seção de qualidade e confiança"
  - titulo: "Data Contracts, de Chad Sanderson — texto introdutório"
    link: https://dataproducts.substack.com/p/the-rise-of-data-contracts
complementar:
  - titulo: "Great Expectations — Core concepts"
    link: https://docs.greatexpectations.io/docs/core/introduction/
  - titulo: "dbt — Tests"
    link: https://docs.getdbt.com/docs/build/data-tests
---

Teste de software verifica que o código faz o que se espera. Teste de dados
verifica que **o mundo continua parecido com o que era** — e o mundo muda sem
avisar. É uma diferença de natureza, não de grau.

O teste que salva não é `not_null` numa coluna que nunca foi nula. É o de
distribuição: a média que pula, a série que some, o município que desaparece
entre dois anos. Erro de dado é, quase sempre, silencioso.
