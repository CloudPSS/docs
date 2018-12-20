hexo.extend.tag.register('compsymbol', function (args) {
    const symbol = args[0];
    let size ='=x';
    let title = '';
    if(args.length > 1)
    {
        if(/^=\d*\.?\d*[x\*]\d*\.?\d*$/g.test(args[1]))
        {
            size = args[1];
            title = args.slice(2).join(' ');
        }
        else
        {
            title = args.slice(1).join(' ');
        }
    }

    const sizes = size.substring(1).split(/[x\*]/g);
    const width = sizes[0] | 0;
    const height = sizes[1] | 0;
    
    return `<mx-graph symbol="${args[0]}" ${title ? 'title="'+htmlEscape(title)+'"' : ''} style="${width ? 'max-width:'+width+'px' : ''};${height ? 'max-height:'+height+'px' : ''}"></mx-graph>`;
    
    function htmlEscape(str) {
        return String(str)
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
    }
});
