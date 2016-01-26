var webpack = require("webpack");
var path = require('path');
module.exports = {
    entry: './app/main.js',
    output: {
        path: './app',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};