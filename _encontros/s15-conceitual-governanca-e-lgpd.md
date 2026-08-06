---
semana: 15
tipo: conceitual
titular: docente
modulo: "IV — Dados não estruturados, IA e governança"
titulo: "Governança, segurança e LGPD"
resumo: >-
  Catálogo, linhagem, classificação, anonimização, controle de acesso e retenção — e a LGPD aplicada a uma plataforma de dados de verdade.
objetivos:
  - "Classificar o dado da própria plataforma e identificar o que é dado pessoal"
  - "Distinguir anonimização de pseudonimização, e explicar por que a distinção é jurídica além de técnica"
  - "Implementar controle de acesso em nível de linha e de coluna"
  - "Definir política de retenção e descarte, e o mecanismo que a executa"
  - "Situar mesh, lakehouse e contratos entre domínios como respostas organizacionais"
leitura_previa:
  - titulo: "Lei nº 13.709/2018 — LGPD, arts. 5º, 6º, 7º, 11 e 18"
    link: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm
    nota: "Leia os artigos, não um resumo. São poucas páginas e o texto é claro"
  - titulo: "Fundamentals of Data Engineering, cap. 2"
    nota: "A corrente de segurança e gestão de dados"
complementar:
  - titulo: "PostgreSQL — Row Security Policies"
    link: https://www.postgresql.org/docs/current/ddl-rowsecurity.html
  - titulo: "DAMA-DMBOK, cap. 7 e 11"
    nota: "Segurança e metadados"
---

Dado anonimizado sai do escopo da LGPD; dado pseudonimizado **não sai**. A
diferença é se existe caminho razoável de volta à pessoa — e "razoável" é
critério jurídico, informado por técnica. Trocar o CPF por um identificador
sequencial e guardar a tabela de correspondência é pseudonimização, ainda que
pareça o contrário.

Reagregar dado público anonimizado pode reidentificar pessoas, e dados abertos
brasileiros têm exemplos reais disso. Vale examinar se a plataforma da sua Squad
tem essa exposição.

Esta é a última Semana de conteúdo. A Semana 16 é defesa e retrospectiva; a
**E4** vence lá.
