'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "efcae078a1ba3a601003186bc2355f65",
"assets/FontManifest.json": "fc21aa99aa9efdb1d7b6609a638291a9",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Pacifico-Regular.ttf": "9b94499ccea3bd82b24cb210733c4b5e",
"assets/fonts/SourceSansPro-Regular.ttf": "c1678b46f7dd3f50ceac94ed4e0ad01a",
"assets/images/profileimage.png": "f39b8f33a17b780a68efa72a2861cd56",
"assets/images/whitelogo.png": "48afe226d90563336ddeb8780577f801",
"assets/images/whitelogo1.png": "6d86d63207d10a86af47847512e84e4d",
"assets/LICENSE": "6897594f4b2a0773cb8c5af2cf4b46de",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/eva_icons_flutter/lib/fonts/evaicons.ttf": "b600c99b39c9837f405131463e91f61a",
"favicon.png": "575488232ddfdc64f473f97439b83b5a",
"icons/Icon-192.png": "ddddb2a46398dc36f67edbd9618591ad",
"icons/Icon-512.png": "e3e064b0c8659687834d75ea2d9f318d",
"index.html": "f9db4623ec9d91e6cdcc4b9244d9517b",
"/": "f9db4623ec9d91e6cdcc4b9244d9517b",
"main.dart.js": "185e6cfd1e4d83e04078e942f366d7f2",
"manifest.json": "b01d563429b77c5eadfef6029e5a2957"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
