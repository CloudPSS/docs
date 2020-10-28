import { Component, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from '@/services/layout';
import { SourceService } from '@/services/source';
import { NavigateEvent } from '@/interfaces/navigate';
import { MarkdownComponent } from '@/components/markdown';
import { GlobalService } from '@/services/global';
import { File } from '@/services/source/interfaces';

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

    /** @inheritdoc */
    ngAfterViewInit(): void {
        this.global.navbar.emit('hidden');
    }

    /**
     * 接受消息
     */
    @HostListener('window:message', ['$event.data', '$event.source', '$event.origin'])
    onMessage(data: File<string>, source: Window, origin: string): void {
        if (!data) return;
        if (typeof data != 'object') return;
        if (typeof data.data != 'string') return;
        if (typeof data.path != 'string') return;

        this.document.next(data);
        source.postMessage({ status: true }, origin);
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
