const CACHE = 'perpustakaan-lentera-hati-waraks3-v51-local-host-hp-client';
const APP_SHELL = ['./','./index.html','./manifest.webmanifest','./sw.js','./icon-192.png','./icon-512.png','./favicon.png','./logo-lentera-hati.png','./assets/logo-banten-permanen.png','./wallpaper-hp.png','./wallpaper-laptop.png','./paraf-model-01.png','./paraf-model-02.png','./paraf-model-03.png','./paraf-model-04.png','./paraf-model-05.png','./paraf-model-06.png','./paraf-model-07.png','./paraf-model-08.png','./paraf-model-09.png','./paraf-model-10.png','./paraf-model-11.png','./paraf-model-12.png','./paraf-model-13.png','./paraf-model-14.png','./paraf-model-15.png','./paraf-model-16.png','./paraf-model-17.png','./paraf-model-18.png','./paraf-model-19.png','./paraf-model-20.png','./paraf-model-21.png','./paraf-model-22.png','./paraf-model-23.png','./paraf-model-24.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function networkThenCache(request, fallback){
  try{
    const response=await fetch(request,{cache:'no-store'});
    if(response && response.ok){
      const cache=await caches.open(CACHE);
      await cache.put(request,response.clone());
      if(request.mode==='navigate') await cache.put('./index.html',response.clone());
    }
    return response;
  }catch(_){
    return fallback;
  }
}

self.addEventListener('message', event => { if(event.data==='SKIP_WAITING') self.skipWaiting(); });

self.addEventListener('fetch', event => {
  const req=event.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin || url.pathname.endsWith('/api.php'))return;

  if(req.mode==='navigate'){
    event.respondWith((async()=>{
      const cached=await caches.match('./index.html');
      // Online: prioritaskan versi server terbaru. Offline: langsung gunakan versi tersimpan.
      const latest=await networkThenCache(req,cached);
      return latest||cached||new Response('Offline',{status:503,headers:{'Content-Type':'text/plain;charset=utf-8'}});
    })());
    return;
  }

  event.respondWith((async()=>{
    const cached=await caches.match(req);
    // Aset yang sudah ada tampil seketika; versi terbaru diperbarui di belakang layar.
    networkThenCache(req,cached);
    return cached || fetch(req,{cache:'no-store'});
  })());
});
