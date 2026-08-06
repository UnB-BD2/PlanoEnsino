export RUBY_VERSION := $(shell cat .ruby-version)

.DEFAULT_GOAL := help
.PHONY: help serve build check shell lock fonts clean

help:  ## lista os alvos disponíveis
	@grep -E '^[a-z-]+:.*?## .*$$' $(MAKEFILE_LIST) \
	  | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-8s\033[0m %s\n", $$1, $$2}'

serve:   ## sobe em http://localhost:4000/Disciplina/ com live reload
	docker compose up --build

build:   ## gera _site em modo produção
	docker compose run --rm -e JEKYLL_ENV=production site \
	  bundle exec jekyll build

# O baseurl sai do _config.yml, e não repetido aqui: repetido, ele se
# desatualiza em silêncio e a checagem passa a validar o caminho errado.
BASEURL := $(shell sed -n 's/^baseurl: *"\(.*\)".*/\1/p' _config.yml)

check: build  ## valida links e HTML
	docker compose run --rm site \
	  bundle exec htmlproofer ./_site --disable-external --allow-hash-href \
	  --swap-urls '^$(BASEURL):'

shell:   ## abre um shell no contêiner
	docker compose run --rm site bash

lock:    ## atualiza o Gemfile.lock
	docker compose run --rm site bundle lock --update

fonts:   ## rebaixa as fontes auto-hospedadas (só quando trocar de família)
	./script/fetch-fonts.sh

clean:   ## derruba o contêiner e apaga artefatos de build
	docker compose down -v && rm -rf _site .jekyll-cache
