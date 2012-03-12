
style:
	stylus -c -o hyde/deploy/media/css -w style

skin:
	stylus -c -o hyde/deploy/media/css -w style/$(MAKECMDGOALS)

minimalist: skin
functional: skin
playful: skin

.PHONY: style skin
