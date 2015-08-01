
require.config({

  baseUrl: "/",

  paths: {
    "handlebars": "lib/handlebars/dist/handlebars.amd",
    // "handlebars.runtime": "lib/handlebars/dist/amd/handlebars.runtime",
    "text": "lib/requirejs-text/text",
    "foo/bar": "boz"
  },
  packages: [{
    // Include hbs as a package, so it will find hbs-builder when needed
    name: "hbs",
    location: "lib/requirejs-handlebars-plugin",
    main: "hbs"
  },{
    name: "hbs_partial",
    location: "lib/requirejs-handlebars-plugin",
    main: "hbs_partial"
  }],

  hbs: {
    templateExtension: ".html",
    compilerPath: "lib/handlebars"
  }

});
