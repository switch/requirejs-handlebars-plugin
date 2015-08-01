
require.config({

  baseUrl: "/",

  paths: {
    handlebars: "lib/handlebars/dist/handlebars.amd",
    text: "lib/requirejs-text/text",
    "foo/bar": "boz"
  },
  packages: [{
    // Include hbs as a package, so it will find hbs-builder when needed
    name: "hbs",
    location: "lib/requirejs-handlebars-plugin",
    main: "hbs"
  }],

  hbs: {
    templateExtension: ".html",
    compilerPath: "lib/handlebars"
  }

});
