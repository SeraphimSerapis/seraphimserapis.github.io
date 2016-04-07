---
title: "Let's Encrypt for GitHub Pages"
date: 2016-03-18
tags: general, security
---

In my [most recent post](/blog/2016/03/14/a-new-blog-using-middleman/) I wrote about rewriting my blog from scratch and my attempts at improving it's performance, reliability and ease of use. While exploring possible options I also investigated if it makes sense - and if it's worth the hassle - to enable HTTPS for this site.

<!-- more -->

While searching for possible solution a GitHub issue came up that asked GitHub to start supporting HTTPS for GitHub through SSL certificates provided by Let's Encrypt. To me it seemed like the discussion was worthwhile to follow-up with; the plan was to go back within the next few days and see if an elegant solution has been proposed.

### Let's Encrypt &amp; Kloudsec

[Let's Encrypt](http://letsencrypt.org) is a relatively new Certificate Authority (sponsored by prominent companies and teams such as Mozilla, the Google Chrome team and Facebook), that aims at securing internet traffic by issuing free SSL certificates.

An amazing startup from Singapore, [Kloudsec](http://kloudsec.com), tackled the issue by creating a CDN that works directly with Let's Encrypt and offers SSL protection - plus a few [other optimizations](http://kloudsec.com/#/features) - with very little configuration effort. The whole procedure involved changing merely 3 DNS records and after a few minutes my SSL certificate was issued.

![ssl](posts/ssl.png){: .img-responsive}

I'm pretty happy with this solution and am keen to see what else they come up with.
