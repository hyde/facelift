
$.fn.inlay2 = function(conf, callback, _conf, _callback) {

   var doc = $(document);

   // swap args
   if ($.isFunction(conf)) { callback = conf; conf = {}; }

   conf = $.extend({ active: "active", close: ".close", on: "click", target: "*" }, _conf, conf);

   return this.each(function() {

      var root = $(this);

      $.extend(conf, root.data());

      var api = {
         conf: conf,
         opened: 0,
         target: root.closest(conf.target),

         open: function(e) {
            if (!api.opened && !$(e.target).is(conf.close)) {
               root.trigger("open");
               e && e.type && e.preventDefault();
            }
            return api;
         },

         close: function() {
            if (api.opened) root.trigger("close");
            return api;
         }
      };

      if (!api.target.length) api.target = $(conf.target);

      root.bind("open close", _callback).bind("open close", callback).bind("open", function() {

         api.target.addClass(conf.active);
         api.opened = 1;

         // esc
         doc.bind("keydown.jqt", function(e) {
            if (e.which == 27) api.close();
         });

         // outside click
         doc.bind("mousedown.jqt", function(e) {
            if (!$(e.target).closest("." + conf.active).length) api.close();
         });

         // close
         $(conf.close, api.target).one("click", api.close);

      }).bind("close", function() {
         api.target.removeClass(conf.active);
         doc.unbind(".jqt");
         api.opened = 0;
      });

      root.bind(conf.on, api.open).data("tool", api)

   });

};