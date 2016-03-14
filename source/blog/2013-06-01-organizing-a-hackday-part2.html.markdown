---
title: "Organizing a Hackday - Part 2"
date: 2013-06-01 14:12
tags: hackathon
---
In my [previous post](http://timmesserschmidt.com/blog/2013/05/29/organizing-a-hackday-part1/) I wrote about the [Hack Day Manifesto](http://hackdaymanifesto.com/) and about some tools that help you with Analytics for your hackathon. It is pretty important to understand if your current marketing works of if you should change your current strategy in order to grow audience and reach out to more developers.

My second post is dedicated to building the site, finding some interesting partners for your event and some general guidance that is important for the days before the event AND the event itself. Even if the **Be clear** part of this is very short: Make sure to do this part right!

<!-- more -->

The Site
---
Creating a site for your hack & making it right takes lots of time. While we decided swiftly on the architecture to use ([Jekyll](http://jekyllrb.com/) on [GitHub Pages](http://pages.github.com/)), we had to do a few iterations until we were happy with the design of [Battle Hack's main page](http://battlehack.org). The challenge we faced was creating a site that doesn't just work for *one* but for *ten* hackathons.

Having a great conversion between *people visiting your site* and *people signing up for your hack* usually is a result of time that they need to spend looking for information & actually navigating to the registration page / registration button. This is why our design truely focusses on the registration and showing the different dates / cities first.

We decided to go for a one page design as this helped to keep the content clear and minimum. To achieve this we've leveraged [Karl Swedberg's Smooth Scroll](http://github.com/kswedberg/jquery-smooth-scroll). This already helped to make our site mobile friendly since all content could be accessed from anywhere. Doing some optimizations on our site for mobile browsers additionally helped to lower the bounce rate on mobile devices about **10%** (while the current design is still far from perfect).

Lots of features like the sign up for the Newsletter and the [News](http://battlehack.org/news/) section where added after our initial release as we tried to focus on implementing the most important things like the registration itself first. Gladly Jekyll is already designed to support blogging - adding this didn't take much longer than a few hours.

Partners
---
There is simply no awesome hackday without great partners and great prizes to be won. Personally I really love prizes that can be used for your next hack. Stuff like [Lego Mindstorms](http://mindstorms.lego.com/), [Raspberry Pis](http://www.raspberrypi.org/) and [Makey Makey](http://www.makeymakey.com/) are great for this!

When scouting for partners you should be aware that they should either power an infrastructure that developers want to use for their hack or they have some really cool API that can help to supplement hacks with extra functionality.

**Pitches:**
Please make sure that your partners can pitch their API. You want to have technical people over at the hack that can support developers.

**Buzz:**
Make sure to work with your partners on doing buzz for the event. Everyone has contacts to the community and it absolutely makes sense to leverage them in an aligned way.

Be approachable
---
Be approachable before, during and after the event. Developers might have questions / problems or feedback that you want to help with. We're using mostly Twitter for this and offer developers to reach us via mail, too.

Be clear
---
The Hack Day Manifesto already mentions a lot of things regarding managing expectations, communicating rules and interacting with the crowd but I really want to stress this. We even faced the challenge to do this twice for Europe and North America. Since our event ends with a big final and a big money prize we really had to work on our [Terms and Condition](http://battlehack.org/#rules) and [FAQ](http://battlehack.org/#faq).

Bottom line
---
I hope that my two posts help you to make the most out of your event. Combined with the Hack Day Manifesto they can help you with planning the whole event and making sure your execution is awesome. As mentioned in the first post: I didn't plan to create a "one size fits all"-solution - this is more about some useful things we found out while planning and executing our own events on a large scale.

*Again*: Any feedback is very welcome.
