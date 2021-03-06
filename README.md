# requirejs-handlebars-plugin
A set of simple Handlebars plugins for RequireJS.  Includes support for both loading and precompiling templates and partials.

Based on work from [epeli/requirejs-hbs][] this is a simpler version of [SlexAxton/require-handlebars-plugin][] without any extra helpers. Just a simple set of [Handlebars][] loader and pre-compiler plugins for [RequireJS][].

These plugins and the example works with the latest version of RequireJS (2.1.20) and Handlebars (3.0.3)

## Quick start

The plugins use the AMD [text][] loader plugin to handle all templates loads.  You will have to grab a copy of the [Handlebars][] library too.

Download all this and put it in a lib folder, then add the following RequireJS configuration:

```javascript
require.config({
  baseUrl: ...,

  paths: {
    handlebars: 'path/to/handlebars.amd',
    text: 'path/to/text'
  },

  packages: [
    {
      name: 'hbs',
      location: 'path/to/hbs/folder',
      main: 'hbs'
    }, {
      name: 'hbs_partial',
      location: 'path/to/hbs/folder',
      main: 'hbs_partial'
    }
  ]
});
```

After that these plugins can be used like the original Handlebars plugin:

```javascript
require(['hbs!templates/hello','hbs_partial!templates/form'], function (template, partial) {
  document.body.innerHTML = template({name: "Switch"});
});
```
templates/hello.hbs
```html
<p>{{name}}</p>
{{> address}}
```

templates/form.hbs
```html
<form>
email:<br>
<input type="email" name="email">
<br>
Age:<br>
<input type="number" name="age">
</form>
```

## Configure

In your RequireJS config file, you could optionally add a hbs entry to configure this plugin:

```javascript
require.config({
  paths: { ... },

  hbs: {
    templateExtension: ".html",
    compilerPath: "path/to/handlebars/full"
  },

  shim : { ... },
});
```

### templateExtension

This value is the template files extension. Its default is `".hbs"`.

### compilerPath

This is the path of the full version of Handlebars. The plugin will use this at build time to precompile the templates. Its default is `"handlebars"`, but you will have to override it if you want your client-side handlebars module to be the runtime only.


## Build

To avoid the need to load and compile all templates in the client in a production environment, a project should be precompiled. Use the requirejs `r.js` command to do so. The hbs plugin will use Handlebars to precompile the your templates files you specify as dependency of a module.

Once precompiled, a template does not need the full Handlebars library to be rendered, the Handlebars runtime will be sufficient. So feel free to set the handlebars module path to a runtime only library in your build file see [the example](/example/build.js). If you do so, make sure you define the
`compilerPath` configuration value as mentioned above.


## Example

### Getting Started

The example requires [nodejs](https://nodejs.org/).  You can install the dependencies and start serving the example in development mode (dynamic require) with the following steps:

```
$ cd example
$ npm install
$ node app.js
```

The example node application will start serving on port 3000.

The example should run without any problem. You can see in the browser developer tools that all the files are loaded uncompressed.

You can use the `r.js` command to build the project with the provided build configuration [build.js](/example/build.js). See that this file is configured to include the Handlebars runtime instead of the full library.

You can confirm the freshly built module by opening build.html. There will see that only one file is loaded containing everything your app needs to be run.

```
$ cd example
$ node node_modules/requirejs/bin/r.js -o build.js
$ node app.js
```


[Handlebars]: http://handlebarsjs.com/
[RequireJS]: http://requirejs.org/
[epeli/requirejs-hbs]: https://github.com/epeli/requirejs-hbs
[SlexAxton/require-handlebars-plugin]: https://github.com/SlexAxton/require-handlebars-plugin
[text]: https://github.com/requirejs/text
[map]: http://requirejs.org/docs/api.html#config-map
