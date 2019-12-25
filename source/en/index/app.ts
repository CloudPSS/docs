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
                    'Introduction and quick start documentation of CloudPSS modeling and simulation platform. Help users quickly become familiar with the basic operations of the platform, build simple circuit models, perform simulation functions, and view simulation results curves.',
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
                    'The help documentation for all components provided by the CloudPSS model library, including detailed descriptions of the basic principles of components, parameter lists, pin lists, instructions for using some complex components, and test case links.',
                    new Action('More', 'components/'),
                    [
                        new Action('Electrical Components', 'components/compGND.html'),
                        new Action('Measuring Components', 'components/comp_NewBranchVoltageMeter.html'),
                        new Action('Control Components', 'components/comp_newConstant.html'),
                        new Action('Heating network Components', 'components/compPipeline.html'),
                    ],
                ),
                new Data(
                    'Features',
                    'Detailed documentation of all functions provided by the CloudPSS modeling and simulation platform',
                    new Action('More', 'features/'),
                    [
                        new Action('Parameters and Pins System', 'features/ParameterSystem.html'),
                        new Action('Save and Import the Snapshot', 'features/Snapshot.html'),
                        new Action('Advanced Data Visualization', 'features/Dashboard.html'),
                        new Action('Heating System Simulation', 'features/HeatingSystemGuide.html'),
                    ],
                ),
                new Data(
                    'Examples',
                    'The models and instructions of CloudPSS template examples and homepage examples help users become familiar with the various functions of CloudPSS, quickly understand the use of related examples, and modify them on the basis of related examples.',
                    new Action('More', 'examples/'),
                    [
                        new Action('IEEE 39-bus standard system', 'examples/IEEE39.html'),
                        new Action('LCC-HVDC standard system', 'examples/LCC.html'),
                        new Action('MMC-HVDC standard system', 'examples/MMC.html'),
                        new Action('Regional central heating system', 'examples/HeatingSystem.html'),
                    ],
                ),
                new Data(
                    'Previous Documentation',
                    'Instructions of the previous CloudPSS version (Documents in the original CloudPSS "Download" area)',
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