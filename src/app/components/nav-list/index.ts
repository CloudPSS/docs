import { Component, Input, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { SourceService } from '@/services/source';
import { map, debounceTime, withLatestFrom } from 'rxjs/operators';
import { combineLatest, BehaviorSubject, merge, of, Subject } from 'rxjs';
import { I18nService } from '@/services/i18n';
import { DocumentItem } from '@/interfaces/manifest';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { NavBaseComponent } from '../nav-base';

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
export class NavListComponent extends NavBaseComponent implements AfterViewInit {
    constructor(readonly source: SourceService, readonly i18n: I18nService) {
        super();
        this.nav.subscribe((i) => {
            this.dataSource.data = i ? [i] : [];
            this.treeControl.expandAll();
        });
    }

    /** 当前分类 */
    private _category = new BehaviorSubject<string>('');
    /** 当前分类 */
    @Input() get category(): string {
        return this._category.value;
    }
    set category(value: string) {
        this._category.next(value);
    }
    /** 当前文档 */
    private _currentRawPath = new BehaviorSubject<string | undefined>(undefined);
    /** 当前文档 */
    @Input() get currentRawPath(): string | undefined {
        return this._currentRawPath.value;
    }
    set currentRawPath(value: string | undefined) {
        this._currentRawPath.next(value);
    }

    /** 导航文档列表 */
    readonly nav = combineLatest([this.i18n.lang, this.source.current, this._category]).pipe(
        map(([lang, info, category]) => {
            if (!category) return null;
            const root = info.manifest.sitemap[lang].children;
            if (!root) return null;
            return root.find((v) => v.name === category);
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
    private _focus = new Subject<void>();
    /** 聚焦选中元素 */
    focus(): void {
        this._focus.next();
    }

    /** @inheritdoc */
    ngAfterViewInit(): void {
        combineLatest(this._currentRawPath, merge(of(null), this.items.changes))
            .pipe(debounceTime(50))
            .subscribe(([currentRawPath]) => {
                const current = this.items.find((i) => i.nativeElement.dataset.rawPath === currentRawPath);
                current?.nativeElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            });
        this._focus.pipe(withLatestFrom(this._currentRawPath), debounceTime(50)).subscribe(([_, currentRawPath]) => {
            const current = this.items.find((i) => i.nativeElement.dataset.rawPath === currentRawPath);
            current?.nativeElement.focus({ preventScroll: true });
        });
    }

    /**
     * 节点是否有子级
     */
    hasChild(_: number, node: TreeItem): boolean {
        return node.document.hasChild();
    }
}
