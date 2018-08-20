var pathFn = require('path');
var fs = require('fs');

hexo.extend.generator.register('search', searchGenerator);

function searchGenerator(locals) {
    const pages = locals.pages;
    
    var res = new Array() 
    pages.each(function (page) { 
        var temp_page = new Object() 
        if (page.title) { 
            temp_page.title = page.title.trim();
        } 
        if (page.path) { 
            temp_page.url = hexo.config.root + page.path;
        } 
        if (page._content) { 
            temp_page.content = page._content.trim();
        }
        if (page.categories && page.categories.length > 0) {
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
