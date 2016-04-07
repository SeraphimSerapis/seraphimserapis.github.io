---
title: "A new blog using Middleman"
date: 2016-03-14
tags: general
---
After nearly three years I've taken the time to look at my blog and realized that the Octopress (& Jekyll) based solution wasn't good enough anymore. Octopress was outdated (the blog was based on version 2 instead of the current v3 version), leveraged Bootstrap 2 and another author's publicly available template.

<!-- more -->

Since Octopress and the technology behind it always seemed a little over the top for what I was looking for, I decided to create a new blog from scratch. This time I wanted to try out [Middleman](http://middlemanapp.com) - a fantastic static site generator - that can be configured to work very similar to other (often Jekyll-based) solutions. I knew about Middleman's capabilities since [Cristiano](http://cristianobetta.com) successfully built sites with it before and was able to help with tweaking the blog's systems to my liking.

My goals for this projects were simple: I wanted to ensure that all my previous links continued to work, had the goal of increasing the blog's speed and wanted to improve my Ruby skills.

### Middleman v4

The blog is now based on the latest release of Middleman - version 4 - which comes with the upside of many tweaks &amp; optimizations under the hood and a huge downside of a lot of incompatible extensions. When running into issues you'll notice that not too many people ran into them before and therefore simply using Google didn't solve every problem (reading open and recently closed issues on GitHub helped a lot, though).

Skimming over my blog's Gemfile will reveal that I had to use a couple of gems from other sources than ruby-gems.org:

~~~
# Middleman Gems
gem "middleman", "~> 4.0.0"
gem "middleman-blog"
gem "middleman-livereload"
gem "middleman-meta-tags",
  :git => "https://github.com/rossta/middleman-meta-tags"
gem "middleman-syntax"
gem "middleman-sprockets", "~> 4.0.0.rc"
gem "middleman-disqus"
gem "middleman-google-analytics", "~> 2.1"
gem "middleman-gh-pages"
~~~

`middleman-meta-tags` - a useful extension for setting HTML meta tags isn't compatible with Middleman v4 anymore; gladly a user on GitHub forked the project and implemented the changes needed in order to make the gem work with Middleman 4 again.

Another gem that had to be (re-)added was `middleman-sprockets` - Middleman's developers chose to rely on external asset pipelines and therefore dropped Sprockets (which is also Rail's asset packaging service). Since I wanted to be able to support Sass as CSS extension the current release candidate had to be installed.

#### Data files

A feature I especially love is called Data Files. Developers are allowed to store data sets in the `data` folder as JSON or YAML files; by doing so you can avoid cluttering up your templates!

A good example is [this blog's events](/events) page:

~~~ javascript
{
  "years": [
    {
      "year": 2015,
      "events": [
        {
          "name": "JSConf.Asia",
          "location": "Singapore",
          "date": "November 19th - 20th"
        },
        ...
      ]
    }
  ]
}
~~~

Rendering the data is as easy as accessing it via the templates:

~~~ erb
<% data.events.years.each do |year| %>
  <h3 class="page-header"><%= year.year %></h3>
  <% year.events.each do |event| %>
    <div class="row event">
      <div class="col-md-3"><%= event.date %></div>
      <div class="col-md-6"><%= event.name %></div>
      <div class="col-md-3"><%= event.location %></div>
    </div>
  <% end %>
<% end %>
~~~

### Deploying to GH Pages

My blog has been running on GitHub for nearly three years and I obviously wanted to continue doing exactly that. Since this blog is not a project's page and doesn't belong to an organization I had to be able to push my site to the `master` branch instead of `gh-pages`. My source code resides on the `source` branch in the same repository.

I tried to work with [middleman-deploy](http://github.com/middleman-contrib/middleman-deploy) but sadly wasn't able to work around a handful of issues. Other people ran into the same problems and created a currently [open issue on GitHub](http://github.com/middleman-contrib/middleman-deploy/issues/114).

One of the alternatives that has been suggested is the gem [middleman-gh-pages](http://github.com/edgecase/middleman-gh-pages) which gladly did the trick for me. I've configured my project's Rakefile to publish to `master` and got everything to work:

~~~
require "middleman-gh-pages"

ENV["BRANCH_NAME"] = "master"

task :default => [:publish]
~~~

Currently the `build` folder has to be removed before pushing the newly generated blog to the `master` branch. The reason is a change in Middleman`s site generation mechanisms.

I also had to add a file called `.nojekyll` in order to [avoid issues with GitHub](https://github.com/blog/572-bypassing-jekyll-on-github-pages).

### What's next?

I'm looking for ways to further optimize the site's appearance, loading times and work around issues like having to remove the `build` folder before deploying an update version of my blog. Over the course of the next few weeks and months many gems will start to officially support Middleman v4 and the Middleman team is working on v4.1 which will bring back some cool functionality to the site generator's core.

Any feedback is welcome!
