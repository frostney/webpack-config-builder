# webpack-config-builder
Split your webpack config into multiple smaller parts

This project is unsupported. Please use [webpack-merge](https://github.com/survivejs/webpack-merge) instead.

[![Build Status](https://travis-ci.org/frostney/webpack-config-builder.svg?branch=master)](https://travis-ci.org/frostney/webpack-config-builder) [![Dependency Status](https://david-dm.org/frostney/webpack-config-builder.svg)](https://david-dm.org/frostney/webpack-config-builder) [![devDependency Status](https://david-dm.org/frostney/webpack-config-builder/dev-status.svg)](https://david-dm.org/frostney/webpack-config-builder#info=devDependencies) [![codecov.io](https://codecov.io/github/frostney/webpack-config-builder/coverage.svg?branch=master)](https://codecov.io/github/frostney/webpack-config-builder?branch=master)

> Smaller is more maintainable

You all remember when we had Grunt everywhere? Our single Gruntfile kept getting growing and growing. Then we began splitting our Grunt configs. Now with Webpack we have to keep track of development, distribution config and if we're also targeting server, we're managing a lot of different config sharing some bits here and there.

## Installation
```
npm install webpack-config-builder
```

## Usage
```javascript
var webpackConfigBuilder = require('webpack-config-builder');

webpackConfigBuilder();
```

Your webpack config is now a folder, whereas each property from the config can be written as a filename.
```
└── webpack
    └── base.js
    └── output.js
    └── module
        └── preLoaders.js
        └── loaders.js
    └── devServer.js
    └── port.js
    └── entry.js
    └── plugins.js
```

## Options
```javascript
var webpackConfigBuilder = require('webpack-config-builder');

webpackConfigBuilder({
  folder: './webpack',
  options: {},
});
```

## License

MIT
