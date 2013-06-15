
default: less doc
	
doc:
	pandoc -t html5 -i lorem-ipsum.markdown -o lorem-ipsum.html -c bookstrap-full.css --toc --template bookstrap-template.html

less:
#   lessc --yui-compress bookstrap-base.less bookstrap.css
# 	lessc --yui-compress bookstrap-full.less bookstrap-full.css
# 	
	lessc lesscss/bookstrap.less bookstrap.css
	lessc lesscss/bookstrap-full.less bookstrap-full.css
	
watch:
	echo "Watching less files..."; \
	watchr -e "watch('.less') { system 'make' }"

