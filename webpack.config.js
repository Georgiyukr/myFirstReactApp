const webpack = require('webpack');
module.exports = {
    entry: ['./reactApp/app.js', './reactApp/style.css'],
    output: {
        path: __dirname + '/build',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};