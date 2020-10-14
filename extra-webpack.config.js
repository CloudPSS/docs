const webpack = require('webpack');

/**
 *
 * @param {import('webpack').Configuration} config
 */
module.exports = function (config) {
    config.module.rules.push({
        test: /\.ya?ml$/,
        type: 'json', // Required by Webpack v4
        use: 'yaml-loader',
    });
    config.node = {
        fs: 'empty',
        path: true,
    };
    config.plugins.push(new webpack.IgnorePlugin({
        resourceRegExp: /^esprima$/,
        contextRegExp: /js-yaml/
    }));
    return config;
};
