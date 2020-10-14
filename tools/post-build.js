const fs = require('fs').promises;

async function main() {
    await fs.copyFile('./dist/index.html', './dist/404.html');
}

main();
