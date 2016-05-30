var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var assetPath = '/assets/';
var absolutePath = path.join(__dirname, 'build', assetPath);

module.exports = {
    entry: './src/index',
    output: {
        path: absolutePath,
        filename: 'bundle.js',
        publicPath: assetPath
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("bundle.css"),
        // Minify and optimize the JavaScript
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false // ...but do not show warnings in the console (there is a lot of them)
            }
        }),

        // Minify and optimize the index.html
        new HtmlWebpackPlugin({
            template: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true
        })

    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [ 'babel' ],
                exclude: /node_modules/,
                include: path.join(__dirname, 'src')
            },
            // fonts and svg
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                // images
                test: /\.(ico|jpe?g|png|gif)$/,
                loader: "file"
            },
            {
                // for some modules like foundation
                test: /\.scss$/,
                exclude: [/node_modules/], // sassLoader will include node_modules explicitly
                loader: ExtractTextPlugin.extract("style", "css!postcss!sass?outputStyle=expanded")
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css!postcss")
            }
        ]
    },
    postcss: function(webpack) {
        return [
            autoprefixer({browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']})
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "node_modules")]
    }
};