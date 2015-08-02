
require.config({

  baseUrl: "/",

  paths: {
    "handlebars": "node_modules/handlebars/dist/handlebars.amd",
    // "handlebars.runtime": "node_modules/handlebars/dist/amd/handlebars.runtime",
    "text": "node_modules/requirejs-text/text",
    "foo/bar": "boz"
  },
  packages: [{
    // Include hbs as a package, so it will find hbs-builder when needed
    name: "hbs",
    location: "node_modules/requirejs-handlebars-plugin",
    main: "hbs"
  },{
    name: "hbs_partial",
    location: "node_modules/requirejs-handlebars-plugin",
    main: "hbs_partial"
  }],

  hbs: {
    templateExtension: ".html",
    compilerPath: "node_modules/handlebars/dist/handlebars"
  }

});
