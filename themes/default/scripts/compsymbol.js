hexo.extend.tag.register('compsymbol', function (args) {
    return `<mx-graph symbol="${args[0]}"></mx-graph>`;
});
