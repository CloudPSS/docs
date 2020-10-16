import {
    Component,
    Input,
    ViewChildren,
    QueryList,
    ElementRef,
    ViewChild,
    AfterViewInit,
    OnDestroy,
} from '@angular/core';
import { Subscription, fromEvent, merge, Observable } from 'rxjs';
import { MarkdownComponent } from '../markdown';
import { mapTo, filter, scan, map, debounceTime } from 'rxjs/operators';

/**
 * 显示 TOC
 */
@Component({
    selector: 'app-toc',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class TocComponent implements AfterViewInit, OnDestroy {
    /** MD 文件 */
    _document?: MarkdownComponent;

    /** nav */
    @ViewChild('nav') nav?: ElementRef<HTMLElement>;
    /** mask */
    @ViewChild('mask') mask!: ElementRef<HTMLElement>;
    /** li items */
    @ViewChildren('itemElement') items!: QueryList<ElementRef<HTMLLIElement>>;

    /** MD 文件 */
    @Input() get document(): MarkdownComponent | undefined {
        return this._document;
    }
    set document(value: MarkdownComponent | undefined) {
        this._document = value;
    }

    /** 大纲级别 */
    @Input() level = 3;

    /** 监听文档更改 */
    observer?: Subscription;

    /** 当前活跃 ID */
    _currentId = '';
    /** 当前活跃 ID */
    @Input() get currentId(): string {
        return this._currentId;
    }
    /** 当前活跃 ID */
    set currentId(value: string) {
        this._currentId = value ?? '';
        this.setState();
    }

    /** 菜单偏移 */
    offset = 0;

    /** 滚动遮罩信息 */
    scrollInfo = {
        before: false,
        after: false,
    };

    /** 正在滚动 */
    scrolling!: Observable<boolean>;

    /** 订阅事件 */
    private readonly subscriptions: Subscription[] = [];
    /** @inheritdoc */
    ngOnDestroy(): void {
        const subscriptions = this.subscriptions.splice(0);
        subscriptions.forEach((s) => s.unsubscribe());
    }

    /**
     * @inheritdoc
     */
    ngAfterViewInit(): void {
        this.subscriptions.push(this.items?.changes.subscribe(() => this.setState()));
        const ele = this.nav?.nativeElement;
        if (ele) {
            const filterProp = filter<TransitionEvent>((e) => e.propertyName === 'top');
            const start = fromEvent<TransitionEvent>(ele, 'transitionstart').pipe(filterProp, mapTo(1));
            const end = fromEvent<TransitionEvent>(ele, 'transitionend').pipe(filterProp, mapTo(-1));
            const cancel = fromEvent<TransitionEvent>(ele, 'transitioncancel').pipe(filterProp, mapTo(-1));
            this.scrolling = merge(start, end, cancel).pipe(
                scan((sum, v) => sum + v, 0),
                debounceTime(0),
                map((v) => v > 0),
            );
        }
    }

    /**
     * 设置状态
     */
    private setState(): void {
        const nav = this.nav?.nativeElement;
        if (!(nav && this.items)) {
            return;
        }
        const mask = this.mask.nativeElement;
        this.offset = 0;
        if (this._currentId) {
            const item = this.items.find((i) => i.nativeElement?.dataset?.id === this._currentId);
            if (item) {
                this.offset = item.nativeElement.offsetTop - mask.clientHeight / 4;
            }
        }
        const max = Math.max(nav.clientHeight - mask.clientHeight, 0);
        this.offset = Math.max(this.offset, 0);
        this.offset = Math.min(this.offset, max);
        this.scrollInfo = {
            before: this.offset > 1,
            after: this.offset < max - 1,
        };
    }
}
