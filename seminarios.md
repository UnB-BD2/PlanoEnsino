---
layout: page
title: "Seminários Técnicos"
titulo: "Seminários Técnicos"
permalink: /seminarios/
resumo: >-
  Nas Semanas 13 a 15, cada Squad apresenta um aprofundamento sobre um tema do
  roadmap de Engenharia de Dados que os Encontros não cobrem.
---

{%- assign s = site.data.seminarios -%}

O Seminário existe porque o plano da disciplina é uma escolha, e escolha deixa
coisa de fora. Nuvem gerenciada, Spark, séries temporais e busca léxica são
temas legítimos que os Encontros não cobrem — ou cobrem só de raspão. O
Seminário é onde a turma recupera parte disso, com uma Squad assumindo o papel de
quem estudou o assunto a fundo.

## Formato

<dl class="factsheet">
  <dt>Duração</dt><dd>{{ s.formato.duracao }}</dd>
  <dt>Público</dt><dd>{{ s.formato.publico }}</dd>
  <dt>Quando</dt><dd><a href="{{ '/cronograma/' | relative_url }}">Semanas 13 a 15</a>, em sessão própria ao lado do Encontro conceitual</dd>
  <dt>Peso</dt><dd>{{ s.formato.peso }}</dd>
</dl>

{% include callout.html tipo="atencao" titulo="Seminário sem experimento é resenha" texto="O entregável inclui **um experimento reprodutível, ainda que mínimo**. Pode ser um contêiner que sobe a ferramenta e roda uma consulta comparativa contra a plataforma da própria Squad — mas precisa existir e rodar. A rubrica cobra isso em domínio técnico." %}

## Inscrição

<ol>
{%- for regra in s.inscricao %}
  <li>{{ regra }}</li>
{%- endfor %}
</ol>

## Temas disponíveis

Cada tema abaixo é um bloco do roadmap de Engenharia de Dados que a disciplina
deliberadamente não aprofunda. A coluna da direita diz **onde ele está em
relação ao plano** — é o argumento de que o tema não é redundante.

<div class="table-scroll">
<table>
  <caption class="visually-hidden">Temas de Seminário Técnico disponíveis, com a relação de cada um com o plano da disciplina</caption>
  <thead>
    <tr>
      <th scope="col">Tema</th>
      <th scope="col">Relação com o plano</th>
      <th scope="col">Squad</th>
    </tr>
  </thead>
  <tbody>
    {%- for t in s.temas -%}
      <tr>
        <th scope="row">
          {{ t.titulo }}
          <span class="crono-row__sub">{{ t.resumo }}</span>
        </th>
        <td>{{ t.roadmap }}</td>
        <td>
          {%- if t.squad and t.squad != "" -%}{{ t.squad }}
          {%- else -%}<em>Disponível</em>{%- endif -%}
        </td>
      </tr>
    {%- endfor -%}
  </tbody>
</table>
</div>

Tema fora desta lista precisa de aval da docência. O critério é duplo: estar no
roadmap de Engenharia de Dados, e estar fora do que os Encontros cobrem.

## Como se avalia

A [rubrica de Seminário]({{ '/avaliacao/#rubrica-seminario' | relative_url }})
tem quatro critérios. O que mais surpreende quem apresenta é o de **comunicação
para público misto**: a banca tem perfil técnico e de gestão, e uma apresentação
que só serve a uma das duas metades perde nota mesmo estando tecnicamente
correta.

O antídoto é simples de dizer e difícil de fazer: para cada mecanismo que você
explicar, diga qual decisão ele permite tomar.
