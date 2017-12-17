const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "app.bundle.css",
    allChunks: true
});

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'babel-polyfill',
        'whatwg-fetch',
        'webpack-hot-middleware/client',
        './src/index',
        path.resolve(__dirname, 'src') + '/styles/app.scss'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src/')
        },
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            includePaths: [
                                path.join(__dirname, 'src')
                            ]
                        }
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                ],
                loader: "eslint-loader"
            },
            {
                test: /\.jsx?$/,
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                ],
                loader: "babel-loader"
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|gif|mp4|jpg)$/,
                loader: "url-loader"
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        extractSass
    ],
};
