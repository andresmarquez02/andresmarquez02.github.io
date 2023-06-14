// const CACHE_NAME = 'Andres-v2',
//     urlsToCache = [
//         // 'index.html',
//         'assets/images/portfolio.png',
//         'assets/images/andres_icon.png',
//         'assets/css/style.css',
//         'assets/js/scrollreveal.min.js',
//         'assets/js/index.js',
//         'assets/images/bg.png',
//         'assets/images/apidivisas.png',
//         'assets/images/expresso.png',
//         'assets/images/Lexachange.png',
//         'assets/images/monchisMercado.png',
//         'assets/images/multiparadise.png',
//         'assets/images/otter.png',
//         'assets/images/papper.png',
//         'assets/images/ReactGastos.png',
//         'assets/images/ruleta.png',
//         'assets/images/SOT.png',
//         'assets/images/todo.png',
//         'assets/images/vulister.png',
//     ]

// self.addEventListener('install', e => {
//     e.waitUntil(
//         caches.open(CACHE_NAME)
//         .then(cache => {
//             return cache.addAll(urlsToCache)
//                 .then(() => self.skipWaiting())
//         })
//         .catch(err => console.log('Falló registro de cache', err))
//     )
// })
// self.addEventListener('activate', e => {
//     const cacheWhitelist = [CACHE_NAME]

//     e.waitUntil(
//         caches.keys()
//         .then(cacheNames => {
//             return Promise.all(
//                 cacheNames.map(cacheName => {
//                     if (cacheWhitelist.indexOf(cacheName) === -1) {
//                         return caches.delete(cacheName)
//                     }
//                 })
//             )
//         })
//         .then(() => self.clients.claim())
//     )
// })

// self.addEventListener('fetch', e => {
//     e.respondWith(
//         caches.match(e.request)
//         .then(res => {
//             if (res) {
//                 return res
//             }
//             return fetch(e.request)
//         })
//     )
// })