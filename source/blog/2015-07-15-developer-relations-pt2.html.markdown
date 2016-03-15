---
title: "Developer Advocacy Part 2: Live Coding"
date: 2015-07-15
tags: advocacy, culture
---

In the world of Developer Relations, there comes a time that fills a lot of us with dread: the moment when we’re required to perform live on stage. Live demos are the best way in which to showcase our company's products and share knowledge with our community. As developers, our only real instruments to convince and even surprise our audience is a laptop and a few lines of code. It’s definitely one of the major hurdles of being a Developer Advocate, and, unfortunately, we tend to struggle with it publicly. With some missteps, lots of practice, and more than 5 years of experience, I’ve learned to simplify live coding demos and fulfill these basics:

- Always entertain your audience
- Keep the demo to within 5 minutes
- Showcase only one piece of functionality
- Do everything from scratch
- Minimize your setup in order to reduce friction
- When in doubt, simplicity is key

My demos either live within the world of mobile apps (specifically Android) or are simple web apps, done to showcase a specific feature. Here’s a look at the tools I use to support live coding, keeping in mind the six basics defined above.

### Android

For Android there's sadly not too much you can use outside of Android Studio. I do need to give [Genymotion](http://www.genymotion.com) a big shout-out, though. Their emulator offers a top-notch developer experience through speed and great usability. I felt like Genymotion decreased the amount of time that I encountered crashes and sluggishness -- even with x86 images and utilizing GPU support.

### Web-apps

Unlike with Android, there are plenty of choices for web developers when it comes to tools and editors. 99% of my live coding is done in either Ruby or Node.js. I tend to pick simple web frameworks like Sinatra or Express since they're generally well-known and allow me to focus on my app instead of going through tedious setup procedures.

When dealing with a single file, I usually tend to pick vi(m). This allows me to stress how easy the integration is since I don't need to rely on code completion. It makes the coding experience a blast because of [all those amazing keyboard shortcuts](http://www.keyxl.com/aaa8263/290/VIM-keyboard-shortcuts.htm). If you're looking for a pretty basic .vimrc you can [check out mine on GitHub](https://raw.githubusercontent.com/SeraphimSerapis/OSX/master/.vimrc).

For more complex projects, I use either Atom or Sublime. I feel that both editors are similar in terms of look & feel, and come with a set of common functionality -- like package control. They allow me to navigate easily through multiple files and switch between tabs without messing up my code -- thereby decreasing audience confusion.

#### iTerm and screen

My terminal of choice is iTerm, since it gives me a lot of flexibility when it comes to splitting my panes and using tabs. Usually I use it in combination with [screen](http://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/screen.1.html) to control which content I present and when.

A prominent example is creating a new screen session called `node` that handles starting and reloading my app’s components. Try opening up a new tab or pane in iTerm and entering:

```bash
screen -S node
nodemon
```
Then I open up a new session that I'll use for coding in vim:

```bash
screen -S vim  
vim
```

The last step in my screen setup would be attaching the live code session to another iTerm tab/window/pane by typing `screen -x vim`.

#### Live reloading

As displayed above I use [nodemon](http://www.npmjs.com/package/nodemon) for Node.js. nodemon watches your directory for changes and restarts the app when needed. A similar tool for Ruby is called [Shotgun](http://github.com/rtomayko/shotgun) -- it allows you to run Sinatra apps by calling `shotgun app.rb`.

#### Code snippets

Whenever I have to quickly enter information that is not really relevant to the live coding experience -- like client credentials, defining required dependencies, and such -- I tend to go for a combination of [Alfred](http://timmesserschmidt.com/blog/2013/08/14/being-productive-with-alfred/) and [Dash](http://kapeli.com/dash). This allows me quick insertion of code while not forcing me to leave my actual coding environment.

### What's next?

I'd be happy to hear what tools, IDEs, and tweaks you use in order to improve your live coding experience and make the event more fun for yourself and your audience.

This post briefly mentioned that I am not a fan of code snippets and copy & paste coding. My next blog post will cover why and when exceptions should be made.

*Originally published at braintreepayments.com on July 15, 2015.*
