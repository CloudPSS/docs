import { visit } from 'unist-util-visit';
import { whitespace } from 'hast-util-whitespace';
import { h } from 'hastscript';
import type { Root, Element, RootContentMap } from 'hast';
import { getAttribute, getOrInitAttribute } from './utils';

// "xxx =100x100"
// "xxx =x100"
// "xxx =100x"
// "=100x100"
const IMG_SIZE_REGEXP = /^(.*?)(?:\s+|^)=((\d*\.?\d+)?x(\d*\.?\d+)?)?$/;

/**
 * Create figure element for images
 */
export default function rehypeFigure() {
    return (tree: Root): void => {
        visit(tree, { type: 'element', tagName: 'img' }, (node) => {
            const alt = node.properties?.['alt'];
            if (!alt) return;

            const match = IMG_SIZE_REGEXP.exec(String(alt));
            if (!match) return;

            const [_, rest, size, w, h] = match;
            const newWidth = w ? Number.parseFloat(w) : undefined;
            const newHeight = h ? Number.parseFloat(h) : undefined;
            if (!newWidth && !newHeight) return;

            node.properties['alt'] = rest;
            if (newWidth) node.properties['width'] = newWidth;
            if (newHeight) node.properties['height'] = newHeight;
            node.properties['data-custom-size'] = size;
        });
        visit(tree, { type: 'mdxJsxTextElement', name: 'img' }, (node: RootContentMap['mdxJsxTextElement']) => {
            const alt = getAttribute(node, 'alt');
            if (!alt?.value) return;

            const match = IMG_SIZE_REGEXP.exec(String(alt.value));
            if (!match) return;

            const [_, rest, size, w, h] = match;
            const newWidth = w ? Number.parseFloat(w) : undefined;
            const newHeight = h ? Number.parseFloat(h) : undefined;
            if (!newWidth && !newHeight) return;
            alt.value = rest;

            const aw = getOrInitAttribute(node, 'width', '');
            const ah = getOrInitAttribute(node, 'height', '');

            const oldWidth = aw.value ? Number.parseFloat(aw.value as string) : undefined;
            const oldHeight = ah.value ? Number.parseFloat(ah.value as string) : undefined;

            if (newWidth && newHeight) {
                // force size
                aw.value = String(newWidth);
                ah.value = String(newHeight);
            } else if (!oldWidth || !oldHeight) {
                // no nature size
                if (newWidth) aw.value = String(newWidth);
                if (newHeight) ah.value = String(newHeight);
            } else {
                // has nature size
                if (newWidth) {
                    aw.value = String(newWidth);
                    ah.value = String((newWidth / oldWidth) * oldHeight);
                } else if (newHeight) {
                    ah.value = String(newHeight);
                    aw.value = String((newHeight / oldHeight) * oldWidth);
                }
            }
            node.attributes.push({ type: 'mdxJsxAttribute', name: 'data-custom-size', value: size });
        });
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
        const alt = getAttribute(node, 'alt');
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
    if (typeof src != 'string' || !src.includes(':')) return undefined;
    try {
        const url = new URL(src);
        const service = url.protocol.slice(0, -1);
        if (['http', 'https', 'data', 'blob', 'pathname'].includes(service)) return undefined;
        return h('cwe-embed-media', { service, srcid: url.href.slice(url.protocol.length) });
    } catch {
        return undefined;
    }
}
