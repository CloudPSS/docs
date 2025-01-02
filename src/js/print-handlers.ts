let theme: string | undefined;

globalThis.addEventListener('beforeprint', () => {
    theme ??= document.documentElement.dataset['theme'];
    document.documentElement.dataset['theme'] = 'light';
});

globalThis.addEventListener('afterprint', () => {
    if (!theme) return;
    document.documentElement.dataset['theme'] = theme;
    theme = undefined;
});

export {};
