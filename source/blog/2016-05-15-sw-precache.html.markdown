---
title: "Service Worker Precache for Middleman"
date: 2016-05-15
tags: general
---

After we've taken the time to explore the basic functionality of Service Worker in my [most recent post](/blog/2016/05/10/service-worker/), I'd like to expand on this topic by covering [sw-precache](http://github.com/GoogleChrome/sw-precache) (a module for generating a worker that handles precaching of your application's resources) and how to use it with Middleman.

<!-- more -->

As a quick reminder, Service Worker is a feature of Progressive Web Apps, that handles fetching and caching of resources and greatly increases application's performance.

The Chrome team has released a  module called sw-precache that applies best practices around handling your application's workers and ensuring that your client always serve the newest version of your resources. In order to achieve this, sw-precache generates MD5 hashes of all your application's resources and stores them in the worker's file:

~~~js
var PrecacheConfig = [
  ["about/index.html","10def4949ab13adf7f1e81dd4a201a01"],
  ["assets/bootstrap/dist/fonts/glyphicons-halflings-regular.eot","f4769f9db7466be65088239c12046"],
  ...
];
~~~

Whenever a file's size changes the related MD5 hash changes, too, and the Service Worker can update your application's cache.

## Running sw-precache automatically

sw-precache works in harmony with Grunt and can be defined as a task in your application's build process. Sadly Grunt is not native to the world of Ruby and therefore we'll have to deal with Rake. Since I publish my site on GitHub pages I make use of `middleman-gh-pages` - this gem handles pushing the built source to the `master` branch while the actual source code resides in `source`.

The perfect hook for using sw-precache would be the `publish` task - [as defined here](http://github.com/edgecase/middleman-gh-pages/blob/master/lib/middleman-gh-pages/tasks/gh-pages.rake#L85) - which ensures that there are no dirty builds, (re-)syncs the directory, builds the project and then handles pushing the source code.

~~~rb
task :publish => [:prevent_dirty_builds, :sync_build_dir, :build] do
  # Fancy Ruby magic
end
~~~

Next to sw-precache's ability to be used as Grunt task, you can also use the Node executable [via a CLI](http://github.com/GoogleChrome/sw-precache#command-line-interface) to run it on it's own. We can use this to our advantage and define a new task in our project's Rakefile:

~~~rb
desc "Runs sw-precache from the build directory"
task :sw do
  sh "cd build && sw-precache"
end
~~~

During the build process Middleman creates a new directory called `build` in your project's root folder - this is where we want to run sw-precache before the code gets published.

The last bit that needs to be done is overriding the publish task. In Rake lingo we *enhance* the task by adding another prerequisite to the task:

~~~rb
task :publish => [:prevent_dirty_builds, :sync_build_dir, :build, :sw]
~~~

Once the Rake file has been modified, running `rake publish` leads to building the source, generating the service-worker.js file in your project's build folder and publishing the code to GitHub.

I hope this proves to be useful to some of you out there - I'd be more than happy to hear your thoughts!
