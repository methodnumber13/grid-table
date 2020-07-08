const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: ['./demo/index'],
    resolve: {
        modules: [path.resolve(__dirname, './')],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            react: path.resolve('./node_modules/react'),
            'react-dom': '@hot-loader/react-dom',
        },
    },
    output: {
        path: path.join(__dirname, 'public'),
    },
    devServer: {
        open: true,
        port: 9009,
        hot: true,
        clientLogLevel: 'error',
        historyApiFallback: true, // Allow refreshing of the page
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            },
        }),
        new webpack.HotModuleReplacementPlugin(), // Enable hot reloading
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'demo/index.html'),
            inject: true,
            chunks: 'all',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
        }),
    ],
});
