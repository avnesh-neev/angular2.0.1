const testConfig = require('./webpack.common.config');

testConfig.devtool = 'inline-source-map';
testConfig.entry.vendor = [];
testConfig.module.loaders = testConfig.module.loaders.concat(
    {
        test: /\.js$/,
        exclude: /(\.min|\.umd)\.js$/,
        loader: 'babel',
        query: {
            presets: ['es2015'],
            cacheDirectory: true
        }
    },
    { test: /\.spec\.ts$/, loader: 'ts' },
    { test: /\.ts$/, exclude: /\.spec\.ts$/, loaders: [ 'strip-debug', 'ts' ] }
);

module.exports = testConfig;
