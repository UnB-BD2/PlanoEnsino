## O que muda

<!-- Uma ou duas frases. Se corrige algo, diga o que estava errado. -->

## Tipo

- [ ] Novo Encontro (arquivo em `_encontros/` + linha em `_data/cronograma.yml`)
- [ ] Material (slides, roteiro, apostila) em `static_files/`
- [ ] Correção de texto ou de link
- [ ] Aviso ou post
- [ ] Tema, layout ou infraestrutura

## Checklist

- [ ] `make check` passou localmente
- [ ] Nenhum arquivo em `_encontros/` ganhou campo `data:` ([ADR-0002](../docs/adr/0002-material-ancorado-em-semana-nao-em-data.md))
- [ ] Vocabulário conforme [CONTEXT.md](../CONTEXT.md) — Encontro, Semana, Squad, Entrega
- [ ] Toda imagem tem `alt` descritivo
- [ ] Binário adicionado está abaixo de 5 MB ([ADR-0006](../docs/adr/0006-binarios-no-repositorio.md))

## Dado pessoal

> Este portão é o que sustenta o [ADR-0005](../docs/adr/0005-vitrine-identifica-squad-nao-pessoa.md). Responda mesmo que a resposta seja óbvia.

- [ ] **Não** há nome, foto, e-mail, matrícula ou contato de estudante neste PR
- [ ] Ou: há, e o consentimento por *opt-in* foi colhido **após o lançamento das
      notas** e está registrado. Onde: <!-- issue, e-mail, formulário -->

Dado de docente e de monitoria é institucional e não depende de opt-in.

## Material de terceiros

- [ ] **Não** há figura, dataset, trecho de código ou texto de terceiro neste PR
- [ ] Ou: há, a fonte está creditada na própria página e a licença de origem
      permite redistribuição. Fonte e licença: <!-- ex.: figura de Kleppmann, cap. 3 — uso didático, crédito na legenda -->

A MIT deste repositório não relicencia obra alheia.

## Fora de escopo

- [ ] Este PR **não** traz material da proposta de Challenge-Based Learning
      (`Proposta_Disciplina_SBD2_…`, `Planejamento_SBD2_Challenge_…`), que
      contradiz o Plano de Ensino vigente
- [ ] Este PR **não** altera peso ou rubrica de avaliação. Se altera, o
      documento aprovado pelo colegiado mudou antes — link:
