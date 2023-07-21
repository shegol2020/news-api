const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig, {
        devServer: {
            static: path.resolve(__dirname, 'dist'), // Replace 'dist' with the directory where your static files are located
            compress: true,
            port: 8080,
            open: true,
        },
    });
};

