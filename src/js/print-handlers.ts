let theme: string | undefined;
window.addEventListener('beforeprint', () => {
    theme ??= document.documentElement.dataset['theme'];
    document.documentElement.dataset['theme'] = 'light';
});
window.addEventListener('afterprint', () => {
    if (!theme) return;

    document.documentElement.dataset['theme'] = theme;
    theme = undefined;
});

export {};
