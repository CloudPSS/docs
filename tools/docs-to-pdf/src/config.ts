import type { Range } from './print-pages.ts';
/**
 * 生成文档的使用的域名，不包含末尾的 `/`
 */
export const HOST = 'https://kb.cloudpss.net';
// export const HOST = 'http://localhost:3000';

/**
 * 生成文档的域名，不包含末尾的 `/`
 */
export const HOST_REPLACE = 'https://kb.cloudpss.net';

/**
 * 生成文档的范围
 */
// export const RANGES: Range[] = [
//     ['https://kb.cloudpss.net/documents/quick-start/quick-start/'],
//     ['https://kb.cloudpss.net/documents/software/'],
//     ['https://kb.cloudpss.net/documents/hardware/desktop-type/'],
//     ['https://kb.cloudpss.net/documents/software-tools/conversion-tools/'],
//     ['https://kb.cloudpss.net/documents/maintenance-tools/server-manager/'],
// ];
// export const RANGES: Range[] = [['/documents/software/emtlab/', '/documents/software/emtlab/introduction-to-emtlab/']];
export const RANGES: Range[] = [
    ['/documents/software/emtlab/', '/documents/software/emtlab/component-library/hardware-in-loop/VirtualOutput/'],
];
// export const RANGES: Range[] = [
//     [
//         '/documents/software/emtlab/parallel-acceleration/advanced-param-setup/',
//         '/documents/software/emtlab/parallel-acceleration/advanced-param-setup/',
//     ],
// ];
