# Banco de Dados 2 — site da disciplina

Material de apoio da disciplina de graduação **Banco de Dados 2** (Engenharia de
Software — FCTE/Universidade de Brasília), publicado como site estático:

**<https://unb-bd2.github.io/Disciplina/>**

O site é a fonte única de verdade da disciplina: Plano de Ensino, cronograma,
material dos Encontros, especificação do Projeto Integrado, critérios de
avaliação, guia de ADR, stack de ferramentas e bibliografia.

## Rodar localmente

Requisito único: **Docker**. Não é preciso ter Ruby, bundler ou Node na máquina.

```bash
git clone https://github.com/UnB-BD2/Disciplina.git
cd Disciplina
make serve      # http://localhost:4000/Disciplina/
```

Outros alvos:

| Comando | O que faz |
|---|---|
| `make serve` | sobe o site com live reload |
| `make build` | gera `_site/` em modo produção |
| `make check` | valida links e HTML com `html-proofer` |
| `make shell` | abre um shell no contêiner |
| `make lock` | atualiza o `Gemfile.lock` |
| `make fonts` | rebaixa as fontes auto-hospedadas |
| `make clean` | derruba o contêiner e limpa artefatos |

## Onde mexer

| Quero… | Edito… |
|---|---|
| acrescentar um Encontro | um arquivo em `_encontros/` + uma linha em `_data/cronograma.yml` |
| corrigir o cronograma | `_data/cronograma.yml` |
| mudar o menu | `_data/nav.yml` |
| mexer em pesos e critérios de avaliação | `_data/avaliacao.yml` |
| detalhar uma Entrega | `_data/entregas.yml` e a página em `_entregas/` |
| acrescentar alguém à equipe | `_data/pessoas.yml` |
| publicar um aviso | um arquivo em `_announcements/` |
| publicar um post ou a vitrine | um arquivo em `_posts/` |
| subir slides ou roteiro | `static_files/` (PDF abaixo de 5 MB) |

Nenhuma dessas tarefas exige tocar em HTML, layout ou Sass.

## Vocabulário

O projeto tem vocabulário fechado — **Oferta**, **Semana**, **Encontro**,
**Squad**, **Projeto Integrado**, **Entrega**, **ADR**. Antes de escrever
conteúdo, leia [CONTEXT.md](./CONTEXT.md). As decisões de arquitetura do site
estão em [docs/adr/](./docs/adr/) e valem como exemplo de forma para os ADRs
da disciplina.

Duas regras que costumam surpreender:

- **Encontro não tem data.** A data vive só em `_data/cronograma.yml`, declarada
  à mão ([ADR-0002](./docs/adr/0002-material-ancorado-em-semana-nao-em-data.md)).
  A CI recusa PR que acrescente `data:` a um Encontro.
- **O site é o texto publicado do Plano de Ensino**, e o PDF aprovado pelo
  colegiado é o registro formal. Se os dois divergirem, o site está errado
  ([ADR-0004](./docs/adr/0004-site-como-texto-publicado-do-plano-de-ensino.md)).

## Contribuir

`main` é protegida: tudo entra por pull request com CI verde. O fluxo está em
[CONTRIBUTING.md](./CONTRIBUTING.md), e as regras de convivência em
[CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## Licença

Código e conteúdo didático sob [MIT](./LICENSE), copyright *Universidade de
Brasília — FCTE / Engenharia de Software*.

Material de terceiros incorporado ao repositório — figuras de livros, datasets,
trechos de documentação — **mantém a licença de origem e exige crédito**. A MIT
deste repositório não relicencia obra alheia. Ao subir material de terceiro,
registre a fonte e a licença no próprio arquivo ou na página que o referencia.

Em particular: `assets/img/unb.png` (lockup completo, usado na home e no rodapé)
e `assets/img/unb-simbolo.png` (só o símbolo, usado no cabeçalho) são a **marca
institucional da Universidade de Brasília**, obtida do [repositório da disciplina
de Sistemas de Machine Learning](https://github.com/UnB-Sistemas-de-Machine-Learning/Disciplina),
redimensionada e recortada. Marca registrada não é relicenciada pela MIT — seu
uso aqui se dá por este ser um site institucional da própria Universidade. Quem
reaproveitar este repositório em outra instituição deve substituí-la.

No modo escuro a marca é apoiada num campo branco em vez de recolorida — é a
aplicação correta para uma marca institucional sobre fundo escuro.

## Conteúdo gerado por IA

Este site e parte do seu conteúdo foram gerados por agente de inteligência
artificial, a partir de uma especificação escrita pela docência. O que foi e o
que não foi está discriminado em
[Sobre este site](https://unb-bd2.github.io/Disciplina/sobre-o-site/).

Para estudantes, a regra correspondente está na
[Política de Uso de IA](https://unb-bd2.github.io/Disciplina/uso-de-ia/): uso
esperado, registrado em `AI-USAGE.md`, e proibido nos instrumentos individuais.
