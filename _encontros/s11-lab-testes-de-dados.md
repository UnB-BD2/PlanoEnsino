---
semana: 11
tipo: laboratorio
titular: monitoria
modulo: "III — Modelagem analítica e transformação"
titulo: "Testes de dados que pegam erro de verdade"
resumo: >-
  Escrever testes contra o dado sujo do domínio real, e provocar cada um deles a falhar.
objetivos:
  - "Escrever testes de esquema, volume, unicidade e integridade referencial"
  - "Escrever ao menos um teste de distribuição sobre uma métrica do domínio"
  - "Provocar cada teste a falhar de propósito, para provar que ele detecta"
requisitos_ambiente:
  - "A ferramenta de transformação da Semana 10 funcionando"
  - "Great Expectations, se a ferramenta não cobrir teste de distribuição"
entregavel: >-
  Suíte de testes no repositório, com a demonstração de que cada teste falha quando deve — corrompa uma cópia do dado e mostre a saída.
---

Um teste que nunca falhou não é prova de qualidade: é uma hipótese não testada.
Corrompa uma cópia do dado de propósito e confira que a suíte reclama. Sem esse
passo, você tem cobertura decorativa.
