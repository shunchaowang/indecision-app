// entry -> output bundle file
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'), // has to be an absolute path
        filename: "bundle.js"
    },
    module: {
        rules: [{
            use: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};