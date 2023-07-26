const fs = require('fs-extra');
const { resolve } = require('path');

async function main() {
    await require('./build-manifest');
    await fs.copyFile(resolve(__dirname, '../dist/index.html'), resolve(__dirname, '../dist/404.html'));
}

module.exports = main();
