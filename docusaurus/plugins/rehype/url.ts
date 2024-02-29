import { visit } from 'unist-util-visit';
import type { Root, RootContentMap } from 'hast';
import { getAttribute, type MdxJsxElementHast } from './utils';
import { HOME_URL } from '../../utils';
import { writeFile } from 'node:fs/promises';

/** 规格化 URL */
function normalizeUrl(url: unknown): string | undefined {
    if (typeof url != 'string') return undefined;
    if (!URL.canParse(url)) return undefined;
    const u = new URL(url);
    switch (u.protocol) {
        case 'cloudpss:': {
            let tail = u.pathname + u.search + u.hash;
            while (tail.startsWith('/')) tail = tail.slice(1);
            return HOME_URL + tail;
        }
    }
    return undefined;
}

/** 规格化 URL */
function normalizeUrlAttr(node: MdxJsxElementHast, attrName: string): void {
    const attr = getAttribute(node, attrName);
    if (typeof attr?.value != 'string') return;
    const normalized = normalizeUrl(attr.value);
    if (!normalized) return;
    attr.value = normalized;
}

const DEBUG = false;

/** 规格化 URL */
export default function rehypeUrl() {
    return (tree: Root): void => {
        if (DEBUG) void writeFile('tree.json', JSON.stringify(tree, null, 2));

        visit(tree, { type: 'element', tagName: 'a' }, (node, index, parent) => {
            const href = normalizeUrl(node.properties?.['href']);
            if (!href) return;
            node.properties['href'] = href;
            node.properties['target'] = '_blank';
            parent!.children.splice(index!, 1, {
                type: 'mdxJsxTextElement',
                name: 'a',
                attributes: Object.entries(node.properties).map(([name, value]) => ({
                    type: 'mdxJsxAttribute' as const,
                    name,
                    value: value == null ? undefined : String(value),
                })),
                children: node.children,
                position: node.position,
                data: { ...node.data, _mdxExplicitJsx: true },
            });
        });
        visit(tree, { type: 'element', tagName: 'img' }, (node, index, parent) => {
            const src = normalizeUrl(node.properties?.['src']);
            if (!src) return;
            node.properties['src'] = src;
            node.properties['decoding'] = 'async';
            node.properties['loading'] = 'lazy';
            parent!.children.splice(index!, 1, {
                type: 'mdxJsxTextElement',
                name: 'img',
                attributes: Object.entries(node.properties).map(([name, value]) => ({
                    type: 'mdxJsxAttribute' as const,
                    name,
                    value: value == null ? undefined : String(value),
                })),
                children: node.children,
                position: node.position,
                data: { ...node.data, _mdxExplicitJsx: true },
            });
        });
        visit(tree, { type: 'mdxJsxTextElement', name: 'a' }, (node: RootContentMap['mdxJsxTextElement']) => {
            normalizeUrlAttr(node, 'href');
        });
        visit(tree, { type: 'mdxJsxFlowElement', name: 'a' }, (node: RootContentMap['mdxJsxFlowElement']) => {
            normalizeUrlAttr(node, 'href');
        });
        visit(tree, { type: 'mdxJsxTextElement', name: 'img' }, (node: RootContentMap['mdxJsxTextElement']) => {
            normalizeUrlAttr(node, 'src');
        });
        visit(tree, { type: 'mdxJsxFlowElement', name: 'img' }, (node: RootContentMap['mdxJsxFlowElement']) => {
            normalizeUrlAttr(node, 'src');
        });

        if (DEBUG) void writeFile('tree-end.json', JSON.stringify(tree, null, 2));
    };
}
