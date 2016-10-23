/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["about/index.html","4245eb00fa2bd841f0c840bd7d41d8ef"],["assets/bootstrap/dist/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["assets/bootstrap/dist/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["assets/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["assets/bootstrap/dist/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["assets/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["blog/2013/05/06/a-new-start-using-octopress/index.html","99d7ea3892effc25952cf7e536dbfd74"],["blog/2013/05/06/index.html","019b815fda6aaed2ee0c10f00c16145c"],["blog/2013/05/06/summary-angelhack-berlin-2013/index.html","63e7077a7ef94147d82dd662c6c5204a"],["blog/2013/05/08/index.html","234976d4af7f628ad98a41ead5be6150"],["blog/2013/05/08/whats-in-your-bag/index.html","5393cc22373babb668365ce85fc55e73"],["blog/2013/05/11/index.html","c6d53509b1da1bb31cd3834c0b7b9079"],["blog/2013/05/11/octopress-alfred-workflow/index.html","293e20f675f85d227e2e364267210041"],["blog/2013/05/18/index.html","fcb88ef733f20f9f2e86c4b706f59c33"],["blog/2013/05/18/summary-google-io-2013/index.html","0907f601ae474d5e2909526856857103"],["blog/2013/05/29/index.html","35d37228649e05aac09b1b10099a3f14"],["blog/2013/05/29/organizing-a-hackday-part1/index.html","2d9cfdbc534709034e1985c5e2afd220"],["blog/2013/05/index.html","752afa4e142dcfe0169f6cf87cc28aac"],["blog/2013/05/page/2/index.html","ac2184bcc6dbcef835868d00ba6b0e71"],["blog/2013/06/01/index.html","ed8b201be942f6e54a5067829ac394d3"],["blog/2013/06/01/organizing-a-hackday-part2/index.html","a343488115b84411832a1b09ea04ccd3"],["blog/2013/06/28/index.html","b08caf55811422176a7f5a9ceca88702"],["blog/2013/06/28/summary-droidcon-paris-2013/index.html","68599f3d68b694055168be5fd8ac8cb5"],["blog/2013/06/index.html","9f5ba384f60754b234c0133abaf36ed6"],["blog/2013/07/12/index.html","3a02eddfe76a0a9c0db638c935b2f0e3"],["blog/2013/07/12/travel-overview-made-easy/index.html","a58fcb9652bdddf18e25ddb162e93dbd"],["blog/2013/07/index.html","30df632a59e52a768ba8b01358d50e4c"],["blog/2013/08/14/being-productive-with-alfred/index.html","d46f3da41f69c50f350f817408d250d5"],["blog/2013/08/14/index.html","808d7f58d11cc745072a19cf7f48e9e5"],["blog/2013/08/index.html","7db7f7d9453d3f316835d4f8cc6ff7a7"],["blog/2013/09/22/index.html","df95cadd765f7930fa6f47a16ccf2555"],["blog/2013/09/22/node-dot-js-tutorial/index.html","f89ab2a8f2656108af5e215bda09e980"],["blog/2013/09/index.html","c03b69e59a578f84e8fcf857cddafee9"],["blog/2013/10/06/index.html","454eab05a0c32ff3dc265c8e44233c62"],["blog/2013/10/06/summary-reaktor-dev-day/index.html","e36eee39630212d7eb82117186ab0f6c"],["blog/2013/10/index.html","2d177b07964fddd8014dbefab3aa1fda"],["blog/2013/index.html","92564298d85843431a124c3974c036ad"],["blog/2013/page/2/index.html","e4239e5c8a6d0ab5d1c70cd9e1af34f7"],["blog/2013/page/3/index.html","8a7be97b9dfd0e38158b0b9af0b9cefc"],["blog/2014/06/01/index.html","78f2b0c7f70c9405cb476848b6f8f83c"],["blog/2014/06/01/using-npm-modules-from-github/index.html","f72bf4f0f27b45a29e2bccc5c18777fa"],["blog/2014/06/index.html","4da4b24f832c54d9a00a59b1577fd78b"],["blog/2014/09/10/hackathon-culture/index.html","e6b4963196853e8d91f223465e25e3d4"],["blog/2014/09/10/index.html","e6191c4b7d7df5a0cc8135a4cf004e59"],["blog/2014/09/index.html","a91daaf07c8e4d6e7a1abc20eed51ac9"],["blog/2014/index.html","ffad636037376fe6835a051fe08c7c66"],["blog/2015/06/05/index.html","0f2420eb2e0dd123eef87d9cf28c536c"],["blog/2015/06/05/my-io-2015-highlights/index.html","8df4e962be60f1bf2bca63e10103d3c2"],["blog/2015/06/index.html","35c3c2e0830540bbb1e3c0d46057fce0"],["blog/2015/07/01/an-intro-to-dev-advocacy/index.html","ac7a0550d6d50762a1cc783947414059"],["blog/2015/07/01/index.html","53e23e323ca3d11fd5fa2d15bd0b87ac"],["blog/2015/07/15/developer-relations-pt2/index.html","11ef56899065afcdee26fb4c1252954c"],["blog/2015/07/15/index.html","06e023b56c2c2b675eb6e0884c410b3d"],["blog/2015/07/16/index.html","e6ac2beac2188a57963486213bbb64aa"],["blog/2015/07/16/taming-ruby-with-rbenv/index.html","7b1ca1363ed2ee3e1738c11a4cf7a434"],["blog/2015/07/19/index.html","2ddeceb72ff8fb1f82a8df5ae9c3e341"],["blog/2015/07/19/retinizer/index.html","91839be1878759f989d759669efca2cc"],["blog/2015/07/index.html","8290cb845d0914f4b65efa43b74c1375"],["blog/2015/10/16/developer-relations-pt3/index.html","a4547789adf0b7a23ec62fccb35812cb"],["blog/2015/10/16/index.html","4d0c88bc3795ba8613ab0fe349137320"],["blog/2015/10/index.html","1100017950994ffd62bae6fefc29d73c"],["blog/2015/index.html","c97a6037b265d7f5c8987cc2968c0c80"],["blog/2015/page/2/index.html","192c478c0bbcc02d02879682308f1f5c"],["blog/2016/02/29/index.html","b036cebf9090603d82b11a00f0e85fdc"],["blog/2016/02/29/time-for-change/index.html","f53ff58916e915bba86b0f067cf528ec"],["blog/2016/02/index.html","3404f7d89471d63faae934b1a921151d"],["blog/2016/03/14/a-new-blog-using-middleman/index.html","77d7d3b5553d1d51c59d7c499e15f3c3"],["blog/2016/03/14/index.html","3011c439916da971f5b0bb90926b30e0"],["blog/2016/03/18/index.html","18a99f9c8c1059382dde9538a4b16d59"],["blog/2016/03/18/lets-encrypt-gh-pages/index.html","21bbde2cbcb159581660367135e587da"],["blog/2016/03/index.html","e19af9a15f1b4cfcfaaf8ff1d11f25a5"],["blog/2016/04/07/index.html","b6c6bf9241bed0a55039d53b7232f28e"],["blog/2016/04/07/kramdown-redcarpet/index.html","b3713376dd1d43c90fe8e16b67b5722a"],["blog/2016/04/index.html","73d39cad7a90e6041cf102b0b1864077"],["blog/2016/05/10/index.html","abd7a185bd003ac4361f2d8ec708c8ba"],["blog/2016/05/10/service-worker/index.html","5b11ab233f378b5b2590167a33ad8f2a"],["blog/2016/05/15/index.html","d933678d54fc84bd818452d7cfd378ba"],["blog/2016/05/15/sw-precache/index.html","bb1fe9869483510d15d3f818460b06a2"],["blog/2016/05/25/hosting-with-firebase/index.html","975a3c7c1b81f1870838bf3222ac84a4"],["blog/2016/05/25/index.html","d4a96d0e83bf83e1f22337e969dad0f4"],["blog/2016/05/index.html","b4a72f43dbb6b3026d1a96cd71669e89"],["blog/2016/09/09/firebaseui-auth/index.html","1c5e4981e0ff1e8bd62280ac8fbc2542"],["blog/2016/09/09/index.html","d1ff653296fef6104936c72a49af1316"],["blog/2016/09/index.html","8b7966f689bd31a466258ddeb948c595"],["blog/2016/index.html","7af74bdb273ab2c7fa597feac24ce0b1"],["blog/2016/page/2/index.html","537f25cc111dc8a773dea956e71a6af7"],["blog/categories/advocacy/index.html","6ede3c21b8d7ad7cffe32065cc1cc491"],["blog/categories/berlin/index.html","6fff6efb88ea8ac9fb4eab81559114be"],["blog/categories/culture/index.html","13887a77a4f41551ec5e75a3d67f4e38"],["blog/categories/general/index.html","0296d39caf33135f140a9f4e3cb5a5fa"],["blog/categories/general/page/2/index.html","772227c5d31d949254b6c8b031de8578"],["blog/categories/general/page/3/index.html","e929c12d8427dc622bf7e8b1ff857c57"],["blog/categories/hackathon/index.html","2860f8d83a81a0c009cd37ede21065b7"],["blog/categories/node/index.html","324d6dc80f7a047952421c2dbf4fe55e"],["blog/categories/octopress/index.html","80bdb396e0a53a8837b8fa1e34a04051"],["blog/categories/paypal/index.html","edc110141c3f163cad47ab04fbe6aefd"],["blog/categories/productivity/index.html","ec708b28f27ed464c63c8c61d88bf8c7"],["blog/categories/security/index.html","a0a3f23aca06bdfcd1b8ba115075de7e"],["blog/categories/summary/index.html","eeb28872ce2f77c99eab1d7c4ec51d78"],["blog/categories/travel/index.html","c4bc818f1d9b61ef92520e2ef4a14dfc"],["blog/categories/tutorial/index.html","4699062bcd74fda1660066b2f775ccd3"],["blog/categories/workflow/index.html","dbe5ee2141affdbf66cbe848ed21ad8a"],["blog/index.html","f1d670f787d9adcf0c3f4d3af629a84c"],["blog/page/2/index.html","6187e9002e68c7ed4a703edfdf9e8e7a"],["blog/page/3/index.html","d928208a2c9c6e0fd9574b3caa931789"],["blog/page/4/index.html","cb3c527be30f7a457ddd27d38d9cff81"],["blog/page/5/index.html","48835da53ec96b9d45e9ddc73d420d3d"],["blog/page/6/index.html","dd2c5baf61d36e225c595c57cb6d884d"],["events/index.html","59f7eedfad3870155e7ea81284e74fd8"],["favicon.ico","7040b885bc44f172b85aee31aec28835"],["feed.xml","f5eeccbf4287f1a7008d4d9524057cfe"],["includes/articles/index.html","d479f92033386f811e015f526e09d0d9"],["includes/banner/index.html","f351445a5d3704320bcb701f57912803"],["includes/bio/index.html","26625115591f6edb350fbec04502e5fb"],["includes/fold/index.html","cd153049c19a356138627f3ced615220"],["includes/fonts/index.html","e536b282a0969df8c9cab42cfd8810af"],["includes/footer/index.html","329e2e89c6ffef108f13e05a72f2354f"],["includes/ga/index.html","96bcdd01534cf1463027eb504b096690"],["includes/head/index.html","3606203b0f7158a9aa90211eac566696"],["includes/js/index.html","8fa30d3eac43fdcd1d5993d4f9bbf8a8"],["includes/navigation/index.html","dc8c49a00bc43713a9ac81a7bd0d46dd"],["includes/paginate/index.html","27464b595ea9d0afc74d381a8f8d3c93"],["includes/social/index.html","56b824f3ff7d1a44bbc82e9f09de6278"],["includes/sw/index.html","2ff6a0c4110a78bd41e95843c649232d"],["includes/webfonts/index.html","cb5e27d4620e3873a374f130a52a0521"],["index.html","987e28c5e3ac8d849eb45ece6215308e"],["manifest.json","d5b8ed18ac108023a9a5fdf79ef8ae8c"],["page/2/index.html","6c278d21505b57b0e4d5634a5374336b"],["page/3/index.html","717de15d6d9fbc9354b6fba58bf380b4"],["page/4/index.html","65ac26b587f3eae42e2246d110586781"],["page/5/index.html","314ac47aa836a3b73bbdaa8535193594"],["page/6/index.html","eb68f19114e966b80308a2f14908909d"],["public/css/bootstrap.min.css","5df0a7f8c366c8a9d81519e368c0c7be"],["public/css/custom/articles.css","f5cdbbd4005fed5e6ac983baace20f1e"],["public/css/custom/bio.css","b48f56fe31ea16f27b396da374a025f6"],["public/css/custom/buttons.css","8b4378544ff6b535b1e53051c7db2dcc"],["public/css/custom/code.css","e864966c8c12fd79904038aa9a8df276"],["public/css/custom/navbar.css","93486fc0da911db21e6197f17f893b86"],["public/css/custom/page.css","d2026133477c28791dafa2b5c99c5934"],["public/css/custom/site.css","81a5504e67418afdd03a748733591715"],["public/css/custom/syntax.css","95aab9a35eaf667533f649538556010b"],["public/css/site.css","f148c7bd8aa16075e21a0abcf0253bf4"],["public/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["public/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["public/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["public/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["public/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["public/img/apple120x120.png","7a9d5437eb0ced26a3066dc67a05f18d"],["public/img/apple152x152.png","8fbdaf5f18a10063b654d1f3e017ecc2"],["public/img/apple192x192.png","36b88e9d532c56254ee98ddf76c32629"],["public/img/apple76x76.png","16d1ea6ce28f3517a541c43e88a33e45"],["public/img/chrome192x192.png","36b88e9d532c56254ee98ddf76c32629"],["public/img/ms144x144.png","bdc31abe1cd950bc2979b0d509b104d4"],["public/img/posts/auth_flow.png","e4ea63350fdcf5953317257d4e14260e"],["public/img/posts/ssl.png","5c1aa3be0dceeae42089fc17b4be98d4"],["public/img/profile-small.png","e25f6334ebc94563da89d0f846715587"],["public/img/profile.png","e361f6539760f408ced5991f8e4271d9"],["public/js/bootstrap.min.js","95ee7dc13f3994c86ddf8abd8cd69cd7"],["public/js/jquery-1.12.2.min.js","4647d0a33199214c4ab45b9c0ff52667"],["public/js/jquery-1.12.2.min.map","01d54215486e79fbe9d954c56e3b7860"],["robots.txt","5e0bd1c281a62a380d7a948085bfe2d1"],["sitemap.xml","f7925c3ededde94208c8f158a0974677"]];
var cacheName = 'sw-precache-v2-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      return self.clients.claim();
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url));
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







