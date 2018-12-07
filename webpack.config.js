const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        server: './src/index.ts'
    },
    target: 'web',
    resolve: { extensions: ['.ts', '.js'] },
    // Make sure we include all node_modules etc
    externals: [/(node_modules|main\..*\.js)/,],
    output: {
        // Puts the output at the root of the dist folder
        path: path.join(__dirname, 'dist'),
        filename: 'log-sdk.js',
        library: 'logSDk',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
}
