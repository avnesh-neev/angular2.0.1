module.exports = (config) => {
  config.set({
    basePath: '',

    frameworks: [ 'jasmine' ],

    files: [
      { pattern: 'karma.entry.js', watched: false }
    ],

    preprocessors: {
      'karma.entry.js': ['webpack', 'sourcemap']
    },

    webpack: require('./webpack.test'),

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['dots'],

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    singleRun: false,

    customLaunchers: {
      TRAVIS_CHROME: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    browsers: [
      // 'Chrome',
      'PhantomJS'
    ]
  });
};
