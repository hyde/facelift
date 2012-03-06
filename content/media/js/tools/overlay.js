
// rel, masking, is-overlayed
$.fn.overlay2 = function(conf, callback, _conf) {

   _conf = $.extend({ close: '.close', closeable: 0 }, _conf);

   return this.inlay2(conf, callback, _conf).each(function() {

      var self = $(this),
         api = self.data("tool");

      // prevent successive close & open
      self.mousedown(function() {
         if (api.opened) return false;
      });

      // root element (mask) closes
      if (api.conf.closeable) {
         api.target.click(function(e) {
            if (e.target == api.target[0]) api.close();
         });
      }

      // is-overlayed
      self.bind("open close", function(e) {
         $("body").toggleClass("is-overlayed", e.type == "open");
      });

   });

};