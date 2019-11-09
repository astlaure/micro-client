const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        'client-page': './src/client-page.jsx',
        'client-profile': './src/client-profile.jsx'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'bin')
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    mode: 'development',
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.scss$/, loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']}
        ]
    },
    devtool: 'source-map',
    plugins: [
        new ManifestPlugin(),
        new MiniCssExtractPlugin({
            filename: 'client.css'
        })
    ],
};