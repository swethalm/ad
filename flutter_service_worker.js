'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "135bd1d9fb83147fbb23b16e0033d811",
".git/packed-refs": "fd1b44e1ee3ed95a655f021488e0e9b5",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/heads/master": "4d9fab0c21d3abeea0fe1c02def2a8b5",
".git/objects/pack/pack-50b3095288c52eb6821ac963294555035a01b94e.pack": "06d0a0a6974a6269e1f9f6ea17fc7b05",
".git/objects/pack/pack-50b3095288c52eb6821ac963294555035a01b94e.idx": "9d683f1d44fb631b0a40bbebc933f664",
".git/index": "77bac1377d58587215cf33792efe35bf",
".git/logs/refs/remotes/origin/HEAD": "c546214e838180d18dca0c40cf6d7e05",
".git/logs/refs/heads/master": "c546214e838180d18dca0c40cf6d7e05",
".git/logs/HEAD": "c546214e838180d18dca0c40cf6d7e05",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "c930d5982c30856d1a09b77479a07097",
"assets/assets/listofcontents.json": "105b625004afe179bd64565ded051e6a",
"assets/assets/articlesQuiz.json": "660a365db4ca0867780d03f1edd28792",
"assets/assets/partsOfSpeechQuiz1.json": "0000e10bfbe7daf4f5b1b4e3e25bfdfe",
"assets/assets/animalsVocab.json": "3976b3e89319404cb72337e21ba28dbb",
"assets/assets/partsOfSpeechLesson.txt": "0b3be0f0ac0eab547159a3ca51f23809",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/AssetManifest.json": "4ee8bd4db5ca8bb1165dd16f96582842",
"manifest.json": "533ceda4ac3c816a477c646e2f4329e2",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"index.html": "cd5e6beeda227f9ae5797adce3abb48c",
"/": "cd5e6beeda227f9ae5797adce3abb48c",
"_config.yml": "21e0c82a2d69276c111ead2159adf03b",
"main.dart.js": "399a7883895fbb65170890c880efa78b"
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
