// This is a build configuration file aimed to use the full handlebars library.
({
  baseUrl: ".",

  // Include the main config file
  mainConfigFile: "main.config.js",

  paths: {
    // Set here the path to either the full handlebars library if you want to
    // be able to compile templates on the client, or the runtime only.
    "handlebars": "node_modules/handlebars/dist/amd/handlebars",
    "handlebars.runtime": "node_modules/handlebars/dist/handlebars.runtime.amd",
  },

  name: "js/main",

  // Include the require library and the main config in the build so we have
  // only a single file to load. You also could use almond
  // (https://github.com/jrburke/almond) here.
  deps: ["node_modules/requirejs/require", "main.config"],

  // Run the module js/main as soon as it is ready.
  insertRequire: ["js/main"],

  out: 'build/main.js',
  // dir: "public"
})
