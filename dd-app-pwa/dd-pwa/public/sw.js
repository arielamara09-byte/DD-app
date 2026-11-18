// DD service worker — minimal, safe offline shell.
// Bump this on every deploy that changes cached assets so old caches get cleaned up.
const CACHE = 'dd-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Never touch the backend API or non-GET requests — always go to the network.
  if (req.method !== 'GET' || url.pathname.startsWith('/api/')) return;

  // Only handle same-origin requests; let cross-origin (fonts CDN, etc.) pass through normally.
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    // Network-first for navigations, so updates show up immediately when online,
    // with an offline fallback to the cached app shell.
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('/', copy));
          return res;
        })
        .catch(() => caches.match('/').then((res) => res || caches.match(req)))
    );
    return;
  }

  // Stale-while-revalidate for static assets (JS/CSS/icons).
  event.respondWith(
    caches.open(CACHE).then((cache) =>
      cache.match(req).then((cached) => {
        const fetchPromise = fetch(req)
          .then((res) => {
            if (res && res.ok) cache.put(req, res.clone());
            return res;
          })
          .catch(() => cached);
        return cached || fetchPromise;
      })
    )
  );
});
