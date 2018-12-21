import Vue from '../../node_modules/vue/types/index';

(async function ()
{
    interface DownloadResource
    {
        name: string,
        desc?: string,
        upload: Date,
        link: string,
    }

    var vueApp = new Vue({
        el: '#vueapp',
        data:
        {
            downloads: [
                {
                    name: 'CloudPSS国家能源互联网大会发布PPT',
                    upload: new Date('2018-6-27 16:59:14+8'),
                    link: 'https://pan.baidu.com/s/1qY9JhKC'
                },
                {
                    name: '热网潮流分析使用说明书',
                    upload: new Date('2018-6-27 16:59:14+8'),
                    link: 'https://pan.baidu.com/s/1qXIvP3u'
                },
                {
                    name: 'CloudPSS用户手册',
                    upload: new Date('2018-6-27 16:59:14+8'),
                    link: 'https://pan.baidu.com/s/1jImoRQm'
                },
                {
                    name: 'IEEE39节点系统使用说明书',
                    upload: new Date('2018-6-27 16:59:14+8'),
                    link: 'https://pan.baidu.com/s/1gf90U5d'
                },
                {
                    name: 'IEEE14节点深度学习判敛数据集',
                    desc: '内含5m个基于IEEE14节点系统生成的潮流初始断面，收敛占比41%，以及训练好的模型参数的.h5文件',
                    upload: new Date('2018-6-27 16:59:14+8'),
                    link: 'https://pan.baidu.com/s/1tmU4c1DjQiY8w4UAXnNSsg'
                },
            ] as DownloadResource[]
        },
        methods:
        {
        },
        computed:
        {
        }
    })
})();