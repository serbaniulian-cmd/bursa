// Pagina se ia mereu proaspătă de pe internet; din cache se folosește doar când nu ai internet (inclusiv scripturile Firebase)
const CACHE = "bursa-v1", CDN = ["www.gstatic.com"];
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
));
self.addEventListener("fetch", e => {
    const r = e.request, u = new URL(r.url), same = u.origin === location.origin;
    if (r.method !== "GET" || !(same || CDN.includes(u.hostname))) return;
    e.respondWith(
        (same ? fetch(r.url, { cache: "no-cache" }) : fetch(r))
            .then(res => { if (res.ok || res.type === "opaque") { const c = res.clone(); caches.open(CACHE).then(x => x.put(r.url, c)); } return res; })
            .catch(() => caches.match(r.url).then(h => h || Response.error()))
    );
});
