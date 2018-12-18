hexo.extend.tag.register('simu', function (args) {
    const type = args[0];
    const id = Number(args[1]);
    switch (type.toLowerCase()) {
        case 'url':
            return `${hexo.config.base_url}/editor/test?id=${id}`;
        case 'link':
            return `<a href="${hexo.config.base_url}/editor/test?id=${id}">${args[2] || ''}</a>`;
        default:
            return id;
    }
});
