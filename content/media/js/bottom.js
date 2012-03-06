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
---

$(function(){
   $("html").addClass('is-loaded');
});
