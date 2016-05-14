require "middleman-gh-pages"

ENV["BRANCH_NAME"] = "master"

task :default => [:sw, :publish]

"Runs service worker precache"
task :sw do
  sh "cd build && sw-precache"
end
