/**
 *
 * @param {import('webpack').Configuration} config
 */
export default function (config) {
    config.module.rules.push({
        test: /\.ya?ml$/,
        use: 'yaml-loader',
    });
    return config;
}
