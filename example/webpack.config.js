var webpackConfigBuilder = require('../dist/webpack-config-builder');

var config = webpackConfigBuilder({
  options: {
    env: 'production',
  }
});

console.log(config);
