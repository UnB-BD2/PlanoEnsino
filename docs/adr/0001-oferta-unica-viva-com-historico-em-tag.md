# Uma única Oferta viva no site, histórico em tag do git

O site atravessa várias ofertas da disciplina e precisava de uma política para o material de semestres encerrados. Decidimos manter **uma única Oferta viva**: a cada semestre o conteúdo é atualizado no lugar e a Oferta encerrada vira uma tag do git (ex.: `2026-2`). A exceção são os projetos das turmas, que acumulam como posts datados por serem cumulativos por natureza.

O motivo é custo de manutenção: slides e roteiros evoluem incrementalmente, e manter árvores paralelas por Oferta dobraria o trabalho de quem mantém o site.

## Considered Options

- **Arquivo navegável por Oferta** (`/arquivo/2026-2/` publicado como HTML) — nada se perde na web e links antigos nunca quebram, mas exige passo de arquivamento no CI e a árvore de conteúdo cresce a cada semestre.
- **Um repositório por Oferta** (`UnB-BD2/2026-2`) — isolamento total, mas fragmenta a organização, multiplica o custo de manter tema e infraestrutura, e dispersa o material que a licença MIT deveria tornar fácil de reusar.

## Consequences

O material de uma Oferta encerrada existe no git, mas **não é navegável na web**. Quem precisar dele terá que fazer checkout da tag e buildar localmente. Se um dia isso virar demanda real, migrar para o arquivo navegável exige ressuscitar builds antigos — daí o registro desta decisão.
