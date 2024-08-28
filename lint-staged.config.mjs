import config from '@cloudpss/lint-staged-config';

export default /** @type {import('@cloudpss/lint-staged-config').Config} */ ({
  ...config,
  '*.zip': 'node ./tools/optimize-zip.js',
  '*.{png,jpg,jpeg,gif}': 'node ./tools/convert-webp.js',
});
