'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "bd099de3e63d240d935a6284e8c1d31f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9fde5b80c5a048daec2a08ad197704a9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3bd3a1d3f7ef8aad05dd302f0be92a8d",
".git/logs/refs/heads/main": "922428bf0562f2b2f3c32f5eb7820957",
".git/logs/refs/remotes/origin/main": "1bd273b8a02c27d997c6accbd4f4b8d5",
".git/objects/00/af1958f01b180a76e8e45377413e6a9a81a3cd": "27cb714484d5b7d8985c90880444d607",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0d/ae7f265ddbd4321a70efd8f1f9ea8cbbfef253": "774c5c123a371d96c98091e45b268c98",
".git/objects/14/82537408a146f7cc0beccf0c372f9a5ff242bd": "44d8915d11adde69be66307f1bf9efa7",
".git/objects/19/50ec0a9699af832a3a46531f76a48f50e81784": "29dbbd367973f17b7808a43ad2dd6695",
".git/objects/1b/063a507eb9e0775d4f809acd9027120e127e11": "0fcdc4c26cbe5bf06b6b77c419169570",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/2b/9ef40880d845fe265005a3b1f76fa16606f877": "1dcf24ae9b9349b9e1383910595d6a53",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/b9df02f9e1911687e42547ed56cdadcb40079a": "6008290cdcaeb7716e49ce7d4b2013a8",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/42/407b67bfa0ce61434449984ba634d7f003b860": "1f2d22d60290dcea97fa2596bcdeec29",
".git/objects/43/9fef151e5efa51f3d888f1e0c37e6416fb30cb": "64adca728d9065f58e53788e5ab91413",
".git/objects/44/0afb0a89405e1f91a7c8544b7efa211880dcfe": "05ffd75e6d2f5da18dfb3cd28fb33601",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/47/1a027879e808984140b6ac926db2e6f3ff5deb": "0294fbb2c6bfc03648737d10b36512a4",
".git/objects/4e/7be0103627995903f88942a6b0f669eaa66cb5": "4b719fc903b2ac6f57b523bcc60db643",
".git/objects/5f/708351b5096cc8ee0624b76be11dbc5f0f6963": "84590f012cbfed200a2fdf64d81b25cf",
".git/objects/6a/bc21424c454df45f0018e4e0ab8e9a79db127a": "2c4cb498a9c2043dacbc5606ab6f7f12",
".git/objects/6b/17a4093ae29cb0839eb26a7bcbe218cc783c44": "3367a53b472f8cf4cdff653df09bd396",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/77/83c4c8b83ee06bc4b496ddd8af169c2512d4fd": "154f9ea7aa9e24cbe67590bfc9c631e3",
".git/objects/79/6d3f13108b5736ac73dc9ae215e7a3530d51c4": "0d50bd1c0edc9ee77a07105ed9343ce9",
".git/objects/81/4cac63aafa45badf1e5eb3c2e8079c119b9908": "c76098211a1956bc1cb8a0792c8adc6d",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/0438c57f682d615f9b33c9564a42aab1e61a41": "a4f72337ac8a6efcf20e77e70cfe4f12",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/aa/f4e204f917e1a6a26863f8db2cb5d47f8dd20a": "0381106bbf9b1c5022ab5cbd64d60af7",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b4/663e6b3ca2f2ab4b089cd8b5981f9bca2f6fe6": "13243ca05e598dca404a7b99bc01d928",
".git/objects/b5/379d6e77fbfad10cad0ae3184363f6d1561036": "3080af10963ea38c151b75e2d931108c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4087814ff9ff5774cc22ba5131ef1f4a2ff353": "2418309abb61de981742037de1036b79",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/c4d3c27588a0e1e73345f7b1ae009e1fc3e7b4": "c565b2a2c5a664803c3087b32e8943a3",
".git/objects/c2/0dd8ed52533b24ee59b9a604776fd9e28a9e81": "1fb612b0e89813b1f66345ee86612674",
".git/objects/c2/33c966ae6eb691df35d6ecb45d01c175845f9b": "01b8a4cbfa4d5d47edbd47480b19c60f",
".git/objects/cb/b70a93ec5f7dc7f4f480d64b354e1429261b0e": "7022248d58e0126684e4896ad034b63c",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/d3696275a0a04e6f0947dbf32e47f42ce1c3ac": "10f2e172680883ff6eb10405477b3bf5",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/1fa0c07ad3a9558f5b0aff210155686d20b902": "70a36883ad543ceb70b44b4dd2739dae",
".git/objects/ea/99f8990de53d7085fb9fc704ad2b2728a7c700": "c1065f1df5759d7094e0bf053a6a9351",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/66390639b18ee06b1cf31b3f10bcf8ae0697a2": "393f4750e93747f233e0c50831151532",
".git/objects/f0/7b9a91106fef2440869fadca535924e1518b3a": "992a8ec7ccc00efc965e60879fa2115a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/b376b1f1941a871818e58abb9dc2e9b31f8442": "1ebe3e40de401129ca2d122f92b5aa22",
".git/objects/f9/e275e85e28a1749940006c97f0a9e26c9b8f21": "71b7e25d5eb42e4b2fed476022e62dfa",
".git/refs/heads/main": "8efe03c69fa8e1fef84a9c955a02364f",
".git/refs/remotes/origin/main": "8efe03c69fa8e1fef84a9c955a02364f",
"assets/AssetManifest.bin": "17df5f73705c721590ea2a6d84af6aed",
"assets/AssetManifest.bin.json": "d1166f3096698a415ad0eefffe8b93a5",
"assets/AssetManifest.json": "88056600f8115c1edda58d835b28bffa",
"assets/assets/images/bilik.jpg": "6356806cade255ab0ef9739999987ab5",
"assets/assets/images/holiday1.png": "b870275b127af1a4ccba30b49c9cad76",
"assets/assets/images/holiday2.jpg": "665950a2459827f796213adcc1b74386",
"assets/assets/images/holiday3.png": "1bc78e2cd8e3d4d2debd8851f59cbd5c",
"assets/assets/images/holiday4.jpg": "e839e31ad33c348916ddd83298b9bfa1",
"assets/assets/images/holiday5.jpg": "9c211b30536ddba8d562ee57db3d4e94",
"assets/assets/images/masjid.png": "fe940011f36858c82b134c5eb52d17cb",
"assets/assets/images/promis.png": "9a0984e612a723af78e75285b0da8fb3",
"assets/assets/images/promisnobg.png": "c25c91c0c92b9e6e22bb1dd96bc1fff6",
"assets/FontManifest.json": "ac3f70900a17dc2eb8830a3e27c653c3",
"assets/fonts/MaterialIcons-Regular.otf": "78f19a3b9c7c87687cd22b065ce31840",
"assets/NOTICES": "4ce26a11842936f270a0c1f4a15b339d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "5a5cc69a675baed9fee17c2b964e4c3a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f126553a09e86b3a43f88082eeab86e1",
"/": "f126553a09e86b3a43f88082eeab86e1",
"main.dart.js": "00a0cf2c4a6ad78dfc23a523bd02c3b9",
"manifest.json": "e3956951464dfe087077377653cf9a64",
"version.json": "2bab36f74b77e79dd99ffb867f8e8a98"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
