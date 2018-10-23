const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");

module.exports = {
    mode: 'development',
    entry: ['./src/scss/index.scss'],
    output: {
        path: path.resolve(__dirname, './build'),
        filename:'style.css'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options:  {
                                sourceMap: true,
                                url: false,
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                            }
                        }
                    ]
                }),
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: './src/index.html'
            }
        ]),
        new CopyWebpackPlugin([
            {
                from: './src/index.js'
            }
        ]),
        new CopyWebpackPlugin([
            {
                from: './src/fonts',
                to: 'fonts'
            }
        ]),
        new CopyWebpackPlugin([
            {
                from: './src/images',
                to: 'images'
            }
        ]),
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        })
    ]
};
