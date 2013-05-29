---
layout: post
title: "Organizing a hackday"
date: 2013-05-29 18:32
comments: true
categories: Hackathon
---
Right now I'm deeply involved with organizing the Berlin stage of PayPal's series of hackathons called Battle Hack. If you've ever organized a hackathon or in case you're interested in do so this post might help getting started.
<!-- more -->

The Hack Day Manifesto
---
First of all: Read the [Hack Day Manifesto](http://hackdaymanifesto.com/). Now read it again. This is an amazingly useful how-to that covers most of the really important topics like finding a decent venue and making sure that your network doesn't suck. This amazing project was started by the [Geeks of London](http://geeksoflondon.com/) and is easily one of the most interesting sources of information out there.

I'll not try to write another Hack Day Manifesto over here. This post is more about some useful additions that might help to make your event awesome.

Some of the content of the Manifesto might not make sense for your hackday but at least you might consider it.

Analytics
---
Whenever creating a project it absolutely makes sense to analyze your activities and optimizing them to have the best possible outcome.

**Newsletters:**
Newsletters are possibly one of the best ways to reach a broad audience. To optimize your outcome using a tool that allows for deep analytics makes absolutely sense. In the case of Battle Hack we're using [Campaign Monitor](http://www.campaignmonitor.com/). This will help to target users that already registered for the event or users that might have opened the email but didn't register yet.

**Registration:**
Of course building a registration can be big fun but to be honest: Use something that users already know (and maybe even have a dedicated account for). For Battle Hack we needed a scalable solution that allows to track 10 local stages. We've been trying [Splash](http://splashthat.com/) initially but quickly dropped it in favour of [Eventbrite](http://www.eventbrite.com/). While Splash might allow for nicer looking sites and more customization, Eventbrite simply has the best dashboard & adminstration. We're heavily using the analytics & charts that Eventbrite provides us to check the outcome of different campaigns and adjust our buzz generation for the hacks and are pretty happy with the available tools.

**Online:**
This is not a big surprise: Google Analytics. Not sure you need to add anything over here.

**Social Media:**
I'm heavily using [Buffer](http://bufferapp.com) to keep track of my social activities on LinkedIn, Twitter & Facebook. This provides me the "reach" of my activity and the resulting reactions. Buffer easily became one of my favourite apps and really deserves a mention over here.

The Site
---
Creating a site for your hack & making it right takes lots of time. While we decided swiftly on the architecture to use ([Jekyll](http://jekyllrb.com/) on [GitHub Pages](http://pages.github.com/)), we had to do a few iterations until we were happy with the design of [Battle Hack's main page](http://battlehack.org). The focus of our site was not just one event but 10 or 11 (including the finals). Having a great conversion between people visiting your site and people signing up for an event usually is a result of time that you need to spend looking for information & actually navigating to the registration page / registration button. This is why our design truely focusses on the registration and showing the different dates.

We decided to go for a one page design as this helped to keep the content clear and minimum. To archieve this we've leveraged [Karl Swedberg's Smooth Scroll](http://github.com/kswedberg/jquery-smooth-scroll).

Lots of features like the sign up for the Newsletter and the [News](http://battlehack.org/news/) section where added after our initial release as we tried to focus on the most important things first. Gladly Jekyll is already designed to support blogging - adding this didn't take much longer than a few hours.

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
Be approachable pre, during and post the event. Developers might have questions / problems or feedback that you want to help with. We're using mostly Twitter for this and offer developers to reach us via mail, too.

Be clear
---
The Hack Day Manifesto already mentions a lot of things regarding managing expectations, communicating rules and interacting with the crowd but I really want to stress this. We even faced the challenge to do this twice for Europe and North America. Since our event ends with a big final and a big money prize we really had to work on our [Terms and Condition](http://battlehack.org/#rules) and [FAQ](http://battlehack.org/#faq).

Bottom line
---
Organizing a great effort already takes huge effort and work before the actual event. I'm more than happy to hear your feedback and even add more points that might help future organizers.