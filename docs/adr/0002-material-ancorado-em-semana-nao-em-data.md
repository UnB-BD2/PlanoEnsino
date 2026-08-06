# Material ancorado em Semana, não em data

O material da disciplina se localiza pelo número da **Semana** (1–16) e nunca carrega data. Data absoluta existe em um único lugar — o cronograma —, onde é **declarada** encontro a encontro, não calculada.

Dois motivos. Data absoluta no material o faz envelhecer: sob licença MIT, quem clonar o repositório em 2028 receberia uma aula sobre indexação carimbada com 16/03/2026. E data absoluta assume turma única, o que quebra se a disciplina tiver duas turmas em horários diferentes na mesma **Oferta**.

A data é declarada e não calculada porque o semestre não é uma grade regular: o plano prevê 16 semanas de 2 encontros de 2h, o que daria 64h contra as 60h dos 4 créditos, e o calendário ainda tem feriados. Aritmética sobre a data de início erraria em silêncio — o site mostraria a data errada e ninguém perceberia até alguém chegar à sala vazia. Uma lista explícita de ~30 encontros erra de forma visível, na revisão do arquivo.

## Consequences

Alguém vai querer acrescentar um campo `data:` ao front matter de um **Encontro**, porque é o gesto óbvio. Não é esquecimento — é deliberado, e reverter significa reescrever ~30 arquivos a cada Oferta.

A contrapartida é digitar ~30 datas a cada Oferta. É trabalho manual assumido conscientemente, em troca de falha visível em vez de silenciosa.
