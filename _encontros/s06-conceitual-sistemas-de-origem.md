---
semana: 6
tipo: conceitual
titular: docente
modulo: "II — O ciclo em detalhes: origem, armazenamento e ingestão"
titulo: "Geração de dados em sistemas de origem"
resumo: >-
  De onde o dado vem: bancos de aplicação, APIs, arquivos, logs, filas e fluxos — e a garantia que cada origem oferece ou nega.
objetivos:
  - "Caracterizar as principais famílias de sistemas de origem e o que cada uma garante"
  - "Distinguir o padrão CRUD do padrão insert-only e a consequência de cada um para quem consome"
  - "Explicar como o log de banco de dados sustenta a captura de dados de alteração"
  - "Reconhecer os tipos de registro de tempo e o estrago de confundi-los"
leitura_previa:
  - titulo: "Fundamentos de Engenharia de Dados, cap. 5"
    nota: "Na íntegra. Abre a Parte II, o percurso detalhado pelo ciclo de vida"
complementar:
  - titulo: "PostgreSQL — Logical Decoding"
    link: https://www.postgresql.org/docs/current/logicaldecoding.html
    nota: "O mecanismo por trás do CDC, na documentação de origem"
  - titulo: "Debezium — Architecture"
    link: https://debezium.io/documentation/reference/stable/architecture.html
---

O engenheiro de dados quase nunca controla o sistema de origem. Ele é dado, no
sentido literal: alguém construiu aquele banco de aplicação para atender a um
formulário, não para você consumir. Este capítulo é sobre trabalhar com origens
que não obedecem a você.

O ponto técnico que mais rende é a diferença entre **CRUD** e **insert-only**.
Num sistema CRUD, um `UPDATE` destrói o valor anterior: o dado que existia às
14h simplesmente não existe mais às 15h, e nenhuma consulta o recupera. Num
sistema insert-only, o histórico é subproduto. Quando a pergunta de gestão é
"o que mudou e quando", a origem já decidiu se ela tem resposta — muito antes de
você chegar.

Preste atenção aos **tipos de registro de tempo**. Hora do evento, hora da
ingestão e hora do processamento são três coisas, e confundi-las produz relatório
que ninguém consegue explicar. A Semana 9 mostra o que dado atrasado faz com
janelas construídas sobre o carimbo errado.
