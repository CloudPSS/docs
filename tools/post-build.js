const fs = require('fs-extra');
const { resolve } = require('path');
require('./build-manifest');

async function main() {
    await fs.copyFile(resolve(__dirname, '../dist/index.html'), resolve(__dirname, '../dist/404.html'));
    await fs.copy(resolve(__dirname, '../docs'), resolve(__dirname, '../dist/content'));
}

main();
