//import Vue from '../../node_modules/vue/types/index';

(async function ()
{
    class Data
    {
        constructor(
            public name: string,
            public link: string,
            public desc?: string,
            public action = '打开',
            public img?: string,
        )
        {
            this.desc = desc || name;
            this.openNew = /^(\/\/|[a-z][a-z0-9]*:)/ig.test(link);
            if(!img)
                this.img = `/index/${name}.png`;
        }

        public openNew: boolean;
    }

    var vueApp = new Vue({
        el: '#vueindex',
        data:
        {
            downloads: [
                new Data(
                    '快速入门',
                    '/guide/',
                    '快速入门',
                ),
                new Data(
                    '元件帮助',
                    '/components/',
                    '元件帮助',
                ),
                new Data(
                    '功能帮助',
                    '/features/',
                    '功能帮助',
                ),
                new Data(
                    '案例介绍',
                    '/examples/',
                    '案例介绍',
                ),
                new Data(
                    '旧平台文档',
                    '//http://www.cloudpss.net/downloadnew/',
                    '旧平台文档',
                )]
        },
        methods:
        {
        },
        computed:
        {
        }
    })
})();