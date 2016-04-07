---
title: "kramdown instead of Redcarpet"
date: 2016-04-07
tags: general
---

Since [my switch to Middleman](/blog/2016/03/14/a-new-blog-using-middleman/) I've been using [Redcarpet](http://github.com/vmg/redcarpet) as Markdown engine. The rendering engine itself ran fine but sadly doesn't offer a way to specify custom classes for elements - a shame when you're looking for a way to declare a certain image as `img-responsive` for Bootstrap et cetera. Middleman gladly supports a variety of engines (including [kramdown](http://kramdown.gettalong.org/)) and I figured it might be worth switching in order to obtain that extra bit of flexibility.

<!-- more -->

kramdown comes with a non-standard syntax for CSS-classes:

~~~ markdown
![an-image-description](someimage.png){: .img-responsive }
![another-image-description](anotherimage.png){: .img-responsive .round }
![an-image-with-id](imagewithid.png){: #banner .img-responsive }
~~~

When you're looking into switching your Markdown engine you'll have to set the following line in your `config.rb`:

~~~ ruby
set :markdown_engine, :kramdown
~~~

Another engine that allows using custom CSS-classes via attribute lists is [Maruku](http://maruku.rubyforge.org/proposal.html#attribute_lists). Feature-wise it looks quite similar to kramdown but there has been little activity in [it's GitHub repository](http://github.com/bhollis/maruku).

I hope this short post helps a few of you,  
Tim
