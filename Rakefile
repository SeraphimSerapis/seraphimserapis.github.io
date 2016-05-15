require "middleman-gh-pages"

ENV["BRANCH_NAME"] = "master"

desc "Runs sw-precache from the build directory"
task :sw do
  sh "cd build && sw-precache"
end

task :publish => [:prevent_dirty_builds, :sync_build_dir, :build, :sw]
task :default => [:publish]
