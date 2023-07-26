import { Component, Input, ElementRef, ViewChildren, QueryList, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { SourceService } from '@/services/source';
import { map, debounceTime, withLatestFrom } from 'rxjs/operators';
import { combineLatest, BehaviorSubject, merge, of, Subject, Subscription } from 'rxjs';
import { DocumentItem } from '@/interfaces/manifest';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { NavBaseComponent } from '../nav-base';
import { GlobalService } from '@/services/global';

/**
 * 树节点
 */
interface TreeItem {
    /**
     * 层级
     */
    level: number;
    /**
     * 文档
     */
    document: DocumentItem;
}

/**
 * 显示md文档
 */
@Component({
    selector: 'app-nav-list',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class NavListComponent extends NavBaseComponent implements AfterViewInit, OnInit, OnDestroy {
    constructor(
        readonly source: SourceService,
        readonly global: GlobalService,
    ) {
        super();
    }

    /** 当前分类 */
    private readonly _category = new BehaviorSubject<string>('');
    /** 当前分类 */
    @Input() get category(): string {
        return this._category.value;
    }
    set category(value: string) {
        this._category.next(value);
    }
    /** 当前文档 */
    private readonly _currentRawPath = new BehaviorSubject<string | undefined>(undefined);
    /** 当前文档 */
    @Input() get currentRawPath(): string | undefined {
        return this._currentRawPath.value;
    }
    set currentRawPath(value: string | undefined) {
        this._currentRawPath.next(value);
    }

    /** 是否展示分类 */
    private readonly _showCategories = new BehaviorSubject<boolean>(false);
    /** 是否展示分类 */
    @Input() get showCategories(): boolean {
        return this._showCategories.value;
    }
    set showCategories(value: boolean) {
        this._showCategories.next(value);
    }

    /** 导航文档列表 */
    readonly nav = combineLatest([
        this.global.language,
        this.source.current,
        this._category,
        this._showCategories,
    ]).pipe(
        map(([lang, info, category, showCategory]) => {
            const root = info.manifest.sitemap[lang];
            if (root?.children == null) return null;
            if (showCategory)
                return root.children
                    .filter((c) => c.order != null || c.name === category)
                    .map((c) => {
                        if (c.name === category) return c;
                        const n = new DocumentItem(c.name);
                        return Object.assign(n, c, { children: [] });
                    });
            if (!category) return null;
            return root.children.find((v) => v.name === category);
        }),
    );

    /** 导航树 */
    readonly treeControl = new FlatTreeControl<TreeItem>(
        (node) => node.level,
        (node) => node.document.hasChild(),
    );

    /** 数据源 */
    readonly dataSource = new MatTreeFlatDataSource(
        this.treeControl,
        new MatTreeFlattener<DocumentItem, TreeItem>(
            (node, level) => ({ document: node, level }),
            (node) => node.level,
            (node) => node.document.hasChild(),
            (node) => node.children,
        ),
    );

    /** 子集元素 */
    @ViewChildren('item', { read: ElementRef }) items!: QueryList<ElementRef<HTMLElement>>;

    /** 聚焦选中元素 */
    private readonly _focus = new Subject<void>();

    /** 订阅事件 */
    private readonly subscriptions: Subscription[] = [];
    /** @inheritdoc */
    ngOnDestroy(): void {
        const subscriptions = this.subscriptions.splice(0);
        subscriptions.forEach((s) => s.unsubscribe());
    }
    /** @inheritdoc */
    ngOnInit(): void {
        this.subscriptions.push(
            this.nav.subscribe((i) => {
                if (i == null) this.dataSource.data = [];
                else if (Array.isArray(i)) this.dataSource.data = i;
                else this.dataSource.data = [i];
                this.treeControl.expandAll();
            }),
        );
    }

    /** @inheritdoc */
    ngAfterViewInit(): void {
        this.subscriptions.push(
            combineLatest([this._currentRawPath, merge(of(null), this.items.changes)])
                .pipe(debounceTime(50))
                .subscribe(([currentRawPath]) => {
                    const current = this.items.find((i) => i.nativeElement.dataset['rawPath'] === currentRawPath);
                    current?.nativeElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                }),
            this._focus
                .pipe(withLatestFrom(this._currentRawPath), debounceTime(50))
                .subscribe(([_, currentRawPath]) => {
                    const current = this.items.find((i) => i.nativeElement.dataset['rawPath'] === currentRawPath);
                    current?.nativeElement.focus({ preventScroll: true });
                }),
        );
    }

    /** 聚焦选中元素 */
    focus(): void {
        this._focus.next();
    }

    /**
     * 节点是否有子级
     */
    hasChild(_: number, node: TreeItem): boolean {
        return node.document.hasChild();
    }
}
