
// http://rawsyntax.com/post/4807844270/rails-3-email-validation
var RE_EMAIL = /^([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})$/i,
   NON_INPUT = ":button, :image, :reset, :submit, :checkbox, :radio",
   NON_ASCII = [9, 13, 16, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 91],
   VALIDATORS = [];

$.validator = function(match, fn) {
   VALIDATORS.push([match, fn]);
};

$.expr[':'].email = function(el) {
   return el.getAttribute("type") == "email";
};

// minlength
$.validator("[minlength]", function(done) {
   var val = this.val();
   done(!val || val.length >= parseInt(this.attr("minlength")), "minlength");
});

// email
$.validator(":email", function(done) {
   done(RE_EMAIL.test(this.val()), "email");
});


$.fn.validator2 = function(prefix, delay) {

   return this.each(function() {

      var p = prefix || '',
         root = $(this),
         inputs = root.find(":input").not(NON_INPUT).label(p),
         validators = [],
         timer;

      var api = {
         isValid: function() {
            return !inputs.filter(function() {
               var el = $(this);
               return el.is("[required]") && !el.val() || el.parent().hasClass(p + "error");
            }).length;
         },

         validate: function() {
            inputs.trigger("validate");
         },

         validator: function(match, fn) {
            validators.push([match, fn]);
            return api;
         }

      };

      function draw(field, ok, klass) {
         field.parent().removeClass(p + "progress").toggleClass(p + "ok", ok).toggleClass(p + "error", !ok);
         if (ok || !klass || !field.label(klass)) field.label(ok ? "ok" : "error");
         drawform(ok);
      }

      function drawform(ok) {
         var valid = ok && api.isValid();
         root.toggleClass(p + "ok", valid);
         // $(":submit", root).attr("disabled", valid ? null : "disabled");
      }


      function validate(field) {

         var parent = field.parent(),
            vlist = VALIDATORS.concat(validators),
            working = 0,
            valid = true;

         // [required]
         if (!field.val() && field.is("[required]")) return draw(field, false, "required");

         // loop trough validators
         $.each(vlist, function(i, v) {

            if (valid && !working && field.filter(v[0]).length) {

               drawform(false);
               parent.removeClass(p + "error " + p + "ok").addClass(p + "progress");
               field.label("progress");
               working++;

               v[1].call(field, function(ok, klass) {
                  if (!ok) valid = false;
                  draw(field, ok, klass);
                  working--;
               });
            }

         });

         if (!working && valid) draw(field, true);

      }

      // validation
      inputs.bind("keydown", function(e) {

         var input = $(this),
            val = input.val();

         // skip non characters
         if ($.inArray(e.which, NON_ASCII) != -1) return;

         // disable form
         drawform(false);

         // validate every conf.delay ms
         clearInterval(timer);
         timer = setTimeout(function() { validate(input); }, delay || 1000);


      }).bind("validate", function() {
         clearInterval(timer);
         validate($(this));
      });

      // expose api
      root.data("api", api);

   });

};