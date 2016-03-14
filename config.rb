###
# Page options, layouts, aliases and proxies
###

Time.zone = "Berlin"

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

###
# Helpers
###

activate :blog do |blog|
  blog.prefix = "blog"
  blog.permalink = "{year}/{month}/{day}/{title}.html"
  # Matcher for blog source files
  # blog.sources = "blog/{year}-{month}-{day}-{title}.html"

  blog.taglink = "categories/{tag}.html"
  blog.layout = "article"

  blog.summary_separator = /<!-- more -->/
  blog.summary_length = 250
  blog.year_link = "{year}.html"
  blog.month_link = "{year}/{month}.html"
  # blog.day_link = "{year}/{month}/{day}.html"
  # blog.default_extension = ".markdown"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"
  blog.taglink = "categories/{tag}.html"

  # Enable pagination
  blog.paginate = true
  blog.per_page = 5
  # blog.page_link = "page/{num}"
end

activate :disqus do |d|
  d.shortname = "tmecoffee"
end

activate :google_analytics do |ga|
  ga.tracking_id = "UA-40700707-1"
end

set :images_dir, "public/img"
set :js_dir, "public/js"
set :css_dir, "public/css"

activate :directory_indexes
page "/components/**", :directory_index => false

set :markdown_engine, :redcarpet
set :markdown, :fenced_code_blocks => true, :smartypants => true

activate :syntax, line_numbers: true
activate :meta_tags

ignore "/public/source/custom/syntax.css.erb"

page "/feed.xml", layout: false

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

helpers do
  def description
    if current_page.data.description
      current_page.data.description
    elsif current_page.try(:summary)
      Nokogiri::HTML(current_page.summary).text.split(" ").join(" ")
    elsif !current_page.data.default_description
      Nokogiri::HTML(page_articles.first.summary).text.split(" ").join(" ")
    else
      site_title
    end
  end

  def site_title
    "timmesserschmidt"
  end

  def url_root
    "http://timmesserschmidt.com"
  end

  def title
    title = ""
    title += current_article.title unless current_article.nil?
    title
  end

  def image
    if current_page.data.image
      url_root+image_path(current_page.data.image)
    else
      url_root+image_path('profile.png')
    end
  end

  def root?
    current_page.path == 'index.html'
  end
end

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
end

configure :deploy do
  set :skip_build_clean do |path|
    path =~ /\.git/
  end
end
