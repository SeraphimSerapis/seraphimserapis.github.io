require "middleman-gh-pages"

ENV["BRANCH_NAME"] = "master"

task :default => [:publish]

"Runs service worker precache"
task :sw do
  sh "echo \"Generating service-worker.js\n\" && cd build && sw-precache"
end

Rake::Task[":build"].enhance do
  Rake::Task[:sw].invoke
end
