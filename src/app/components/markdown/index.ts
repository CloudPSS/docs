import {
    Component,
    Input,
    OnChanges,
    ElementRef,
    ViewChild,
    Output,
    EventEmitter,
    SecurityContext,
    AfterViewInit,
    HostListener,
} from '@angular/core';
import { SourceService } from '@/services/source';
import { RenderService } from '@/services/render';
import { File } from '@/services/source/interfaces';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigateEvent, NavigateEventSource } from '@/interfaces/navigate';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Router, Scroll } from '@angular/router';
import { FrontMatter } from '@/interfaces/manifest';

// Set these to how you want inline and display math to be delimited.
const defaultCopyDelimiters = {
    inline: ['$', '$'] as [string, string], // alternative: ['\(', '\)']
    display: ['$$ ', ' $$'] as [string, string], // alternative: ['\[', '\]']
};

/**
 * Replace .katex elements with their TeX source (<annotation> element).
 * Modifies fragment in-place.  Useful for writing your own 'copy' handler,
 * as in copy-tex.js.
 */
function katexReplaceWithTex(fragment: DocumentFragment, copyDelimiters = defaultCopyDelimiters): void {
    // Remove .katex-html blocks that are preceded by .katex-mathml blocks
    // (which will get replaced below).
    const katexHtml = fragment.querySelectorAll('.katex-mathml + .katex-html');
    katexHtml.forEach((el) => el.remove());
    // Replace .katex-mathml elements with their annotation (TeX source)
    // descendant, with inline delimiters.
    const allKatex = fragment.querySelectorAll('.katex');
    allKatex.forEach((el) => {
        const texSource = el.getAttribute('aria-label');
        if (texSource) {
            el.textContent = `${copyDelimiters.inline[0]}${texSource}${copyDelimiters.inline[1]}`;
        }
    });
    // Switch display math to display delimiters.
    const displays = fragment.querySelectorAll('.katex-display > .katex');
    displays.forEach((el) => {
        let content = el.textContent ?? '';
        content = content.slice(copyDelimiters.inline[0].length, content.length - copyDelimiters.inline[1].length);
        el.textContent = `${copyDelimiters.display[0]}${content}${copyDelimiters.display[1]}`;
    });

    const errors = fragment.querySelectorAll<HTMLElement>('.katex-error');
    errors.forEach((el) => {
        const delimiters = copyDelimiters[el.classList.contains('katex-display') ? 'display' : 'inline'];
        const content = (el.textContent ?? '').trim();
        el.textContent = `${delimiters[0]}${content}${delimiters[1]}`;
    });
}

/**
 * 显示md文档
 */
@Component({
    selector: 'app-markdown',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class MarkdownComponent implements OnChanges, AfterViewInit, NavigateEventSource {
    constructor(
        readonly source: SourceService,
        readonly render: RenderService,
        readonly sanitizer: DomSanitizer,
        readonly router: Router,
    ) {}

    /** MD 文件 */
    @Input() file?: File<string> | null;

    /** MD 渲染结果 */
    private readonly rendered = new BehaviorSubject<HTMLTemplateElement>(document.createElement('template'));
    /** MD 渲染结果 */
    readonly frontMatter = new BehaviorSubject<FrontMatter | undefined>(undefined);

    /** MD 文档节点 */
    @ViewChild('doc') readonly doc!: ElementRef<HTMLElement>;

    /** @inheritdoc */
    @Output() readonly navigate = new EventEmitter<NavigateEvent>();

    /** 标题 */
    readonly headers = new BehaviorSubject<
        Array<{
            id: string;
            title: string;
            level: number;
            element: HTMLHeadingElement;
        }>
    >([]);

    /** @inheritdoc */
    ngAfterViewInit(): void {
        this.router.events.pipe(filter((x): x is Scroll => x instanceof Scroll)).subscribe((scroll) => {
            this.scrollTo(scroll.anchor);
        });
        this.rendered.subscribe((parsed) => {
            const doc = this.doc.nativeElement;
            const hash = decodeURIComponent(location.hash.slice(1));
            doc.innerHTML = '';
            // 将清空 parsed 的内容
            doc.appendChild(parsed.content);
            const headers = Array.from(doc.querySelectorAll<HTMLHeadingElement>('h1,h2,h3,h4,h5,h6')).map((h) => {
                return {
                    id: h.id,
                    title: h.innerText,
                    level: Number.parseInt(h.tagName.slice(1)),
                    element: h,
                };
            });
            this.headers.next(headers);
            if (hash) {
                setTimeout(() => this.scrollTo(hash), 200);
            }
        });
    }

    /**
     * 滚动到指定元素或页首
     */
    scrollTo(id: string | null): boolean {
        this.doc.nativeElement.querySelectorAll('.target').forEach((el) => el.classList.remove('target'));
        if (!id) {
            if (this.doc.nativeElement.offsetParent) {
                this.doc.nativeElement.offsetParent.scrollTo({ top: 0 });
            } else {
                this.doc.nativeElement.scrollIntoView();
            }
            return true;
        }
        const target = document.getElementById(id);
        if (!target) return false;
        target.classList.add('target');
        target.scrollIntoView();
        return true;
    }

    /**
     * @inheritdoc
     */
    ngOnChanges(): void {
        if (!this.file) {
            this.rendered.next(document.createElement('template'));
            return;
        }
        try {
            const [html, fm] = this.render.render(this.file);
            this.rendered.next(html);
            this.frontMatter.next(fm);
        } catch (ex) {
            const el = document.createElement('template');
            el.innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, String(ex)) ?? '';
            this.rendered.next(el);
            this.frontMatter.next(undefined);
        }
    }

    /**
     * 点击文档元素
     */
    onClick(event: HTMLElementEventMap['click']): void {
        const file = this.file;
        if (!file) return;
        const target = event.target as HTMLElement;
        if (target instanceof HTMLAnchorElement && target.href) {
            event.preventDefault();
            const href = new URL(target.href, file.url);
            if (href.origin === location.origin) {
                const hash = decodeURIComponent(href.hash.slice(1));
                this.navigate.emit(new NavigateEvent(href.pathname, hash));
            } else {
                window.open(href.href, '_blank', 'noopener');
            }
        }
    }

    /**复制 */
    @HostListener('document:copy', ['$event'])
    onCopy(event: HTMLElementEventMap['copy']): void {
        const selection = window.getSelection();
        if (!selection || selection.isCollapsed || !event.clipboardData) {
            return; // default action OK if selection is empty
        }
        const fragment = selection.getRangeAt(0).cloneContents();
        if (!fragment.querySelector('.katex-mathml, .katex-error')) {
            return; // default action OK if no .katex-mathml elements
        }
        // Preserve usual HTML copy/paste behavior.
        const html: string[] = [];
        fragment.childNodes.forEach((node) => {
            html.push((node as Element).outerHTML);
        });
        event.clipboardData.setData('text/html', html.join(''));
        katexReplaceWithTex(fragment);
        // Rewrite plain-text version.
        event.clipboardData.setData('text/plain', fragment.textContent ?? '');
        // Prevent normal copy handling.
        event.preventDefault();
    }
}
