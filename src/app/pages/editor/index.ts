import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { of, merge, combineLatest, BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap, pluck, mergeMap, catchError, debounceTime } from 'rxjs/operators';
import { LayoutService } from '@/services/layout';
import { Title } from '@angular/platform-browser';
import { SourceService } from '@/services/source';
import { NavigateEvent } from '@/interfaces/navigate';
import { MarkdownComponent } from '@/components/markdown';

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
        readonly title: Title,
    ) {}

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
                void this.router.navigate([], { relativeTo: this.route, queryParams: { path }, replaceUrl: true });
            }
            return path;
        }),
    );

    /** 当前文档 */
    readonly document = this.url.pipe(
        mergeMap((u) => {
            if (!u) return of(null);
            const f = this.source.findDocument(u);
            if (!f) return of(null);
            const [doc] = f;
            return merge(of(null), this.source.file(doc, 'text'));
        }),
        catchError(async () => {
            await this.router.navigate(['error', 404], { replaceUrl: true });
            return null;
        }),
        tap((file) => {
            this.content.next(file?.data ?? '');
        }),
    );

    /** 当前文档内容 */
    readonly content = new BehaviorSubject('');

    /** 更新内容后的当前文档 */
    readonly currentDocument = combineLatest(this.document, this.content.pipe(debounceTime(500)), this.url).pipe(
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
        //
    }

    /**
     * 加载编辑器插件
     */
    async initMonaco(editor: monaco.editor.IStandaloneCodeEditor): Promise<void> {
        const { MonacoMarkdownExtension } = await import('monaco-markdown');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        new MonacoMarkdownExtension().activate(editor as any);
        this.editor = editor;
        this.editor.onDidScrollChange((e) => this.editorScroll(e));
    }

    /**
     * 编辑器滚动
     */
    editorScroll(e: monaco.IScrollEvent): void {
        if (!e.scrollTopChanged && !e.scrollHeightChanged) return;
        const visible = this.editor.getVisibleRanges();
        if (visible.length < 1) return;
        const editorLine = Math.floor(visible[0].startLineNumber * 1.1 + visible[0].endLineNumber * -0.1);
        const ele = Array.from(this.preview.doc.nativeElement.querySelectorAll<HTMLElement>('[data-source-line]')).find(
            (el) => {
                const line = Number.parseInt(el.dataset.sourceLine ?? '');
                return line > editorLine;
            },
        );
        ele?.scrollIntoView();
    }

    /**
     * 导航页面
     */
    onNavigate(target?: NavigateEvent): void {
        if (target) {
            if (target.path === this.route.snapshot.queryParams.path) {
                this.preview.scrollTo(target.fragment);
            }
        }
    }
}
