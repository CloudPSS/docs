/// <reference types="prismjs" />

import { MdComponentBase } from './base';

const languageNameReplacement: Record<string, string> = {
    js: 'javascript',
    g4: 'antlr4',
    adoc: 'asciidoc',
    shell: 'bash',
    shortcode: 'bbcode',
    cs: 'csharp',
    dotnet: 'csharp',
    coffee: 'coffeescript',
    conc: 'concurnas',
    jinja2: 'django',
    'dns-zone': 'dns-zone-file',
    dockerfile: 'docker',
    eta: 'ejs',
    xlsx: 'excel-formula',
    xls: 'excel-formula',
    gamemakerlanguage: 'gml',
    hs: 'haskell',
    kt: 'kotlin',
    kts: 'kotlin',
    tex: 'latex',
    ly: 'lilypond',
    emacs: 'lisp',
    elisp: 'lisp',
    'emacs-lisp': 'lisp',
    md: 'markdown',
    moon: 'moonscript',
    n4jsd: 'n4js',
    nani: 'naniscript',
    objc: 'objectivec',
    px: 'pcaxis',
    pcode: 'peoplecode',
    pq: 'powerquery',
    pbfasm: 'purebasic',
    purs: 'purescript',
    py: 'python',
    rkt: 'racket',
    rpy: 'renpy',
    robot: 'robotframework',
    rb: 'ruby',
    'sh-session': 'shell-session',
    shellsession: 'shell-session',
    smlnj: 'sml',
    sol: 'solidity',
    sln: 'solution-file',
    rq: 'sparql',
    t4: 't4-cs',
    trig: 'turtle',
    ts: 'typescript',
    tsconfig: 'typoscript',
    uscript: 'unrealscript',
    uc: 'unrealscript',
    vb: 'visual-basic',
    vba: 'visual-basic',
    xeoracube: 'xeora',
    yml: 'yaml',
};

/**
 * 高亮组件
 */
export class MdHighlight extends MdComponentBase {
    /** @inheritdoc */
    static tagName = 'md-highlight';
    /**
     * @inheritdoc
     */
    protected static async initImpl(version = '^1'): Promise<void> {
        if ('Prism' in window && 'autoloader' in window.Prism.plugins) return;
        const script = document.createElement('script');
        script.src = `https://unpkg.com/prismjs@${version}/components/prism-core.min.js`;
        const plugins = document.createElement('script');
        plugins.src = `https://unpkg.com/prismjs@${version}/plugins/autoloader/prism-autoloader.min.js`;
        const l1 = new Promise((resolve, reject) => {
            script.addEventListener('load', resolve);
            script.addEventListener('error', reject);
        });
        document.documentElement.append(script);
        await l1;
        const l2 = new Promise((resolve, reject) => {
            plugins.addEventListener('load', resolve);
            plugins.addEventListener('error', reject);
        });
        document.documentElement.append(plugins);
        await l2;
        await new Promise((resolve) => setTimeout(resolve, 1));
        script.remove();
        plugins.remove();
        return;
    }
    /**
     * @inheritdoc
     */
    async connectedCallback(): Promise<void> {
        let lang = this.getAttribute('language') ?? '';
        if (!lang) return;
        lang = lang.toLowerCase();
        if (lang in languageNameReplacement) {
            lang = languageNameReplacement[lang];
        }
        this.setAttribute('language', lang);
        const code = this.dataset['source'] ?? this.textContent ?? '';
        this.dataset['source'] = code;
        this.textContent = code;
        await MdHighlight.init();
        const Prism = window.Prism;
        const highlighter = Prism.languages[lang];
        if (highlighter) {
            this.innerHTML = Prism.highlight(code, Prism.languages[lang], lang);
        } else {
            const autoloader = Prism.plugins['autoloader'] as {
                loadLanguages: (name: string, callback: () => void) => void;
            };
            autoloader.loadLanguages(lang, () => {
                this.innerHTML = Prism.highlight(code, Prism.languages[lang], lang);
            });
        }
    }
}
