import { Component, Input } from '@angular/core';
import { SourceService } from '@/services/source';
import { map } from 'rxjs/operators';
import { combineLatest, BehaviorSubject } from 'rxjs';
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
export class NavListComponent extends NavBaseComponent {
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

    /**
     * 节点是否有子级
     */
    hasChild(_: number, node: TreeItem): boolean {
        return node.document.hasChild();
    }
}
