---
title: "Octopress Alfred Workflow"
date: 2013-05-11 10:08
tags: [workflow, octopress]
---
This is just a very short post highlighting a very nice Alfred workflow that adds support for creating new posts for Octopress or regenerating the site. Furthermore I'll quickly describe how I post my stuff to GitHub.

<!-- more -->

You can find the workflow over [at the Alfred forums](http://www.alfredforum.com/topic/2289-octopress-publisher/) or [at GitHub](https://github.com/Temikus/alfred-octopress/).

To me this is very useful since I don't need to open iTerm first, navigate to my blog's folder, create a new file using rake and open the file in vi(m) or [Mou](http://mouapp.com/).

This is my Git workflow to test the blog locally and add new posts:

```
alias octopush='git push origin source && rake generate && rake deploy'
alias octoprev='rake generate && rake preview'
```

Place that into your .zshrc or .bashrc or whatever you use and you only have to do the following before:

```
git add .
git commit -am "My fancy message"
```
Basically I test before commiting with `octoprev` and use `octopush` afterwards to push to GitHub.
