/* ---------------------------------------------------------------------------
 * Script do site. Sem dependência, sem build, sem rastreamento.
 *
 * Tudo aqui é progressivo: a página funciona inteira sem JavaScript. O que
 * este arquivo faz é alternar o tema, fechar o drawer, marcar a Semana
 * corrente, dar scroll contido às tabelas largas e pôr botão de copiar no
 * código.
 * ------------------------------------------------------------------------- */
(function () {
  'use strict';

  var root = document.documentElement;

  /* --- Tema ------------------------------------------------------------ */
  /* A aplicação inicial acontece no <head>, antes da pintura, para não haver
     lampejo branco. Aqui só fica o alternador. */
  var toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var current = root.getAttribute('data-theme') || (systemDark ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('tema', next); } catch (e) { /* modo privado */ }
      toggle.setAttribute('aria-label',
        next === 'dark' ? 'Mudar para o tema claro' : 'Mudar para o tema escuro');
    });
  }

  /* --- Drawer ---------------------------------------------------------- */
  var drawer = document.querySelector('.nav-drawer');
  if (drawer) {
    document.addEventListener('click', function (e) {
      if (drawer.open && !drawer.contains(e.target)) drawer.open = false;
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.open) {
        drawer.open = false;
        drawer.querySelector('summary').focus();
      }
    });
  }

  /* --- Semana corrente -------------------------------------------------- */
  /* Marcada no navegador, e não no build: um site estático republicado uma vez
     por mês mostraria a Semana errada o resto do tempo. */
  var semanas = document.querySelectorAll('.semana[data-inicio][data-fim]');
  if (semanas.length) {
    var hoje = new Date();
    var iso = hoje.getFullYear() + '-' +
      String(hoje.getMonth() + 1).padStart(2, '0') + '-' +
      String(hoje.getDate()).padStart(2, '0');

    Array.prototype.forEach.call(semanas, function (el) {
      var inicio = el.getAttribute('data-inicio');
      var fim = el.getAttribute('data-fim');
      if (iso >= inicio && iso <= fim) {
        el.classList.add('is-current');
        var marca = el.querySelector('[data-semana-now]');
        if (marca) marca.hidden = false;
      }
    });
  }

  /* --- Tabelas largas --------------------------------------------------- */
  /* O scroll fica dentro da tabela, nunca no body (RNF-04). Tabelas que já
     estão num contêiner com scroll ficam de fora. */
  Array.prototype.forEach.call(
    document.querySelectorAll('.prose > table, .prose > .table-wrap > table'),
    function (table) {
      if (table.parentNode.classList.contains('table-scroll')) return;
      var wrap = document.createElement('div');
      wrap.className = 'table-scroll';
      wrap.setAttribute('tabindex', '0');
      wrap.setAttribute('role', 'region');
      var cap = table.querySelector('caption');
      wrap.setAttribute('aria-label', cap ? cap.textContent : 'Tabela com rolagem horizontal');
      table.parentNode.insertBefore(wrap, table);
      wrap.appendChild(table);
    }
  );

  /* --- Copiar código ---------------------------------------------------- */
  if (navigator.clipboard) {
    Array.prototype.forEach.call(
      document.querySelectorAll('div.highlight, figure.highlight'),
      function (block) {
        var pre = block.querySelector('pre');
        if (!pre) return;

        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'copy-code';
        btn.textContent = 'Copiar';
        btn.setAttribute('aria-label', 'Copiar o código para a área de transferência');

        btn.addEventListener('click', function () {
          navigator.clipboard.writeText(pre.innerText).then(function () {
            btn.textContent = 'Copiado';
            setTimeout(function () { btn.textContent = 'Copiar'; }, 1600);
          }, function () {
            btn.textContent = 'Falhou';
            setTimeout(function () { btn.textContent = 'Copiar'; }, 1600);
          });
        });

        block.appendChild(btn);
      }
    );
  }

  /* --- Índice lateral --------------------------------------------------- */
  /* Destaca a seção em leitura. Só decorativo: o índice funciona sem isto. */
  var links = document.querySelectorAll('.toc a[href^="#"]');
  if (links.length && 'IntersectionObserver' in window) {
    var mapa = {};
    Array.prototype.forEach.call(links, function (a) {
      var alvo = document.getElementById(decodeURIComponent(a.hash.slice(1)));
      if (alvo) mapa[alvo.id] = a;
    });

    var visiveis = new Set();
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) visiveis.add(e.target.id);
        else visiveis.delete(e.target.id);
      });
      Array.prototype.forEach.call(links, function (a) { a.removeAttribute('aria-current'); });
      var primeiro = Object.keys(mapa).filter(function (id) { return visiveis.has(id); })[0];
      if (primeiro) mapa[primeiro].setAttribute('aria-current', 'true');
    }, { rootMargin: '-15% 0px -70% 0px' });

    Object.keys(mapa).forEach(function (id) { obs.observe(document.getElementById(id)); });
  }
})();
