self.addEventListener('install', event => {
    console.log('SW: Instalando el service worker');
    const installing = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('SW: Instalacion finalizada');
            resolve();
        }, 1000);    
        self.skipWaiting();
    });
    event.waitUntil(installing);
});

self.addEventListener('activate', event => {
    console.log('SW: Service Worker Activo!');
});

self.addEventListener('fetch', event => {
    if (event.request.url.includes('ana.png')) {
        event.respondWith(
            fetch("imgs/nfl.png")
        )
    }
    if (event.request.url.includes('todos')) {
        event.respondWith(
        )
    }
});