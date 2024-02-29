import type { RootContentMap } from 'hast';

/** MDX JSX 元素 */
export type MdxJsxElementHast = RootContentMap['mdxJsxTextElement'] | RootContentMap['mdxJsxFlowElement'];

/** 获取属性 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
export function getAttribute(node: MdxJsxElementHast, name: string) {
    for (const attr of node.attributes) {
        if (attr.type === 'mdxJsxAttribute' && attr.name === name) {
            return attr;
        }
    }
    return undefined;
}

/** 获取属性 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
export function getOrInitAttribute(node: MdxJsxElementHast, name: string, value: string) {
    let attr = getAttribute(node, name);
    if (!attr) {
        attr = { type: 'mdxJsxAttribute', name, value };
        node.attributes.push(attr);
    }
    return attr;
}
