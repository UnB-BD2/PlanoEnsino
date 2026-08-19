---
layout: projeto
title: "Projeto Integrado"
titulo: "Do dado bruto à decisão pública"
permalink: /projeto/
eyebrow: "Projeto Integrado · 55% da nota"
resumo: >-
  Cada Squad constrói, ao longo do semestre, a plataforma de dados que permite
  responder a uma pergunta de gestão real sobre um domínio de dados abertos
  brasileiros.
---

O Projeto Integrado é o fio que costura os quatro módulos. Você não constrói um
trabalho por módulo: constrói **uma plataforma**, do sistema transacional ao
painel que alguém usa para decidir, e a cada Entrega ela ganha uma camada nova
do ciclo de vida do dado.

O domínio é real e o dado é público. Não há dataset didático limpo esperando por
você — dados abertos governamentais brasileiros vêm com CSV mal formado,
codificação inconsistente, série interrompida e documentação desatualizada. Isso
não é obstáculo à disciplina; é o objeto dela.

## Formação das Squads

Squads de **4 a 7 pessoas**, formadas na Semana 1 e mantidas até a defesa.
Menos de 4 sobrecarrega; mais de 5 esconde quem não participa.

O trabalho acontece num **repositório público** da Squad, sob organização
própria ou pessoal. Público desde o início: parte da avaliação é o processo
evidenciado no histórico do git, e histórico reescrito na véspera se reconhece.

Cada Squad mantém, no repositório:

- o código da plataforma, com `docker-compose.yml` que sobe tudo;
- `docs/adr/` com os 5 ADRs;
- `docs/diario/` com o registro semanal — o que foi medido, o que surpreendeu, o
  que foi decidido;
- `AI-USAGE.md` com o registro de uso de assistentes e agentes de IA, conforme a
  [Política de Uso de IA]({{ '/uso-de-ia/' | relative_url }});
- `README.md` que permite a terceiro subir e entender a plataforma.

## Escolher o domínio

Na Semana 1, cada Squad escolhe um domínio de dados abertos governamentais
brasileiros e formula **a pergunta de gestão** que a plataforma vai responder.

A pergunta é o critério de tudo o que vem depois. Ela precisa ser específica o
bastante para ter resposta, e importante o bastante para alguém querer a
resposta. "Como está o saneamento no Brasil?" não serve. "Quais municípios do
Centro-Oeste tiveram queda de cobertura de esgoto entre 2018 e 2023, e o que os
distingue dos que subiram?" serve.

Domínios sugeridos, com fonte:

{%- assign fontes = site.data.materiais.fontes_de_dados %}
{% for f in fontes %}
- [{{ f.nome }}]({{ f.link }})
{%- endfor %}

Dois requisitos que restringem a escolha, e que costumam passar despercebidos na
Semana 1:

- **Volume suficiente.** O domínio precisa gerar dado bastante para que um plano
  de execução seja interessante e uma transformação seja não trivial. Uma tabela
  de 400 linhas não ensina nada sobre modelagem analítica.
- **História que muda.** O domínio precisa ter série ao longo do tempo e
  entidades que mudam de estado — município que troca de nome, prestador que muda
  de razão social, classificação revista. É disso que dependem a captura de
  mudanças da E2 e a dimensão de variação lenta da E3. Uma foto única de um ano
  só não sustenta nem uma nem outra.
- **Alguém do outro lado.** A E4 exige um caminho de ETL reverso: uma métrica
  tratada que volta para onde alguém agiria. Vale a pena imaginar já na Semana 1
  quem seria esse consumidor no seu domínio.

{% include callout.html tipo="atencao" texto="Confira **antes** de fechar o domínio se ele tem série temporal e entidades que mudam de estado. É o erro mais caro que uma Squad comete na Semana 1, e ele só se manifesta na E2, quando não há mais tempo de trocar." %}

## Como o trabalho é avaliado

Duas avaliações se aplicam. A [avaliação de Entrega]({{ '/avaliacao/#avaliacao-entrega' | relative_url }})
vale para E1 a E4, com cinco critérios: funcionamento e reprodutibilidade (30%),
adequação técnica (25%), qualidade e testes de dados (20%), documentação e ADRs
(15%), processo da Squad (10%). A [avaliação de ADR]({{ '/avaliacao/#avaliacao-adr' | relative_url }})
avalia o portfólio, que corre por fora, valendo 15% da nota final.

O critério que mais reprova é o primeiro: **a plataforma precisa subir do zero,
em máquina limpa, a partir do repositório.** Funcionar no computador de quem
escreveu não conta. Teste isso antes de entregar, num diretório novo, com
`git clone` de verdade.
