self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('tme.coffee').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/public/css/site.css',
        '/public/js/bootstrap.min.js',
      ]).then(function() {
        return self.skipWaiting();
      });
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
