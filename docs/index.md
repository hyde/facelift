
# Website HTML layout

Every website has a surprisingly similar hierarchical structure.
Understanding this gives you more power than 3 years in school.
Designers and developers.


## Global elements
   - #id elements: header, footer, main navi, subnav
   - root.j2; can (should) be reused across projects; some parts can be empty

   * main navi king. less the better. hierarchy first
   * mobile first. different widths

- site specifics
   - content for global elements
   - site.j2 inherits root.j2

- page specific
   - secondary element
   - docs.j2

- content element
   - a special element
   - markdown
   - different rules than other parts of the site
   - contains .class elements / modules


### CSS

Follows layout structure

1. css extensions (border-radius etc)
2. normalization
3. layout (global elements)
4. module (content & global elements)

5. skin
   = set of defaults
   = avoids low level choices


- minimal --> modular, easier to maintain










