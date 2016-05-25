---
title: "Hosting Static Web Apps with Firebase"
date: 2016-05-25
tags: general
---

Amongst the major announcements of last week's I/O, Google's annual developer conference, was the release of the new (& awesome) Firebase. Firebase is renowned for it's realtime database that allows for instantly synchronizing entries between mobile clients (Android & iOS) and the web. One feature that is lesser known will be the focus of this post: the ability to host static sites and web apps.

<!-- more -->

Last Saturday I gave Firebase's hosting feature a try and [shared my experience](http://twitter.com/SeraAndroid/status/734145833600319489). The response from the developer community was overwhelming and very positive; people were interested in reasons why to choose Firebase and what features it allows to use.

<center>
  <blockquote class="twitter-tweet" data-cards="hidden" data-lang="en"><p lang="en" dir="ltr">Just deployed my blog with <a href="https://twitter.com/Firebase">@Firebase</a> in less than 2 minutes. Highly impressed and deeply in love! <a href="https://t.co/bvCvJDKWfI">pic.twitter.com/bvCvJDKWfI</a></p>&mdash; Tim Messerschmidt (@SeraAndroid) <a href="https://twitter.com/SeraAndroid/status/734145833600319489">May 21, 2016</a></blockquote>
  <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
</center>

## The upsides and downsides of GH Pages

As a quick reminder: I've been using [GitHub Pages](http://pages.github.com) as a comfortable way to host my blog (and a variety of side-projects) for a couple of years. GH Pages is fantastic when it comes to quickly deploying your site, offers native support for Jekyll, comes with GitHub's own SSL certificate for sites that run on their domain (github.io) and even allows for quickly editing your project [directly in the browser](http://help.github.com/articles/editing-files-in-your-repository).

Sadly GH pages doesn't allow for configuring your site's HTTP headers (like setting the `Cache-Control` header) to optimize performance and your application's behavior. When using custom domains (ergo your own domain) with GitHub Pages you loose the convenience of SSL protection.

## My move to Firebase

Amongst the features that come per default with [Firebase Hosting](http://firebase.google.com/docs/hosting/) are an amazing CDN, SSL per default, one-click rollbacks and a really fun CLI that allows for easy configuration and deployment of your project.

My project, this blog, consists of three folders - `data` (static json files that I use to manage certain resources such as my blog's [events page](http://timmesserschmidt.com/events), `source` (this is where my Ruby code, my posts, and my blog's templates reside) and `build` (you see the result here); for this kind of project it's only relevant to deploy the content of `build`; Firebase allows for configuring your project's `public` folder in the `firebase.json` ([check out the docs](http://firebase.google.com/docs/hosting/deploying#section-firebase-json) for more information).

In addition to that, you can also define URL rewrites to clean-up your application's URLs (for example: remove trailing slashes or redirect certain pages) and customize your application's [headers](http://firebase.google.com/docs/hosting/url-redirects-rewrites#section-headers) based on file specific [glob notation](http://firebase.google.com/docs/hosting/full-config#section-glob). This is useful for optimizing your page's performance by tweaking the default caching behavior (check out [this great doc](http://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=en#cache-control) on the `Cache-Control` header) or setting up [Cross-origin Resource Sharing](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing).

## Your thoughts

I hope this post helps clarifying some of the questions I've received around hosting static web applications with Firebase and I'd be happy to hear your thoughts! Please feel free to contact me via [Twitter](http://twitter.com/seraandroid) or [G+](http://plus.google.com/+TimMesserschmidt)!
