self.addEventListener('install', (event) => {
  console.log("installing")
  event.waitUntil(
    caches.open('my-web-app-cache').then((cache) => {
      return cache.addAll([
        'Chronosport/index.html',
        'Chronosport/style.css',
        'Chronosport/manifest.json',
        'Chronosport/README.md',
        'Chronosport/images/chronosport.png',
        'Chronosport/images/cycles.png',
        'Chronosport/sounds/exerciceBeep.mp3',
        'Chronosport/sounds/finishBeep.mp3',
        'Chronosport/sounds/reposBeep.mp3',
        'Chronosport/sounds/timeOutBeep.mp3',
        'Chronosport/scripts/functions.js',
        'Chronosport/scripts/script.js'
      ]);
    }).catch(error => {
      console.error('Failed to open cache or cache resources:', error);
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
  