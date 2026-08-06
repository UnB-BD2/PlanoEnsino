# Slides e apostila vivem no repositório

Os PDFs de slides e a apostila ficam versionados no próprio repositório, com regra de exportar abaixo de 5 MB por arquivo e revisão do tamanho total ao fim de cada **Oferta**.

O objetivo declarado do projeto é disponibilizar todo o material de apoio sob licença MIT. Um clone que não contém o material falha esse objetivo, e link para serviço externo apodrece — em três anos boa parte não abre mais.

## Consequences

O histórico cresce e **não encolhe**: PDF não faz delta no git, cada revisão grava um blob inteiro. A projeção é de 30 a 80 MB por Oferta, o que em quatro ou cinco ofertas se aproxima do limite prático do GitHub Pages. Quando isso apertar, a saída não é apagar arquivos — é reescrever a história ou migrar para releases, e ambas são caras. A regra de compressão não é preciosismo: é o que adia esse dia.

Git LFS foi descartado porque o GitHub Pages não resolve ponteiros LFS no build, o que exigiria buscar os arquivos no CI antes de publicar, e a cota gratuita é de 1 GB.
