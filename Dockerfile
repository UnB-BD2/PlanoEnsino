ARG RUBY_VERSION=3.3
FROM ruby:${RUBY_VERSION}-slim

# libcurl4 é dependência de execução do html-proofer, via typhoeus/ethon —
# a imagem slim não a traz, e `make check` falha ao carregar sem ela.
RUN apt-get update -qq \
 && apt-get install -y --no-install-recommends build-essential git libcurl4 \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /srv/jekyll

COPY Gemfile Gemfile.lock ./
RUN bundle config set --local path /usr/local/bundle \
 && bundle install --jobs 4

EXPOSE 4000 35729
CMD ["bundle", "exec", "jekyll", "serve", \
     "--host", "0.0.0.0", "--livereload", "--incremental", \
     "--config", "_config.yml,_config.dev.yml"]
