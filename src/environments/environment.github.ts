export const environment = {
    production: true,
};

/**
 * 文档路径
 */
export function docUrls(ref: string): string[] {
    void ref;
    return [`https://cloudpss.github.io/docs/content/`];
}
