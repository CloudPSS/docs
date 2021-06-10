declare module '*.yml' {
    const data: unknown;
    export default data;
}

declare const monaco: typeof import('monaco-editor');
