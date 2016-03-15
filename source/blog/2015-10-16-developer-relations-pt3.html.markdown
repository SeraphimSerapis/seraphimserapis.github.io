---
title: "Developer Advocacy Part 3: Copy & Paste"
date: 2015-10-16
tags: advocacy, culture
---

[In a previous post](/blog/2015/07/15/developer-relations-pt2/) I wrote about the six principles I use when it comes to live coding at events and a few of the tools that help create a smooth workflow. In this post, I’ll cover a topic that I’ve mentioned before: code snippets and relying on copy and paste in code demos.

Live coding is an awesome way to show how easy it is to implement and use a certain SDK or API. Now, I’ll admit that heavily relying on code snippets and comments feels a bit like cheating to me; it suggests you don’t know the code you’re supposed to demo. However, because time on stage is often limited, snippets conveniently allow you to spend more time interacting with your audience.

### When do I copy and paste or use snippets?

I rely on [Dash](http://kapeli.com/dash), a documentation browser and snippet manager for Mac OS, to handle the credentials I use for working with PayPal and Braintree SDKs and APIs. Dash allows me to paste snippets like this one without first navigating to [Braintree's sandbox](http://sandbox.braintreegateway.com/login) and copying the right bit of information before going back to my code:

```ruby
Braintree::Configuration.environment = :sandbox
Braintree::Configuration.merchant_id = 'ffdqc9fyffn7yn2j'
Braintree::Configuration.public_key = 'qj65nndbnn6qyjkp'
Braintree::Configuration.private_key = 'a3de3bb7dddf68ed3c33f4eb6d9579ca'
```

Realistically, this snippet saves me about 30 to 45 seconds of precious stage time that I'd rather dedicate to entertaining my audience.

Another example would be adding [Gradle dependencies](http://developers.braintreepayments.com/android+ruby/guides/client-sdk#gradle) to my Android demos:

```
compile 'com.braintreepayments.api:braintree:1.+'  
compile 'com.loopj.android:android-async-http:1.4.4'
```

Typing the package names is error-prone and not tremendously important compared to the actual implementation of the SDK.

### Moments of uncertainty

Mistakes can -- and probably will -- happen, especially when dealing with new products, or performing a demo for the first time. In order to avoid these mistakes, use a linter. Linters allow for highlighting syntax issues, unknown variables, and even that annoying missing semicolon that breaks your code.

Whenever I work with Atom I rely on the [linter package](http://atom.io/packages/linter); for JS I use [linter-jshint](http://atom.io/packages/linter-jshint), and, when using Ruby, [linter-rubocop](http://atom.io/packages/linter-rubocop) gets the job done.

Other than that, all you can do is practice, practice, practice. A great way to actively improve is to record your demos and check for hiccups on both the coding and performance bit. Did you encounter hiccups? Start again. Having trouble explaining a certain section when coding? Try to find an easier explanation, and repeat it over and over until you feel comfortable.

### The next step

[As promised in my first post in this series](/blog/2015/07/01/an-intro-to-dev-advocacy/), I'd like to cover multiple topics that deal with daily obstacles in developer relations. The next topic I am going to write about is that moment before you go on stage and how to deal with stage fright. I’d be more than excited to hear your feedback or ideas for new topics in this area - please feel free to comment below or reach out to me via Twitter.

*Originally published at braintreepayments.com on October 16, 2015.*
