if (!self.define) {
  let e,
    s = {};
  const n = (n, t) => (
    (n = new URL(n + '.js', t).href),
    s[n] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (t, a) => {
    const i =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[i]) return;
    let c = {};
    const r = (e) => n(e, i),
      o = { module: { uri: i }, exports: c, require: r };
    s[i] = Promise.all(t.map((e) => o[e] || r(e))).then((e) => (a(...e), c));
  };
}
define(['./workbox-4754cb34'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: 'f94d0ede34c916a913f982d9b820c351',
        },
        {
          url: '/_next/static/chunks/117-6a719287a8705831.js',
          revision: 'kbJnFH8LP-6AQd-xtL-Y3',
        },
        {
          url: '/_next/static/chunks/529-0db151c51aec4557.js',
          revision: 'kbJnFH8LP-6AQd-xtL-Y3',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-dcdc44b04216ecc0.js',
          revision: 'kbJnFH8LP-6AQd-xtL-Y3',
        },
        {
          url: '/_next/static/chunks/app/dashboard/page-cf569132a78fb48e.js',
          revision: 'kbJnFH8LP-6AQd-xtL-Y3',
        },
        {
          url: '/_next/static/chunks/app/layout-901ddb309539036f.js',
          revision: 'kbJnFH8LP-6AQd-xtL-Y3',
        },
        {
          url: '/_next/static/chunks/app/page-43147faba3af6764.js',
          revision: 'kbJnFH8LP-6AQd-xtL-Y3',
        },
        {
          url: '/_next/static/chunks/app/quiz/%5Bid%5D/layout-735137ed6c0a225b.js',
          revision: 'kbJnFH8LP-6AQd-xtL-Y3',
        },
        {
          url: '/_next/static/chunks/app/quiz/%5Bid%5D/page-acdcc95d83f56877.js',
          revision: 'kbJnFH8LP-6AQd-xtL-Y3',
        },
        {
          url: '/_next/static/chunks/app/quiz/page-cc8500b40ac3e690.js',
          revision: 'kbJnFH8LP-6AQd-xtL-Y3',
        },
        {
          url: '/_next/static/chunks/fd9d1056-105581c615ed1b87.js',
          revision: 'kbJnFH8LP-6AQd-xtL-Y3',
        },
        {
          url: '/_next/static/chunks/framework-f66176bb897dc684.js',
          revision: 'kbJnFH8LP-6AQd-xtL-Y3',
        },
        {
          url: '/_next/static/chunks/main-3cae1702d13a55e9.js',
          revision: 'kbJnFH8LP-6AQd-xtL-Y3',
        },
        {
          url: '/_next/static/chunks/main-app-d520fbef751831ee.js',
          revision: 'kbJnFH8LP-6AQd-xtL-Y3',
        },
        {
          url: '/_next/static/chunks/pages/_app-72b849fbd24ac258.js',
          revision: 'kbJnFH8LP-6AQd-xtL-Y3',
        },
        {
          url: '/_next/static/chunks/pages/_error-7ba65e1336b92748.js',
          revision: 'kbJnFH8LP-6AQd-xtL-Y3',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-2366103fb681b4a0.js',
          revision: 'kbJnFH8LP-6AQd-xtL-Y3',
        },
        {
          url: '/_next/static/css/a2be3642abd2dfad.css',
          revision: 'a2be3642abd2dfad',
        },
        {
          url: '/_next/static/kbJnFH8LP-6AQd-xtL-Y3/_buildManifest.js',
          revision: 'c155cce658e53418dec34664328b51ac',
        },
        {
          url: '/_next/static/kbJnFH8LP-6AQd-xtL-Y3/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/media/4473ecc91f70f139-s.p.woff',
          revision: '78e6fc13ea317b55ab0bd6dc4849c110',
        },
        {
          url: '/_next/static/media/463dafcda517f24f-s.p.woff',
          revision: 'cbeb6d2d96eaa268b4b5beb0b46d9632',
        },
        {
          url: '/icons/icon-128x128.png',
          revision: '8ad1e96290f55ed81cf0668345c616c6',
        },
        {
          url: '/icons/icon-512x512.png',
          revision: '62c29f04f509f3ae0e504c6fd2a64d93',
        },
        { url: '/manifest.json', revision: '8e3e177238aca4a8fb2b5e7d86ccacf7' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: t,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET',
    );
});
