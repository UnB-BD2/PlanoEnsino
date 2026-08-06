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

{% include callout.html tipo="nota" texto="Esta página é o **texto publicado** do Plano de Ensino: é o que a turma lê, e aceita correção por pull request. O **documento aprovado pelo colegiado** é o registro formal e não muda dentro de uma Oferta. Se os dois divergirem, esta página está errada — e a correção é aqui, não lá." %}

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

1. Explicar como um SGBD armazena, indexa e recupera dados, e usar esse
   conhecimento para diagnosticar desempenho.
2. Projetar o esquema físico de um sistema transacional e ajustá-lo com base em
   planos de execução e medição.
3. Caracterizar uma carga de trabalho e **decidir** entre famílias de bancos de
   dados, registrando a decisão em um ADR.
4. Implementar ingestão de dados em lote e em fluxo contínuo, incluindo captura
   de mudanças (CDC).
5. Avaliar compromissos de sistemas distribuídos — replicação, particionamento,
   consistência — em cenários concretos.
6. Modelar dados para consumo analítico e implementar transformações versionadas
   e testadas.
7. Orquestrar, monitorar e assegurar a qualidade de um fluxo de dados.
8. Estruturar dados não estruturados para uso em sistemas de IA: *embeddings*,
   busca híbrida, *feature store*.
9. Aplicar requisitos de governança, linhagem, segurança e LGPD ao projeto de
   uma plataforma de dados.
10. Comunicar decisões técnicas de dados a público misto — técnico e gestor.

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

O instrumento é o **ADR** (*Architecture Decision Record*), no formato Nygard:
contexto, decisão, status, consequências. Cada Squad mantém um portfólio
versionado no próprio repositório, com **5 ADRs obrigatórios** ao longo do
semestre. O [guia de ADR]({{ '/adr/' | relative_url }}) traz o template e a
rubrica.

## Metodologia

Aprendizagem orientada a projeto, com **sala invertida** e laboratório contínuo.

- **Encontro conceitual (2 h)** — exposição dialogada curta, de cerca de 40
  minutos, seguida de estudo de caso ou leitura de *paper* e discussão dos
  compromissos arquiteturais em jogo. A leitura prévia é obrigatória: o Encontro
  discute o que você leu, não o resume.
- **Encontro de laboratório (2 h)** — trabalho de cada Squad no Projeto
  Integrado, com a monitoria em sala.
- **Projeto Integrado** — Squads de 4 a 5 pessoas constroem, ao longo do
  semestre, uma plataforma de dados completa sobre um domínio real de dados
  abertos, em quatro Entregas incrementais.
- **Diário de bordo** — registro semanal curto por Squad: o que foi medido, o
  que surpreendeu, o que foi decidido. É insumo das retrospectivas e da defesa
  final.
- **Seminários Técnicos** — nas Semanas 13 a 15, cada Squad apresenta um
  aprofundamento sobre tópico do *roadmap* de Engenharia de Dados que os
  Encontros não cobrem.

## O Projeto Integrado

**"Do dado bruto à decisão pública."** Cada Squad escolhe um domínio de dados
abertos governamentais brasileiros — saneamento e SNIS, habitação,
transferências e execução orçamentária, mobilidade urbana, bases do Ministério
das Cidades — e constrói a plataforma que permite responder a uma pergunta de
gestão real.

Requisitos mínimos do produto final:

- uma fonte transacional (OLTP) modelada e populada;
- ingestão em lote **e** um fluxo de mudanças (CDC ou *streaming*);
- camada de armazenamento analítico em formato aberto;
- transformações versionadas com testes de qualidade e orquestração agendada;
- camada de consumo dupla: painel analítico **e** busca semântica sobre o
  componente não estruturado do domínio;
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

As rubricas completas — de ADR, de Entrega e de Seminário — estão em
[Avaliação e rubricas]({{ '/avaliacao/' | relative_url }}), cada uma linkável
por âncora.

## Uso de assistentes e agentes de IA

Esta Oferta adota uma [Política de Uso de IA]({{ '/uso-de-ia/' | relative_url }})
própria. Em resumo: o uso é **esperado, não tolerado**, e o princípio é
transparência em vez de proibição. Não há penalidade por usar; há penalidade por
não declarar e por não entender o que se entregou.

O uso é registrado no `AI-USAGE.md` do repositório da Squad, e não é permitido
nos instrumentos que medem entendimento individual — arguições presenciais,
quizzes, avaliação por pares e ensaio de reflexão crítica.

A política regula **como** os instrumentos deste plano são conduzidos; ela não
altera peso, rubrica nem critério de avaliação.

## Plano das 16 Semanas

### Módulo I — Fundamentos e internals

*O dado em repouso.* Semanas 1 a 5.

| Semana | Tema | Conteúdo |
|---|---|---|
| 1 | Abertura: o ciclo de vida do dado | Panorama do ciclo de vida e das correntes que o atravessam — segurança, gestão, DataOps, arquitetura, orquestração. O papel do banco numa plataforma. Formação de Squads e escolha de domínio. |
| 2 | Armazenamento e organização física | Páginas, *heap*, *tablespaces*, TOAST. Orientação a linha × a coluna. Compressão. B-tree × LSM-tree e suas consequências de escrita e leitura. |
| 3 | Indexação e otimização de consultas | Tipos de índice — B-tree, hash, GIN, GiST, BRIN. Seletividade e estatísticas. Leitura de planos de execução. O otimizador e por que ele erra. |
| 4 | Transações, concorrência e projeto físico | ACID na prática. Níveis de isolamento e as anomalias que cada um permite. MVCC. *Deadlocks*. Desnormalização deliberada. Particionamento local. |
| 5 | Lógica no servidor e captura de mudanças | Funções, procedimentos, *triggers*, PL/pgSQL. Quando pôr lógica no banco e quando não. *Write-ahead log* e decodificação lógica como fundamento de CDC. |

### Módulo II — Sistemas distribuídos e ingestão

*O dado em trânsito.* Semanas 6 a 8.

| Semana | Tema | Conteúdo |
|---|---|---|
| 6 | Compromissos de sistemas distribuídos | Replicação e seus modos. Particionamento e *rebalancing*. Modelos de consistência. Partição de rede e o que se escolhe quando ela acontece. Conceitual com experimento. |
| 7 | Famílias não relacionais | Documento, chave-valor, colunar largo e grafo. O que cada família otimiza e o que cobra em troca. Comparação decisória a partir de uma carga real. |
| 8 | Ingestão: lote e fluxo contínuo | *Batch* × *streaming*. Semântica de entrega. Janelas e dados atrasados. Filas e *log* distribuído. Formatos colunares (Parquet) e tabelas abertas (Iceberg, Delta). Data lake × warehouse × lakehouse. |

### Módulo III — Modelagem analítica e transformação

*O dado em uso.* Semanas 9 a 12.

| Semana | Tema | Conteúdo |
|---|---|---|
| 9 | OLTP → OLAP e modelagem dimensional | Por que analítico é outro problema. Fato e dimensão. Estrela × floco de neve. Granularidade. Dimensões de variação lenta. |
| 10 | Modelagem alternativa e ELT | Data Vault, *one big table*, *wide tables*. ETL × ELT e por que a ordem mudou. Transformação declarativa e versionada. Camadas *bronze*, *silver*, *gold*. |
| 11 | Qualidade, testes e contratos de dados | Dimensões de qualidade. Testes de esquema, de volume, de distribuição. *Data contracts*. *Schema evolution*. Idempotência e reprocessamento. |
| 12 | Orquestração e observabilidade | Grafos de dependência, agendamento, *backfill*, *retry*. SLA e *freshness*. Linhagem operacional. Custo como métrica de engenharia. |

### Módulo IV — Dados não estruturados, IA e governança

*O dado como ativo.* Semanas 13 a 15.

| Semana | Tema | Conteúdo |
|---|---|---|
| 13 | Dados não estruturados e representações vetoriais | Texto, imagem e *log* como dado de primeira classe. *Chunking*. *Embeddings*. Distância e similaridade. Índices vetoriais (HNSW, IVF) e o compromisso entre *recall* e latência. |
| 14 | Busca híbrida e dados para IA | Busca léxica × semântica × híbrida. *Reranking*. Recuperação aumentada (RAG) como problema de engenharia de dados. *Feature stores*, treino × serviço e *feature skew*. Dados sintéticos e avaliação. |
| 15 | Governança, segurança e LGPD | Catálogo e linhagem. Classificação de dados. Anonimização, pseudonimização e *k*-anonimato. Controle de acesso em nível de linha e de coluna. Retenção e descarte. LGPD aplicada a plataformas de dados. Arquiteturas organizacionais — *mesh*, *lakehouse*, contratos entre domínios. |

### Encerramento

| Semana | Tema | Conteúdo |
|---|---|---|
| 16 | Defesa e retrospectiva | Apresentação da plataforma completa a banca com perfil técnico e de gestão. Arguição sobre as decisões tomadas. Retrospectiva do ciclo de vida percorrido. |

## Mapeamento com o roadmap de Engenharia de Dados

O que a disciplina cobre, com que profundidade, e o que ela deliberadamente
remete a outro lugar.

| Bloco do roadmap | Onde é tratado | Profundidade |
|---|---|---|
| SQL e bancos relacionais | Semanas 2–5 | Aprofundada — *internals*, planos, *tuning* |
| Modelagem de dados: normalização, dimensional, Data Vault | Semanas 4, 9, 10 | Aprofundada |
| Bancos NoSQL: documento, chave-valor, colunar largo, grafo | Semana 7 | Comparativa e decisória |
| Data warehousing e OLAP | Semanas 8–10 | Aprofundada |
| Data lakes e lakehouse: Parquet, Iceberg, Delta | Semana 8 | Prática |
| ETL/ELT e pipelines | Semanas 8, 10 | Prática |
| Processamento em lote e em fluxo: Kafka, CDC | Semanas 5, 8 | Prática |
| Orquestração: Airflow, Dagster | Semana 12 | Prática |
| Qualidade, testes e observabilidade | Semanas 11–12 | Aprofundada |
| Sistemas distribuídos: replicação, particionamento, consistência | Semana 6 | Conceitual, com experimento |
| Governança, catálogo, linhagem, segurança, LGPD | Semana 15 | Aprofundada |
| Nuvem, IaC, Kubernetes | Semana 12 (menção) e Seminários | **Fora do escopo** — remetido a Computação em Nuvem / DevOps |
| Spark e processamento distribuído em cluster | Seminários | **Introdutório** — remetido a Big Data / eletiva |
| Dados vetoriais, *embeddings*, RAG, *feature stores* | Semanas 13–14 | **Acréscimo desta proposta** — ainda pouco presente no roadmap |
| Arquiteturas organizacionais: *data mesh*, contratos | Semana 15 | Conceitual |

## Recursos e ferramental

Toda a stack é software livre e executável localmente, alinhada à prática do
Lab Livre e reprodutível sem custo de nuvem. A tabela completa por camada, com
link para a documentação oficial de cada ferramenta, está em
[Materiais e ambiente]({{ '/materiais/#stack' | relative_url }}).

Em resumo: PostgreSQL com pgvector e PostGIS no transacional; DuckDB no
analítico; MinIO para objetos; Parquet, Iceberg ou Delta nos formatos abertos;
Redpanda ou Kafka com Debezium no fluxo e CDC; dbt ou SQLMesh na transformação;
Airflow ou Dagster na orquestração; MongoDB, Neo4j e Redis nos não relacionais;
Great Expectations na qualidade; OpenMetadata ou DataHub no catálogo; Metabase
ou Superset no consumo; Docker Compose no empacotamento.

Fontes de dados sugeridas: Portal Brasileiro de Dados Abertos, SNIS, bases do
Ministério das Cidades, IBGE e Portal da Transparência.

## Bibliografia

### Básica

{%- for obra in site.data.materiais.basica %}
{{ forloop.index }}. {{ obra.autores }} **{{ obra.titulo }}.**{% if obra.edicao %} {{ obra.edicao }}{% endif %}{% if obra.editora %} {{ obra.editora }},{% endif %} {{ obra.ano }}.{% if obra.nota %} *({{ obra.nota }})*{% endif %}
{%- endfor %}

### Complementar

{%- for obra in site.data.materiais.complementar %}
{{ forloop.index }}. {{ obra.autores }} **{{ obra.titulo }}.**{% if obra.edicao %} {{ obra.edicao }}{% endif %}{% if obra.editora %} {{ obra.editora }},{% endif %} {{ obra.ano }}.{% if obra.link %} [Disponível em linha]({{ obra.link }}).{% endif %}
{%- endfor %}

Documentação oficial de PostgreSQL, pgvector, DuckDB, Apache Iceberg, dbt,
Apache Airflow e Debezium é material de consulta corrente da disciplina, com
links em [Materiais]({{ '/materiais/' | relative_url }}).
