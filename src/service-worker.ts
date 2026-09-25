import { build, files, version } from '$service-worker'

const worker = self as unknown as ServiceWorkerGlobalScope
const cacheName = `urara-${version}`
const precache = [...build, ...files.filter(file => /\.(?:avif|css|html|ico|js|json|png|svg|webmanifest|webp)$/i.test(file))]

worker.addEventListener('install', event => {
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(precache)))
})

worker.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== cacheName).map(key => caches.delete(key))),
    ),
  )
})

worker.addEventListener('fetch', event => {
  if (event.request.method !== 'GET')
    return

  event.respondWith(caches.match(event.request).then(response => response ?? fetch(event.request)))
})
