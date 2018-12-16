import * as mx from 'mxgraph';
import Util from './util';

function initMxGraph()
{
    (<any>window).mxLoadStylesheets = false;
    (<any>window).mxLoadResources = false;

    async function loadMxGraph(container: Element, padding?: number)
    {
        padding = padding || 12;
        const getshape = Util.fetchShape(<string>container.getAttribute('symbol'));
        await Util.DOMContentLoaded();

        // Disables the built-in context menu
        mx.mxEvent.disableContextMenu(container);
        const editor = new mx.Editor();
        // Creates the graph inside the given container
        const graph = new mx.Graph(container, null, null, editor.graph.getStylesheet());
        graph.resetViewOnRootChange = false;
        graph.foldingEnabled = false;
        graph.gridEnabled = false;
        graph.autoScroll = false;
        graph.setTooltips(false);
        graph.setConnectable(false);
        graph.setEnabled(false);
        // Sets the base style for all vertices
        const style = graph.getStylesheet().getDefaultVertexStyle();
        style[mx.mxConstants.STYLE_ROUNDED] = true;
        style[mx.mxConstants.STYLE_FILLCOLOR] = '#ffffff';
        style[mx.mxConstants.STYLE_STROKECOLOR] = '#000000';
        style[mx.mxConstants.STYLE_STROKEWIDTH] = '2';
        style[mx.mxConstants.STYLE_FONTCOLOR] = '#000000';
        style[mx.mxConstants.STYLE_FONTSIZE] = '12';
        style[mx.mxConstants.STYLE_FONTSTYLE] = 1;
        graph.getStylesheet().putDefaultVertexStyle(style);

        const shape = (await getshape).shape;
        const firstChild = <Element>shape.firstChild;
        mx.mxStencilRegistry.parseStencilSet(firstChild);
        const parent = graph.getDefaultParent();
        const width = Number(firstChild.getAttribute('w'));
        const height = Number(firstChild.getAttribute('h'));

        graph.getModel().beginUpdate();
        try
        {
            graph.insertVertex(parent, null, '', 0, 0, width, height, 'shape=' + (firstChild.getAttribute('name') || '').toLowerCase());
        }
        finally
        {
            graph.getModel().endUpdate();
        }
        const svg = container.getElementsByTagName("svg")[0];
        svg.viewBox.baseVal.width = width + padding * 2;
        svg.viewBox.baseVal.height = height + padding * 2;
        svg.viewBox.baseVal.x = -padding;
        svg.viewBox.baseVal.y = -padding;
        svg.style.minWidth = svg.viewBox.baseVal.width + 'px';
        svg.style.minHeight = svg.viewBox.baseVal.height + 'px';
        svg.style.maxWidth = svg.viewBox.baseVal.width * 2 + 'px';
        svg.style.maxHeight = svg.viewBox.baseVal.height * 2 + 'px';
    };

    for (const container of Array.from(document.getElementsByTagName("mx-graph")))
        loadMxGraph(container);
}