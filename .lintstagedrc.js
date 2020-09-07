const path = require('path');

const prettierSupportInfo = require('prettier').getSupportInfo();
const eslintCli = new (require('eslint').CLIEngine)({});

/** @type {readonly string[]} */
const prettierSupportedExt = prettierSupportInfo.languages.reduce((arr, l) => {
    if (l.extensions) arr.push(...l.extensions);
    return arr;
}, []);
/** @type {readonly string[]} */
const prettierSupportedFilename = prettierSupportInfo.languages.reduce((arr, l) => {
    if (l.filenames) arr.push(...l.filenames);
    return arr;
}, []);

/**
 * @param {string} f
 */
const isEslintFile = (f) => {
    const ext = path.extname(f);
    if (!ext || !['.js', '.jsx', '.ts', '.tsx', '.vue'].includes(ext)) return false;
    return !eslintCli.isPathIgnored(f);
};

/**
 * @param {string[]} files
 * @param {string[]} commands
 */
function makeCommands(files, commands) {
    if (files.length === 0) return [];
    const fileLine = ` -- '${files.join(`' '`)}'`;
    return commands.map((c) => c + fileLine);
}
/**
 * @param {(files: string[]) => string[]} impl
 * @returns {(files: string[]) => string[]}
 */
function handler(impl) {
    return (files) => {
        console.log('files: ', files);
        const commands = impl(files);
        console.log('commands: ', commands);
        return commands;
    };
}

module.exports = {
    /**
     * @param {string[]} files
     */
    '*': handler((files) => {
        const commands = [];
        commands.push(
            ...makeCommands(
                files.filter((file) => isEslintFile(file)),
                [`eslint --fix --max-warnings 0 --no-error-on-unmatched-pattern`, `git add`],
            ),
        );
        commands.push(
            ...makeCommands(
                files.filter((file) => {
                    if (isEslintFile(file)) return false;
                    const filename = path.basename(file);
                    return (
                        prettierSupportedFilename.includes(filename) ||
                        prettierSupportedExt.some((v) => filename.endsWith(v))
                    );
                }),
                [`prettier --write`, `git add`],
            ),
        );
        return commands;
    }),
};
