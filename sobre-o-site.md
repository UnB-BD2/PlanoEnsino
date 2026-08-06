---
layout: plano-ensino
title: "Sobre este site"
titulo: "Sobre este site"
permalink: /sobre-o-site/
eyebrow: "Proveniência do conteúdo"
resumo: >-
  Este site e parte do seu conteúdo foram gerados por agente de inteligência
  artificial. Esta página diz o que foi, o que não foi, e o que isso muda para
  quem lê.
---

O site que você está lendo — o código que o monta e boa parte do texto que ele
publica — foi **gerado por um agente de inteligência artificial**, a partir de
uma especificação escrita pela docência. O resultado passou por revisão humana
antes de ir ao ar, mas a redação inicial não é humana, e você merece saber
disso antes de decidir em quanto confiar em cada trecho.

Numa disciplina que avalia estudantes pela qualidade do raciocínio registrado e
pela evidência que o sustenta, seria incoerente publicar material sem dizer de
onde ele veio.

## O que foi gerado por agente

**Todo o código.** Layouts, includes, folhas de estilo, JavaScript, `Dockerfile`,
`Makefile` e os fluxos de integração contínua e de publicação.

**O texto das páginas de apoio.** O [guia de ADR]({{ '/adr/' | relative_url }}),
a especificação do [Projeto Integrado]({{ '/projeto/' | relative_url }}), os
*checklists* de aceite de E1 a E4, os temas de
[Seminário]({{ '/seminarios/' | relative_url }}) e as seções de "erros que se
repetem".

**Os [Encontros]({{ '/encontros/' | relative_url }}).** Títulos, objetivos de
aprendizagem, indicações de leitura prévia, material complementar e o texto de
orientação de cada sessão.

**A grade de datas do [cronograma]({{ '/cronograma/' | relative_url }}).**
Derivada por aritmética a partir de duas datas fixadas na especificação — e por
isso mesmo ainda **não conferida** contra o calendário acadêmico oficial.

## O que não foi

**O Plano de Ensino.** Objetivo geral, as dez competências, o Método de Decisão
em seis passos, a metodologia, a ementa das 16 Semanas, os pesos, os critérios
de avaliação e a bibliografia vêm do **documento aprovado pelo colegiado**. O
agente transcreveu e formatou; não redigiu.

**O desenho do site.** A especificação, o vocabulário do projeto e as decisões
de arquitetura registradas em `docs/adr/` são da docência. O agente as
implementou.

## O que isso muda para quem lê

Texto gerado por modelo de linguagem erra de um jeito particular: ele erra com
fluência. A frase sai bem construída e a citação sai plausível, o que torna o
erro mais difícil de flagrar do que num rascunho humano. Onde vale desconfiar:

| Se você for usar… | Confira antes |
|---|---|
| Referência bibliográfica com capítulo | O número do capítulo. Os links foram verificados automaticamente; a correspondência entre capítulo e assunto, não |
| Data do cronograma ou prazo de Entrega | O calendário oficial da Oferta. As datas publicadas são provisórias |
| Peso ou faixa de avaliação | O documento aprovado pelo colegiado. Se divergir, **o documento prevalece** e o site está errado |
| Objetivo de aprendizagem de um Encontro | Com a docência. São rascunho até a Semana ser preparada |

Duas coisas **não** dependem de revisão para valer: os pesos e os critérios de
avaliação, que foram transcritos do documento aprovado, e o texto do Plano de
Ensino. Se qualquer um dos dois divergir do documento, é erro de transcrição — e a regra
está registrada em
[ADR-0004](https://github.com/{{ site.repository }}/blob/{{ site.branch }}/docs/adr/0004-site-como-texto-publicado-do-plano-de-ensino.md).

## Achou um erro?

É esperado que haja. Corrigir é rápido e o crédito é seu:

- use o botão **"Editar esta página no GitHub"** no rodapé de qualquer página —
  ele abre o arquivo certo já no editor, e o GitHub cria o *branch* e o *pull
  request* para você;
- ou [abra uma issue](https://github.com/{{ site.repository }}/issues/new/choose)
  descrevendo o que está errado.

Toda correção entra no ar assim que passa na integração contínua. O histórico
de quem corrigiu o quê fica no git, público.

## Por que publicar assim

A alternativa honesta seria adiar o site até que cada linha tivesse sido escrita
à mão — o que, no prazo de uma Oferta, significaria não ter site. A escolha foi
publicar cedo, dizer o que é rascunho e corrigir em público.

É a mesma lógica que a disciplina cobra num ADR: registrar a decisão, dizer o
que se ganha, dizer o que se perde. O que se ganha é material disponível desde o
primeiro Encontro. O que se perde é a garantia de que cada frase passou por
autoria humana — e esta página existe para que essa perda não seja silenciosa.
