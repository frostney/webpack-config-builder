import test from 'ava';

import webpackConfigBuilder from './index';

test('nested properties', t => {
  const config = webpackConfigBuilder({
    folder: '../example/webpack',
    options: {
      env: 'production',
    },
  });

  t.ok(config.module.loaders);
});

test('call with production flag', t => {
  const config = webpackConfigBuilder({
    folder: '../example/webpack',
    options: {
      env: 'production',
    },
  });

  t.is(config.debug, true);
});
