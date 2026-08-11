---
semana: 10
tipo: conceitual
titular: docente
modulo: "III — Consultas, modelagem, transformação e disponibilização"
titulo: "Consultas"
resumo: >-
  O que acontece entre escrever SQL e receber resultado: otimizador, vida útil da consulta e o que muda quando o dado não para de chegar.
objetivos:
  - "Descrever o caminho de uma consulta, do parser ao plano executado"
  - "Aprimorar o desempenho de uma consulta a partir do plano, e não por tentativa"
  - "Reconhecer os padrões que impedem o otimizador de fazer seu trabalho"
  - "Explicar o que muda ao consultar dados de streaming, onde não existe 'todos os dados'"
leitura_previa:
  - titulo: "Fundamentos de Engenharia de Dados, cap. 8"
    nota: "Até o fim da seção de consultas — o restante do capítulo é das Semanas 11 e 12"
complementar:
  - titulo: "Use The Index, Luke!"
    link: https://use-the-index-luke.com/
    nota: "Como o índice é usado do ponto de vista de quem escreve a consulta"
  - titulo: "PostgreSQL — Using EXPLAIN"
    link: https://www.postgresql.org/docs/current/using-explain.html
---

O otimizador é o componente do banco que mais se subestima e mais se
antropomorfiza. Ele não entende sua intenção: estima custo com base em
estatísticas, e quando as estatísticas estão desatualizadas ou a distribuição é
enviesada, ele escolhe mal com toda a confiança do mundo.

Daí a regra desta Semana: **otimize a partir do plano, não do palpite**. Toda
afirmação sobre desempenho neste curso precisa vir com o plano de execução antes
e depois. É a mesma exigência que a rubrica de ADR faz — medição, não autoridade.

Consulta sobre **streaming** vira outro problema porque a premissa some: não
existe "todos os dados", só uma janela do que chegou até agora. A resposta certa
passa a depender de quando você perguntou, e isso precisa estar declarado, não
descoberto.

Esta é a Semana da **E2**: ingestão em lote e captura de mudanças. Confira o
*checklist* da [E2]({{ '/projeto/e2/' | relative_url }}) antes de seguir.
