task default: %w[build]

desc "Builds the middleman site from source"
task :build do
    middleman build
    #    bundle exec middleman build
end

desc "Run the server locally at http://localhost:4567"
task :serve do
    bundle exec middleman serve
end
