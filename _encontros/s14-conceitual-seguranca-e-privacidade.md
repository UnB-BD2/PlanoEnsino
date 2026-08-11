---
semana: 14
tipo: conceitual
titular: docente
modulo: "IV — Segurança, privacidade e o futuro"
titulo: "Segurança e privacidade"
resumo: >-
  Pessoas, processos e tecnologia: privilégio mínimo, criptografia, monitoramento — e a LGPD, que o livro não trata e o projeto exige.
objetivos:
  - "Aplicar o princípio do privilégio mínimo a uma plataforma de dados concreta"
  - "Distinguir criptografia em repouso de criptografia em trânsito e o que cada uma protege"
  - "Projetar registro, monitoramento e alerta que sirvam a uma investigação real"
  - "Identificar dado pessoal numa base pública e declarar base legal, retenção e descarte segundo a LGPD"
leitura_previa:
  - titulo: "Fundamentos de Engenharia de Dados, cap. 10"
    nota: "Na íntegra — pessoas, processos e tecnologia. É curto"
  - titulo: "Lei nº 13.709/2018 (LGPD), arts. 5º, 6º, 7º, 11 e 18"
    link: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm
    nota: "Leia os artigos, não um resumo. São poucas páginas e o texto é claro"
complementar:
  - titulo: "Fundamentos de Engenharia de Dados, Apêndice B"
    nota: "Rede em nuvem: zonas, regiões e custos de saída de dados"
  - titulo: "PostgreSQL — Row Security Policies"
    link: https://www.postgresql.org/docs/current/ddl-rowsecurity.html
---

O capítulo começa por **pessoas**, e essa ordem é a tese: a maior parte dos
incidentes não explora uma falha criptográfica, explora alguém. Ferramenta não
compensa hábito.

**Privilégio mínimo** é o princípio mais fácil de enunciar e o mais violado em
projeto de disciplina. Uma credencial de superusuário no `docker-compose.yml`
porque "é só desenvolvimento" é exatamente o hábito que o capítulo pede para não
formar — e é o mesmo arquivo que vira produção em algum momento.

A **LGPD** não está no livro, que é norte-americano, e entra aqui como
complemento local obrigatório. Ela muda o problema de forma concreta: dado aberto
governamental **não** é automaticamente dado sem titular. Base de benefício
social, de contrato, de atendimento — todas carregam pessoa identificável ou
reidentificável, e agregar duas bases anonimizadas pode reidentificar quem nenhuma
das duas identificava sozinha. A E4 cobra essa análise por escrito.
