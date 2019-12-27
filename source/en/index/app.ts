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
            public img = `index/${name}.png`,
        ) { }
    }

    const vueApp = new Vue({
        el: '#vueindex',
        data:
        {
            links: [
                new Data(
                    'Quick Start',
                    'Introduction and quick start guide for CloudPSS platform. It helps users to quickly become familiar with the basic operations of the platform, build simple circuit models, perform simulation functions, and view simulation results curves.',
                    new Action('More', 'guide/'),
                    [
                        new Action('Account Management', 'guide/User1.html'),
                        new Action('Platform Introduction', 'guide/User2.html'),
                        new Action('Operation of Simulation', 'guide/User3.html'),
                        new Action('Test Cases', 'guide/User4.html'),
                    ],
                ),
                new Data(
                    'Components',
                    'Providing documents for all the components in CloudPSS model library, including detailed descriptions of the basic modeling equations, parameter lists, pin lists, instructions for some complex components, and test case links.',
                    new Action('More', 'components/'),
                    [
                        new Action('Electrical Components', 'components/compGND.html'),
                        new Action('Measuring Components', 'components/comp_NewBranchVoltageMeter.html'),
                        new Action('Control Components', 'components/comp_newConstant.html'),
                        new Action('Heat Network Components', 'components/compPipeline.html'),
                    ],
                ),
                new Data(
                    'Features',
                    'Introduction of all the functions and features provided by CloudPSS',
                    new Action('More', 'features/'),
                    [
                        new Action('Parameter and Pin System', 'features/ParameterSystem.html'),
                        new Action('Save and Import the Snapshot', 'features/Snapshot.html'),
                        new Action('Advanced Data Visualization', 'features/Dashboard.html'),
                        new Action('Heat System Simulation', 'features/HeatingSystemGuide.html'),
                    ],
                ),
                new Data(
                    'Examples',
                    'Introduction of provided template, index examples. It helps users to become familiar with the various functions of CloudPSS, quickly understand the related cases, and modify them on the basis of related cases.',
                    new Action('More', 'examples/'),
                    [
                        new Action('IEEE 39-bus standard system', 'examples/IEEE39.html'),
                        new Action('LCC-HVDC standard system', 'examples/LCC.html'),
                        new Action('MMC-HVDC standard system', 'examples/MMC.html'),
                        new Action('Regional heat supply system', 'examples/HeatingSystem.html'),
                    ],
                ),
                new Data(
                    'Previous Documentation',
                    'Instructions of the previous CloudPSS version (Documents in the original CloudPSS "Download" page)',
                    new Action('Open', '//www.cloudpss.net/downloadnew/'),
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