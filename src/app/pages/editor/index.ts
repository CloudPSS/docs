import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { of, merge, combineLatest, BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap, pluck, mergeMap, catchError, debounceTime } from 'rxjs/operators';
import { LayoutService } from '@/services/layout';
import { SourceService } from '@/services/source';
import { NavigateEvent } from '@/interfaces/navigate';
import { MarkdownComponent } from '@/components/markdown';
import { saveAs } from 'file-saver';
import * as path from 'path';
import { GlobalService } from '@/services/global';

/**
 * 编辑页面组件
 */
@Component({
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class EditorComponent implements AfterViewInit {
    constructor(
        readonly route: ActivatedRoute,
        readonly router: Router,
        readonly source: SourceService,
        readonly layout: LayoutService,
        readonly global: GlobalService,
    ) {}

    /** 编辑器语言 */
    lang = 'markdown';
    /** 编辑组件 */
    editor!: monaco.editor.IStandaloneCodeEditor;

    /** 预览组件 */
    @ViewChild('preview') preview!: MarkdownComponent;

    /** url */
    readonly url = this.route.queryParams.pipe(
        pluck('path'),
        map((p: string | undefined) => {
            if (!p) return undefined;
            const path = this.source.normalizePath(p);
            if (path !== p) {
                void this.router.navigate([], { queryParams: { path }, replaceUrl: true });
            }
            return path;
        }),
    );

    /** 当前文档 */
    readonly document = this.url.pipe(
        map((u) => {
            if (!u) return undefined;
            const f = this.source.findDocument(u);
            if (f?.fallback == null) return f;
            return undefined;
        }),
    );

    /** 当前文档文件 */
    readonly documentFile = this.document.pipe(
        mergeMap((f) => {
            if (!f) return of(null);
            const { path } = f;
            return merge(of(null), this.source.file(path, 'text'));
        }),
        catchError(async () => {
            await this.router.navigate(['_error', 404], { replaceUrl: true });
            return null;
        }),
        tap((file) => {
            this.content.next(file?.data ?? '');
        }),
    );

    /** 当前文档内容 */
    readonly content = new BehaviorSubject('');

    /** 更新内容后的当前文档 */
    readonly currentDocument = combineLatest(this.documentFile, this.content.pipe(debounceTime(500)), this.url).pipe(
        map(([doc, data, path]) => {
            if (doc) {
                return { ...doc, data };
            }
            path = path ?? '/';
            const url = this.source.fileUrl(path)[0];
            return {
                path,
                data,
                url,
                version: this.source.current.value,
            };
        }),
    );

    /** @inheritdoc */
    ngAfterViewInit(): void {
        this.global.navbar.emit('simple');
    }

    /**
     * 加载编辑器插件
     */
    initMonaco(editor: monaco.editor.IStandaloneCodeEditor): void {
        (
            window.require as unknown as (
                require: ['MonacoMarkdown'],
                callback: (MonacoMarkdown: typeof import('monaco-markdown')) => void,
            ) => void
        )(['MonacoMarkdown'], ({ MonacoMarkdownExtension }) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            new MonacoMarkdownExtension().activate(editor as any);
            this.lang = 'markdown-math';
        });
        this.editor = editor;
        this.editor.onDidScrollChange((e) => this.editorScroll(e));
        this.editor.addAction({
            id: 'save',
            label: 'Save',
            keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S],
            contextMenuGroupId: 'file',
            contextMenuOrder: 3,
            run: (ed) => {
                const data = ed.getValue();
                const file = new Blob([data], { type: 'text/markdown;charset=utf-8' });
                let name = path.basename(this.route.snapshot.queryParams['path'] ?? 'Untitled');
                if (!/\.md$/i.test(name)) {
                    name += '.md';
                }
                saveAs(file, name);
            },
        });
    }

    /**
     * 编辑器滚动
     */
    private editorScroll(e: monaco.IScrollEvent): void {
        if (!e.scrollTopChanged && !e.scrollHeightChanged) return;
        const visible = this.editor.getVisibleRanges();
        if (visible.length < 1) return;
        const editorLine = visible[0].startLineNumber;
        const ele = Array.from(this.preview.doc.nativeElement.querySelectorAll<HTMLElement>('[data-source-line]')).find(
            (el) => {
                const line = Number.parseInt(el.dataset['sourceLine'] ?? '');
                return line >= editorLine;
            },
        );
        ele?.scrollIntoView();
    }

    /**
     * 导航页面
     */
    onNavigate(target?: NavigateEvent): void {
        if (!target) return;

        if (
            `/${this.global.getLanguage()}${target.path}` === this.route.snapshot.queryParams['path'] &&
            target.fragment
        ) {
            this.preview.scrollTo(target.fragment);
        }
    }
}
