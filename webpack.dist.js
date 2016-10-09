const webpack = require('webpack');

// plugins
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
// const DedupePlugin = webpack.optimize.DedupePlugin;
const DefinePlugin = webpack.DefinePlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const distConfig = require('./webpack.common.config');

distConfig.module.loaders = distConfig.module.loaders.concat(
    { test: /\.ts$/, exclude: [/\.spec\.ts$/], loaders: [ 'strip-debug', 'ts' ] }
);

distConfig.plugins = (distConfig.plugins || []).concat(
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // new ExtractTextPlugin('styles.css'),
    // new DedupePlugin(),
    new UglifyJsPlugin({
      compress: {
        dead_code: true,
        screw_ie8: true,
        unused: true,
        warnings: false
      },
      mangle: false
    }),
    new HtmlWebpackPlugin({
      chunksSortMode: 'none',
      filename: 'index.html',
      hash: true,
      inject: 'body',
      template: './src/index.html'
    }),
    new CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js', minChunks: Infinity})
);

distConfig.output.publicPath = './';

distConfig.sassLoader.outputStyle = 'compressed';

distConfig.stats = {
    cached: true,
        cachedAssets: true,
        chunks: true,
        chunkModules: true,
        colors: true,
        hash: false,
        reasons: false,
        timings: true,
        version: false
};

module.exports = distConfig;