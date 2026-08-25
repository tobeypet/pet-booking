// 最簡單的 service worker，只是為了讓瀏覽器判斷這是一個可安裝的網頁應用程式
// 不做任何快取，所以每次都會抓最新版本，不用擔心資料過期
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
