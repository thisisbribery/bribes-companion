// The Bribeluge Companion moved to https://www.thisisbribery.com/bribeluge/companion/ .
// This replaces the old app's service worker: it removes itself and its offline copy, then reloads
// open windows, which land on the redirect page.
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k.indexOf("bribes-companion-") === 0; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.registration.unregister(); })
    .then(function () { return self.clients.matchAll({ type: "window" }); })
    .then(function (cs) { cs.forEach(function (c) { c.navigate(c.url); }); }));
});
