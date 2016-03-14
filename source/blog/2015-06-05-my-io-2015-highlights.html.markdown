---
title: "My I/O 2015 Highlights"
date: 2015-06-05 20:39
tags: summary
---

Last week the [8th edition of Google I/O](https://events.google.com/io2015/), Google’s annual developer conference in San Francisco, was held in the Moscone Center. Personally, I’ve attended 4 of them so far and have to admit that I’ve never left without being impressed by Google pushing the technology space forward.
Let’s go through my favorite two new announcements that were presented during the two days of constant talks, code labs and engaging side activities.

<!-- more -->

## Security

It is known that I am a security geek and love hearing about what other companies are up to in the authentication space. Luckily Google is part of the [FIDO alliance](http://fidoalliance.org/), an industry consortium founded by PayPal and Lenovo, that addresses the multiple issues in authentication by providing a standard amongst all form factors. During the keynote Google  announced additional features for Smart Lock, a system focused on leveraging the phone as central key for your environment, and something that made me incredibly happy: [support for fingerprint authentication](http://developer.chrome.com/multidevice/android/customtabs)!

Google also introduced the concept of App Links, a mechanism that helps to secure linking between apps and the web, plus an improved permission system. Android Developers have been asking for [more granular permissions](https://developer.android.com/preview/features/runtime-permissions.html) and especially optional permissions for a long time and it’s great that they were finally heard. The new system allows offering your users the choice of sharing personal information like location, photos or access to contacts instead of enforcing an All-In model.

## Payments

Braintree got announced as [launch partner for Google’s new payment system 'Android Pay'](https://www.braintreepayments.com/blog/integrating-android-pay). This means that Braintree’s SDK can be used to facilitate Android Pay payments on the user's behalf. The interesting bit here is that you can add Android Pay support through Braintree with a few lines of code (I manage a complete integration in less than 5 minutes) to an existing Google Wallet integration or bring support for Android Pay to an existing Braintree v.zero SDK integration with little effort.

We, as developers, can achieve an amazing user experience by reducing the friction of paying within apps or at the point of sale to a simple process, especially in combination with fingerprint authentication.

## What else was cool?

I love the introduction of [Chrome Custom Tabs](https://developer.chrome.com/multidevice/android/customtabs). WebView’s always felt a bit odd when being integrated into an app. A lot of customization had to be done and simple things like stored credentials couldn’t be accessed. On the other hand launching a full-blown browser through an Intent meant a change of context and wasn’t a great experience in terms of branding and user retention.

Google realized the potential to improve this by allowing people to launch branded Chrome tabs that bring the same features a regular Chrome browser instance would offer.

## Android M and what’s next

Attending I/O was great - again - and I am very excited to see how Android M will evolve over the next few months. It’ll be interesting to see how developers will adopt the new features the OS brought and how much new APIs will be added on top of what we’ve seen during the sessions.
