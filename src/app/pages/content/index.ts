import { Component, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from '@/services/layout';
import { SourceService } from '@/services/source';
import { NavigateEvent } from '@/interfaces/navigate';
import { MarkdownComponent } from '@/components/markdown';
import { GlobalService } from '@/services/global';
import { File } from '@/services/source/interfaces';
import { FixedLengthArray } from 'type-fest';

/**
 * 编辑页面组件
 */
@Component({
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class ContentComponent implements AfterViewInit {
    constructor(
        readonly route: ActivatedRoute,
        readonly router: Router,
        readonly source: SourceService,
        readonly layout: LayoutService,
        readonly global: GlobalService,
    ) {}

    /** 预览组件 */
    @ViewChild('preview') preview!: MarkdownComponent;

    /** 当前文档 */
    readonly document = new Subject<File<string>>();

    /** 边框 */
    padding: FixedLengthArray<number, 4> = [0, 8, 0, 8];

    /** @inheritdoc */
    ngAfterViewInit(): void {
        this.global.navbar.emit('hidden');
        if (window.parent !== window) {
            window.parent.postMessage({ state: 'ready' }, '*');
        }
    }

    /**
     * 接受消息
     */
    @HostListener('window:message', ['$event.data', '$event.source', '$event.origin'])
    onMessage(data: { type: string; payload: unknown }, source: Window, origin: string): void {
        if (!data) return;
        try {
            if (typeof data != 'object') throw new Error('Invalid data.');
            if (typeof data.type != 'string') throw new Error('Invalid type.');
            const payload = data.payload;
            switch (data.type) {
                case 'padding': {
                    const padding = payload as number[];
                    if (!Array.isArray(padding) || padding.length <= 0) throw new Error('Invalid payload.');
                    else if (padding.length === 1) this.padding = [padding[0], padding[0], padding[0], padding[0]];
                    else if (padding.length === 2) this.padding = [padding[0], padding[1], padding[0], padding[1]];
                    else if (padding.length === 3) this.padding = [padding[0], padding[1], padding[2], padding[1]];
                    else this.padding = [padding[0], padding[1], padding[2], padding[3]];
                    break;
                }
                case 'document': {
                    const file = payload as File<string>;
                    if (typeof file.data != 'string') throw new Error('Invalid payload.');
                    if (typeof file.path != 'string') throw new Error('Invalid payload.');
                    this.document.next(file);
                    break;
                }
                case 'theme': {
                    const theme = payload as string;
                    if (typeof theme != 'string') throw new Error('Invalid payload.');
                    this.global.setTheme(theme === 'dark' ? 'dark' : 'default');
                    break;
                }
                default:
                    throw new Error(`Unknown type ${data.type}`);
            }
            source.postMessage({ state: 'ready' }, origin);
        } catch (ex) {
            source.postMessage({ state: 'error', message: String(ex) }, origin);
        }
    }

    /**
     * 导航页面
     */
    onNavigate(target?: NavigateEvent): void {
        if (!target) return;

        if (`/${this.global.getLanguage()}${target.path}` === this.route.snapshot.queryParams.path && target.fragment) {
            this.preview.scrollTo(target.fragment);
        } else {
            window.open(new URL(target.url, document.baseURI).href, '_blank', 'noopener');
        }
    }
}
