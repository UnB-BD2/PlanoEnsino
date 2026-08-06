---
layout: page
title: "Materiais e ambiente"
titulo: "Materiais e ambiente"
permalink: /materiais/
resumo: >-
  Bibliografia, stack de ferramentas por camada, templates e as fontes de dados
  abertos sugeridas para o Projeto Integrado.
---

{%- assign m = site.data.materiais -%}

## Stack

Toda a stack é software livre e roda localmente, em Docker Compose, sem custo de
nuvem. Onde há mais de uma opção na mesma camada, a escolha é da Squad — e vira
um [ADR]({{ '/adr/' | relative_url }}).

<div class="table-scroll">
<table>
  <caption class="visually-hidden">Ferramentas da disciplina por camada do ciclo de vida do dado</caption>
  <thead>
    <tr>
      <th scope="col">Camada</th>
      <th scope="col">Ferramenta</th>
      <th scope="col">Para que serve aqui</th>
    </tr>
  </thead>
  <tbody>
    {%- for c in site.data.stack -%}
      {%- for f in c.ferramentas -%}
        <tr>
          {%- if forloop.first -%}
            <th scope="row" rowspan="{{ c.ferramentas.size }}">
              {{ c.camada }}
              <span class="crono-row__sub">Módulo {{ c.modulo }}</span>
            </th>
          {%- endif -%}
          <td><a href="{{ f.doc }}" rel="noopener">{{ f.nome }}</a></td>
          <td>{{ f.nota }}</td>
        </tr>
      {%- endfor -%}
    {%- endfor -%}
  </tbody>
</table>
</div>

{% include callout.html tipo="nota" texto="Nenhuma ferramenta desta tabela exige conta paga ou nuvem. Se algo só funcionar num serviço gerenciado, a plataforma da Squad deixa de subir na máquina de quem corrige — e é o critério de reprodutibilidade que se perde." %}

## Apostila

<div class="button-row">
  <a class="button button--ghost" href="{{ m.apostila.arquivo | relative_url }}" download>Baixar a {{ m.apostila.titulo | downcase }}</a>
</div>

{{ m.apostila.nota }}

## Templates

<ul>
{%- for t in m.templates %}
  <li><a href="{{ t.arquivo | relative_url }}" download>{{ t.titulo }}</a> — {{ t.nota }}</li>
{%- endfor %}
</ul>

## Bibliografia básica

<div class="table-scroll">
<table>
  <caption class="visually-hidden">Bibliografia básica da disciplina</caption>
  <thead>
    <tr>
      <th scope="col">Obra</th>
      <th scope="col">Módulo</th>
      <th scope="col">Papel na disciplina</th>
    </tr>
  </thead>
  <tbody>
    {%- for o in m.basica -%}
      <tr>
        <th scope="row">
          {%- if o.link -%}<a href="{{ o.link }}" rel="noopener">{{ o.titulo }}</a>
          {%- else -%}{{ o.titulo }}{%- endif %}
          <span class="crono-row__sub">{{ o.autores }} {% if o.edicao %}{{ o.edicao }} {% endif %}{{ o.editora }}, {{ o.ano }}</span>
        </th>
        <td>{{ o.modulo }}</td>
        <td>{{ o.nota }}</td>
      </tr>
    {%- endfor -%}
  </tbody>
</table>
</div>

## Bibliografia complementar

<div class="table-scroll">
<table>
  <caption class="visually-hidden">Bibliografia complementar da disciplina</caption>
  <thead>
    <tr>
      <th scope="col">Obra</th>
      <th scope="col">Módulo</th>
      <th scope="col">Acesso</th>
    </tr>
  </thead>
  <tbody>
    {%- for o in m.complementar -%}
      <tr>
        <th scope="row">
          {{ o.titulo }}
          <span class="crono-row__sub">{{ o.autores }} {% if o.edicao %}{{ o.edicao }} {% endif %}{% if o.editora %}{{ o.editora }}, {% endif %}{{ o.ano }}</span>
        </th>
        <td>{{ o.modulo }}</td>
        <td>
          {%- if o.link -%}<a href="{{ o.link }}" rel="noopener">Aberto</a>
          {%- else -%}Biblioteca{%- endif -%}
        </td>
      </tr>
    {%- endfor -%}
  </tbody>
</table>
</div>

## Fontes de dados abertos

Sugestões para o [Projeto Integrado]({{ '/projeto/' | relative_url }}). A Squad
pode propor outro domínio, desde que tenha volume suficiente e um componente
textual — a E4 depende dele.

<ul>
{%- for f in m.fontes_de_dados %}
  <li><a href="{{ f.link }}" rel="noopener">{{ f.nome }}</a></li>
{%- endfor %}
</ul>

## Licenciamento do material

O código e o conteúdo deste site estão sob
[licença MIT](https://github.com/{{ site.repository }}/blob/{{ site.branch }}/LICENSE):
use, adapte e republique, inclusive em outra instituição, mantendo o aviso de
copyright.

Material de terceiros incorporado ao repositório — figuras de livros, datasets,
trechos de documentação — **mantém a licença de origem e exige crédito**. A MIT
deste repositório não relicencia obra alheia.
