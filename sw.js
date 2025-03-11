const CACHE_NAME = "ecg-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json"
  // Aggiungi qui altri file (CSS, JS, icone) se necessario
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('install', function(event) {
  console.log('Service Worker: Install event');
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
