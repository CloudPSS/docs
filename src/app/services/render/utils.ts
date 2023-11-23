/**
 * 生成 id
 */
export function slugify(s: string): string {
    return String(s).trim().replace(/\s/g, '-').toLowerCase();
}
