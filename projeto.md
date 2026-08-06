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

Squads de **4 a 5 pessoas**, formadas na Semana 1 e mantidas até a defesa.
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
  de 400 linhas não ensina nada sobre índice.
- **Componente não estruturado.** A E4 exige busca semântica. O domínio precisa
  ter texto — ementas, descrições de contrato, relatórios, pareceres, respostas
  abertas. Escolher um domínio puramente numérico na Semana 1 cria um problema
  que só aparece na Semana 13, quando não há mais tempo de trocar.

{% include callout.html tipo="atencao" texto="Confira o componente não estruturado **antes** de fechar o domínio. É o erro mais caro que uma Squad comete na Semana 1, e ele só se manifesta na Semana 13." %}

## Requisitos mínimos do produto

A plataforma final, ao fim da E4, precisa ter:

<ul class="checklist">
  <li>uma <strong>fonte transacional (OLTP)</strong> modelada e populada</li>
  <li><strong>ingestão em lote</strong> e um <strong>fluxo de mudanças</strong> — CDC ou <em>streaming</em></li>
  <li>camada de <strong>armazenamento analítico em formato aberto</strong></li>
  <li><strong>transformações versionadas</strong> com testes de qualidade e orquestração agendada</li>
  <li>camada de <strong>consumo dupla</strong>: painel analítico <em>e</em> busca semântica sobre o componente não estruturado</li>
  <li><strong>catálogo, linhagem e análise de LGPD</strong> do que foi construído</li>
  <li><strong>5 ADRs</strong>, aplicando o Método de Decisão</li>
</ul>

Nenhum desses itens é opcional, e nenhum deles exige nuvem paga: a
[stack completa]({{ '/materiais/#stack' | relative_url }}) é software livre e
roda em Docker Compose na máquina de vocês.

## Como o trabalho é avaliado

Duas rubricas se aplicam. A [rubrica de Entrega]({{ '/avaliacao/#rubrica-entrega' | relative_url }})
vale para E1 a E4, com cinco critérios: funcionamento e reprodutibilidade (30%),
adequação técnica (25%), qualidade e testes de dados (20%), documentação e ADRs
(15%), processo da Squad (10%). A [rubrica de ADR]({{ '/avaliacao/#rubrica-adr' | relative_url }})
avalia o portfólio, que corre por fora, valendo 15% da nota final.

O critério que mais reprova é o primeiro: **a plataforma precisa subir do zero,
em máquina limpa, a partir do repositório.** Funcionar no computador de quem
escreveu não conta. Teste isso antes de entregar, num diretório novo, com
`git clone` de verdade.
