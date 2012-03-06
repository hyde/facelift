---
combine:
   root: media/js
   recurse: true
   where: top
   remove: yes
   sort: false
   files:
      - modernizr.min.js
---

false && Modernizr.addTest('is-logged', function(){
   return !!$.cookie("authcode");
});