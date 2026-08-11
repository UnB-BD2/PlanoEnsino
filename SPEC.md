# Spec — Site da Disciplina "Banco de Dados 2" (UnB/FCTE)

**Versão:** 2.0 · **Data:** 2026-08-05 · **Autoria:** Carla Rocha
**Licença do projeto:** MIT
**Status:** aprovada para implementação

> Esta versão incorpora as decisões de uma sessão de revisão dirigida. O vocabulário do projeto está em [CONTEXT.md](./CONTEXT.md) e as decisões arquiteturais em [docs/adr/](./docs/adr/). Onde esta spec e um ADR divergirem, o ADR prevalece.

---

## 1. Objetivo

Construir um site estático em **Jekyll**, publicado via **GitHub Pages**, que centralize e disponibilize publicamente **todo o material de apoio** da disciplina de graduação *Banco de Dados 2* (Engenharia de Software — FCTE/UnB): Plano de Ensino, cronograma, material dos Encontros, especificação do Projeto Integrado, rubricas de avaliação, guia de ADR, stack de ferramentas e bibliografia.

O site é a **fonte única de verdade** da disciplina para estudantes, monitoria e para quem for reaproveitar o material em outra instituição.

### 1.1 Objetivos específicos

1. Reduzir o custo de coordenação da disciplina — um endereço, sem PDFs perdidos em e-mail ou Moodle.
2. Tornar o material reutilizável por terceiros (licença MIT, conteúdo em Markdown versionado).
3. Permitir que estudantes e monitoria contribuam via *pull request*.
4. Manter o site editável por quem não é desenvolvedor: Markdown e YAML, sem tocar em HTML.

### 1.2 Não-objetivos

- Autenticação, área restrita ou recebimento de entregas — as Entregas continuam nos repositórios das Squads.
- Lançamento de notas ou qualquer dado que identifique estudante sem consentimento (ver [ADR-0005](./docs/adr/0005-vitrine-identifica-squad-nao-pessoa.md)).
- Backend ou build dinâmico. O site é 100% estático.
- Substituir o SIGAA nos atos formais da universidade.
- Publicar a proposta de Challenge-Based Learning e o planejamento detalhado de sprints: são desenho anterior e **contradizem o Plano de Ensino vigente** em estrutura, conteúdo e esquema de avaliação. Ficam fora do site.

### 1.3 Ciclo de vida entre ofertas

O site expõe **uma única Oferta viva**. A cada semestre o conteúdo é atualizado no lugar e a Oferta encerrada vira uma tag do git (`2026-2`). Só a vitrine de projetos acumula. Material de Oferta encerrada existe no git, mas não é navegável na web — ver [ADR-0001](./docs/adr/0001-oferta-unica-viva-com-historico-em-tag.md).

---

## 2. Referência de base

Derivado de **[unb-sistemas-de-machine-learning.github.io/Disciplina](https://unb-sistemas-de-machine-learning.github.io/Disciplina/)** ([repo](https://github.com/UnB-Sistemas-de-Machine-Learning/Disciplina)), mantendo a arquitetura de informação e o modelo de contribuição já validados no departamento.

**Herdado:** coleções Jekyll, `_data/nav.yml` como menu declarativo, includes de linha de cronograma (`schedule_row_*`), `_sass/` por componente, build local em Docker, MIT.

**Alterado deliberadamente:**

| Referência | Neste projeto | Motivo |
|---|---|---|
| gem `github-pages` (Jekyll 3.9, plugins travados) | **Jekyll 4.3** + deploy por GitHub Actions | Libera plugins e Sass moderno |
| Build no Pages clássico | `actions/deploy-pages` | Publicação a partir do mesmo `Gemfile.lock` |
| Sem `Makefile` | `Makefile` com alvos Docker | Um comando para subir; nenhum Ruby na máquina |
| `_site/`, `.DS_Store` versionados | `.gitignore` correto | Higiene de repositório |
| Sem CI de qualidade | `html-proofer` em PR | Nenhum link quebrado em produção |
| Coleção de aulas indiferenciada | Coleção de **Encontros** tipada | Titularidade distinta por encontro ([ADR-0003](./docs/adr/0003-encontro-como-unidade-de-conteudo.md)) |
| Tema genérico | Tema acadêmico próprio (§6) | Identidade visual da disciplina |

---

## 3. Identificação e hospedagem

| Item | Valor |
|---|---|
| Organização GitHub | `UnB-BD2` |
| Repositório | `UnB-BD2/PlanoEnsino` **renomeado para `Disciplina`** |
| URL de produção | `https://unb-bd2.github.io/Disciplina/` |
| `baseurl` | `/Disciplina` |
| Branch de conteúdo | `main`, protegida |
| Publicação | GitHub Actions → GitHub Pages |
| Licença | **MIT** |
| Idioma | `pt-BR` |
| Nome oficial | **Banco de Dados 2** (o "SBD2" da proposta anterior não é vocabulário deste projeto) |

O repositório `PlanoEnsino` está vazio e sem commits: renomear não perde nada, e o GitHub mantém redirecionamento. O clone local existente continua servindo.

> **Aberto (D2):** havendo domínio próprio, acrescentar `CNAME`, esvaziar `baseurl` e ajustar `url`. Definir **antes** do primeiro compartilhamento com a turma — mudar depois quebra links já distribuídos.

---

## 4. Requisitos funcionais

### RF-01 — Página inicial (`/`)
Hero com nome da disciplina, Oferta corrente, créditos e o tema central *"O ciclo de vida do dado, do byte gravado em disco à decisão tomada"*. Abaixo: resumo, próximos Encontros (3 itens), avisos, cards do corpo docente, logos institucionais e CTA para o Plano de Ensino e para a organização no GitHub.

### RF-02 — Plano de Ensino (`/plano-ensino/`)
Plano transcrito para Markdown versionado — o site é **o texto publicado**, e o PDF aprovado pelo colegiado fica disponível para download como registro formal ([ADR-0004](./docs/adr/0004-site-como-texto-publicado-do-plano-de-ensino.md)). Conteúdo: identificação, pré-requisito (Introdução a Banco de Dados), 4 créditos / 60h, objetivo geral, as 10 competências, o **Método de Decisão** em 6 passos, metodologia de sala invertida, avaliação com pesos. Índice lateral fixo em telas largas.

O Google Doc de origem é congelado e marcado como versão histórica.

### RF-03 — Cronograma (`/cronograma/`)
Uma linha por **Encontro** (~30), gerada de `_data/cronograma.yml`, agrupada por Semana e por módulo. Cada linha exibe data, Semana, tipo de Encontro, tema e links para material. Entregas e Seminários aparecem como marcos, com estilo próprio. Marcador visual da Semana corrente.

Datas são **declaradas**, nunca calculadas ([ADR-0002](./docs/adr/0002-material-ancorado-em-semana-nao-em-data.md)).

Módulos:
O conteúdo é o de *Fundamentos de Engenharia de Dados* (Reis & Housley, Novatec, 2023), percorrido na ordem do livro; os módulos correspondem às partes dele.

- **I — Fundamentos e componentes essenciais** (Semanas 1–5): o campo, o ciclo de vida e seus elementos subjacentes, princípios e exemplos de arquitetura, escolha de tecnologias. Livro, cap. 1 a 4.
- **II — Origem, armazenamento e ingestão** (6–9): sistemas de origem, ingredientes crus do armazenamento, sistemas e abstrações, ingestão. Livro, cap. 5 a 7 e Apêndice A.
- **III — Consultas, modelagem, transformação e disponibilização** (10–13): consultas e otimizador, modelagem, transformações, disponibilização e ETL reverso. Livro, cap. 8 e 9.
- **IV — Segurança, privacidade e o futuro** (14–15): segurança e privacidade com LGPD como complemento local, e o futuro do campo. Livro, cap. 10 e 11 e Apêndice B.
- **Encerramento** (16): defesa e retrospectiva.

### RF-04 — Encontros (`/encontros/`, `/encontros/:slug/`)
Índice da coleção agrupado por módulo e Semana. Cada Encontro tem página própria.

Encontro **conceitual**: objetivos de aprendizagem, slides embutidos com download, leitura prévia obrigatória, caso ou paper discutido, material complementar.

Encontro de **Seminário Técnico** e de **banca**: objetivos, regras e link para a avaliação correspondente.

Toda página de Encontro exibe link para os demais Encontros da mesma Semana, reconstruídos pelo campo `semana` — nas Semanas 13 a 15, o conceitual e o Seminário Técnico.

Não há Encontro de laboratório: o trabalho de Squad acontece no **Projeto Integrado**, fora da grade de Encontros.

### RF-05 — Projeto Integrado (`/projeto/`)
Especificação de *"Do dado bruto à decisão pública"*: formação das Squads (4–5), escolha do domínio de dados abertos brasileiros, **requisitos mínimos de produto** (fonte OLTP modelada e populada; ingestão batch + CDC/streaming; camada analítica em formato aberto; transformações versionadas com testes de qualidade e orquestração agendada; consumo duplo — painel analítico e camada semântica com ETL reverso; catálogo, linhagem e análise de LGPD; 5 ADRs) e as quatro **Entregas** E1–E4 com escopo, data e peso. Cada Entrega tem página própria com *checklist* de aceite.

### RF-06 — Avaliação e rubricas (`/avaliacao/`)
De `_data/avaliacao.yml`:

| Componente | Peso |
|---|---|
| Projeto Integrado (E1 10% · E2 12% · E3 14% · E4 14%) | 55% |
| Portfólio de 5 ADRs | 15% |
| Seminário Técnico + defesa final | 15% |
| Participação nos Encontros | 15% |

Rubrica de ADR em faixas (9–10 / 7–8 / 5–6 / 0–4) e rubrica de Entrega (funcionalidade e reprodutibilidade 30% · adequação técnica 25% · qualidade e testes de dados 20% · documentação e ADRs 15% · processo da Squad 10%), como tabelas acessíveis e linkáveis por âncora.

### RF-07 — Guia de ADR (`/adr/`)
O instrumento pedagógico central: o que é um ADR, o **Método de Decisão** em 6 passos, template copiável e *checklist* de autoavaliação.

Os exemplos anotados são **os ADRs do próprio site**, em `docs/adr/`. A página deve dizer abertamente que eles ficariam na faixa 5–6 da rubrica por não terem medição reproduzível, e usar isso para discutir quando medição é exigível — decisão de esquema de banco pede benchmark, decisão sobre unidade de conteúdo de um site não tem o que medir. A colisão de nomes é deliberada; ver [CONTEXT.md](./CONTEXT.md).

### RF-08 — Materiais e ambiente (`/materiais/`)
De `_data/materiais.yml` e `_data/stack.yml`:
- **Bibliografia**: 5 obras básicas (Reis & Housley; Kleppmann; Silberschatz; Kimball & Ross; Elmasri & Navathe) e complementares, com link quando aberto e indicação do módulo.
- **Stack**: tabela por camada — transacional PostgreSQL (+pgvector, PostGIS) · analítico DuckDB · objeto MinIO · formatos Parquet/Iceberg/Delta · streaming e CDC Redpanda/Kafka/Debezium · transformação dbt ou SQLMesh · orquestração Airflow ou Dagster · não relacional MongoDB/Neo4j/Redis · qualidade Great Expectations · catálogo OpenMetadata ou DataHub · consumo Metabase ou Superset · Docker Compose — com link para documentação oficial.

Hospeda a apostila (`Apostila_Banco_de_Dados.pdf`).

### RF-09 — Seminários Técnicos (`/seminarios/`)
Temas disponíveis para as Semanas 13–15, regras de inscrição, formato (20 min + arguição), rubrica.

### RF-10 — Equipe (`/equipe/`)
Cards de docentes e monitoria de `_data/pessoas.yml`: foto, nome, papel, mini-bio, e-mail institucional, links (Lattes, GitHub, ORCID). Apenas dados institucionais de quem tem vínculo docente ou de monitoria.

### RF-11 — Avisos, posts e vitrine
`_announcements` (avisos curtos na home) e `_posts` (tutoriais, retrospectivas, vitrine de projetos), listados em `/blog/`.

A vitrine identifica a **Squad**, o domínio de dados e o link do repositório público. Nome de estudante só com consentimento explícito por opt-in, colhido **após o lançamento das notas** ([ADR-0005](./docs/adr/0005-vitrine-identifica-squad-nao-pessoa.md)).

### RF-12 — Navegação
Menu declarativo em `_data/nav.yml`, responsivo (drawer no mobile). Breadcrumbs nas páginas internas.

**Busca client-side fica fora da v1.** Com ~30 Encontros e uma dúzia de páginas, um índice bem construído mais `Ctrl+F` resolve; um índice JSON com JavaScript próprio é superfície de manutenção que não se paga nessa escala. Reavaliar se o volume crescer.

### RF-13 — Contribuição
`main` protegida: tudo entra por pull request com CI verde. Docente e monitoria dão merge no próprio PR sem segundo revisor; contribuição externa espera revisão. `CONTRIBUTING.md` com o fluxo (adicionar um Encontro, corrigir um link, subir slides), `CODE_OF_CONDUCT.md`, templates de issue e PR. Botão "Editar esta página no GitHub" no rodapé.

O template de PR inclui verificação de dado pessoal e de material de terceiros — é esse portão que sustenta o ADR-0005.

---

## 5. Requisitos não funcionais

| ID | Requisito | Critério verificável |
|---|---|---|
| RNF-01 | **Build local sem Ruby na máquina** | `make serve` funciona só com Docker, em macOS (Apple Silicon e Intel) e Linux |
| RNF-02 | **Reprodutibilidade** | `Gemfile.lock` versionado e `.ruby-version` na raiz, lido pelo `Dockerfile` e pelo CI. Versão de Ruby e de gem em fonte única — não se promete build byte-idêntico |
| RNF-03 | **Acessibilidade** | WCAG 2.1 AA: contraste ≥ 4.5:1, navegação por teclado, `alt` em toda imagem, hierarquia de headings, tabelas com `<th scope>` |
| RNF-04 | **Responsividade** | Íntegro de 320 px a 2560 px; tabelas largas com scroll horizontal contido, sem scroll no `body` |
| RNF-05 | **Performance** | Lighthouse ≥ 90 em Performance, ≥ 95 em Acessibilidade; sem CDN externo em runtime |
| RNF-06 | **Integridade de links** | `html-proofer` sem erro no CI a cada PR |
| RNF-07 | **Tempo de rebuild local** | < 3 s por edição de Markdown, com live reload |
| RNF-08 | **SEO** | `jekyll-seo-tag`, `jekyll-sitemap`, `jekyll-feed`; Open Graph por página |
| RNF-09 | **Tema claro e escuro** | `prefers-color-scheme` respeitado, com alternador manual persistido |
| RNF-10 | **Privacidade** | Sem analytics, sem cookies, sem embed que rastreie. Dado pessoal de estudante apenas de forma consentida e revogável, nos termos do ADR-0005 |
| RNF-11 | **Tamanho de repositório** | Binários em `static_files/`, exportados abaixo de 5 MB; tamanho total revisado ao fim de cada Oferta ([ADR-0006](./docs/adr/0006-binarios-no-repositorio.md)) |

---

## 6. Design — tema acadêmico

Estética sóbria e tipográfica: legibilidade primeiro, densidade de informação alta, nada decorativo que atrapalhe leitura em projetor.

### 6.1 Paleta

Tokens em `_sass/_tokens.scss`, expostos como *custom properties* para o modo escuro não duplicar regras.

| Token | Claro | Escuro | Uso |
|---|---|---|---|
| `--bg` | `#FBFAF8` | `#14161A` | Fundo |
| `--surface` | `#FFFFFF` | `#1C1F24` | Cards, tabelas |
| `--text` | `#1A1D21` | `#E8E6E3` | Corpo |
| `--text-muted` | `#5A6069` | `#9BA3AD` | Metadados |
| `--accent` | `#0B4F6C` | `#5FB3D4` | Links, cabeçalhos |
| `--accent-2` | `#B45309` | `#F0A85C` | Entregas e marcos |
| `--border` | `#E4E0DA` | `#2C3037` | Separadores |
| `--code-bg` | `#F4F2EE` | `#22262C` | Código e SQL |

Todo par texto/fundo validado ≥ 4.5:1 nos dois temas.

### 6.2 Tipografia

Títulos em *Source Serif 4*; corpo em *Inter* ou *Source Sans 3*, 17 px, altura 1.65, medida de 68–72 caracteres; código em *JetBrains Mono*. Todas OFL e auto-hospedadas. Escala modular 1.25.

### 6.3 Componentes

Cabeçalho fixo com disciplina e Oferta; rodapé com endereço institucional, contato, licença e "editar no GitHub". Card de Encontro (tipado por natureza), *callouts* (`nota`, `atenção`, `entrega`, `leitura prévia`), linha do cronograma, tabela de rubrica com faixas, *badge* de módulo, bloco de código com destaque para SQL/Python/YAML e botão copiar, visualizador de PDF com *fallback* de download, diagrama do ciclo de vida do dado em SVG com `<title>`/`<desc>`.

### 6.4 Impressão

`print.scss`: Plano de Ensino, cronograma e rubricas imprimem limpos, sem menu nem rodapé, com URLs expandidas após os links.

---

## 7. Arquitetura do repositório

```
Disciplina/
├── .github/
│   ├── workflows/{deploy.yml, ci.yml}
│   ├── ISSUE_TEMPLATE/
│   └── pull_request_template.md
├── CONTEXT.md                      # vocabulário do projeto
├── docs/adr/                       # decisões sobre o site (e exemplos de RF-07)
├── _config.yml
├── _config.dev.yml
├── Gemfile / Gemfile.lock / .ruby-version
├── Dockerfile / docker-compose.yml / Makefile
├── .dockerignore / .gitignore
├── LICENSE / README.md / CONTRIBUTING.md / CODE_OF_CONDUCT.md
│
├── _data/
│   ├── nav.yml
│   ├── cronograma.yml              # uma linha por Encontro, data declarada
│   ├── avaliacao.yml
│   ├── entregas.yml                # E1–E4
│   ├── materiais.yml
│   ├── stack.yml
│   ├── pessoas.yml
│   └── seminarios.yml
│
├── _encontros/                     # coleção: um arquivo por Encontro
│   ├── s01-conceitual-o-que-e-engenharia-de-dados.md
│   ├── s02-conceitual-ciclo-de-vida-da-engenharia-de-dados.md
│   ├── s03-conceitual-principios-de-arquitetura.md
│   ├── s13-seminario-tecnico.md
│   └── ...
├── _announcements/
├── _posts/
│
├── _layouts/                       # default, home, page, encontro, encontros,
│                                   # cronograma, plano-ensino, projeto, post, posts
├── _includes/                      # head, header, nav, footer, callout, embedpdf,
│                                   # encontro_card, encontros_da_semana,
│                                   # schedule_row_*, rubric_table, people_card,
│                                   # edit_on_github
├── _sass/                          # _tokens, _base, _typography, _layout, _header,
│                                   # _footer, _card, _callout, _cronograma, _rubric,
│                                   # _code, _dark, _print
├── assets/{css, js, fonts, img}/
│
├── static_files/
│   ├── slides/                     # PDFs, < 5 MB cada
│   ├── apostila/
│   ├── plano-ensino/               # PDF aprovado pelo colegiado
│   ├── roteiros/
│   └── templates/                  # template de ADR, template de Entrega
│
└── páginas: index.md · plano-ensino.md · cronograma.md · encontros.md ·
            projeto.md · avaliacao.md · adr.md · materiais.md ·
            seminarios.md · equipe.md · blog.md
```

---

## 8. Modelo de conteúdo

Contrato de *front matter*. Campo ausente deve degradar sem quebrar o layout.

### 8.1 Encontro conceitual

Slug: `sNN-conceitual-<assunto>.md` — Semana no prefixo, tipo em seguida, ordenação natural.

```yaml
---
layout: encontro
semana: 2
tipo: conceitual              # conceitual | seminario | banca
titular: docente              # docente | monitoria
modulo: "I — Fundamentos e componentes essenciais"
titulo: "O ciclo de vida da engenharia de dados"
objetivos:
  - "Nomear os cinco estágios do ciclo e os seis elementos subjacentes"
  - "Contrastar orientação a linha e a coluna a partir do padrão de acesso"
  - "Diferenciar B-tree e LSM-tree pelo perfil de escrita e leitura"
slides: /static_files/slides/s02-armazenamento-fisico.pdf
leitura_previa:
  - titulo: "Database System Concepts, cap. 13"
  - titulo: "Designing Data-Intensive Applications, cap. 3"
complementar:
  - titulo: "PostgreSQL — Database Physical Storage"
    link: https://www.postgresql.org/docs/current/storage.html
---
```

**Não existe campo `data`.** O Encontro conhece a Semana; a data vive só no cronograma.

### 8.2 Encontro de Seminário Técnico e de banca

Slug: `sNN-seminario-tecnico.md` e `sNN-banca-<assunto>.md`. Mesmo contrato do conceitual, sem `slides` e sem `leitura_previa`; as regras vivem em `_data/seminarios.yml`.

O par com o Encontro conceitual da mesma Semana é resolvido pelo campo `semana`, e renderizado pelo include `encontros_da_semana`.

### 8.3 Cronograma (`_data/cronograma.yml`)

Uma linha por Encontro, data escrita à mão:

```yaml
- data: 2026-08-18
  semana: 2
  encontro: s02-conceitual-ciclo-de-vida-da-engenharia-de-dados
- data: 2026-11-05
  semana: 13
  encontro: s13-seminario-tecnico
```

### 8.4 Entrega (`_data/entregas.yml`)

```yaml
- id: E1
  titulo: "Fonte transacional modelada e populada"
  semana: 5
  data: 2026-09-08
  peso: 10
  checklist:
    - "Esquema físico versionado com migrações"
    - "Carga reprodutível a partir de dados abertos brasileiros"
    - "1 ADR sobre escolha de modelagem física"
```

### 8.5 Pessoa (`_data/pessoas.yml`)

```yaml
- nome: "Carla Rocha"
  papel: "Professora"
  foto: /assets/img/pessoas/carla.jpg
  bio: "Professora do Departamento de Engenharia de Software (FCTE/UnB), LAPPIS."
  email: caguiar@unb.br
  links:
    github: https://github.com/...
    lattes: http://lattes.cnpq.br/...
```

---

## 9. Build local com Docker

Requisito firme: **nenhuma instalação de Ruby, bundler ou Node na máquina.** Só Docker.

### 9.1 `Dockerfile`

```dockerfile
ARG RUBY_VERSION=3.3
FROM ruby:${RUBY_VERSION}-slim

RUN apt-get update -qq \
 && apt-get install -y --no-install-recommends build-essential git \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /srv/jekyll

COPY Gemfile Gemfile.lock ./
RUN bundle config set --local path /usr/local/bundle \
 && bundle install --jobs 4

EXPOSE 4000 35729
CMD ["bundle", "exec", "jekyll", "serve", \
     "--host", "0.0.0.0", "--livereload", "--incremental", \
     "--config", "_config.yml,_config.dev.yml"]
```

A versão vem do `.ruby-version` na raiz, passado como `--build-arg` pelo `Makefile`, e é o mesmo arquivo lido pelo `setup-ruby` no CI.

### 9.2 `docker-compose.yml`

```yaml
services:
  site:
    build:
      context: .
      args:
        RUBY_VERSION: ${RUBY_VERSION:-3.3}
    ports:
      - "4000:4000"
      - "35729:35729"
    volumes:
      - .:/srv/jekyll:cached
      - bundle:/usr/local/bundle
      - jekyll_cache:/srv/jekyll/.jekyll-cache
    environment:
      JEKYLL_ENV: development

volumes:
  bundle:
  jekyll_cache:
```

Gems e cache fora do *bind mount* é o que sustenta o RNF-07 em macOS.

### 9.3 `Makefile`

```makefile
export RUBY_VERSION := $(shell cat .ruby-version)

serve:   ## sobe em http://localhost:4000/Disciplina/ com live reload
	docker compose up --build

build:   ## gera _site em modo produção
	docker compose run --rm -e JEKYLL_ENV=production site \
	  bundle exec jekyll build

check:   ## valida links e HTML
	docker compose run --rm site \
	  bundle exec htmlproofer ./_site --disable-external --allow-hash-href

shell:
	docker compose run --rm site bash

lock:
	docker compose run --rm site bundle lock --update

clean:
	docker compose down -v && rm -rf _site .jekyll-cache
```

### 9.4 `Gemfile`

```ruby
source "https://rubygems.org"

gem "jekyll", "~> 4.3"
gem "webrick"

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-paginate-v2"
end

group :development do
  gem "html-proofer", "~> 5.0"
end
```

### 9.5 Fluxo de trabalho

```bash
git clone https://github.com/UnB-BD2/Disciplina.git && cd Disciplina
make serve            # http://localhost:4000/Disciplina/
# edita _encontros/s03-conceitual-principios-de-arquitetura.md → recarrega sozinho
git checkout -b s03-principios && git commit && git push
gh pr create          # CI verde → merge → publica
```

---

## 10. Deploy

`deploy.yml` — push na `main`: checkout → `ruby/setup-ruby` lendo `.ruby-version`, com cache de bundler → `jekyll build` com `JEKYLL_ENV=production` → `upload-pages-artifact` → `deploy-pages`. Permissões `pages: write` e `id-token: write`, concorrência com `cancel-in-progress`.

`ci.yml` — pull request: mesmo build + `html-proofer` (links internos obrigatórios, externos em modo tolerante).

Em *Settings → Pages*, origem **GitHub Actions**. Em *Settings → Branches*, proteção de `main` exigindo PR e CI verde, com merge do próprio PR permitido para mantenedor.

---

## 11. Licenciamento

- **Código** (layouts, includes, Sass, scripts, Docker): **MIT**, copyright "Universidade de Brasília — FCTE / Engenharia de Software".
- **Conteúdo didático**: coberto pela mesma MIT. O `README` registra que material de terceiros incorporado (figuras de livros, datasets) mantém a licença de origem e exige crédito — MIT do repositório não relicencia obra alheia.

> **Aberto (D3):** adotar CC BY-SA 4.0 para o conteúdo didático, mantendo MIT para o código. Não é obrigatório; MIT para tudo atende ao pedido.

---

## 12. Roadmap

O primeiro dia de aula de 2026/2 é o prazo. O corte da v1 é **o que destrava a E1**.

### v1 — antes do primeiro Encontro

| Fase | Entrega | Aceite |
|---|---|---|
| **F1 — Esqueleto** | Repositório renomeado, Docker + Makefile + Gemfile + `.ruby-version`, `_config.yml`, layout `default`, deploy funcionando, proteção de branch | `make serve` sobe local e a URL pública responde |
| **F2 — Tema** | Tokens, tipografia, header/footer/nav, modo escuro, folha de impressão, componentes base | Lighthouse ≥ 90/95; navegação por teclado completa |
| **F3 — O que destrava a E1** | Plano de Ensino transcrito, cronograma com as ~30 datas declaradas, avaliação e rubricas, guia de ADR com template, Projeto Integrado com E1 detalhada, equipe | Uma Squad consegue começar a E1 usando só o site; rubricas conferem com o documento aprovado |

### v2 — durante a Oferta

| Fase | Entrega |
|---|---|
| **F4 — Encontros** | Coleção `_encontros` preenchida Semana a Semana; materiais, stack, bibliografia, apostila |
| **F5 — Entregas e seminários** | E2–E4 detalhadas, temas de Seminário, exemplos anotados de ADR |
| **F6 — Comunidade** | Avisos, blog, vitrine (nos termos do ADR-0005), CONTRIBUTING e templates |

---

## 13. Critérios de aceite

1. `git clone` + `make serve` levanta o site numa máquina só com Docker, em menos de 5 minutos na primeira execução.
2. Editar um arquivo em `_encontros/` reflete no navegador em menos de 3 segundos.
3. Merge na `main` publica sem intervenção manual; push direto em `main` é recusado.
4. `make check` termina sem erro.
5. Acrescentar um Encontro exige **um** arquivo Markdown e **uma** linha em `_data/cronograma.yml` — nenhum HTML, nenhum layout tocado.
6. Nenhum arquivo em `_encontros/` tem campo `data`.
7. Todas as páginas com Acessibilidade ≥ 95 no Lighthouse.
8. Legível e íntegro em 320 px e em projetor a 1024×768.
9. `LICENSE` MIT presente e referenciada no rodapé de toda página.
10. Nenhuma página identifica estudante sem consentimento registrado.

---

## 14. Riscos

| Risco | Impacto | Mitigação |
|---|---|---|
| Prazo: semestre começa em semanas | Site incompleto ou ausente no primeiro dia | Corte da v1 restrito ao que destrava a E1; Encontros entram durante a Oferta |
| Divergência entre texto publicado e documento aprovado | Duas regras de avaliação circulando | Site é o texto de leitura, PDF aprovado é o registro; se divergirem, o site está errado (ADR-0004) |
| Histórico do git crescendo com PDFs | Repositório perto do limite do Pages em 4–5 ofertas | Regra de 5 MB por arquivo e revisão de tamanho ao fim de cada Oferta (ADR-0006) |
| PR com dado pessoal ou material licenciado | Problema de LGPD e de direito autoral | `main` protegida, revisão obrigatória, checklist no template de PR |
| Material da proposta CBL reaparecendo | Estudante consulta rubrica revogada | Os dois PDFs ficam fora do site; não entram em `static_files/` |
| Bundler quebrando por atualização de gem | Build para sem mudança de conteúdo | `Gemfile.lock` versionado, `.ruby-version` fixado |

---

## 15. Pendências

Decisões de projeto foram fechadas; o que resta é informação a levantar.

- **D2** — Domínio: `unb-bd2.github.io/Disciplina` ou `CNAME` próprio. Definir antes de compartilhar com a turma.
- **D3** — Licença do conteúdo didático: MIT para tudo, ou MIT + CC BY-SA 4.0.
- **D4** — **Conferir com a coordenação a carga horária.** O plano declara 16 semanas, 2 Encontros de 2h e 60h. A conta dá 64h. Ou são ~30 Encontros e não 32, ou há erro no documento. O número exato define quantos arquivos e quantas linhas de cronograma existem.
- **D5** — Calendário de 2026/2: as ~30 datas para `_data/cronograma.yml` e as datas de E1–E4.
- **D6** — Composição de docentes e monitoria para `_data/pessoas.yml`.

---

## Anexo A — Fontes

- Site de referência: <https://unb-sistemas-de-machine-learning.github.io/Disciplina/> · [repositório](https://github.com/UnB-Sistemas-de-Machine-Learning/Disciplina)
- Plano de Ensino: [Google Docs](https://docs.google.com/document/d/1H5SA__eBlGwykuLI1ByQNuXb_XNam9Gtun2gUWq9UX0/edit) — a congelar após a transcrição
- Organização: <https://github.com/UnB-BD2>
- Material local a publicar: `Apostila_Banco_de_Dados.pdf`
- Material local **fora do escopo**: `Proposta_Disciplina_SBD2_Challenge_Based_Learning.pdf`, `Planejamento_SBD2_Challenge_Detalhado.pdf`
