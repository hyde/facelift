
# HTML layout

Every website has a surprisingly similar hierarchical structure.
Understanding this gives you more power than 3 years in school.
Designers and developers.
Naming is important
   http://woork.blogspot.com/2008/11/css-coding-semantic-approach-in-naming.html

## content-box

Bring back CSS joy
- http://paulirish.com/2012/box-sizing-border-box-ftw/
- go back with: box-sizing content-box

## Global
- #id elements: header, footer, main navi, subnav
- root.j2; can (should) be reused across projects; some parts can be empty

* main navi king. less the better. hierarchy first
* mobile first. different widths

## Site
- content for global elements
- site.j2 inherits root.j2

## Page
- secondary element
- docs.j2

## Content
- a special element
- markdown
- different rules than other parts of the site
- contains .class elements / modules


# Facelift CSS

## CSS functions
- CSS3 normalization
- shapes
- shortcuts

## Normalization
- fix
- normalize

## Layout
- global elements
- ONLY positioning and dimensions. no skinning
- class names to alter layout
- sizing strategy
- @media queries
- best practises

## Reusable components
- abstract patterns
- visible elements
- global & content elements
- alternate looks with variables

## Theme
- set of defaults
- skip the low level choices

## Skin
= sample site
- sample content, same for every site

