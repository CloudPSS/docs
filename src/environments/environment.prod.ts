export const environment = {
    production: true,
};

/**
 * 文档路径
 */
export function docUrls(ref: string): string[] {
    return [
        new URL('content/', document.baseURI).href,
        `https://cdn.jsdelivr.net/gh/CloudPSS/docs@${ref}/docs/`,
        `https://gitcdn.xyz/cdn/CloudPSS/docs/${ref}/docs/`,
        `https://rawcdn.githack.com/CloudPSS/docs/${ref}/docs/`,
        `https://cdn.statically.io/gh/CloudPSS/docs/${ref}/docs/`,
    ];
}
