const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './src/app/app.js',
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            // transform ES6 to ES5
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({ fallback: "style-loader", use: ["css-loader", "sass-loader"] })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('scss/main.css'),
        new CopyWebpackPlugin([
            // {output}/file.txt
            {from: 'src/assets', to:'assets'},
        ]),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ]
}