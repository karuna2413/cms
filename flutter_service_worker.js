'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js": "ed747b023451b05563777b811b38be20",
"index.html": "b55cb0731a9dc639f13207ddc540542b",
"/": "b55cb0731a9dc639f13207ddc540542b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/main": "3a9a3e7e1a032710fe46fa73ede436b7",
".git/refs/heads/main": "3a9a3e7e1a032710fe46fa73ede436b7",
".git/index": "7ef0ba8462d63746893dc3722a214bfc",
".git/config": "d2892333d0dfe221d5fea3647f41b648",
".git/COMMIT_EDITMSG": "eb45b120fde6089b0bab9f586aaff43b",
".git/logs/refs/remotes/origin/main": "fc01be5c5147ff076096b38f6595c120",
".git/logs/refs/heads/main": "15a543aba727cfa2b0693cf6efe8fbfc",
".git/logs/HEAD": "f1d93bf07de039cfdc618de68d8ea43b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/a4/eb0fb2274dec86211b4e6dc06c20b6738c08bf": "f68cbe1d617bb58d96f816bee25c5f72",
".git/objects/de/ff6f2dd70bc3ffdbdb68ee00efd8509a9872ca": "47f128284b5f8c9932ea0dfd540a7064",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/8c/83983bd2b4267991ec58af5b00416acc9feab0": "b9a71f164d4fee71ccd0e1c226ce040c",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/ce3e6aeac7ee0ba7446bb52de6c5879e7bed76": "06336a803eaa22582579fea93af13257",
".git/objects/a7/15cd8299851797483d18fee219f66c036f513e": "1b0b64fac85db2aab355a5e67c2e77be",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/ff/fe0ea5c55fcc51723b6d461be78fa5d74d5f79": "450dc08316b09cdf6297d9296380e61d",
".git/objects/ff/378e794cbff91fa0a259639a6f0b20fc003026": "cc4fc8e7a6650922323cb88a69526ee2",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/78/e19cc36d0d5325d637ee61336e376cbf5c1825": "102ac7d49dbb1c730951e4eaf1e5f2b1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/81/89788e47f36329a5b94dd046b1fd7836feeef6": "0082bd62cec1d5ff38f82e5b7a6e9c88",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/fd/820428370ef8f1adcd6724e8325136fe72918d": "407978ea5e6f56d35ce5d0ea1a11ef10",
".git/objects/5e/1c9065302efdb431588ed33760c4dde2c76fb9": "2785cc604755fcdfa0a695f3ff74421f",
".git/objects/44/68f154c1a723bc11195632990f80d73d14a39d": "39da18aba332cb83ffd2ffc9bdde9188",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/ae/ddc77a53b2fc8899ea2577bbbf0231362b3a39": "6f99befb11657967ae1d4605b9b3043a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/bc/e8c485a7a060fd9231f8e54886e79900ed0b94": "449e1d21554aa521395a71a8a7a8a899",
".git/objects/d0/6d34f88b734847d5adcb0b812c41b9970feaa1": "7b39c969b77c261a856bc5c34d07b0b6",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/38/28d72071c41e9038133437412d66766536b306": "04cfa6ce8523d85da3128d07b41d4dd5",
".git/objects/37/230fa9b9b841fbc0efc1a727393e1b822db837": "12ad4ddac9150984d4d30db55367af5e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f7/253253de31db47247373ec7bdbcace1ee09580": "546e4bd2709994a0395be5e2e28a9f8c",
".git/objects/d8/0c64c9244ad01976c9c12127534c9268dbd338": "0d369f315be75c538879d756de5b577c",
".git/objects/d8/fc9f6c665001b43fb77426954e5635a2c31fa6": "186e4f7908b1a29631b53a0a0f5eaad9",
".git/objects/94/cec89e472525e016ca84a93ae48de3613609ea": "589eb92fe20f9de302903f988da4c620",
".git/objects/9d/04c627b18d448475a26fc96a907b2c1e5bd70d": "c19838e0891a1269b424b4ffb79f669d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/1f/1d579c85fdf5bfd144c310e7fc3608845d0cf8": "eb46ec8fae0d76e3b971b62ba8888811",
".git/objects/02/8227ffb7c63ad8646d6acd05eb4eb891c19fb5": "221131d5137e859c352c24aab1e5839f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/da/3fe257482794b43ae09dc9d9e3d3b9ee105650": "53e975810fe7d5fdc5d1812375662533",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/f1/315705fbd721951951bab8d0bc51d82782c5ff": "4b3e35ed8f5d4a66830234e7622f8cb6",
".git/objects/5d/e98558e03411b26da49159155965bc23dd2fa1": "61e7a93c9543a695b38379e9855961a5",
".git/objects/d1/ce529a5dda8f120b0cec789e71f3d3cded5147": "eb16951d77a093131a7ce29f569899d3",
".git/objects/6f/a4d22fbb70ba1046a87ab19e2af0b77cb64dc5": "6eff651ddcc85081acc2501a43ddbe66",
".git/objects/93/fd448ded287a05e3b3c3208f0c00276a9893b8": "c1c04368fbddf24ca5786f3e09152e26",
".git/objects/53/f96318bab3160806fcdf2929e044a8b43adf3d": "8229acac5c26f1e255baed8e6f55bdf5",
".git/objects/af/7d3a73195f5a7bfd1430f4b6ab6ededfeb7537": "f18761ae26c4601d68c2e264d99135ba",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a2355ea577ac1f40758ed8ce7e825bb5e1894c": "c5b28e44b1458b11ce03273c68452ebf",
".git/objects/29/9f7712fc9b0eb562888e70b868c38e503b5a9b": "33032e3bd34c82b7289bba83ce65d0f4",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/65/559fe1dbad290783e25ba060499697890a7560": "0cf710ea20ccf73e77000722665cb47a",
".git/objects/f3/259611283c88f3104a62813569b42ebac0a6eb": "f6d552e36f5fe73ed6205adc4145ab7c",
".git/objects/b4/4ef504b62e123f54abca59169f65bb0c05fadc": "0ce6f3a5ce2ec0058c19e2c0575a081a",
".git/objects/43/2b3bb42dc1c9c19755b82161c070848ac15585": "aa8565bcd73d6920d1923b4dd912424c",
".git/objects/6d/045f2f32b3ef14ee7ff9ccff7b7ac8490580a5": "aadbbb222e04059ef24d49628ea742bc",
".git/objects/60/a2f015aea1c5dbdadda16defbe88cca30f7a05": "58691623103dd025e928f34c07ba1031",
".git/objects/0a/af4d919b1894177023d0c802e935fb5a8a85bd": "31e7655ff470cfe7fbb4b2773c5495d9",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/20/67116ebace2e7cc7f0dc28a1e7035d938b3054": "d47b406b850ce1df0ae8a6dd89727768",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "920836eeefafea0aeeae225671832753",
"version.json": "d7dfed4130496af80be5df8a917f99de",
"canvaskit/canvaskit.wasm": "641ba6d615314c42874bf914ef2d093e",
"canvaskit/chromium/canvaskit.wasm": "ffc522e9ff0a7bbe6bfd2a6f54f974e4",
"canvaskit/chromium/canvaskit.js": "853c6cebea386c05aa9d954f11b2c1ca",
"canvaskit/canvaskit.js": "59ed8478b398a8966eee147930f3d966",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "0d7c2e198fc5420d3940de2d44c19023",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "cf08ea36e9a2a151113a96f71dfba32a",
"assets/NOTICES": "386efa1d850a91da484b322d46901dcd",
"assets/AssetManifest.smcbin": "20e3f20b93bf4dc138c713628bcd09d3",
"assets/FontManifest.json": "24636421a941e1a973ed7962700ca341",
"assets/AssetManifest.json": "eec8125378bd32c8006f9efb5f42e227",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "283b60d73e840a77a259de62499c8458",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "7d8d4306237845212974af924b1ab33d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "8e0542a7d7eec9dbada78c8605db3ccd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "c2281cf0a22c29917ebf755ba9d11e50",
"assets/packages/timezone/data/latest_all.tzf": "d34414858d4bd4de35c0ef5d94f1d089",
"assets/assets/svg/onboarding.svg": "34ac2c2a438304518560d258a7f37766",
"assets/assets/images/drawericon.png": "020d4afb1301263fa3b9ba6cb294ff5f",
"assets/assets/images/welcome.png": "0824d931bd33175c6fa0382dec3752da",
"assets/assets/images/health.png": "77e05cc6e6e7c9fca89c00e2b1538c4a",
"assets/assets/images/login.png": "a110eeadb7405dde56ac7c654380f23b",
"assets/assets/images/OBJECTS.png": "6b315996303519ca7e2bd7e890ec7f8c",
"assets/assets/images/Shape.png": "b7af47e07923084832d7e4f995355c66",
"assets/assets/images/Vector.jpg": "76ae67ec7b3021b4a85ae0f40cedee3f",
"assets/assets/images/prof.jpg": "f1b4659c0962ba3bf3b7cdbe7ae98430",
"assets/assets/images/splash.png": "1e34a6cad145681a5ea515055152db2b",
"assets/assets/images/councellor.png": "e2bef388d8d0be83acf7808f09687e8a",
"assets/assets/images/search_icon.png": "c84a8362c703c229c706074cb83ac68d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
