---
semana: 10
tipo: conceitual
titular: docente
modulo: "III — Modelagem analítica e transformação"
titulo: "Modelagem alternativa e ELT"
resumo: >-
  Data Vault, wide tables e por que a ordem das letras mudou de ETL para ELT — com consequências que vão além da sigla.
objetivos:
  - "Situar Data Vault e one big table como respostas a problemas que a estrela resolve mal"
  - "Explicar por que a transformação migrou para depois da carga, e o que isso pressupõe"
  - "Organizar transformações em camadas com critério de promoção entre elas"
leitura_previa:
  - titulo: "Fundamentals of Data Engineering, cap. 8"
    nota: "Queries, Modeling, and Transformation"
  - titulo: "dbt — How we structure our dbt projects"
    link: https://docs.getdbt.com/best-practices/how-we-structure/1-guide-overview
complementar:
  - titulo: "SQLMesh — Overview"
    link: https://sqlmesh.readthedocs.io/en/stable/
---

A ordem mudou de ETL para ELT porque armazenamento ficou barato e computação
ficou elástica — não porque alguém descobriu um princípio melhor. Vale registrar
essa causa: quando a premissa econômica mudar, a recomendação muda junto, e
quem entendeu só a sigla fica preso a ela.

*Bronze, silver, gold* é convenção útil e vazia ao mesmo tempo. Útil porque
comunica; vazia porque não define **critério de promoção**. Defina o seu: o que
precisa ser verdade para um modelo sair de uma camada e entrar na seguinte?
