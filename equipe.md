---
layout: page
title: "Equipe"
titulo: "Docência e monitoria"
permalink: /equipe/
resumo: >-
  Quem conduz a disciplina na Oferta 2026/2, com contato institucional.
---

{%- assign p = site.data.pessoas -%}

## Docência

<div class="grid grid--wide">
  {%- for d in p.docentes -%}
    {% include people_card.html pessoa=d %}
  {%- endfor -%}
</div>

## Monitoria

{% if p.monitoria and p.monitoria.size > 0 %}
<div class="grid grid--wide">
  {%- for mon in p.monitoria -%}
    {% include people_card.html pessoa=mon %}
  {%- endfor -%}
</div>
{% else %}
A monitoria de {{ site.oferta.codigo }} ainda não foi confirmada. Assim que for,
os contatos aparecem aqui.
{% endif %}

A monitoria acompanha as Squads no Projeto Integrado e é o primeiro canal para
dúvida de ambiente, de ferramenta e de escopo de Entrega.

## Como falar com a gente

| Assunto | Onde |
|---|---|
| Dúvida de matéria ou de Entrega | Com a monitoria |
| Nota, prazo, situação individual | Por e-mail institucional, com a docência |
| Erro no site — link quebrado, data errada, texto confuso | [Issue no repositório](https://github.com/{{ site.repository }}/issues/new/choose) ou pull request |
| Reaproveitar este material em outra instituição | Por e-mail. A licença já permite; a conversa costuma valer a pena |

Assunto de nota e de situação individual não vai para *issue* pública do
repositório — este espaço é do material da disciplina, e é indexado.

## Sobre os dados desta página

Aqui só aparece dado **institucional** de quem tem vínculo docente ou de
monitoria: nome, papel, e-mail da universidade e perfis públicos de currículo.

Nenhuma página deste site identifica estudante sem consentimento registrado. A
[vitrine de projetos]({{ '/blog/' | relative_url }}) publica o nome da **Squad**,
o domínio de dados e o repositório — não o nome de quem participou. Nome de
estudante só entra por *opt-in* explícito, colhido **depois** do lançamento das
notas, pelo motivo que está registrado no
[ADR-0005](https://github.com/{{ site.repository }}/blob/{{ site.branch }}/docs/adr/0005-vitrine-identifica-squad-nao-pessoa.md):
consentimento pedido por quem atribui a nota não é consentimento livre.

O site não usa analytics, não grava cookie e não embute nada que rastreie quem
o lê.
