import { reporter } from 'vfile-reporter';

// https://github.com/facebook/docusaurus/issues/9953
/** @inheritdoc */
type VFile = Parameters<typeof reporter>[0];

/** 报告错误 */
export default function remarkReporting() {
    return (_: unknown, vfile: VFile): void => {
        // 确保所有错误都已收集
        setTimeout(() => {
            const message = reporter(vfile, { quiet: true, verbose: false });
            if (message) {
                // eslint-disable-next-line no-console
                console.warn(message);
            }
        }, 100);
    };
}
