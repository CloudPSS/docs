const fs = require('fs')
//const page404 = fs.readFileSync(__dirname + '/../source/404.html', 'utf8')
hexo.extend.filter.register('server_middleware', function (app) {
    app.use(async function (req, res, next) {
        res.statusCode = 404
        res.end(fs.readFileSync(__dirname + '/../source/404.html', 'utf8'))
    });
}, 2000);