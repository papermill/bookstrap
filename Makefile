
default: samples


samples: less
	# bookstrap Samples
	cp bookstrap.css Samples/bookstrap.css
	cp assets/jquery.js Samples/jquery.js
	cp bootstrap3/_gh_pages/assets/js/bootstrap.js Samples/bootstrap.js
	cp bookstrap.js Samples/bookstrap.js
	pandoc --smart -t html5 -i ../Samples.markdown/lorem-ipsum.markdown -o Samples/lorem-ipsum.html -c bookstrap.css --toc --template bookstrap-template.html --include-after-body=bookstrap-post.html
	pandoc --smart -t html5 -i ../Samples.markdown/pandoc_README.markdown -o Samples/pandoc_README.html -c bookstrap.css --toc --template bookstrap-template.html --include-after-body=bookstrap-post.html
	pandoc --smart -t html5 -i ../Samples.markdown/underscore_README.markdown -o Samples/underscore_README.html -c bookstrap.css --toc --template bookstrap-template.html --include-after-body=bookstrap-post.html
	pandoc --smart -s -t html5 -i ../Samples.markdown/pg/hp.md -o Samples/pg_hp.html -c bookstrap.css --toc --template bookstrap-template.html --include-after-body=bookstrap-post.html
	# NTS.PhD
	cp bookstrap.css Samples/NTS.PhD/bookstrap.css
	cp assets/jquery.js Samples/NTS.PhD/jquery.js
	cp bootstrap3/_gh_pages/assets/js/bootstrap.js Samples/NTS.PhD/bootstrap.js
	cp bookstrap.js Samples/NTS.PhD/bookstrap.js
	pandoc --section-divs --normalize --number-sections --smart -t html5 -i ../nts_phd/PhD_Dissertation.generated.markdown -V shorttitle="Als ich Künstler war" -o Samples/NTS.PhD/nts-PhD_Dissertation.generated.html --bibliography=../nts_phd/BIBTEX/biblio.phd.nts.bib -c bookstrap.css --toc --template bookstrap-template.html --include-after-body=bookstrap-post.html 
	pandoc --section-divs --normalize --number-sections --smart -t html5 -i ../nts_phd/Thesenpapier.generated.markdown -o Samples/NTS.PhD/nts-PhD_Thesenpapier.html  --bibliography=../nts_phd/BIBTEX/biblio.phd.nts.bib -c bookstrap.css --toc --template bookstrap-template.html --include-after-body=bookstrap-post.html 
	pandoc --section-divs --normalize --number-sections --smart -t html5 -i ../nts_phd/Der_5-Jahres-Plan.generated.markdown -o Samples/NTS.PhD/nts-PhD_Der_5-Jahres-Plan.html  --bibliography=../nts_phd/BIBTEX/biblio.phd.nts.bib -c bookstrap.css --toc --template bookstrap-template.html --include-after-body=bookstrap-post.html 
	pandoc --section-divs --normalize --number-sections --smart -t html5 -i ../nts_phd/Bildtafeln.generated.markdown -o Samples/NTS.PhD/nts-PhD_Bildtafeln.html  --bibliography=../nts_phd/BIBTEX/biblio.phd.nts.bib -c bookstrap.css --toc --template bookstrap-template.html --include-after-body=bookstrap-post.html 
	pandoc --section-divs --normalize --number-sections --smart -t html5 -i ../nts_phd/KIOSK09_KATALOG.generated.markdown -o Samples/NTS.PhD/nts-PhD_KIOSK09_KATALOG.html  --bibliography=../nts_phd/BIBTEX/biblio.phd.nts.bib -c bookstrap.css --toc --template bookstrap-template.html --include-after-body=bookstrap-post.html 

less:
#   lessc --yui-compress bookstrap-base.less bookstrap.css
# 	lessc --yui-compress bookstrap-full.less bookstrap-full.css
# 	
	lessc lesscss/bookstrap.less bookstrap.css

watch:
	echo "Watching less files..."; \
	watchr -e "watch('.less') { system 'make' }"
