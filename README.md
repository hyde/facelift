
Hyde template framework. WIP

Framework should not bother user with low level choices

moot/style.styl
===============

// 1. color palette; set of swatches
colors = darksky

// 2. theme; set of module styles
theme = minimalist

// 3. typography; custom fonts allowed
header_font = garamond
body_font   = sans-serif

// 4. page types; smaller file size
page_types = 'news', 'product', ''

// 5. fine tune
spacing        = 14px
button_style   = striped
overlay_style  = striped
form_style     = bold

@import "template"
@import "moot"

# installation
site.yaml:
   stylus -I template/style

# the root of all good
cp template/layout/root.j2 layout

# optionally
cp -r template/content/media/js content/media
