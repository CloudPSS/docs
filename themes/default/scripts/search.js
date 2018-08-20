var pathFn = require('path');
var fs = require('fs');
var pinyin = require('pinyinjs');

hexo.extend.generator.register('search', searchGenerator);

function searchGenerator(locals)
{
    const pages = locals.pages;

    var res = new Array()
    pages.each(function (page)
    {
        var temp_page = new Object()
        temp_page.title = hexo.extend.helper.get('title')(page);
        temp_page.extend = [
            pinyin(temp_page.title, { style: pinyin.STYLE_FIRST_LETTER }).join(''),
            pinyin(temp_page.title, { style: pinyin.STYLE_INITIALS }).join(''),
            pinyin(temp_page.title, { style: pinyin.STYLE_NORMAL }).join('')
        ].join(' ');

        if (page.path)
        {
            temp_page.url = hexo.config.root + page.path;
        }
        if (page.type)
        {
            temp_page.type = page.type;
        }
        if (page._content)
        {
            temp_page.content = page._content.trim();
        }
        if (page.categories && page.categories.length > 0)
        {
            temp_page.categories = Array.from(page.categories);
        }
        res.push(temp_page);
    });

    var json = JSON.stringify(res);

    return {
        path: 'search.json',
        data: json
    };
};
