---
semana: 2
tipo: conceitual
titular: docente
modulo: "I — Fundamentos e internals"
titulo: "Armazenamento físico e organização de dados"
resumo: >-
  O que existe embaixo da tabela: páginas, heap, orientação a linha e a coluna, e as duas grandes famílias de estrutura de índice.
objetivos:
  - "Explicar como o SGBD organiza páginas, heap e tablespaces"
  - "Contrastar orientação a linha e a coluna a partir do padrão de acesso"
  - "Diferenciar B-tree e LSM-tree pelo perfil de escrita e leitura"
leitura_previa:
  - titulo: "Database System Concepts, cap. 13"
    nota: "Armazenamento e estrutura de arquivo"
  - titulo: "Designing Data-Intensive Applications, cap. 3"
    nota: "Storage and Retrieval. É o capítulo que dá o contraste B-tree × LSM-tree"
complementar:
  - titulo: "PostgreSQL — Database Physical Storage"
    link: https://www.postgresql.org/docs/current/storage.html
  - titulo: "Database Internals, cap. 1 a 3"
    nota: "Para quem quiser o detalhe de implementação"
---

A distinção que organiza este Encontro não é "qual estrutura é melhor", e sim
**para qual padrão de acesso cada uma foi projetada**. B-tree paga na escrita
para ser rápida na leitura pontual; LSM-tree faz o inverso. Nenhuma das duas é
uma escolha errada — errado é escolher sem saber qual é o seu padrão.

Isso volta na E1: a decisão de modelagem física que vira ADR depende de você
conseguir caracterizar a carga do seu domínio nestes termos.
