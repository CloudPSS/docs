hexo.extend.tag.register('compsymbol', function (args) {
    return `<img src='/${args[0]}.svg'>`;
});
