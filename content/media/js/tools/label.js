
// $(":input").label("m-");
// $(":password").label("error");


$.fn.label = function(prefix) {

   var api = this.data("api");
   if (api) {
      api.show(prefix);
      return this;
   }

   return this.each(function(i) {

      var input = $(this),
         parent = input.parent(),
         info = parent.find("." + prefix + "info");

      // info
      if (!info.length) info = $("<div/>").addClass(prefix + "info").appendTo(parent);

      // focus
      input.bind("focus blur", function(e) {
         var focus = e.type != 'blur';
         parent.toggleClass(prefix + "focus", focus);

      // filled
      }).keyup(function() {
         parent.toggleClass(prefix + "filled", !!this.value);
      });

      function create(name, root) {
         var klass = prefix + name,
            el = $("." + klass, info),
            text = input.data(name) || input.attr(name);

         if (!el.length && text) el = $("<p/>", { 'class': klass, text: text }).appendTo(root || info);
      }

      function show(name) {
         create(name);
         var klass = prefix + "active";
         $("." + klass, info).removeClass(klass);
         return !!$("." + prefix + name, info).eq(0).addClass(klass).length;
      }

      // title & placeholder
      create("title");
      create("placeholder", parent);
      input.removeAttr("title").removeAttr("placeholder");

      // focused?
      if (input.attr("autofocus")) input.trigger("focus");

      // filled?
      if (input.val()) input.trigger("keyup");

      input.data("api", { show: show });

   });

};