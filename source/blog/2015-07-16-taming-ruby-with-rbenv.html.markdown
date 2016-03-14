---
title: "Taming Ruby with rbenv"
date: 2015-07-16 17:34
tags: [workflow, productivity]
---
My colleague [Cristiano](http://cristianobetta.com) told me about [rbenv](http://github.com/sstephenson/rbenv) a couple of months ago. This was when I've already setup my Ruby development environment using [rvm](http://rvm.io) - I didn't get to appreciate the real power of rbenv until a few days ago: I just got a new MacBook Pro as developer machine and had to set up Ruby again in order to work with my blog and a couple of other projects.

<!--more-->

## What I appreciate about rbenv

A quick example would be working with gemfiles and different ruby versions across mutiple projects. My blog is using Ruby 1.9.3, whereas my newer projects run on 2.2.2. When I entered `bundle install` for the first time after cloning the source in order to install all the gems my Octopress-based blog relies on rbenv gave me the following feedback:

```bash
rbenv: version `1.9.3-p194' is not installed
```

The logical step was installing and setting up that particular version of Ruby: `rbenv install 1.9.3-p194`.

After the installation finished I ran `bundle install` again and rbenv told me that I did not set up bundle for Ruby 1.9.3 (but for 2.2.2):

```
blog git:(source) bundler install
rbenv: bundler: command not found

The `bundler' command exists in these Ruby versions:
  2.2.2
```

All I had to do was running the following commands in order to complete the setup:

```bash
gem install bundler
rbenv rehash
bundler
```

During this whole process rbenv held my hand. I really like the constant feedback. It always tells me what to do next and keeps me informed why certain things don't work. Especially as a hobby-Rubyist and mostly Android & Node developer this was incredibly helpful.

Two other commands I find useful are `rbenv install -l`, which lists all Ruby versions that are available for installation, and `rbenv global`, a command that allows to display and set the system-wide Ruby version.

In order to realize this particular feature rbenv is using shims that sit in your `PATH`-variable.

I'd be happy to hear if this post helped you with your Ruby setup (or why you still prefer rvm). Cheers!
