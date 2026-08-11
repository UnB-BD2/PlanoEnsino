---
layout: plano-ensino
title: "Plano de Ensino"
titulo: "Plano de Ensino"
permalink: /plano-ensino/
eyebrow: "Oferta 2026/2 · Texto publicado"
resumo: >-
  Objetivos, competências, metodologia, avaliação e as 16 Semanas de conteúdo
  da disciplina.
# Descomente quando o PDF aprovado pelo colegiado estiver em static_files/.
# pdf: /static_files/plano-ensino/plano-de-ensino-2026-2.pdf
---

{% assign a = site.data.avaliacao %}


## Identificação

<dl class="factsheet">
  <dt>Disciplina</dt><dd>{{ site.disciplina.nome }}</dd>
  <dt>Curso</dt><dd>{{ site.disciplina.curso }}</dd>
  <dt>Unidade</dt><dd>{{ site.disciplina.unidade }}</dd>
  <dt>Universidade</dt><dd>{{ site.disciplina.universidade }}</dd>
  <dt>Pré-requisito</dt><dd>{{ site.disciplina.pre_requisito }}</dd>
  <dt>Carga horária</dt><dd>{{ site.disciplina.carga_horaria }} — {{ site.disciplina.creditos }} créditos</dd>
  <dt>Estrutura</dt><dd>2 Encontros semanais de 2h, ao longo de {{ site.oferta.semanas }} Semanas</dd>
  <dt>Oferta</dt><dd>{{ site.oferta.codigo }}</dd>
  <dt>Fio condutor</dt><dd><em>{{ site.tagline }}</em></dd>
</dl>

## Objetivo geral

Capacitar o estudante a **projetar, implementar e justificar** a camada de dados
de um sistema de software, escolhendo tecnologias de armazenamento e
processamento com base em evidências empíricas e em requisitos explícitos, ao
longo de todo o ciclo de vida do dado.

## Competências

Ao fim da disciplina, o estudante deve ser capaz de:

1. Descrever o que é engenharia de dados e situar o engenheiro de dados entre as
   demais funções técnicas e a liderança de uma organização.
2. Nomear os cinco estágios do ciclo de vida da engenharia de dados e os seis
   elementos subjacentes, e usá-los como vocabulário de projeto.
3. Avaliar uma arquitetura de dados à luz dos princípios de boa arquitetura,
   distinguindo acoplamento forte de fraco e decisão reversível de irreversível.
4. Escolher tecnologias ao longo do ciclo de vida com base em custo total de
   propriedade, interoperabilidade e medição própria, registrando a decisão em
   um ADR.
5. Caracterizar sistemas de origem — bancos de aplicação, APIs, arquivos, *logs*,
   filas e fluxos — e as garantias que cada um oferece.
6. Selecionar sistemas e abstrações de armazenamento, distinguindo arquivo,
   bloco e objeto, e *warehouse*, *lake* e *lakehouse*.
7. Implementar ingestão em lote e em fluxo contínuo, incluindo captura de dados
   de alteração, com tratamento de dados atrasados e de falhas.
8. Modelar e transformar dados para consumo analítico, escolhendo entre
   normalização, modelagem dimensional, Data Vault e tabelas largas.
9. Disponibilizar dados para análise, *machine learning* e ETL reverso, com
   camadas semânticas e definições de métrica explícitas.
10. Aplicar segurança e privacidade ao longo de todo o ciclo — privilégio mínimo,
    criptografia, monitoramento — e comunicar decisões de dados a público misto,
    técnico e gestor.

## O livro-texto

*Fundamentos de Engenharia de Dados*, de Joe Reis e Matt Housley (Novatec, 2023
— tradução de *Fundamentals of Data Engineering*, O'Reilly, 2022), **é** o
conteúdo desta disciplina. As 16 Semanas percorrem os capítulos 1 a 11 e os dois
apêndices, na ordem do livro; os quatro módulos correspondem às suas três partes,
com a Parte II dividida em dois. A numeração de capítulos é a mesma na edição em
português e no original.

O ciclo de vida em cinco estágios e os seis elementos subjacentes são o
vocabulário que a disciplina inteira usa, do primeiro Encontro à defesa.

Duas coisas que o livro não traz e que este plano acrescenta. A **LGPD** entra na
Semana 14, ao lado do capítulo de segurança e privacidade, porque o Projeto
Integrado exige análise de LGPD do que for construído e porque é a lei sob a qual
esses dados são tratados. E os **elementos subjacentes** ganham tratamento
explícito na Semana 2 e no Projeto Integrado, já que orquestração agendada e testes de
qualidade são requisitos de produto do projeto e no livro não têm capítulo próprio.

O que fica de fora: *internals* de SGBD — B-tree × LSM-tree, MVCC, níveis de
isolamento, leitura de planos de execução — são conteúdo do pré-requisito,
Introdução a Banco de Dados. Esta disciplina usa o banco; não o abre.

As demais obras da bibliografia passam a ser complementares e aprofundam pontos
específicos: Kleppmann nos sistemas distribuídos das Semanas 4 e 8, Kimball na
modelagem dimensional da Semana 11, Silberschatz e Elmasri no que o pré-requisito
deixou.

O eixo transversal da disciplina, apresentado adiante, é o capítulo 4 —
*Escolhendo tecnologias ao longo do ciclo de vida da engenharia de dados*. É a
leitura que fundamenta o Método de Decisão e a exigência de medição própria na
avaliação de ADR.

## Plano das 16 Semanas

A coluna **No livro** aponta o capítulo que sustenta cada Semana.

Seguindo a estrutura do livro, os **elementos subjacentes** — segurança,
gerenciamento de dados, DataOps, arquitetura de dados, orquestração e engenharia
de software — não têm Semana própria. São apresentados na Semana 2 e retomados em
cada estágio do ciclo, que é exatamente como o livro os trata. Qualidade de dados,
testes e orquestração agendada, exigidos pelo Projeto Integrado, entram por aí e
são praticados no Projeto Integrado.

### Módulo I — Fundamentos e componentes essenciais

*Parte I do livro.* Semanas 1 a 5.

**No livro-texto:** capítulos 1 a 4, na íntegra.

<div class="table-scroll" markdown="1">

| Semana | Tema | Conteúdo | No livro |
|---|---|---|---|
| 1 | Descrição do que é engenharia de dados | Definição do campo. Evolução do engenheiro de dados. Engenharia de dados × ciência de dados. Maturidade de dados e o que ela muda no trabalho. Habilidades, responsabilidades comerciais e técnicas, o engenheiro tipo A e tipo B. O engenheiro entre as demais funções técnicas e a liderança corporativa. Formação de Squads e escolha de domínio. | Cap. 1 |
| 2 | O ciclo de vida da engenharia de dados | Os cinco estágios: geração, armazenamento, ingestão, transformação e disponibilização. Ciclo de vida do dado × ciclo de vida da engenharia de dados. Os seis elementos subjacentes que atravessam todos os estágios: segurança, gerenciamento de dados, DataOps, arquitetura de dados, orquestração e engenharia de software. | Cap. 2 |
| 3 | Princípios de uma boa arquitetura de dados | Arquitetura corporativa × arquitetura de dados. Os nove princípios: escolher componentes comuns com sabedoria, planejar para falhas, projetar para escalabilidade, arquitetura como cerne da liderança, arquitetar sempre, sistemas fracamente acoplados, decisões reversíveis, priorizar a segurança, adotar FinOps. | Cap. 3 |
| 4 | Conceitos e exemplos de arquitetura | Domínios e serviços. Sistemas distribuídos, escalabilidade e planejamento para falhas. Acoplamento forte × fraco: camadas, monolitos e microsserviços. Locatário único × multilocatário. Arquitetura orientada a eventos. Projetos *brownfield* × *greenfield*. Data warehouse, data lake, lakehouse, pilha de dados moderna, Lambda, Kappa, Dataflow, IoT e Data Mesh. | Cap. 3 |
| 5 | Escolhendo tecnologias ao longo do ciclo | Tamanho e capacidade da equipe, velocidade de entrada no mercado, interoperabilidade. Custo total de propriedade, custo de oportunidade e FinOps. Tecnologias imutáveis × transitórias. *On-premises*, nuvem, híbrida, multicloud e os argumentos de repatriação. Construir × comprar; código aberto × jardim murado. Monolítico × modular e o padrão do monolito distribuído. *Serverless* × servidor. A guerra de *benchmarks*. | Cap. 4 |

</div>

### Módulo II — O ciclo em detalhes: origem, armazenamento e ingestão

*Parte II do livro, primeira metade.* Semanas 6 a 9.

**No livro-texto:** capítulos 5 a 7, mais o Apêndice A.

<div class="table-scroll" markdown="1">

| Semana | Tema | Conteúdo | No livro |
|---|---|---|---|
| 6 | Geração de dados em sistemas de origem | Como o dado é criado. Arquivos e dados não estruturados, APIs, bancos de dados de aplicação (OLTP), sistemas OLAP, captura de dados de alteração, *logs* e *logs* de banco de dados. CRUD e o padrão *insert-only*. Mensagens, fluxos e tipos de registro de tempo. Compartilhamento de dados, fontes de terceiros, filas de mensagens e plataformas de *streaming* de eventos. | Cap. 5 |
| 7 | Armazenamento: os ingredientes crus | Unidade de disco magnético, unidade de estado sólido, memória de acesso aleatório, redes e CPU. Serialização baseada em linhas, colunar e híbrida. Compressão — gzip, bzip2, Snappy. *Cache* e a hierarquia de custo por acesso. | Cap. 6 e Apêndice A |
| 8 | Sistemas e abstrações de armazenamento | Máquina única × armazenamento distribuído. Consistência eventual × consistência forte. Armazenamento de arquivos, de blocos, de objetos e de *streaming*; HDFS; sistemas baseados em memória. Índices, particionamento e *clustering*. Data warehouse, data lake, lakehouse e plataformas de dados. Catálogo de dados, compartilhamento, esquema, separação entre computação e armazenamento, ciclo de vida e retenção, multilocação. | Cap. 6 |
| 9 | Ingestão | Dados limitados × ilimitados. Frequência. Ingestão síncrona × assíncrona. Confiabilidade, durabilidade e carga útil. Padrões *push*, *pull* e *poll*. Lote: *snapshot* × extração diferencial, ETL × ELT, tamanho de lote, migração. *Streaming*: evolução de esquema, dados que chegam atrasados, ordenação e entrega múltipla, *replay*, tempo de vida, filas de mensagens mortas. Formas de ingestão: conexão direta, CDC, APIs, filas, conectores gerenciados, objetos, EDI, *webhooks*, *web scraping*. | Cap. 7 |

</div>

### Módulo III — Consultas, modelagem, transformação e disponibilização

*Parte II do livro, segunda metade.* Semanas 10 a 13.

**No livro-texto:** capítulos 8 e 9, na íntegra.

<div class="table-scroll" markdown="1">

| Semana | Tema | Conteúdo | No livro |
|---|---|---|---|
| 10 | Consultas | O que é uma consulta e qual é a sua vida útil. O otimizador de consultas. Aprimorando o desempenho da consulta. Consultas sobre dados de *streaming*. | Cap. 8 |
| 11 | Modelagem de dados | O que é um modelo de dados. Modelos conceitual, lógico e físico. Normalização. Técnicas de modelagem de dados analíticos em lote: Inmon, Kimball, Data Vault e tabelas largas. Modelando dados de *streaming*. | Cap. 8 |
| 12 | Transformações | Transformações em lote. Visualizações materializadas, federação e virtualização de consultas. Transformações e processamento de *streaming*. Os elementos subjacentes em ação: gerenciamento de dados, DataOps e orquestração aplicados à transformação. | Cap. 8 |
| 13 | Disponibilizando dados para análise, ML e ETL reverso | Confiança, caso de uso e quem é o usuário. Produtos de dados e autoatendimento. Definições e lógica de dados; Data Mesh. Análise de negócios, operacional e incorporada. *Machine learning*: o que um engenheiro de dados precisa saber. Formas de disponibilizar: troca de arquivos, bancos, *streaming*, federação de consultas, compartilhamento, camadas semânticas e de métricas, *notebooks*. ETL reverso. | Cap. 9 |

</div>

### Módulo IV — Segurança, privacidade e o futuro

*Parte III do livro.* Semanas 14 e 15.

**No livro-texto:** capítulos 10 e 11, mais o Apêndice B.

<div class="table-scroll" markdown="1">

| Semana | Tema | Conteúdo | No livro |
|---|---|---|---|
| 14 | Segurança e privacidade | Pessoas: o poder do pensamento negativo e a paranoia útil. Processos: falsa sensação × hábito de segurança, segurança ativa, princípio do privilégio mínimo, responsabilidade compartilhada na nuvem, *backup*, exemplo de política de segurança. Tecnologia: *patches*, criptografia, registro de *logs*, monitoramento e alertas, acesso à rede, segurança de baixo nível. Topologia de rede em nuvem, zonas, regiões e custos de saída. Complemento local: LGPD aplicada a plataformas de dados. | Cap. 10 e Apêndice B |
| 15 | O futuro da engenharia de dados | Por que o ciclo de vida veio para ficar. A diminuição da complexidade e a ascensão de ferramentas fáceis de usar. O sistema operacional de dados em escala de nuvem e a melhoria na interoperabilidade. Engenharia de dados "empresarial" e a transformação das funções. Da pilha de dados moderna à pilha em tempo real. A fusão de dados com aplicações e a relação estreita com ML. Dados de matéria escura. | Cap. 11 |

</div>

### Encerramento

<div class="table-scroll" markdown="1">

| Semana | Tema | Conteúdo | No livro |
|---|---|---|---|
| 16 | Defesa e retrospectiva | Apresentação da plataforma completa a banca com perfil técnico e de gestão. Arguição sobre as decisões tomadas. Retrospectiva do ciclo de vida percorrido, estágio a estágio, e dos elementos subjacentes que o atravessaram. | Retomada do cap. 2 |

</div>

## Mapeamento com o roadmap de Engenharia de Dados

O que a disciplina cobre, com que profundidade, e o que ela deliberadamente
remete a outro lugar.

<div class="table-scroll" markdown="1">

| Bloco do roadmap | Onde é tratado | Profundidade |
|---|---|---|
| SQL e bancos relacionais | Semanas 6 e 10 | Uso, otimizador e desempenho de consulta |
| Modelagem de dados: normalização, dimensional, Data Vault | Semana 11 | Aprofundada |
| Bancos NoSQL: documento, chave-valor, colunar largo, grafo | Semanas 6 e 8 | **Menções** — o livro não percorre as famílias |
| Data warehousing e OLAP | Semanas 8, 11 e 13 | Aprofundada |
| Data lakes e lakehouse: Parquet, Iceberg, Delta | Semanas 7 e 8 | Aprofundada |
| ETL/ELT e pipelines | Semanas 9 e 12 | Prática |
| Processamento em lote e em fluxo: Kafka, CDC | Semanas 6 e 9 | Prática |
| Orquestração: Airflow, Dagster | Semana 2 e Projeto Integrado | **Elemento subjacente** — sem Semana própria, conforme o livro |
| Qualidade, testes e observabilidade | Semana 2 e Projeto Integrado | **Elemento subjacente** — idem |
| Sistemas distribuídos: replicação, particionamento, consistência | Semanas 4 e 8 | Conceitual |
| Governança, catálogo, linhagem e segurança | Semanas 8, 13 e 14 | Aprofundada |
| LGPD | Semana 14 | **Complemento local** — não tratada pelo livro, exigida pelo Projeto Integrado |
| Nuvem, IaC, Kubernetes | Semanas 5 e 14 (Apêndice B) | Conceitual — aprofundamento remetido a Computação em Nuvem / DevOps |
| Spark e processamento distribuído em cluster | Seminários | **Introdutório** — remetido a Big Data / eletiva |
| Dados vetoriais, *embeddings*, RAG | Seminários | **Fora do escopo do livro** — remetido aos Seminários Técnicos |
| *Internals* de SGBD: B-tree, MVCC, isolamento, planos | — | **Fora do escopo** — pré-requisito, Introdução a Banco de Dados |
| Arquiteturas organizacionais: *data mesh*, contratos | Semanas 4 e 13 | Conceitual |

</div>

## Metodologia

Aprendizagem orientada a projeto, com **sala invertida** e trabalho contínuo de Squad.

- **Encontro conceitual (2 h)** — exposição dialogada curta, de cerca de 40
  minutos, seguida de estudo de caso ou leitura de *paper* e discussão dos
  compromissos arquiteturais em jogo. A leitura prévia é obrigatória: o Encontro
  discute o que você leu, não o resume.
- **Projeto Integrado** — Squads de 4 a 5 pessoas constroem, ao longo do
  semestre, uma plataforma de dados completa sobre um domínio real de dados
  abertos, em quatro Entregas incrementais.
- **Diário de bordo** — registro semanal curto por Squad: o que foi medido, o
  que surpreendeu, o que foi decidido. É insumo das retrospectivas e da defesa
  final.
- **Seminários Técnicos** — nas Semanas 13 a 15, cada Squad apresenta um
  aprofundamento sobre tópico do *roadmap* de Engenharia de Dados que os
  Encontros não cobrem.

## O eixo transversal: decidir com método

A disciplina trata a escolha de tecnologia de dados como um **método**, não como
preferência. O Método de Decisão tem seis passos, e atravessa todos os ADRs
produzidos no semestre:

1. **Caracterizar a carga** — volume, taxa de escrita e de leitura,
   cardinalidade, padrão de acesso, latência tolerada, sazonalidade.
2. **Explicitar as restrições não funcionais** — consistência exigida,
   disponibilidade, custo, requisitos legais, competência da equipe,
   licenciamento.
3. **Levantar candidatos** — no mínimo três, incluindo obrigatoriamente a
   *opção nula*: "continuar no PostgreSQL que já temos".
4. **Prototipar e medir** — *benchmark* mínimo com dados do próprio domínio,
   nunca sintético genérico.
5. **Registrar o compromisso** — o que se ganha, o que se perde, o que se torna
   irreversível.
6. **Definir o gatilho de revisão** — sob qual métrica essa decisão deixa de
   valer.

Esse método tem contrapartida direta no livro-texto: o capítulo 4 de
*Fundamentos de Engenharia de Dados* trata a escolha de tecnologia ao longo do
ciclo de vida — custo total de propriedade, tecnologias imutáveis × transitórias,
construir × comprar, monolítico × modular. A seção sobre a *guerra de benchmarks*
é a justificativa do passo 4: comparação publicada por fornecedor é otimizada
para o caso do fornecedor, e por isso a medição tem de ser feita com dado do
próprio domínio.

O instrumento é o **ADR** (*Architecture Decision Record*), no formato Nygard:
contexto, decisão, status, consequências. Cada Squad mantém um portfólio
versionado no próprio repositório, com **5 ADRs obrigatórios** ao longo do
semestre. O [guia de ADR]({{ '/adr/' | relative_url }}) traz o template e os
critérios de avaliação.

## O Projeto Integrado

**"Do dado bruto à decisão pública."** Cada Squad escolhe um domínio de dados
abertos governamentais brasileiros — saneamento e SNIS, habitação,
transferências e execução orçamentária, mobilidade urbana — e constrói a
plataforma que permite responder a uma pergunta de gestão real.

Requisitos mínimos do produto final:

- uma fonte transacional (OLTP) modelada e populada;
- ingestão em lote **e** um fluxo de mudanças (CDC ou *streaming*);
- camada de armazenamento analítico em formato aberto;
- transformações versionadas com testes de qualidade e orquestração agendada;
- camada de consumo dupla: painel analítico **e** camada semântica de métricas,
  com um caminho de ETL reverso;
- catálogo, linhagem e análise de LGPD do que foi construído;
- 5 ADRs.

A especificação completa, com as quatro Entregas e seus *checklists* de aceite,
está em [Projeto Integrado]({{ '/projeto/' | relative_url }}).

## Avaliação

<div class="pesos" role="img" aria-label="Distribuição dos pesos: Projeto Integrado 55%, ADRs 15%, Seminário e defesa 15%, participação 15%">
  {%- for c in a.componentes -%}
    <span class="pesos__seg" style="flex: {{ c.peso }}">{{ c.peso }}%</span>
  {%- endfor -%}
</div>

<div class="table-scroll">
<table>
  <caption class="visually-hidden">Componentes da avaliação e respectivos pesos</caption>
  <thead>
    <tr><th scope="col">Instrumento</th><th scope="col">Peso</th><th scope="col">Descrição</th></tr>
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

As avaliações completas — de ADR, de Entrega e de Seminário — estão em
[Avaliação]({{ '/avaliacao/' | relative_url }}), cada uma linkável por âncora.

## Uso de assistentes e agentes de IA

Esta Oferta adota uma [Política de Uso de IA]({{ '/uso-de-ia/' | relative_url }})
própria. Em resumo: o uso é **esperado, não tolerado**, e o princípio é
transparência em vez de proibição. Não há penalidade por usar; há penalidade por
não declarar e por não entender o que se entregou.

O uso é registrado no `AI-USAGE.md` do repositório da Squad, e não é permitido
nos instrumentos que medem entendimento individual — arguições presenciais,
quizzes, avaliação por pares e ensaio de reflexão crítica.

A política regula **como** os instrumentos deste plano são conduzidos; ela não
altera peso nem critério de avaliação.

## Recursos e ferramental

Toda a stack é software livre e executável localmente, alinhada à prática do
Lab Livre e reprodutível sem custo de nuvem. A tabela completa por camada, com
link para a documentação oficial de cada ferramenta, está em
[Materiais e ambiente]({{ '/materiais/#stack' | relative_url }}).

Em resumo: PostgreSQL com PostGIS no transacional; DuckDB no
analítico; MinIO para objetos; Parquet, Iceberg ou Delta nos formatos abertos;
Redpanda ou Kafka com Debezium no fluxo e CDC; dbt ou SQLMesh na transformação;
Airflow ou Dagster na orquestração; MongoDB, Neo4j e Redis nos não relacionais;
Great Expectations na qualidade; OpenMetadata ou DataHub no catálogo; Metabase
ou Superset no consumo; Docker Compose no empacotamento.

Fontes de dados sugeridas: Portal Brasileiro de Dados Abertos, SNIS, IBGE e
Portal da Transparência.

## Bibliografia

### Básica

{%- for obra in site.data.materiais.basica %}
{{ forloop.index }}. {{ obra.autores }} **{{ obra.titulo }}.**{% if obra.edicao %} {{ obra.edicao }}{% endif %}{% if obra.editora %} {{ obra.editora }},{% endif %} {{ obra.ano }}.{% if obra.nota %} *({{ obra.nota }})*{% endif %}
{%- endfor %}

### Complementar

{%- for obra in site.data.materiais.complementar %}
{{ forloop.index }}. {{ obra.autores }} **{{ obra.titulo }}.**{% if obra.edicao %} {{ obra.edicao }}{% endif %}{% if obra.editora %} {{ obra.editora }},{% endif %} {{ obra.ano }}.{% if obra.link %} [Disponível em linha]({{ obra.link }}).{% endif %}
{%- endfor %}

Documentação oficial de PostgreSQL, DuckDB, Apache Iceberg, dbt,
Apache Airflow e Debezium é material de consulta corrente da disciplina, com
links em [Materiais]({{ '/materiais/' | relative_url }}).
