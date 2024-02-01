import { visit } from 'unist-util-visit';
import { whitespace } from 'hast-util-whitespace';
import { h } from 'hastscript';
import { Root, Element, RootContentMap } from 'hast';

/**
 * Create figure element for images
 */
export default function rehypeFigure() {
    return (tree: Root): void => {
        visit(tree, { tagName: 'p' }, (node, index, parent) => {
            const img = getOnlyImages(node);

            if (!img) return;

            const [el, alt] = img;

            parent!.children.splice(index!, 1, h('figure', [el, h('figcaption', alt)]));
        });
    };
}

/** 获取唯一的图片节点 */
function getOnlyImages({ children }: Element): [RootContentMap['mdxJsxTextElement'] | Element, string] | undefined {
    const nodes = children.filter((child) => !whitespace(child));
    if (nodes.length !== 1) return undefined;
    const [node] = nodes;

    if (node.type === 'mdxJsxTextElement' && node.name === 'img') {
        const alt = node.attributes.find((attr) => attr.type === 'mdxJsxAttribute' && attr.name === 'alt');
        return [node, (alt?.value ?? '') as string];
    }
    if (node.type === 'element' && node.tagName === 'img') {
        const alt = node.properties?.['alt'];
        const video = toVideoNode(node);
        return [video ?? node, (alt ?? '') as string];
    }
    return undefined;
}

/** 转换为视频 */
function toVideoNode(node: Element): Element | undefined {
    const { src } = node.properties;
    if (!src) return undefined;
    const url = new URL(src as string);
    const service = url.protocol.slice(0, -1);
    if (['http', 'https', 'data', 'blob'].includes(service)) return undefined;
    return h('cwe-embed-media', { service, srcid: url.href.slice(url.protocol.length) });
}
