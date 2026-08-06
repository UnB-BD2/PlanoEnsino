---
layout: plano-ensino
title: "Guia de ADR"
titulo: "Guia de ADR"
permalink: /adr/
eyebrow: "O instrumento pedagógico central"
resumo: >-
  O que é um ADR, como aplicar o Método de Decisão em seis passos, o template
  copiável e um checklist de autoavaliação antes de entregar.
---

Um **ADR** — *Architecture Decision Record* — registra uma decisão de
arquitetura: o contexto em que ela foi tomada, as alternativas consideradas, a
escolha feita e as consequências que ela cria. É um documento curto, de uma a
duas páginas, versionado junto com o código que ele explica.

Vale 15% da nota. Mas o motivo de ele ocupar tanto espaço na disciplina não é o
peso: é que a decisão de banco de dados é o objeto de estudo. Escolher entre
PostgreSQL e MongoDB, entre Iceberg e Delta, entre Airflow e Dagster, é o
trabalho de quem projeta a camada de dados de um sistema. O ADR é onde esse
trabalho fica visível — e, portanto, avaliável.

{% include callout.html tipo="nota" texto="A nota do ADR **não depende de a escolha ter sido a melhor.** Depende de a carga ter sido caracterizada, de a opção nula ter sido considerada, de haver medição com dados do próprio domínio, e de o que se perde estar dito por extenso." %}

## O Método de Decisão em seis passos

Todo ADR da disciplina aplica os mesmos seis passos. Não é burocracia: cada
passo elimina um jeito específico de errar.

### 1. Caracterizar a carga

Volume, taxa de escrita e de leitura, cardinalidade, padrão de acesso, latência
tolerada, sazonalidade. Com números do seu domínio.

*O erro que este passo evita:* escolher tecnologia para um problema imaginado.
"Precisamos escalar" não é caracterização; "180 mil linhas/dia, 95% de leitura,
consultas de agregação sobre janelas de 30 dias" é.

### 2. Explicitar as restrições não funcionais

Consistência exigida, disponibilidade, custo, requisitos legais, competência da
equipe, licenciamento.

*O erro que este passo evita:* descobrir a restrição depois de construir.
Competência da equipe é restrição legítima e costuma ser omitida por parecer
confissão de fraqueza — não é. Uma equipe que não sabe operar Kafka tem uma
razão real para não escolher Kafka, e essa razão merece estar escrita.

### 3. Levantar candidatos

No mínimo três, incluindo obrigatoriamente a **opção nula** — "continuar no
PostgreSQL que já temos".

*O erro que este passo evita:* justificar a decisão que já foi tomada. A opção
nula é obrigatória porque é a mais frequentemente certa e a menos frequentemente
considerada. Um ADR em que a opção nula não aparece, ou aparece como
espantalho, não passa da faixa 5–6.

### 4. Prototipar e medir

*Benchmark* mínimo, com dados do próprio domínio — nunca sintético genérico.
Reproduzível: script no repositório, dado de entrada disponível, comando
documentado.

*O erro que este passo evita:* decidir por reputação. O que o fornecedor mede é
o caso em que ele ganha. O que importa é o que acontece com a sua carga.

### 5. Registrar o compromisso

O que se ganha, o que se perde, o que se torna irreversível.

*O erro que este passo evita:* a decisão parecer gratuita. Toda escolha
arquitetural custa algo; se você não consegue nomear o custo, provavelmente não
entendeu a escolha. É neste passo que a maioria dos ADRs perde nota.

### 6. Definir o gatilho de revisão

Sob qual métrica esta decisão deixa de valer.

*O erro que este passo evita:* a decisão virar dogma. "Revisar se a latência do
p95 passar de 400 ms" transforma uma escolha em hipótese com prazo. Sem gatilho,
ninguém revisita — e o sistema carrega decisões cujo contexto já morreu.

## Template

Formato Nygard. Copie, salve em `docs/adr/NNNN-titulo-em-kebab-case.md` no
repositório da Squad, e substitua o que está entre colchetes.

```markdown
# NNNN — [Título: a decisão, em uma frase afirmativa]

- **Status:** proposto | aceito | substituído por [ADR-NNNN] | revogado
- **Data:** AAAA-MM-DD
- **Decisores:** [quem participou]

## Contexto

[Que problema motivou esta decisão? Qual é a carga de trabalho, com números?
Quais restrições não funcionais valem aqui — consistência, custo, legislação,
competência da equipe?]

## Alternativas consideradas

### A. [Opção nula: continuar como está]
[Por que ela é viável. Por que ela não foi escolhida — se não foi.]

### B. [Alternativa]
[O que ela oferece. O que ela cobra.]

### C. [Alternativa]
[Idem.]

## Medição

[O que foi medido, com que dado, em que condição. Como reproduzir: comando,
script, versão. Resultado em tabela.]

| Alternativa | Métrica 1 | Métrica 2 |
|---|---|---|
| A | | |
| B | | |
| C | | |

## Decisão

[Escolhemos X.]

## Consequências

**O que ganhamos:** [...]

**O que perdemos:** [seja específico — esta seção é a que separa 7–8 de 9–10]

**O que se torna irreversível:** [migração de volta custa o quê?]

## Gatilho de revisão

[Sob qual métrica esta decisão deixa de valer.]
```

<div class="button-row" data-print="hide">
  <a class="button button--ghost" href="{{ '/static_files/templates/adr-template.md' | relative_url }}" download>Baixar o template</a>
</div>

## Checklist de autoavaliação

Passe por esta lista antes de entregar. Cada item corresponde a um ponto que a
correção verifica.

<ul class="checklist">
  <li>A carga está caracterizada com <strong>números do meu domínio</strong>, não com adjetivos</li>
  <li>Há pelo menos três alternativas, e a <strong>opção nula</strong> é uma delas</li>
  <li>A opção nula foi tratada com seriedade, não como espantalho</li>
  <li>A medição usa dado do próprio domínio e é <strong>reproduzível por terceiro</strong> — script e comando estão no repositório</li>
  <li>A seção "o que perdemos" nomeia perdas <strong>concretas</strong>, não "aumento de complexidade"</li>
  <li>Está dito o que se torna irreversível, e quanto custaria voltar atrás</li>
  <li>Há gatilho de revisão com <strong>métrica e limiar</strong></li>
  <li>O título é uma frase afirmativa que diz a decisão, não o tema</li>
  <li>O ADR cabe em duas páginas</li>
</ul>

A [avaliação completa]({{ '/avaliacao/#avaliacao-adr' | relative_url }}) está na
página de avaliação.

## Exemplos anotados: os ADRs deste site

Os exemplos da disciplina são os ADRs do **próprio site que você está lendo**.
Estão em
[`docs/adr/`](https://github.com/{{ site.repository }}/tree/{{ site.branch }}/docs/adr),
versionados junto com o código, e registram decisões reais tomadas na construção
deste site.

A colisão de nomes é deliberada. "ADR" aqui tem dois autores possíveis: a Squad,
que produz o artefato avaliado, e a docência, que registra decisões sobre o
site. Você desambigua por quem escreve, não por um termo diferente.

<div class="table-scroll">
<table>
  <caption class="visually-hidden">ADRs do site e a decisão que cada um registra</caption>
  <thead>
    <tr><th scope="col">ADR</th><th scope="col">A decisão</th></tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="https://github.com/{{ site.repository }}/blob/{{ site.branch }}/docs/adr/0001-oferta-unica-viva-com-historico-em-tag.md" rel="noopener">0001</a></th>
      <td>Uma única Oferta viva no site; a encerrada vira tag do git</td>
    </tr>
    <tr>
      <th scope="row"><a href="https://github.com/{{ site.repository }}/blob/{{ site.branch }}/docs/adr/0002-material-ancorado-em-semana-nao-em-data.md" rel="noopener">0002</a></th>
      <td>Material ancorado em Semana, não em data; a data é declarada, não calculada</td>
    </tr>
    <tr>
      <th scope="row"><a href="https://github.com/{{ site.repository }}/blob/{{ site.branch }}/docs/adr/0003-encontro-como-unidade-de-conteudo.md" rel="noopener">0003</a></th>
      <td>O Encontro é a unidade de conteúdo, não a Semana</td>
    </tr>
    <tr>
      <th scope="row"><a href="https://github.com/{{ site.repository }}/blob/{{ site.branch }}/docs/adr/0004-site-como-texto-publicado-do-plano-de-ensino.md" rel="noopener">0004</a></th>
      <td>O site é o texto publicado do Plano de Ensino; o PDF aprovado é o registro formal</td>
    </tr>
    <tr>
      <th scope="row"><a href="https://github.com/{{ site.repository }}/blob/{{ site.branch }}/docs/adr/0005-vitrine-identifica-squad-nao-pessoa.md" rel="noopener">0005</a></th>
      <td>A vitrine identifica a Squad, não a pessoa</td>
    </tr>
    <tr>
      <th scope="row"><a href="https://github.com/{{ site.repository }}/blob/{{ site.branch }}/docs/adr/0006-binarios-no-repositorio.md" rel="noopener">0006</a></th>
      <td>Slides e apostila vivem no repositório, com regra de 5 MB por arquivo</td>
    </tr>
  </tbody>
</table>
</div>

### Por que eles ficariam na faixa 5–6

Vale dizer abertamente: aplicada a avaliação da disciplina, **esses ADRs não
passariam da faixa 5–6**. Eles têm contexto, alternativas com a opção nula,
consequências específicas e o que se torna irreversível. O que não têm é
**medição reproduzível**.

Isso não é descuido — é o ponto pedagógico. Medição é exigível quando existe algo
a medir.

Uma decisão de esquema de banco tem: você popula as duas modelagens, roda a
consulta que importa, lê o plano de execução e compara. Quem não mede está
adivinhando, e a avaliação cobra isso com razão.

Uma decisão sobre a unidade de conteúdo de um site não tem. O
[ADR-0003](https://github.com/{{ site.repository }}/blob/{{ site.branch }}/docs/adr/0003-encontro-como-unidade-de-conteudo.md)
escolhe entre "um arquivo por Encontro" e "um arquivo por Semana". O critério
real é conflito de edição entre duas autoras e clareza de titularidade — não há
*benchmark* que produza esse número, e inventar uma métrica para parecer
rigoroso seria pior do que assumir a ausência.

O que a avaliação pede, então, não é medição sempre. É **evidência apropriada à
natureza da decisão**, e honestidade quando ela não existe. Um ADR que diz "não
medimos, porque o critério aqui é organizacional, e eis o raciocínio" é melhor
do que um que fabrica um *benchmark* irrelevante — este último cai na faixa 0–4,
por *benchmark* irreprodutível.

No Projeto Integrado, praticamente toda decisão que vocês vão registrar **tem** o
que medir. Se você concluir que a sua não tem, essa conclusão precisa estar
argumentada no ADR — e ela mesma será avaliada.

## As cinco decisões do semestre

Os 5 ADRs obrigatórios não são livres: cada Entrega carrega ao menos um, sobre a
decisão estrutural daquela etapa.

| Entrega | Decisão típica |
|---|---|
| [E1]({{ '/projeto/e1/' | relative_url }}) | Modelagem física: normalização, particionamento, tipo de índice |
| [E2]({{ '/projeto/e2/' | relative_url }}) | Mecanismo de ingestão: CDC × *batch*, formato de tabela aberta |
| [E3]({{ '/projeto/e3/' | relative_url }}) | Modelagem analítica ou ferramenta de transformação |
| [E4]({{ '/projeto/e4/' | relative_url }}) | Índice vetorial e parâmetros de *recall* × latência |
| Livre | A decisão que mais custou à Squad, em qualquer ponto do ciclo |
