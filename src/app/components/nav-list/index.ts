import { Component, Input, OnChanges, ElementRef, ViewChild, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { SourceService } from '@/services/source';
import { RenderService } from '@/services/render';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { map, tap } from 'rxjs/operators';
import { File } from '@/services/source/interfaces';
import { TranslateService } from '@ngx-translate/core';
import { combineLatest, Subject, BehaviorSubject } from 'rxjs';
import { I18nService } from '@/services/i18n';
import { DocumentItem } from '@/interfaces/manifest';
import { Router } from '@angular/router';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

/**
 *
 */
interface TreeItem {
    /**
     *
     */
    level: number;
    /**
     *
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
export class NavListComponent {
    constructor(readonly source: SourceService, readonly i18n: I18nService, readonly router: Router) {
        this.nav.subscribe((i) => {
            this.dataSource.data = i ? [i] : [];
            this.treeControl.expandAll();
        });
    }
    /** */
    private _category = new BehaviorSubject<string>('');
    /** */
    @Input() get category(): string {
        return this._category.value;
    }
    set category(value: string) {
        this._category.next(value);
    }

    /** */
    readonly nav = combineLatest([this.i18n.lang, this.source.current, this._category]).pipe(
        tap((x) => console.log(x)),
        map(([lang, info, category]) => {
            if (!category) return null;
            const root = info.manifest.sitemap[lang].children;
            if (!root) return null;
            return root.find((v) => v.name === category);
        }),
        tap((x) => console.log(x)),
    );

    /** */
    readonly treeControl = new FlatTreeControl<TreeItem>(
        (node) => node.level,
        (node) => node.document.hasChild(),
    );

    /** */
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

    /**
     *
     */
    async navigate(item: DocumentItem): Promise<void> {
        if (item.path) {
            await this.router.navigateByUrl(item.path.parsed);
        }
    }
}
