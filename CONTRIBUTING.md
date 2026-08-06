# Como contribuir

Este site é mantido em conjunto pela docência, pela monitoria e por quem cursa a
disciplina. Correção de erro, link quebrado, slides e material complementar são
bem-vindos por *pull request*.

Antes de escrever, leia [CONTEXT.md](./CONTEXT.md): o projeto tem vocabulário
fechado e usá-lo errado é o motivo mais comum de pedido de ajuste em revisão.

## Regras do repositório

- `main` é protegida. Nada entra por *push* direto: tudo por pull request com CI
  verde.
- Docência e monitoria dão *merge* no próprio PR sem segundo revisor.
  Contribuição externa espera revisão.
- Todo PR passa pelo checklist de **dado pessoal** e **material de terceiros**.
  Esse portão é o que sustenta o
  [ADR-0005](./docs/adr/0005-vitrine-identifica-squad-nao-pessoa.md) — não é
  formalidade.

## Preparar o ambiente

Só Docker. Nenhum Ruby na máquina.

```bash
git clone https://github.com/UnB-BD2/Disciplina.git
cd Disciplina
make serve      # http://localhost:4000/Disciplina/
```

Editar Markdown recarrega o navegador sozinho. Mexer em `_config.yml` exige
reiniciar (`Ctrl-C` e `make serve` de novo) — é a única exceção.

Antes de abrir o PR:

```bash
make check      # html-proofer: nenhum link interno quebrado
```

## Receitas

### Acrescentar um Encontro

Duas edições, nenhuma linha de HTML.

**1. Um arquivo em `_encontros/`.** O nome do arquivo é a URL. Padrão:
`sNN-conceitual-<assunto>.md`, com `NN` = número da Semana com dois dígitos.
Seminário e banca usam `sNN-seminario-…` e `sNN-banca-…`.

```yaml
---
semana: 3
tipo: conceitual              # conceitual | seminario | banca | laboratorio
titular: docente              # docente | monitoria
modulo: "I — Fundamentos e internals"
titulo: "Indexação e otimização de consultas"
objetivos:
  - "Escolher o tipo de índice a partir da seletividade e do padrão de acesso"
slides: /static_files/slides/s03-indexacao.pdf
leitura_previa:
  - titulo: "Database System Concepts, cap. 14"
complementar:
  - titulo: "Use The Index, Luke!"
    link: https://use-the-index-luke.com/
---

Texto livre em Markdown, opcional.
```

**Não existe campo `data`.** O Encontro conhece a Semana; a data vive só no
cronograma ([ADR-0002](./docs/adr/0002-material-ancorado-em-semana-nao-em-data.md)).
A CI recusa o PR se você acrescentar um.

Campo ausente degrada sem quebrar o layout: se não há slides ainda, omita
`slides:` e a seção some.

**2. Uma linha em `_data/cronograma.yml`**, com a data escrita à mão e o `encontro`
igual ao nome do arquivo sem `.md`:

```yaml
- data: 2026-08-25
  semana: 3
  encontro: s03-conceitual-indexacao
```

Quando uma Semana tem mais de um Encontro — como as 13 a 15, com conceitual e
seminário —, a ligação entre eles é reconstruída sozinha pelo campo `semana`
([ADR-0003](./docs/adr/0003-encontro-como-unidade-de-conteudo.md)).

O tipo `laboratorio` continua suportado pelo tema, mas não há Encontro de
laboratório publicado nesta Oferta.

### Corrigir um link ou um erro de texto

Use o botão **"Editar esta página no GitHub"** no rodapé da página. Ele abre o
arquivo certo já no editor do GitHub, que cria o *branch* e o PR para você.

### Subir slides ou um roteiro

Coloque o PDF em `static_files/slides/` (ou `static_files/roteiros/`) e aponte o
campo `slides:` / `roteiro:` do Encontro para ele.

**Limite de 5 MB por arquivo.** PDF não faz *delta* no git: cada revisão grava
um blob inteiro e o histórico não encolhe
([ADR-0006](./docs/adr/0006-binarios-no-repositorio.md)). Exporte comprimido —
no Keynote/PowerPoint, exportar em qualidade "boa" em vez de "melhor" costuma
resolver.

### Publicar um aviso

Um arquivo em `_announcements/`, com `data:` e `titulo:`. Aparece na home.
Avisos não viram página própria; se o texto for longo, é post.

## O que não entra

- **Dado pessoal de estudante** sem consentimento registrado — inclusive nome em
  vitrine de projeto, que só entra por *opt-in* colhido **depois** do lançamento
  das notas ([ADR-0005](./docs/adr/0005-vitrine-identifica-squad-nao-pessoa.md)).
- **Material da proposta de Challenge-Based Learning** (`Proposta_Disciplina_SBD2_…`,
  `Planejamento_SBD2_Challenge_…`). É desenho anterior e contradiz o Plano de
  Ensino vigente em estrutura e em avaliação. Não entra em `static_files/`.
- **Mudança de regra de avaliação** por edição de Markdown. O site publica o que
  o colegiado aprovou; alterar peso ou critério de avaliação no meio de uma Oferta é mudar a
  regra do jogo ([ADR-0004](./docs/adr/0004-site-como-texto-publicado-do-plano-de-ensino.md)).
- **Analytics, cookies, embed que rastreia, CDN externo em runtime.** O site não
  observa quem o lê.
- **Termo fora do vocabulário.** "Aula", "turma", "grupo", "sprint" e "milestone"
  têm substituto em [CONTEXT.md](./CONTEXT.md).

## Estilo

- Português do Brasil, segunda pessoa velada ("edite o arquivo"), sem
  emoji no conteúdo do site.
- Toda imagem precisa de `alt` descritivo — o site é auditado em WCAG 2.1 AA.
- Tabela precisa de cabeçalho real (`| --- |`), não negrito na primeira linha.
- Link com texto que diz o destino. "Clique aqui" não passa em revisão.
