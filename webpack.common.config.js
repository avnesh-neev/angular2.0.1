const webpack = require('webpack')
const autoprefixer = require('autoprefixer');
const path = require('path');

// plugins
const OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin;
const ProvidePlugin = webpack.ProvidePlugin;

module.exports = {
    cache: true,
    debug: true,
    devtool: 'source-map',

    entry: {
        main: [
            './src/main'
        ],
        vendor: [
            'es6-shim',
            'reflect-metadata',
            'zone.js',
            '@angular/common',
            '@angular/core',
            '@angular/http',
            '@angular/platform-browser',
            '@angular/router',
            'rxjs'
        ]
    },

    output: {
        filename: '[name].js',
        path: path.resolve('./target'),
        publicPath: undefined
    },

    resolve: {
        extensions: ['', '.ts', '.js', '.min.js'],
        modulesDirectories: ['node_modules', 'src/components', 'src/vendor'],
        root: path.resolve('./src')
    },

    module: {
        loaders: [
            {test: /\.html$/, loader: 'html'},
            {test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'resolve-url', 'sass']},
            {test: /\.(jpe?g|png|gif|svg|cur)(\?.*?)?$/i, loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]},
            { test: /\.(ttf|eot|woff(2)?)(\?v=[0-9]\.[0-9](\.[0-9])?)?|(\?.*?)]$/, loader: 'file-loader' },
            { test: /\.json$/, loader: 'json' }
        ],

        noParse: [
            /@angular\/*\/bundles\/.+/
        ]
    },

    htmlLoader: {
        minimize: true,
        removeAttributeQuotes: false,
        caseSensitive: true,
        customAttrSurround: [ [/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/] ],
        customAttrAssign: [ /\)?]?=/ ]
    },

    postcss: function() {
        return [autoprefixer({browsers: ['last 3 versions', 'Firefox ESR']})];
    },

    sassLoader: {
        outputStyle: undefined,
        precision: 10,
        sourceComments: false
    },

    plugins: [
        new OccurenceOrderPlugin(),
        new ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            "Tether": 'tether',
            "window.Tether": "tether"
        })
    ],
};
