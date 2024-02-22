import type { PluginOptions as BlogOptions } from '@docusaurus/plugin-content-blog';
import type { PluginOptions as PagesOptions } from '@docusaurus/plugin-content-pages';
import type { PluginOptions as DocsOptions } from '@docusaurus/plugin-content-docs';
import remarkMath from 'remark-math';
import remarkIns from 'remark-ins';
import rehypeKatex from 'rehype-katex';
import rehypeFigure from './plugins/rehype/figure';

export const mdxOptions: Partial<BlogOptions & PagesOptions & DocsOptions> = {
    admonitions: {},
    remarkPlugins: [remarkIns, remarkMath],
    rehypePlugins: [rehypeKatex, rehypeFigure],
    beforeDefaultRemarkPlugins: [],
    beforeDefaultRehypePlugins: [],
};
