require "middleman-gh-pages"

ENV["BRANCH_NAME"] = "master"

task :default => [:build, :sw, :publish]

"Runs service worker precache"
task :sw do
  sh "echo \"Generating service-worker.js\n\" && cd build && sw-precache"
end
