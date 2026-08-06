---
semana: 3
tipo: conceitual
titular: docente
modulo: "I — Fundamentos e internals"
titulo: "Indexação e otimização de consultas"
resumo: >-
  Os tipos de índice e o que cada um resolve; como o otimizador decide; e por que ele erra com mais frequência do que se imagina.
objetivos:
  - "Escolher o tipo de índice a partir da seletividade e do padrão de acesso"
  - "Explicar o papel das estatísticas na decisão do otimizador"
  - "Diagnosticar um plano ruim a partir da divergência entre linhas estimadas e observadas"
leitura_previa:
  - titulo: "Database System Concepts, cap. 14 e 16"
    nota: "Indexação e otimização de consultas"
  - titulo: "Use The Index, Luke! — capítulos 1 a 3"
    link: https://use-the-index-luke.com/
    nota: "Material aberto, direto ao ponto"
complementar:
  - titulo: "PostgreSQL — Index Types"
    link: https://www.postgresql.org/docs/current/indexes-types.html
  - titulo: "PostgreSQL — Using EXPLAIN"
    link: https://www.postgresql.org/docs/current/using-explain.html
---

O sinal mais útil que um plano de execução dá não é o tempo: é a **divergência
entre `rows` estimado e `actual rows`**. Quando o otimizador erra por uma ordem
de grandeza, ele escolheu o método de acesso errado por um motivo que você pode
consertar — estatística desatualizada, correlação entre colunas que ele não
conhece, predicado que ele não sabe estimar.

Índice não é de graça: custa escrita, espaço e manutenção. Criar um índice por
coluna "por garantia" é o oposto de decidir.
