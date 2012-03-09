---
combine:
   root: media/js
   recurse: true
   where: top
   remove: yes
   sort: false
   files:
      - inlay.js
      - overlay.js
      - select.js
      - selectinput.js
      - label.js
      - validator.js
---

$(function(){
   $("html").addClass('is-loaded');

   $("select").selectinput();
});
