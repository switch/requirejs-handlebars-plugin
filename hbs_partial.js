/**
 * Loads a template via hbs and installs it as a partial accessed
 * by the filename minus the .handlebars suffix.
 */
define(['handlebars'], function(Handlebars) {
  return {
    pluginBuilder: "./hbs_partial-builder",
    // http://requirejs.org/docs/plugins.html#apiload
    load: function (name, parentRequire, onload, config) {
      parentRequire(['hbs!' + name], function(template) {
        var filename = name.substring(name.lastIndexOf('/') + 1);
        Handlebars.registerPartial(filename, template);
        onload();
      });

    }
  }
});
