require "middleman-gh-pages"

ENV["BRANCH_NAME"] = "master"

task :default => [:publish]

"Runs service worker precache"
task :sw do
  sh "echo \"Generating service-worker.js\n\" && cd build && sw-precache"
end

task :publish => [:prevent_dirty_builds, :sync_build_dir, :build, :sw]
