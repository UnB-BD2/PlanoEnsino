---
semana: 5
tipo: conceitual
titular: docente
modulo: "I — Fundamentos e componentes essenciais"
titulo: "Escolhendo tecnologias ao longo do ciclo de vida"
resumo: >-
  O capítulo que fundamenta o Método de Decisão: custo total de propriedade, construir × comprar, e por que benchmark de fornecedor não vale como evidência.
objetivos:
  - "Estimar custo total de propriedade e custo de oportunidade de uma escolha de tecnologia"
  - "Decidir entre construir e comprar, e entre código aberto e jardim murado, com critério explícito"
  - "Distinguir tecnologia imutável de transitória e ajustar o compromisso a essa distinção"
  - "Explicar por que um benchmark publicado por fornecedor não sustenta um ADR"
leitura_previa:
  - titulo: "Fundamentos de Engenharia de Dados, cap. 4"
    nota: "Na íntegra. É a contrapartida no livro do Método de Decisão desta disciplina"
complementar:
  - titulo: "Guia de ADR da disciplina"
    link: /adr/
    nota: "O template e a rubrica. Leia junto com a seção da guerra de benchmarks"
---

Esta é a Semana que fundamenta o eixo transversal da disciplina. Os seis passos
do Método de Decisão são uma leitura operacional deste capítulo.

A seção mais útil é a da **guerra de benchmarks**. Todo fornecedor publica número
em que ganha, porque escolheu a carga em que ganha. "Otimização assimétrica" é o
nome disso: ajusta-se com cuidado o próprio sistema e deixa-se o concorrente na
configuração padrão. Daí a exigência do passo 4 do Método: medição com dado do
**seu** domínio, no **seu** hardware. Não é rigor acadêmico — é a única medição
que responde à sua pergunta.

**Tecnologia imutável × transitória** é o outro conceito que rende. Objeto em
armazenamento, SQL e Linux atravessam décadas; a ferramenta da moda do
orquestrador, não. Acoplar a plataforma inteira ao transitório é uma decisão
cara de reverter — e o capítulo 3 já disse o que fazer com essas.
