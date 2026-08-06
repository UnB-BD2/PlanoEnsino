---
layout: plano-ensino
title: "Política de Uso de IA"
titulo: "Política de Uso de IA"
permalink: /uso-de-ia/
eyebrow: "Regra da disciplina"
resumo: >-
  O uso de assistentes e agentes de IA nesta disciplina é esperado, não
  tolerado. Não há penalidade por usar; há penalidade por não declarar e por
  não entender.
---

O uso de assistentes e agentes de IA nesta disciplina é **esperado, não
tolerado**. O princípio é transparência, não proibição.

**Não há penalidade por usar. Há penalidade por não declarar e por não
entender.**

A razão é simples: a camada de dados de um sistema hoje é escrita com essas
ferramentas, e fingir o contrário treinaria vocês para um mundo que não existe.
Mas a disciplina avalia raciocínio, não digitação — e raciocínio que você não
consegue reconstruir não é seu, tenha vindo de onde tiver vindo.

## Onde é esperado, e deve ser registrado

Use à vontade, e registre:

- **implementação** — código da plataforma, consultas, migrações, configuração;
- **testes** — de software e de dados;
- **documentação** — README, ADRs, diário de bordo;
- **exploração de bibliotecas** — entender uma ferramenta nova, ler documentação
  por atalho, comparar alternativas;
- **refatoração**.

O registro vive no **`AI-USAGE.md`** do repositório da Squad, versionado como
qualquer outro artefato. Ele não precisa ser longo: precisa ser verdadeiro e
contemporâneo ao uso. Registro escrito de memória na véspera da Entrega tende a
ser impreciso, e imprecisão aqui é o que a política pune.

<div class="button-row" data-print="hide">
  <a class="button button--ghost" href="{{ '/static_files/templates/ai-usage.md' | relative_url }}" download>Baixar o template de AI-USAGE.md</a>
</div>

## Onde não é permitido

Nos instrumentos que existem justamente para medir **o que você entende**:

- **arguições individuais presenciais**;
- **quizzes**;
- **avaliação por pares**;
- **ensaio de reflexão crítica**.

Nesses momentos não há ferramenta a consultar, e é esse o ponto. Se o artefato
foi construído com ajuda e você o entendeu, a arguição confirma; se não, ela
revela. Não é armadilha — é a mesma pergunta que um colega faria numa revisão de
código.

## O que constitui infração

<ul class="checklist">
  <li>Usar IA nos instrumentos individuais listados acima</li>
  <li>Omitir ou falsificar o registro de uso</li>
  <li>Entregar artefato que você não sabe explicar</li>
  <li>Apresentar trabalho de colega como seu</li>
</ul>

Repare no terceiro item: ele não menciona IA. **Entregar código que você não
sabe explicar sempre foi infração** — a ferramenta apenas tornou mais fácil
chegar lá sem perceber. O critério não mudou; a facilidade de tropeçar nele,
sim.

E repare no que **não** está na lista: gerar uma primeira versão de um modelo
dimensional com um assistente, pedir que ele explique um plano de execução, ou
usá-lo para escrever a suíte de testes. Nada disso é infração. É trabalho — e
com registro, é trabalho declarado.

{% include callout.html tipo="atencao" texto="Um caso concreto para calibrar: a Squad gera com um agente a modelagem dimensional da E3, mede, ajusta a granularidade e registra tudo no `AI-USAGE.md`. Isso é uso exemplar. Se, na defesa, ninguém souber dizer por que a dimensão de variação lenta foi tratada daquele jeito, a infração não é ter usado o agente — é não ter entendido o que se entregou." %}

## Como isso é apurado

A apuração é a mesma de qualquer outra afirmação técnica nesta disciplina: pela
capacidade de sustentá-la sob arguição. Não há detector de texto gerado, e
nenhum seria confiável se houvesse.

O que existe é a **defesa**, a arguição do
[Seminário]({{ '/seminarios/' | relative_url }}) e a conversa em sala — onde a
pergunta é sempre a mesma: por que assim, e o que você mediu para chegar aí.
Quem construiu com ajuda e entendeu responde. Quem não construiu, não.

Infração apurada é tratada nos termos do
[Código de Conduta]({{ '/codigo-de-conduta/' | relative_url }}) e, quando
couber, das instâncias disciplinares da Universidade.

## Esta política e o Plano de Ensino

Esta política **complementa** o [Plano de Ensino]({{ '/plano-ensino/' | relative_url }}):
ela regula como os instrumentos já previstos podem ser conduzidos. Ela não
altera peso nem critério de
[avaliação]({{ '/avaliacao/' | relative_url }}) — esses continuam sendo os do
documento aprovado pelo colegiado.

Vale também para o outro lado da mesa. Este site foi construído com agente de
IA, e o que foi gerado está declarado em
[Sobre este site]({{ '/sobre-o-site/' | relative_url }}) — pela mesma regra que
se pede a vocês.
