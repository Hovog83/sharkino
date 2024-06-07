const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './resources/js/src/server.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve('public/js'),
        filename: 'server.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
