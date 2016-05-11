---
title: "Using the Power of the Service Worker"
date: 2016-05-10
tags: general
---

In today's blog post I'd like to write about an essential component of [Progressive Web Apps](http://developers.google.com/web/progressive-web-apps?hl=en): the [Service Worker](http://slightlyoff.github.io/ServiceWorker/spec/service_worker/) - an event-driven background processing tool that enables fetching resources and managing your application's cache. The result is a gain in reliable performance; connection quality and network performance loose in importance when it comes to enjoying your application.

<!-- more -->

Service Worker got introduced as feature with Chrome 40 and since then made it into a number of other browsers such as Firefox, Opera, Edge (currently in the works) and hopefully soon Safari, too. You can find a complete overview about [browser support for Service Workers here](http://jakearchibald.github.io/isserviceworkerready/). A requirement for making use of Service Worker is HTTPs - this prevents things like injecting malicious code into a site that persists due to being cached.

## Putting the Service Worker to work

As I've mentioned in this post's introduction, a Service Worker can handle fetching resources, application caching and much more. In order to make this happen Service Workers rely on ES2015's [Promises](http://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise#Description) - a new (and awesomely efficient) way to handle asynchronous requests.

First of all we'll need to start adding event listener's that subscribe to a number of important events (namely `install`, `activate` & `fetch`). There are a [few more events](http://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Basic_architecture) that can add additional functionality but we'll ignore them for now.

`install` is fired after `navigator.serviceWorker.register()` ran successfully - this is where we want to define which files to cache. You'll noticed that I've provided my domain `tme.coffee` as the cache's name. You can choose whatever works best (and hopefully is somehow unique) here.

~~~js
var toCache = [
  '/',
  '/public/css/site.css',
  '/public/js/bootstrap.min.js'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('tme.coffee').then(function(cache) {
      return cache.addAll(toCache).then(function() {
        return self.skipWaiting();
      });
    })
  );
});
~~~

In my case I choose to cache my page's CSS and Bootstrap. This saves valuable time and resources when (re-)visiting this blog, resulting in a performance gain. To force an update you'll need to modify the Service Worker's file - a simple trick to force an update is bumping a version number:

~~~js
var version = '0.0.1'; // increment in order to force a cache update
~~~

Depending on your site's `cache-control` headers the update might actually not happen directly.

You'll notice the usage of `skipWaiting()` while handling the `install` event; this method works in relation to `clients.claim()` and ensures that updates to the worker take immediate effect on all clients.

The next event, `activate`, can be used to handle tasks like cache management. In this basic example we use `self.clients.claim()` to set our Service Worker as the client page's active worker:

~~~js
self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});
~~~

The final event we'll explore is `fetch`. This is where we can decide if a resource should be returned from the application's cache or should be fetched and provided to the client:

~~~js
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
~~~

### Adding the Service Worker

In this last section we'll go through the needed code in order to load the worker we've defined above. In my case the Service Worker resides in a file called `sw.js` in my project's root folder. The following snippet ends up enclosed by a `<script>`-tag in your layout's body. As with most resources that end up being loaded when opening up your page I'd recommend moving this code at the bottom of your document in order to ensure that your file renders other information (such as your minimum required CSS and the document itself) before:

~~~js
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(function(registration) {
      console.log("SW registered");
  });

  navigator.serviceWorker.ready.then(function(registration) {
    console.log("SW ready");
  });
}
~~~

The beauty is that the snippet doesn't cause any harm when Service Worker is not available. We don't break anything and the worker is simply ignored.

Congratulations! If you've followed this post (and adjusted the code to your needs) you should've Service Worker-enabled your application. You can check if everything works as intended by navigating to `chrome://serviceworker-internals`.
