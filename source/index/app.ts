//import Vue from '../../node_modules/vue/types/index';

(async function ()
{
    class Action
    {
        constructor(
            public name: string,
            public link: string,
            public desc?: string,
            public openNew = /^(\/\/|[a-z][a-z0-9]*:)/ig.test(link),
        ) { }
    }

    class Data
    {
        constructor(
            public name: string,
            public desc = name,
            public action?: Action,
            public more = new Array<Action>(),
            public img = `/index/${name}.png`,
        ) { }
    }

    var vueApp = new Vue({
        el: '#vueindex',
        data:
        {
            links: [
                new Data(
                    '快速入门',
                    'CloudPSS建模及仿真平台的介绍和快速入门文档。帮助用户快速熟悉平台的基本操作，建立简单电路模型，执行仿真功能，并查看仿真结果曲线。',
                    new Action('更多', '/guide/'),
                    [
                        new Action('账号管理', '/guide/User1.html'),
                        new Action('工作台介绍', '/guide/User2.html'),
                        new Action('建模仿真操作', '/guide/User3.html'),
                        new Action('简单案例', '/guide/User4.html'),
                    ],
                ),
                new Data(
                    '元件帮助',
                    'CloudPSS模型库提供的全部元件的帮助文档，包括元件的基本原理、参数列表、引脚列表的详细说明，部分复杂元件的使用说明，以及测试算例链接。',
                    new Action('更多', '/components/'),
                    [
                        new Action('电气元件', '/components/compGND.html'),
                        new Action('量测元件', '/components/comp_NewBranchVoltageMeter.html'),
                        new Action('控制元件', '/components/comp_newConstant.html'),
                        new Action('热网元件', '/components/compPipeline.html'),
                    ],
                ),
                new Data(
                    '功能帮助',
                    'CloudPSS建模及仿真平台提供的全部功能的详细说明文档。',
                    new Action('更多', '/features/'),
                    [
                        new Action('参数及引脚体系', '/features/ParameterSystem.html'),
                        new Action('断面保存及导入', '/features/Snapshot.html'),
                        new Action('高级数据可视化', '/features/Dashboard.html'),
                        new Action('供热系统建模仿真', '/features/HeatingSystemGuide.html'),
                    ],
                ),
                new Data(
                    '案例介绍',
                    'CloudPSS模板算例及主页示例案例的模型和使用说明，帮助用户熟悉CloudPSS各类功能，快速理解相关算例的使用，并在相关算例的基础上进行修改。',
                    new Action('更多', '/examples/'),
                    [
                        new Action('IEEE标准测试系统', '/examples/MMC.html'),
                        new Action('LCC-HVDC测试系统', '/examples/MMC.html'),
                        new Action('MMC-HVDC测试系统', '/examples/MMC.html'),
                        new Action('区域集中供热系统', '/examples/HeatingSystem.html'),
                    ],
                ),
                new Data(
                    '旧平台文档',
                    'CloudPSS旧版平台的使用说明（原CloudPSS“下载”区的文档）。',
                    new Action('打开', 'http://www.cloudpss.net/downloadnew/'),
                    [
                    ],
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