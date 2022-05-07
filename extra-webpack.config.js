const webpack = require('webpack');
const _ = require('lodash');

/**
 *
 * @param {import('webpack').Configuration} config
 */
module.exports = function (config) {
    config.module.rules.push({
        test: /\.ya?ml$/,
        use: 'yaml-loader',
    });
    _.set(config, 'resolve.fallback.path', require.resolve('path-browserify'));
    _.set(config, 'resolve.fallback.fs', false);
    return config;
};
