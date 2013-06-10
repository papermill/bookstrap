
default: less

less:
	lessc bookstrap.less bookstrap.css
	
watch:
	echo "Watching less files..."; \
	watchr -e "watch('.*\.less') { system 'make' }"

