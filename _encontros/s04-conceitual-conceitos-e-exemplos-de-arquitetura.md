---
semana: 4
tipo: conceitual
titular: docente
modulo: "I — Fundamentos e componentes essenciais"
titulo: "Conceitos e exemplos de arquitetura de dados"
resumo: >-
  Acoplamento, sistemas distribuídos e o catálogo de arquiteturas — de data warehouse a Data Mesh — com o que cada uma resolve e cobra.
objetivos:
  - "Distinguir acoplamento forte de fraco e reconhecer o padrão do monolito distribuído"
  - "Explicar o que escalabilidade cobra em complexidade num sistema distribuído"
  - "Comparar data warehouse, data lake, lakehouse e pilha de dados moderna pelo problema que cada um resolve"
  - "Distinguir arquitetura Lambda de Kappa e dizer quando a distinção importa"
leitura_previa:
  - titulo: "Fundamentos de Engenharia de Dados, cap. 3"
    nota: "Da seção de conceitos de arquitetura até o fim do capítulo"
complementar:
  - titulo: "Designing Data-Intensive Applications, cap. 5 e 6"
    nota: "Replicação e particionamento com a profundidade que o livro-texto não dá"
  - titulo: "Lakehouse: A New Generation of Open Platforms that Unify Data Warehousing and Advanced Analytics"
    link: https://www.cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf
    nota: "O paper que nomeou a categoria. Leia a seção de motivação"
---

O catálogo de arquiteturas deste capítulo é útil, mas o risco é decorá-lo. Data
Mesh não é melhor que lakehouse; ele resolve um problema **organizacional** —
domínios que não conseguem se coordenar num time central — ao custo de duplicar
competência em cada domínio. Se a organização não tem esse problema, adotar Data
Mesh é comprar o custo sem a razão.

O conceito que mais rende no projeto de vocês é **acoplamento**. Monolito
distribuído é o pior dos dois mundos: você paga a latência e a complexidade
operacional do distribuído sem ganhar a independência que justificaria o preço.
Ele quase nunca é escolhido; ele acontece.

**Lambda × Kappa** vale como pergunta, não como resposta: manter dois caminhos de
processamento — um em lote, outro em fluxo — para a mesma informação significa
manter duas implementações da mesma lógica, e elas divergem. Kappa aposta que um
caminho só basta. A Semana 9 mostra por que essa aposta é difícil.
