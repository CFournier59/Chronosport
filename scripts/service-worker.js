self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-web-app-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/Chronosport.html',
          '/style.css',
          '/manifest.json',
          '/README.md',
          '/images/chronosport.png',
          '/images/cycles.png',
          '/sounds/exerciceBeep.mp3',
          '/sounds/finishBeep.mp3',
          '/sounds/reposBeep.mp3',
          '/sounds/timeOutBeep.mp3',
          '/scripts/functions.js',
          '/scripts/script.js'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  