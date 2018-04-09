// entry -> output bundle file
const path = require('path');

module.exports = {
    entry: './public/scripts/app.js',
    output: {
        path: path.join(__dirname, 'public'), // has to be an absolute path
        filename: "bundle.js"
    }
};