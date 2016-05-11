var version = '0.0.1';

var toCache = [
  '/',
  '/public/css/site.css',
  '/public/js/bootstrap.min.js'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('tme.coffee').then(function(cache) {
      return cache.addAll(toCache).then(function() {
        return self.skipWaiting();
      });
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
