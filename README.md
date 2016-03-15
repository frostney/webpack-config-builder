# webpack-config-builder
Split your webpack config into multiple smaller parts

You guys remember when we had Grunt everywhere? We started with our config files getting larger and larger. Then we began splitting our Grunt configs. Now with Webpack we have to keep track of development, distribution config and if we're also targeting server, we're managing a lot of different config sharing some bits here and there.

## Installation
```
npm install webpack-config-builder
```

## Usage
```javascript
var webpackConfigBuilder = require('webpack-config-builder');

webpackConfigBuilder();
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
