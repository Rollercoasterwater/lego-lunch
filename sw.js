// Lego Lunch Builder — Service Worker v1
const CACHE = 'lego-lunch-v1';
const CORE = ['./index.html', './manifest.json', './icons/icon-192x192.png', './icons/icon-512x512.png'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(CORE).catch(()=>{}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Network-first for fonts
  if(url.hostname.includes('fonts.g')){
    e.respondWith(fetch(e.request).then(r=>{caches.open(CACHE).then(c=>c.put(e.request,r.clone()));return r;}).catch(()=>caches.match(e.request)));
    return;
  }
  // Cache-first for everything else
  e.respondWith(
    caches.match(e.request).then(cached => {
      if(cached) return cached;
      return fetch(e.request).then(r => {
        if(r&&r.status===200&&r.type!=='opaque'){caches.open(CACHE).then(c=>c.put(e.request,r.clone()));}
        return r;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
