# Disciplina Banco de Dados 2 — Site

Publicação do material de apoio da disciplina de graduação Banco de Dados 2 (Engenharia de Software, FCTE/UnB) como site estático versionado, aberto e reutilizável.

## Language

### A Oferta e o tempo

**Oferta**:
Uma execução da disciplina em um semestre letivo específico (ex.: 2026/2). O site expõe uma única **Oferta** viva por vez; as encerradas sobrevivem como tag no git.
_Avoid_: edição, versão, turma, semestre

**Semana**:
Unidade de ancoragem temporal do material: uma das 16 semanas letivas de uma **Oferta**. Reúne os **Encontros** daquela semana. Todo material se localiza por **Semana**, nunca por data.
_Avoid_: data, sessão

**Encontro**:
Unidade de conteúdo do material: uma sessão presencial de 2h, de natureza conceitual ou de laboratório. Tem material e titularidade próprios — slides pertencem à docente, roteiros de laboratório à monitoria.
_Avoid_: aula, sessão, lecture

### O que se constrói e se avalia

**Squad**:
Equipe de 4 a 5 estudantes que conduz um **Projeto Integrado** do início ao fim de uma **Oferta**.
_Avoid_: grupo, equipe, time

**Projeto Integrado**:
A plataforma de dados que cada **Squad** constrói sobre dados abertos brasileiros, do sistema transacional à decisão pública. Vale 55% da nota e é entregue em quatro **Entregas**.
_Avoid_: trabalho, projeto (isolado)

**Entrega**:
Um dos quatro marcos incrementais do **Projeto Integrado** (E1 a E4), cada um com escopo, prazo e peso próprios, de peso crescente.
_Avoid_: milestone, sprint, release

**Método de Decisão**:
O procedimento de seis passos que atravessa toda a disciplina: caracterizar carga de trabalho, especificar restrições não funcionais, levantar ao menos três candidatos incluindo a opção nula, prototipar e medir, registrar *tradeoffs*, definir gatilho de revisão.
_Avoid_: framework, metodologia

**ADR**:
Registro de uma decisão de arquitetura — contexto, alternativas, escolha e consequências. Aplicação concreta do **Método de Decisão**, e o artefato pelo qual o raciocínio do estudante é avaliado (15% da nota), independentemente de a escolha ter sido a melhor.
_Avoid_: documento de decisão, RFC

**Seminário Técnico**:
Apresentação de 20 minutos seguida de arguição, feita por uma **Squad** nas Semanas 13 a 15 sobre tema não coberto em **Encontro**.
_Avoid_: apresentação, palestra

### Documentos

**Plano de Ensino**:
O texto que define objetivos, conteúdo, metodologia e avaliação da disciplina. Existe em duas formas: o **documento aprovado** pelo colegiado, que é registro formal e não muda dentro de uma **Oferta**, e o **texto publicado**, que é o que a turma lê no site.
_Avoid_: programa, syllabus

---

## Flagged ambiguities

**"Aula"** escorrega entre "o encontro de terça" e "o assunto da semana". Resolvido: **Encontro** para a sessão, **Semana** para o assunto. "Aula" não é vocabulário deste projeto.

**"Projeto"** colide: o **Projeto Integrado** do estudante e o próprio site. Resolvido: o termo do estudante é sempre escrito por extenso; o site é "o site", nunca "o projeto".

**"ADR"** tem dois autores possíveis: a **Squad**, que produz o artefato avaliado, e a docente, que registra decisões sobre o site. A colisão é deliberada — os ADRs do site servem de exemplo de forma na disciplina, inclusive por não alcançarem a faixa alta da rubrica. Desambigua-se por quem escreve, não por termo distinto.

---

## Diálogo de exemplo

> — Onde eu ponho o roteiro do laboratório de índices?
>
> — No **Encontro** de laboratório da **Semana** 3. O conceitual da mesma Semana é o de indexação e otimização — os dois formam par, mas são arquivos separados porque quem escreve o roteiro é a monitoria.
>
> — E a data? A Semana 3 cai em qual dia?
>
> — O Encontro não sabe a data dele. Isso vive só no cronograma, e é declarado à mão, porque tem feriado no meio e a conta erraria calada.
>
> — Certo. E a E2, que é na Semana 8 — é um Encontro também?
>
> — Não. **Entrega** não é Encontro; é marco do **Projeto Integrado**. Ela cai numa Semana, mas não ocupa uma sessão. O que acontece no laboratório daquela Semana é a **Squad** trabalhando na entrega, o que é outra coisa.
>
> — E se a squad escolher DuckDB em vez de Postgres para a camada analítica, isso vira o quê?
>
> — Vira um **ADR**, aplicando o **Método de Decisão**. Repare que a nota não depende de ela ter escolhido DuckDB — depende de ter caracterizado a carga, considerado a opção nula, medido e dito o que perdeu com a escolha.
