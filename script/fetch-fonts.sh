#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Baixa as fontes do tema para assets/fonts/ como woff2 auto-hospedados.
#
# O site não carrega CDN em runtime (RNF-05) e não deixa terceiro observar quem
# o lê (RNF-10). Este script roda na máquina de quem mantém o tema, e o
# resultado é versionado. Não roda no CI nem no build.
#
# Só os subsets latin e latin-ext: pt-BR não precisa de cirílico, grego nem
# vietnamita, e cada subset descartado é ~30 KB a menos no primeiro carregamento.
#
# Uso: make fonts
# ---------------------------------------------------------------------------
set -euo pipefail

cd "$(dirname "$0")/.."
OUT="assets/fonts"
mkdir -p "$OUT"

# UA de navegador moderno: sem isso o Google Fonts devolve ttf em vez de woff2.
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"

# slug|query da API css2
FAMILIES=(
  "source-serif-4|Source+Serif+4:ital,opsz,wght@0,8..60,400..700;1,8..60,400..600"
  "inter|Inter:wght@400..700"
  "jetbrains-mono|JetBrains+Mono:wght@400..600"
)

for entry in "${FAMILIES[@]}"; do
  IFS='|' read -r slug query <<< "$entry"
  echo "→ $slug"

  curl -fsS -A "$UA" "https://fonts.googleapis.com/css2?family=${query}&display=swap" \
  | awk '
      /^\/\* / { subset = $2 }
      /font-style:/ { style = ($2 ~ /italic/) ? "-italic" : "" }
      /src: url\(/ {
        if (subset == "latin" || subset == "latin-ext") {
          match($0, /https:[^)]+/)
          print subset style "\t" substr($0, RSTART, RLENGTH)
        }
      }
    ' \
  | while IFS=$'\t' read -r name url; do
      dest="$OUT/${slug}-${name}.woff2"
      curl -fsS -o "$dest" "$url"
      printf '   %-44s %s\n' "$dest" "$(du -h "$dest" | cut -f1 | tr -d ' ')"
    done
done

echo
echo "Pronto. Se algum nome de arquivo mudou, ajuste _sass/_typography.scss."
