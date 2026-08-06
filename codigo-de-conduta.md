---
layout: plano-ensino
title: "Código de Conduta"
titulo: "Código de Conduta"
permalink: /codigo-de-conduta/
eyebrow: "Regra da disciplina"
# O texto vive na raiz; o botão "editar no GitHub" precisa levar até lá.
editar: CODE_OF_CONDUCT.md
resumo: >-
  O compromisso de convivência que vale neste repositório, nos repositórios das
  Squads e em qualquer canal da disciplina.
---

{%- comment -%}
  O texto canônico vive em CODE_OF_CONDUCT.md, na raiz — é de lá que o GitHub o
  lê para o perfil de comunidade do repositório. Esta página o inclui em vez de
  copiá-lo: duas cópias divergiriam, e a que estivesse errada seria justamente
  a que alguém leu.

  O arquivo está em `exclude` no _config.yml, o que impede o Jekyll de publicá-lo
  como página solta — mas não impede o include_relative de lê-lo.

  O `remove_first` tira o <h1> do arquivo, que aqui duplicaria o título do
  layout e quebraria a hierarquia de headings. Se alguém renomear aquele título,
  o duplicado reaparece na primeira visita à página — falha visível, que é a
  que se conserta.
{%- endcomment -%}

{% capture codigo_de_conduta %}{% include_relative CODE_OF_CONDUCT.md %}{% endcapture %}
{{ codigo_de_conduta | remove_first: "# Código de Conduta" }}
