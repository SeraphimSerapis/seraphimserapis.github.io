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

var precacheConfig = [["about/index.html","b732fcb3f650dfacb90df6763f4fd671"],["assets/bootstrap/dist/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["assets/bootstrap/dist/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["assets/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["assets/bootstrap/dist/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["assets/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["blog/2013/05/06/a-new-start-using-octopress/index.html","7415e1914e2f600fa0eb6887b10eece0"],["blog/2013/05/06/index.html","f92aa8ac6fcc5f2a1000ebf817389d09"],["blog/2013/05/06/summary-angelhack-berlin-2013/index.html","58dc698d6419e32fd91fdf1eef402843"],["blog/2013/05/08/index.html","fa22e8c8c11d9add1e33843abe6537d3"],["blog/2013/05/08/whats-in-your-bag/index.html","f6da0f4246279b965eb6f41f2cab827b"],["blog/2013/05/11/index.html","2cc5c8e409137258ce46125a0d88bcb9"],["blog/2013/05/11/octopress-alfred-workflow/index.html","d54ad26a071307194c70cda00fab9b2f"],["blog/2013/05/18/index.html","8865f9f0824573c89c010ab723718d91"],["blog/2013/05/18/summary-google-io-2013/index.html","31e614cad6b6d7846f0877c4811484bc"],["blog/2013/05/29/index.html","f3e2ad3329f300d0a71b75663035dce0"],["blog/2013/05/29/organizing-a-hackday-part1/index.html","9bb8cc970b55b6f8744e1c94462c8f8e"],["blog/2013/05/index.html","a9b3b6bddb629df3c8bd0c6f42894ef0"],["blog/2013/05/page/2/index.html","a66225b9f7be22c558a7fe111dd40f75"],["blog/2013/06/01/index.html","0fd00bb9120e9c1d3f2f870a517aed80"],["blog/2013/06/01/organizing-a-hackday-part2/index.html","ad222b2ced995b262702a79ef052b2db"],["blog/2013/06/28/index.html","bd07261bbc917dc8566a7b9cb79715d1"],["blog/2013/06/28/summary-droidcon-paris-2013/index.html","cf8e49d55f8068d72ca6a3e3a6cf30e8"],["blog/2013/06/index.html","b3f3a2f8429c867c3e546d2237453e9c"],["blog/2013/07/12/index.html","064795eec16d008d7d633d612923337b"],["blog/2013/07/12/travel-overview-made-easy/index.html","ab615598dda069f7e2d042b812e0633a"],["blog/2013/07/index.html","a8431f0eb8d22bec9d9d4a49c7c47c3f"],["blog/2013/08/14/being-productive-with-alfred/index.html","3a1064007df45dd7ef5c0ad8b64f0dae"],["blog/2013/08/14/index.html","e80e816ff58448a9cdcd797fcab05430"],["blog/2013/08/index.html","e3fe14410726899c409e5d784c0b3394"],["blog/2013/09/22/index.html","fbe38defdc63d9495c1e0527d21f2e9f"],["blog/2013/09/22/node-dot-js-tutorial/index.html","828ca6438618724269abc7beb42f0c11"],["blog/2013/09/index.html","864fb22a78c71368e6905be6ac35b93b"],["blog/2013/10/06/index.html","0e483a8bf4dc33b9440c389183d150fd"],["blog/2013/10/06/summary-reaktor-dev-day/index.html","51e20859f60ad8b254e826943121607c"],["blog/2013/10/index.html","43d9970ea04fa824391351bda3a357d1"],["blog/2013/index.html","1b13e75418ead78d153bcb4837d07e85"],["blog/2013/page/2/index.html","20f80b670f99f6d9a719036ad0228c42"],["blog/2013/page/3/index.html","9be2b57dff67c3543979619d64cda9b7"],["blog/2014/06/01/index.html","fb1cd2426fbac2ea37751f385fa9466b"],["blog/2014/06/01/using-npm-modules-from-github/index.html","3d2e5e589724680e5d94c85fc59ec401"],["blog/2014/06/index.html","b52b8bf693ecccda5f382a50d338a7a7"],["blog/2014/09/10/hackathon-culture/index.html","6b2429bb1d0f427f4f8167f9f2f7da40"],["blog/2014/09/10/index.html","1dbce2cd98e5e6a3a1d77d089e22c834"],["blog/2014/09/index.html","ab28f32f4310ae7464a36931823e5d43"],["blog/2014/index.html","7ea319892db4938496cdf932828bcc59"],["blog/2015/06/05/index.html","10462f227ad72b706c5e441e8f1221e5"],["blog/2015/06/05/my-io-2015-highlights/index.html","30382332bba24d0ca7ed881b68aa9f33"],["blog/2015/06/index.html","8820f1e2c8c4549709787cdb1f937fc1"],["blog/2015/07/01/an-intro-to-dev-advocacy/index.html","67f06edd682fef1cde61c284e0aa0797"],["blog/2015/07/01/index.html","0746a0ddb13d626bb5e6721364e471ee"],["blog/2015/07/15/developer-relations-pt2/index.html","3443b40513e46647e18ed8bd617f334f"],["blog/2015/07/15/index.html","ec1c913805e4fdb7aa934d3eccd74a2e"],["blog/2015/07/16/index.html","26c54407cca4b981c69f3a5a6211e758"],["blog/2015/07/16/taming-ruby-with-rbenv/index.html","29059d8effc7083618dd47a5151fd326"],["blog/2015/07/19/index.html","722a4fe75befd8c9013541275122232f"],["blog/2015/07/19/retinizer/index.html","baae4487e8d5a92b358f132d3a075cd4"],["blog/2015/07/index.html","5f83eab51052ceaf87051b84e7f69122"],["blog/2015/10/16/developer-relations-pt3/index.html","63b78e084b6b9c17d5f02af938240a6e"],["blog/2015/10/16/index.html","38505cdb8519f8ff0a4f571e6522329d"],["blog/2015/10/index.html","0e444b3af8c1183fd34056a10dc301b0"],["blog/2015/index.html","90aacba4effa083c6767083ba241e88b"],["blog/2015/page/2/index.html","66c94912f6fcfee21cca9c50c3893b7c"],["blog/2016/02/29/index.html","350fb47f00a5d51d792b126a32a2e93a"],["blog/2016/02/29/time-for-change/index.html","f13b98ea0f7ecd336dbd88655a34eb04"],["blog/2016/02/index.html","179c348979585e276375b20f8cfb0d7f"],["blog/2016/03/14/a-new-blog-using-middleman/index.html","f8d75f3484c8f845eab1d17c3d5895ab"],["blog/2016/03/14/index.html","c630e94c5447e23c060c94da444716b5"],["blog/2016/03/18/index.html","f309af37afda0e0873bd2824ddba9d85"],["blog/2016/03/18/lets-encrypt-gh-pages/index.html","ba19f13d03c7e2bbd69f55c0965a40c2"],["blog/2016/03/index.html","d5c9ea30d204b0c70d8b9a79b71f5f65"],["blog/2016/04/07/index.html","38bd6c744ca41a3de2a2521b91fada45"],["blog/2016/04/07/kramdown-redcarpet/index.html","3eab71f85393324a6f7a7b993b9dd5c4"],["blog/2016/04/index.html","74942c18912995252a74865edcb0cc59"],["blog/2016/05/10/index.html","6eeacd0b9f522e50845c7098c0166ec6"],["blog/2016/05/10/service-worker/index.html","21408f4b9340b88a7bbd4019f6430eba"],["blog/2016/05/15/index.html","67ac3e1964d839b69f581c67a5ce5695"],["blog/2016/05/15/sw-precache/index.html","8adf8120e6e31c8eea978f8a2a790008"],["blog/2016/05/25/hosting-with-firebase/index.html","e533851b3a29e6d99825c65b54673957"],["blog/2016/05/25/index.html","1eb101748cd887a7eb76606dcc3289b5"],["blog/2016/05/index.html","6b89cecf2aafd117b647bc22d7980d71"],["blog/2016/09/09/firebaseui-auth/index.html","7c725123e8e662eef472802b5e84083e"],["blog/2016/09/09/index.html","fcf04e9f34924964c72711f037f0d939"],["blog/2016/09/index.html","1d136bf573533b7173319996ca62e952"],["blog/2016/index.html","886a2cf1a64017587c22ebfd2dd0e9e6"],["blog/2016/page/2/index.html","e9ebc55fe547c6a3e24156a104cfe8e5"],["blog/categories/advocacy/index.html","6d1af047d6390b9ea13db1abd81d492a"],["blog/categories/berlin/index.html","9e4d0f9163f66507bbdcd77c60aa5e28"],["blog/categories/culture/index.html","ad9d4978b8f8f2821075e40b8ae59a87"],["blog/categories/general/index.html","ac7309891d120b57061bd214448feabf"],["blog/categories/general/page/2/index.html","17fe34b70b29e1825b069244ad36cc0e"],["blog/categories/general/page/3/index.html","e93bd76f39e3c58dddcad18b6b1e0145"],["blog/categories/hackathon/index.html","095ac732d96e4240216cc097d9fec69e"],["blog/categories/node/index.html","3231ca0c73b0dcea709738026e96259f"],["blog/categories/octopress/index.html","62e02865f4232e4d29a3b6b2c44db928"],["blog/categories/paypal/index.html","81437919a563e78e9322759f63f09d13"],["blog/categories/productivity/index.html","3da37542cf25a19fcd59eaa541181b8d"],["blog/categories/security/index.html","624ca0f163cbcf8c25cf17726c84a570"],["blog/categories/summary/index.html","b898c12fb8dc366d7bde3d00ca8af0df"],["blog/categories/travel/index.html","de06df3bc09c0e015c15c14c2bd8b4ac"],["blog/categories/tutorial/index.html","2b78c5607738450b958cb2bac5a32e1f"],["blog/categories/workflow/index.html","43962e8dc4612eaa8da62ed2532874e5"],["blog/index.html","a13cdc85b3ea5adef5dede896fb68697"],["blog/page/2/index.html","a4eb7a3c2f1f97d7ad3b44d932819f0d"],["blog/page/3/index.html","0fdf32ed0584fbe42dc6684e30c9cfa2"],["blog/page/4/index.html","7b16d08b6d5c0f67f6434fe5f55aa2c6"],["blog/page/5/index.html","cad2a2e32d3a3b3f544d50c3252922d3"],["blog/page/6/index.html","968a994c9db7ab6fecafe3d194565b2e"],["events/index.html","f732ab260a481d7400112766a69f85f1"],["favicon.ico","7040b885bc44f172b85aee31aec28835"],["feed.xml","6532fd91195a00c0f3c14026cb3a5fe9"],["includes/articles/index.html","bb5b27f952fe45dcc1402ca3192a9667"],["includes/banner/index.html","36630aae5b8dc5092b643ad3ff12452e"],["includes/bio/index.html","5e64bce54c579dfdeb6c4a0b47a37367"],["includes/fold/index.html","34d7773402fac469255d4b4f541419b9"],["includes/fonts/index.html","2111e2fa4e938638ec5946b76b6bdb47"],["includes/footer/index.html","87bfddef45b040a112ee0d0c102c9440"],["includes/ga/index.html","a300fd878ddae3551b50d11d443f531d"],["includes/head/index.html","54ca20ba7727c8b1d46b6711d8266750"],["includes/js/index.html","d873e6192bb93d6a228f71a420318390"],["includes/navigation/index.html","2b14ba97029086e1010d71c0b7522727"],["includes/paginate/index.html","4274f22f271cc9bd69696c8583a03a45"],["includes/social/index.html","73dbd3dc705c7853a4bd12b09a2818c1"],["includes/sw/index.html","c36de927db089c752d967cfa7f29f103"],["includes/webfonts/index.html","8302e5446c0b1cfe9393b592831956cb"],["index.html","95aec010c076b475379d10e4767f8298"],["manifest.json","d5b8ed18ac108023a9a5fdf79ef8ae8c"],["page/2/index.html","22c238b1d98ab57c52263795a848097e"],["page/3/index.html","5226c2bc20cc56f5aacf7de4e52bf7c1"],["page/4/index.html","e0d4005a4c6ae29f7843ad55ce7404fa"],["page/5/index.html","6856755c4e57c9519606649c7de0e573"],["page/6/index.html","fda021169987872d0051e3aa051319e0"],["public/css/bootstrap.min.css","5df0a7f8c366c8a9d81519e368c0c7be"],["public/css/custom/articles.css","f5cdbbd4005fed5e6ac983baace20f1e"],["public/css/custom/bio.css","b48f56fe31ea16f27b396da374a025f6"],["public/css/custom/buttons.css","8b4378544ff6b535b1e53051c7db2dcc"],["public/css/custom/code.css","e864966c8c12fd79904038aa9a8df276"],["public/css/custom/navbar.css","93486fc0da911db21e6197f17f893b86"],["public/css/custom/page.css","d2026133477c28791dafa2b5c99c5934"],["public/css/custom/site.css","81a5504e67418afdd03a748733591715"],["public/css/custom/syntax.css","95aab9a35eaf667533f649538556010b"],["public/css/site.css","f148c7bd8aa16075e21a0abcf0253bf4"],["public/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["public/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["public/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["public/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["public/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["public/img/apple120x120.png","7a9d5437eb0ced26a3066dc67a05f18d"],["public/img/apple152x152.png","8fbdaf5f18a10063b654d1f3e017ecc2"],["public/img/apple192x192.png","36b88e9d532c56254ee98ddf76c32629"],["public/img/apple76x76.png","16d1ea6ce28f3517a541c43e88a33e45"],["public/img/chrome192x192.png","36b88e9d532c56254ee98ddf76c32629"],["public/img/ms144x144.png","bdc31abe1cd950bc2979b0d509b104d4"],["public/img/posts/auth_flow.png","e4ea63350fdcf5953317257d4e14260e"],["public/img/posts/ssl.png","5c1aa3be0dceeae42089fc17b4be98d4"],["public/img/profile-small.png","e25f6334ebc94563da89d0f846715587"],["public/img/profile.png","e361f6539760f408ced5991f8e4271d9"],["public/js/bootstrap.min.js","95ee7dc13f3994c86ddf8abd8cd69cd7"],["public/js/jquery-1.12.2.min.js","4647d0a33199214c4ab45b9c0ff52667"],["public/js/jquery-1.12.2.min.map","01d54215486e79fbe9d954c56e3b7860"],["robots.txt","5e0bd1c281a62a380d7a948085bfe2d1"],["sitemap.xml","611f1fb2400b5f50333024bc3b6b790c"]];
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







