---
title: "Summary Reaktor Dev Day"
date: 2013-10-06 02:15
tags: summary
---
I've been to a lot of conferences, hacks and meetups this year and enjoyed most of them a lot. Most of these events were great and I got to know lots of great attendees and speakers. But quite frank: Reaktor Dev Day in Helsinki was over 9000! Here's my summary of some great days spent in Helsinki.

<!-- more -->

We've been approached by the organizers back in April during our stay at the The Next Web Conference in Amsterdam and agreed on doing a keynote speech over at Reaktor's developer event. We got warned that this is going to be an extremely developer-centric conference and that speakers need to show some coding skills in order to be taken serious at all. Since we rolled out a ton of new tools and APIs for developers this year we (John Lunn and me) were 100% sure that we'd be able to deliver: Our keynote's title was "Coding for the store of the future" and for some time we were quite happy with that.

I just came back from a trip to Austin (where we did a [Battle Hack](http://battlehack.org/)) on Tuesday October 1st at 07:00am and prepared for what we agreed on. Showing some code, going into some API details and preparing for Q&A - usual program for us. But then John sent me an email on Wednesday telling me that he changed his mind and we'd pull of 45 minutes of live coding using Node.js and our Mobile In-Store API. This was about 48 hours until we had to deliver the keynote we agreed on in April. Our objective was to build a taxi-booking & payments platform like Uber or Halo.

So I sat down, took the API documents and started with implementing a very first rough implementation of our demo using Node.js, Express, Jade and [Request](http://github.com/mikeal/request). Following I iterated over that implementation over and over again and refactored each and every single line until I felt like I knew the code in and out. Since this is an API that I normally don't evangelize on (it's not even officially out yet) I had to practice **a lot**.

Arriving on Thursday (October 3rd) we went to the speaker's dinner that was accompanied by a couple of Reaktor employees and were introduced to Finnish culture, great food and some of the other speakers. Also we learned that Reaktor did a Design Day that basically also served as a test for the twice as big developer day on October 4th. Back at the hotel I started practicing the frontend part of my demo application which was written using Jade and leveraged the HTML5 geolocation API.

Next day after having an early breakfast after a late night we went over to the conference and got a call by Ville (one of Reaktor's amazing organizers) asking us to hurry up: Our keynote's slot was switched with the first one - we were switched from 1:15pm to 09:15am. Arriving at the venue we were immediately led to the stage for our speech and after a short intro we begun.

We've been talking mainly about the Mobile In-Store API and touched things like Node.js at PayPal, Authentication and [Beacon](http://www.paypal.com/us/webapps/mpp/beacon) while I was coding and got some great some amazing interaction by our audience. John promised everybody who'd find a bug in my code that I'd hug him.. and so I did:

<div style="float:left; margin-right: 10px;">
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
<blockquote class="twitter-tweet" data-partner="tweetdeck"><p>Hugs for bugs, perfect! <a href="https://twitter.com/search?q=%23reaktordevday&amp;src=hash">#reaktordevday</a> <a href="https://twitter.com/search?q=%23paypal&amp;src=hash">#paypal</a></p>&mdash; Petri Louhelainen (@plouh) <a href="https://twitter.com/plouh/statuses/386018940780298240">October 4, 2013</a></blockquote>

<blockquote class="twitter-tweet" data-partner="tweetdeck"><p><a href="https://twitter.com/SeraAndroid">@SeraAndroid</a> It was a great demo and lots of fun. Thanks!</p>&mdash; Carl Vuorinen (@cvuorinen) <a href="https://twitter.com/cvuorinen/statuses/386038776113684480">October 4, 2013</a></blockquote>
</div>

Needless to say I've really enjoyed speaking in front of this developer crowd and getting really interesting questions about JavaScript, Coffeescript and Node after our keynote during the Q&A and during the coffee breaks. Also lots of people were interested in OAuth 2.0 - one of my favourite topics and one of the main components of our Mobile In-Store API which requires merchants to login to their application / POS using Log In with PayPal which is based on OpenID Connect (being an identity layer upon OAuth 2.0).

Having finished some interviews with press and other media we got to enjoy some other speeches including Stuart Halloway's amazing Narcissistic Design keynote which was one of the most hillarious speeches I've seen in a long time. If you ever get the chance to attend this: Do so!

World's most famous hacker ended the event with a mind-blowing closing keynote. He didn't just share some stories from his youth hacking into companies like Nokia, he also did impressing live demos hacking into other laptops using hardware, software and social engineering. Only a few attendees were not scared about their security being useless after this session.

The final day of Reaktor was a great rarity: We got a tour through the Helsinki's hotspots including some places that tourists usually don't get to see. In my opinion this is amazingly nice as we spent a whole day getting to see different parts and faces of Helsinki including the amazing office of Reaktor (which has a secret room!).

Finally we ended up having delicious dinner with Kevin Mitnick, Stuart Halloway, Bodil Stokke, John, me, Ville and Sami from Reaktor and Damian Mehers (Evernote) sharing travel stories, book recommendations and having a great time. Check out [Damian's book recommendations](http://damianblog.com/2013/10/05/some-good-books/) if you ever feel like reading something new!

Reaktor really looked after their speakers and made sure everybody had a great time - thanks for that!
