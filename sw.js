/* Service worker do Painel de Obras — Capixaba Shop.
   Rede primeiro, cache como rede de segurança: o painel se atualiza sozinho quando
   há internet e continua abrindo quando não há. Os dados das empresas não passam
   por aqui — vivem no localStorage do navegador. */
const CACHE = 'painel-obras-demo-20260811';
const ESSENCIAIS = ['./', 'index.html', 'manifest.webmanifest', 'icone.svg', 'icone-192.png', 'icone-512.png'];

self.addEventListener('install', ev => {
  self.skipWaiting();
  ev.waitUntil(caches.open(CACHE).then(c => c.addAll(ESSENCIAIS)).catch(() => {}));
});

self.addEventListener('activate', ev => {
  ev.waitUntil(
    caches.keys()
      .then(nomes => Promise.all(nomes.filter(n => n !== CACHE).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', ev => {
  const req = ev.request;
  if (req.method !== 'GET') return;

  // Planilha do Google nunca entra em cache: o valor dela é ser a versão de agora.
  if (new URL(req.url).origin !== location.origin) return;

  ev.respondWith(
    fetch(req)
      .then(res => {
        const copia = res.clone();
        caches.open(CACHE).then(c => c.put(req, copia)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(req).then(r => r || caches.match('index.html')))
  );
});
