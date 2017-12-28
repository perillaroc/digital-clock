'use strict';
const path = require('path');
const webpack = require('webpack');
const CopyWebPackPlugin = require('copy-webpack-plugin');

const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const entry= {
    index: './src/app/main.js'
};

const modules= {
    rules: [
        {
        }
    ]
};

const resolve = {};

const plugins = [
    new CopyWebPackPlugin([
        {'from': './src/app'}
    ])
];

const externals= {};

module.exports = {
    devtool: "source-map",
    entry: entry,
    output: {
        path: path.join(__dirname, './dist/app'),
        filename: "main.bundle.js",
        sourceMapFilename: '[file].map'
    },
    module: modules,
    externals: externals,
    plugins: plugins,
    resolve: resolve,
    target: 'electron-main'
};
