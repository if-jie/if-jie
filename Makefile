default: install

h help:
	@grep '^[a-z]' Makefile

install:
	bundle config set --local path vendor/bundle
	bundle install


build:
	gem build minima.gemspec

logos:
	bin/install_logos.sh


s serve:
	bundle exec jekyll serve --trace --livereload