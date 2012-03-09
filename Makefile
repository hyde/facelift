
# work on a single skin (watches changes and processes on the background)
skin:
	stylus -c -o sample/deploy/media/css -w style/skin/$(MAKECMDGOALS)/index.styl

minimalist: skin
functional: skin
playful: skin

.PHONY: style
