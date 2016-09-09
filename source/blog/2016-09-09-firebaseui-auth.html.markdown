---
title: "Security UI&#47;UX best practices with FirebaseUI Auth"
date: 2016-09-09
tags: general
---

In this post I'd like to cover a great open source library: FirebaseUI (for [Android](https://github.com/firebase/FirebaseUI-Android) and [iOS](https://github.com/firebase/FirebaseUI-iOS)). I've been [pretty vocal](http://www.slideshare.net/TimMesserschmidt/death-to-passwords-sxsw) about the need to come up with better patterns around dealing with passwords or even ideally getting completely rid of them by using better alternatives and I feel like Firebase's approach towards authentication is very much in line with what I've been demanding.

<!-- more -->

What is FirebaseUI Auth?
----

FirebaseUI Auth is a collection of UI bindings for Firebase that allows to handle presenting data from Firebase (FirebaseUI Database) and offers a beautiful drop-in solution to handle user authentication (FirebaseUI Auth) in your Android or iOS application. It comes with support for [Smart Lock](https://get.google.com/smartlock/), integrates with the most common identity providers (such as Facebook, Twitter, and Google) and allows to customize it's UI by simply providing a theme on Android or subclassing `FIRAuthPickerViewController` on iOS.

Why is it useful?
----

The team took a look at implementing several security best practices - such as suggesting a user's frequently used email addresses (via [Smart Lock HintRequest](https://developers.google.com/identity/smartlock-passwords/android/retrieve-hints)), creating new accounts or linking multiple accounts to the same user. This sounds very easy in theory but looking at the variety of possible cases this suddenly becomes a behemoth that isn't all that easy to handle (picture taken from the FirebaseUI Auth [documentation](https://github.com/firebase/FirebaseUI-Android/blob/master/auth/README.md)):

![ssl](posts/auth_flow.png){: .img-responsive}

Not having to work on solving all these different (edge) cases and instead focussing on a great user experience (and your own application) sounds like a great proposition for me. This is why I'd love to encourage you to give FirebaseUI a try and provide me or the team itself (via [Twitter](https://twitter.com/firebase) or [GitHub](https://github.com/firebase/FirebaseUI-Android/issues)) with any feedback you might have.

How can I use it?
----

Installation is as easy as using either Gradle or CocoaPods in order to resolve the right dependencies. The team has split up FirebaseUI into multiple modules/subspecs in order to allow you to select the most minimal feature set you're interested in. There are great samples - like the FirebaseUI Chat Demo for [iOS](https://github.com/firebase/FirebaseUI-iOS/tree/master/examples/FirebaseUIChat) or the sample application for [Android](https://github.com/firebase/FirebaseUI-Android#sample-app) that outline the steps needed to get the library integrated.


I'll be giving a talk at [Droidcon Vienna](https://droidcon.at/schedule/#session-117) next weekend and am looking forward to discussing current authentication UI/UX best practices with the attendees!
