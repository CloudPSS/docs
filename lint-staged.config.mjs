import config from '@cloudpss/lint-staged-config';
import convertWebp from './tools/convert-webp.js';
import optimizeZip from './tools/optimize-zip.js';

export default /** @type {import('lint-staged').Config} */ ({
  ...config,
  '*.zip': async (files) => {
    await optimizeZip(files);
    return [];
  },
  '*.{png,jpg,jpeg,gif}': async (files) => {
    await convertWebp(files);
    return [];
  },
});
