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
export const RANGES: Range[] = [
    [
        'https://kb.cloudpss.net/documents/software/emtlab/',
        'https://kb.cloudpss.net/documents/software/emtlab/component-library/security-control-module/Security-Control-Operation/',
    ],
    [
        'https://kb.cloudpss.net/casehub/emtlab/opencloudpss-cases/',
        'https://kb.cloudpss.net/casehub/emtlab/opencloudpss-cases/basic-protection-cases/reclose-case/',
    ],
];
