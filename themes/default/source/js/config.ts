declare const IS_DEBUGGING: boolean;
declare const PAGE_TYPE: string;
declare const IS_INDEX: boolean;

require.config({
    paths: 
    {
        vue: IS_DEBUGGING ? '//cdn.jsdelivr.net/npm/vue@2/dist/vue' : '//cdn.jsdelivr.net/npm/vue@2/dist/vue.min',
        chart: '//cdn.jsdelivr.net/npm/chart.js@2/dist/Chart.min',
        mermaid: '//cdn.jsdelivr.net/npm/mermaid@8.0.0-rc.8/dist/mermaid.min',
        fastclick: '//cdn.jsdelivr.net/npm/fastclick@1/lib/fastclick.min',
        mxgraph: '//cdn.jsdelivr.net/npm/mxgraph@3.7.1/javascript/mxClient.min'
    },
    shim:
    {
        mxgraph:{
            exports: "window",
            deps: ["mxGraph/Init"]
        },
        "mxGraph/Editor" : ["mxgraph"],
        "mxGraph/Graph" : ["mxgraph"],
        "mxGraph/Stencil" : ["mxgraph"],
        "mxGraph/Stencils" : ["mxgraph"],
        "mxGraph/Load" : ["mxGraph/Graph", "mxGraph/Editor", "mxGraph/Stencil", "mxGraph/Stencils"]
    }
});