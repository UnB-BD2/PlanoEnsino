---
layout: projeto
title: "Projeto Integrado"
titulo: "Do dado bruto à decisão pública"
permalink: /projeto/
eyebrow: "Projeto Integrado · 55% da nota"
resumo: >-
  Cada Squad constrói, ao longo do semestre, a plataforma de dados que permite
  responder a uma pergunta de gestão real sobre um de dois domínios: os dados
  abertos da UnB, ou a atuação dos conselhos nacionais no Diário Oficial.
---

O Projeto Integrado é o fio que costura os quatro módulos. Você não constrói um
trabalho por módulo: constrói **uma plataforma**, do sistema transacional ao
painel que alguém usa para decidir, e a cada Entrega ela ganha uma camada nova
do ciclo de vida do dado.

O domínio é real e o dado é público. Não há dataset didático limpo esperando por
você — dado aberto governamental brasileiro vem com CSV mal formado, codificação
inconsistente, série interrompida, campo vazio na maior parte das linhas e
documentação desatualizada. Isso não é obstáculo à disciplina; é o objeto dela.

## Formação das Squads

Squads de **4 a 7 pessoas**, formadas na Semana 1 e mantidas até a defesa.
Menos de 4 sobrecarrega quem participa; mais de 7 esconde quem não participa.

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

## Os dois domínios

Nesta Oferta o domínio **não é livre**. Cada Squad escolhe um dos dois abaixo, na
Semana 1, e formula dentro dele **a pergunta de gestão** que a plataforma vai
responder.

A pergunta é o critério de tudo o que vem depois. Ela precisa ser específica o
bastante para ter resposta, e importante o bastante para alguém querer a
resposta. "Como está a evasão na UnB?" não serve. "Quais cursos de graduação
tiveram maior evasão entre 2019 e 2024, e como o perfil socioeconômico de quem
evade difere do de quem se forma?" serve.

### Domínio A — Observatório de dados abertos da UnB

A universidade publica os próprios dados em [dados.unb.br](https://dados.unb.br),
um portal CKAN com 65 conjuntos: discentes, cursos, estrutura curricular,
diplomas, empenhos, gastos por unidade, contratos, licitações, convênios,
assistência estudantil. Há API, o que abre um caminho de ingestão que o arquivo
solto não abre.

Quatro perguntas orientam este domínio:

- **Qual o perfil socioeconômico do aluno da UnB?**
  `dados-socioeconomicos-de-discentes`, `assistencia-estudantil-e-assuntos-comunitarios`
- **Qual o tempo médio para se formar — e quais cursos demoram mais?**
  `diplomas`, `lista-de-discentes...`, `estrutura-curricular`
- **Quais cursos têm maior evasão?**
  `lista-de-discentes...`, `cursos-de-graduacao`
- **Como são feitos os investimentos na universidade?**
  `empenhos`, `gastos-por-unidade`, `contratos`, `licitacoes`, `convenios`

Uma Squad não precisa responder às quatro. Escolha **uma**, recorte-a bem, e
construa a plataforma que a sustenta.

Este é um domínio sensível: dado de discente é dado pessoal, ainda que publicado
em portal aberto. A análise de LGPD da E4 aqui não é exercício — é requisito
real, e reagregar dois conjuntos anonimizados pode reidentificar quem nenhum dos
dois identificava sozinho.

### Domínio B — Monitor dos conselhos nacionais no Diário Oficial

Conselhos nacionais são órgãos colegiados que reúnem governo e sociedade civil
para formular, monitorar e fiscalizar políticas públicas, além de atuarem como
instâncias consultivas ou de controle institucional dos poderes. O que eles
decidem aparece no **Diário Oficial da União**, e essa é, na prática, a principal
janela pública sobre a atividade deles.

O ponto de partida é uma
[base de publicações do DOU](https://docs.google.com/spreadsheets/d/1zZnlfwgsdF7YjzMovpn36rjia0x0bfUJkVxcxeoIejI/edit)
já coletada: **41.642 registros, 90 conselhos, de abril de 2019 a março de 2024**,
com data, seção, órgão, título, ementa, URL da versão certificada e uma tentativa
de classificação por tipologia. Para atualizar a série, a fonte é a
[Imprensa Nacional](https://www.in.gov.br/leiturajornal).

Duas perguntas orientam este domínio:

- **Quais conselhos estão ativos no Brasil?** Atividade não é existência formal.
  Um conselho que não publica nada há dois anos está ativo? A definição é de
  vocês, e ela precisa estar escrita antes de virar consulta.
- **Quais são as principais atividades desses conselhos?** A coluna `tipologia`
  tenta responder e responde mal: **92,7%** das linhas estão marcadas como
  `fora_do_escopo` e apenas 1.594 como decisão de conselho.

A base é generosa em problema real: a `ementa` só está preenchida em **21,2%**
das linhas, o nome do conselho não é padronizado, e o mesmo órgão aparece grafado
de formas diferentes. Isso não é defeito da base — é o trabalho.

### O que os dois têm em comum

Os dois domínios foram escolhidos porque sustentam as quatro Entregas:

- **Volume suficiente** para que uma transformação seja não trivial e um plano de
  execução tenha o que mostrar.
- **História que muda.** Série temporal e entidades que mudam de estado: curso
  que muda de nome ou de currículo, conselho que é criado, renomeado ou extinto.
  É disso que dependem a captura de mudanças da E2 e a dimensão de variação lenta
  da E3.
- **Alguém do outro lado** para o ETL reverso da E4 — no Domínio A, a gestão da
  universidade; no B, quem acompanha a atuação de um conselho.

{% include callout.html tipo="atencao" texto="Nenhum dos dois domínios chega como banco transacional pronto. Ambos vêm como arquivo ou API, e **modelar a fonte OLTP a partir daí é o trabalho da E1** — não um passo preliminar a ele." %}

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
