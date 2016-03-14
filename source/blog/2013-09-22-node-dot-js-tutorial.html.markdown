---
title: "Node.js Tutorial"
date: 2013-09-22 11:43
tags: [tutorial, paypal]
---
At PayPal one of the biggest efforts in the last few months was getting rid of the old architecture and revamping it by using modern techniques and frameworks like Node.js, Express and Dust.

<!-- more -->

By getting people like [Doug Crockford](http://www.crockford.com/) and [Bill Scott](http://looksgoodworkswell.blogspot.de/) into our company this approach is being led by some great people that contribute heavily to the rising JavaScript community.

Naturally this leads to our Developer Relations team focussing on tech like Node, too and we've published a great SDK that allows a very convenient implementation of PayPal and credit card payments. To help people with getting started, I've published a series of blog posts over at the [PayPal Developer blog](http://devblog.paypal.com/) that explain in detail how to set up the project, handle the SDK and deploy it.

The first post of [Building a web app with Node.js & the PayPal SDK](http://devblog.paypal.com/building-a-node-and-paypal-app/) introduces Node and [Express](http://expressjs.com/) itself and explains the different components of the project. This is really for people who've never dealt with Express and should hopefully help with getting started.

The [second part of this tutorial](http://) goes into installing the PayPal Node SDK via NPM and configuring it to handle both credit card and PayPal payments. Personally I love the very JavaScriptesque way of handling the payloads via JSON directly.

Finally the third part of the tutorial explains how to interact with the templating engine [Jade](http://jade-lang.com/) and which modifications are needed for the deployment to Heroku.

I enjoyed writing these posts and got great feedback so far! In the next few weeks I might continue writing more tutorials based on topics like User Authentication via OpenID Connect and OAuth 2.0 for Node. This is something [I briefly spoke about at this year's JSConfEU](http://2013.jsconf.eu/speakers/tim-messerschmidt-getting-to-know-your-users.html) in Berlin.
