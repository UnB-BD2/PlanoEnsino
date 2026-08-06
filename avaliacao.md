---
layout: page
title: "Avaliação e rubricas"
titulo: "Avaliação e rubricas"
permalink: /avaliacao/
resumo: >-
  Os quatro componentes da nota, seus pesos, e as rubricas de ADR, de Entrega e
  de Seminário Técnico.
---

{%- assign a = site.data.avaliacao -%}

## Como a nota se compõe

<div class="pesos" role="img" aria-label="Distribuição dos pesos: Projeto Integrado 55%, portfólio de ADRs 15%, Seminário Técnico e defesa 15%, participação nos Encontros 15%">
  {%- for c in a.componentes -%}
    <span class="pesos__seg" style="flex: {{ c.peso }}">{{ c.peso }}%</span>
  {%- endfor -%}
</div>

<ul class="pesos-legenda">
  {%- for c in a.componentes -%}
    <li><span class="swatch swatch--{{ forloop.index }}"></span>{{ c.nome }} — {{ c.peso }}%</li>
  {%- endfor -%}
</ul>

<div class="table-scroll">
<table>
  <caption class="visually-hidden">Componentes da avaliação, pesos e descrição</caption>
  <thead>
    <tr><th scope="col">Componente</th><th scope="col">Peso</th><th scope="col">O que é</th></tr>
  </thead>
  <tbody>
    {%- for c in a.componentes -%}
      <tr>
        <th scope="row"><a href="{{ c.link | relative_url }}">{{ c.nome }}</a></th>
        <td class="rubric__peso">{{ c.peso }}%</td>
        <td>{{ c.detalhe }}</td>
      </tr>
    {%- endfor -%}
  </tbody>
</table>
</div>

O peso das Entregas é **crescente** — 10%, 12%, 14%, 14%. A Squad erra barato na
E1, quando ainda está aprendendo a medir, e responde com rigor na E4, quando já
percorreu o ciclo inteiro.

{% include callout.html tipo="nota" texto="Estas regras valem para a Oferta inteira. Alterá-las no meio do semestre seria mudar a regra do jogo — o texto aqui publicado acompanha o documento aprovado pelo colegiado, e não o contrário." %}

## Rubricas

Cada rubrica abaixo tem âncora própria: o link direto funciona e pode ser colado
numa correção ou numa dúvida.

{% assign r_adr = a.rubricas | where: "id", "adr" | first %}
{% include rubric_table.html rubrica=r_adr %}

O ponto que costuma surpreender: **a nota não depende de a escolha ter sido a
melhor.** Uma Squad que escolheu MongoDB, mediu, viu que perdeu em consulta
analítica e registrou isso honestamente tira mais do que uma Squad que escolheu
PostgreSQL "porque é o certo" sem medir nada. O que se avalia é o raciocínio e a
evidência.

O que separa a faixa 7–8 da 9–10 quase sempre é o passo 5 do Método de Decisão:
dizer **o que se perde**. Consequência tratada de forma genérica — "pode haver
aumento de complexidade" — é o sinal mais comum de que o compromisso não foi
realmente examinado.

{% assign r_entrega = a.rubricas | where: "id", "entrega" | first %}
{% include rubric_table.html rubrica=r_entrega %}

Vale igual para E1 a E4; o que muda é o peso na nota final e a maturidade
esperada. *Funcionamento e reprodutibilidade* é o critério que mais reprova: a
plataforma precisa subir do zero, em máquina limpa, a partir do repositório.
Rodar na máquina de quem escreveu não conta.

{% assign r_sem = a.rubricas | where: "id", "seminario" | first %}
{% include rubric_table.html rubrica=r_sem %}

## Participação nos Encontros

Os 15% de participação não são presença. São participação ativa em sala, com a
leitura prévia feita — a metodologia é de sala invertida, e o Encontro
conceitual discute o texto em vez de resumi-lo. Quem chega sem ler assiste a uma
conversa em vez de participar dela.

O diário de bordo semanal da Squad — o que foi medido, o que surpreendeu, o que
foi decidido — é a evidência que sustenta esse componente, e alimenta as
retrospectivas e a defesa final.

## Uso de IA

O uso de assistentes e agentes de IA é **esperado** no Projeto Integrado, e deve
ser registrado no `AI-USAGE.md` do repositório da Squad. Ele **não** é permitido
nos instrumentos que medem entendimento individual: arguições presenciais,
quizzes, avaliação por pares e ensaio de reflexão crítica.

Entregar artefato que você não sabe explicar é infração — e sempre foi, muito
antes de existir assistente. A regra completa está em
[Política de Uso de IA]({{ '/uso-de-ia/' | relative_url }}).

## Recuperação e prazos

Entrega fora do prazo é aceita com desconto, a critério da docência e mediante
acordo prévio. O que não se recupera é a **arguição**: a defesa da E4 acontece
na Semana 16, com a banca reunida.

Menção final segue o regulamento da UnB. Dúvida sobre nota se resolve com a
docência, não por *issue* no repositório do site.
