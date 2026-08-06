# AI-USAGE.md — Squad [nome]

Registro de uso de assistentes e agentes de IA no Projeto Integrado.

Este arquivo cumpre a [Política de Uso de IA](https://unb-bd2.github.io/Disciplina/uso-de-ia/)
da disciplina. Ele não é confissão nem formalidade: é o mesmo tipo de registro
que um ADR faz para decisões de arquitetura.

**Duas regras de forma.** Escreva **no momento do uso**, não na véspera da
Entrega — registro reconstruído de memória sai impreciso, e imprecisão aqui é o
que a política pune. E versione junto com o código: uma entrada por commit
relevante é melhor que um resumo mensal.

**Não precisa registrar** autocompletar de editor, correção ortográfica ou
tradução. Registre o que produziu artefato ou mudou uma decisão.

---

## Entradas

### AAAA-MM-DD — [o que estava sendo feito]

- **Ferramenta:** [nome e versão, se souber]
- **Onde:** [arquivo, módulo ou artefato afetado]
- **O que foi pedido:** [em uma frase]
- **O que foi aproveitado:** [tudo, parte, só a ideia — e o que foi descartado]
- **Como foi verificado:** [rodou o teste, leu o plano de execução, comparou com
  a documentação, mediu. Esta linha é a que sustenta a sua resposta na arguição]
- **Quem revisou:** [pessoa da Squad que leu e entendeu o resultado]

### AAAA-MM-DD — [o que estava sendo feito]

- **Ferramenta:**
- **Onde:**
- **O que foi pedido:**
- **O que foi aproveitado:**
- **Como foi verificado:**
- **Quem revisou:**

---

## Exemplo preenchido

Apague esta seção ao usar o template.

### 2026-09-22 — Modelagem dimensional da E3

- **Ferramenta:** assistente de código no editor
- **Onde:** `models/marts/fato_execucao_orcamentaria.sql` e o desenho das
  dimensões
- **O que foi pedido:** uma primeira versão do esquema estrela a partir das
  tabelas da camada bronze, com a granularidade "uma linha por município por mês"
- **O que foi aproveitado:** a estrutura de fato e três dimensões. Descartamos a
  dimensão de tempo proposta, que vinha com granularidade diária e não servia à
  nossa pergunta; refizemos à mão.
- **Como foi verificado:** carregamos 2019–2024, conferimos a contagem contra a
  fonte, e rodamos a consulta da pergunta de gestão comparando o total com o
  cálculo direto sobre a bronze. Bateu.
- **Quem revisou:** [nome de quem, na Squad, leu e entendeu]

### 2026-09-24 — Dimensão de variação lenta

- **Ferramenta:** nenhuma. Feito à mão.
- **Onde:** `models/marts/dim_municipio.sql`
- **Observação:** o assistente propôs sobrescrever o nome do município na
  atualização, o que apagaria o histórico de mudança de nome. Percebemos ao
  conferir contra o material da Semana 9 e implementamos SCD tipo 2 à mão. Está
  registrado no `docs/adr/0003-dimensao-municipio.md`.
