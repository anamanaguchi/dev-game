var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/main.js',
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'bundle.js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'main.css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname + '/src', 'index.html')
        })
    ],

    module: {
        rules: [
            // transform ES6 to ES5
            {test: /\.html$/, use: 'raw-loader'},
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({fallbackLoader: "style-loader", loader: "css-loader!sass-loader"})
            }

            // style-loader: add css files into DOM
            // css-loader: add css files into the JS files
            // {
            //     test: /\.css$/,
            //     loader: 'style-loader!css-loader'
            // },

            // LESS
            // {
            //     test: /\.less$/,
            //     loader: 'style-loader!css-loader!less-loader'
            // }
        ]
    }
}