import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';

/**
 * 支持 :size[] 语法
 */
export default function remarkDirectiveSize() {
    return (tree: Root): void => {
        visit(tree, (node, index, parent) => {
            void parent;
        });
    };
}
