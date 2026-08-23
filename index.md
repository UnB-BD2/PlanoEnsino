---
layout: home
title: "Banco de Dados 2"
titulo: "Banco de Dados 2"
resumo: >-
  Como um banco de dados realmente funciona por dentro, como o dado se move
  entre sistemas, e como escolher a tecnologia certa com medição em vez de
  preferência. Ao longo do semestre, cada Squad constrói uma plataforma de
  dados completa sobre dados abertos da UnB ou dos conselhos nacionais.
---

{% include ciclo_do_dado.html %}

A disciplina segue um fio condutor único: **o ciclo de vida do dado**, do byte
gravado em disco à decisão tomada por quem lê um painel. Começamos pelo campo e
seus princípios de arquitetura; passamos por sistemas de origem, armazenamento e
ingestão; chegamos a consulta, modelagem, transformação e disponibilização; e
terminamos em segurança, privacidade e LGPD.

O conteúdo é o de *Fundamentos de Engenharia de Dados*, de Reis e Housley,
percorrido na ordem do livro.

O eixo transversal é o **Método de Decisão**: escolher tecnologia de dados é um
método, não uma preferência. Caracterizar a carga, explicitar as restrições,
levantar candidatos — incluindo a opção nula —, prototipar, medir, registrar o
que se perde e definir quando a decisão deixa de valer. Cada aplicação desse
método vira um [ADR]({{ '/adr/' | relative_url }}), e é pelo raciocínio
registrado ali que o trabalho é avaliado — não pela escolha ter sido a melhor.
