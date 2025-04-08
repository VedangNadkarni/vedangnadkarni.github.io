self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).then(response => {
      const modifiedResponse = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: new Headers(response.headers),
      });
      modifiedResponse.headers.set('Cache-Control', 'must-revalidate');
      return modifiedResponse;
    })
  );
});

self.addEventListener('install', event => {
  // Optional: Pre-cache essential assets
});

self.addEventListener('activate', event => {
  // Optional: Clean up old caches
});