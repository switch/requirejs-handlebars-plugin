define(function (require) {
  var Handlebars = require("handlebars");
  var template = require("hbs!templates/template");
  var partial = require("hbs_partial!templates/partial");

  Handlebars.registerHelper("foo", function () {
    return "bar";
  });

  var content = template({
    usingHandlebarsRuntime: Handlebars.precompile ? "nope" : "yep"
  });
  document.body.insertAdjacentHTML("beforeend", content);
});
