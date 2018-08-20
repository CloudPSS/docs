hexo.extend.generator.register('sitemap', sitemapGenerator);

function sitemapGenerator(locals) {
    return {
        path: 'sitemap.json',
        data: JSON.stringify(locals.data.sitemap)
    };
};
