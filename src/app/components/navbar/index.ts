import { Component, Input, AfterViewInit, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { NgModel } from '@angular/forms';
import { SourceService } from '@/services/source';
import { GlobalService } from '@/services/global';
import { DocumentItem } from '@/interfaces/manifest';
import { debounceTime, map } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';
import { NavBaseComponent } from '../nav-base';
import { escapeHtml, escapeRE } from 'markdown-it/lib/common/utils';

/** 搜索结果 */
interface SearchResult {
    /** 标题 */
    title: string;
    /** 副标题 */
    subtitle: string;
    /** 文档 */
    item: DocumentItem;
    /** 得分 */
    score: number;
}
/** 搜索中间结果 */
type Candidate = {
    score: number;
    item: DocumentItem;
    matchContentIndex: number;
    matchTitleIndex: number;
    endOfFm: number;
};
/** 搜索 */
class Searcher {
    constructor(readonly documents: DocumentItem[], readonly keyword: string) {
        this.keywordRe = new RegExp(escapeRE(escapeHtml(this.keyword)), 'g');
    }
    private readonly keywordRe;

    /** 搜索结果 */
    private readonly candidates: Candidate[] = [];

    /** 获取评分 */
    private getCandidate(item: DocumentItem): Candidate | null {
        if (item['redirect to']) return null;

        const matchTitleIndex = item.title.indexOf(this.keyword);

        let endOfFm = item.content.indexOf('\n---\n', 5);
        if (endOfFm < 0) endOfFm = 0;
        else endOfFm += 5;

        const matchContentIndex = item.content.indexOf(this.keyword, endOfFm);

        const cT = matchTitleIndex < 0 ? 0 : matchTitleIndex === 0 ? 100 : 30;
        const cC = matchContentIndex < 0 ? 0 : matchContentIndex === 0 ? 10 : 3;
        const score = cT + cC;
        if (score <= 0) return null;
        return { score, item, matchTitleIndex, matchContentIndex, endOfFm };
    }

    /** 获取评分 */
    private getResult(c: Candidate): SearchResult {
        const title =
            c.matchTitleIndex < 0
                ? escapeHtml(c.item.title)
                : escapeHtml(c.item.title).replace(this.keywordRe, `<mark>$&</mark>`);

        let contentStart = c.endOfFm;
        if (c.matchContentIndex >= 0) {
            const offset = Math.max(10 - this.keyword.length / 1.2, 1);
            contentStart = Math.max(c.matchContentIndex - offset, contentStart);
        }
        const subtitle =
            c.matchContentIndex < 0
                ? escapeHtml(c.item.content.slice(contentStart, contentStart + 100))
                : escapeHtml(c.item.content.slice(contentStart, c.matchContentIndex + 80)).replace(
                      this.keywordRe,
                      `<mark>$&</mark>`,
                  );
        return {
            score: c.score,
            item: c.item,
            title,
            subtitle,
        };
    }

    /** 递归搜索 */
    private searchList(documents: DocumentItem[], parentSearch: boolean | undefined): void {
        for (const item of documents) {
            const searchable = item.search ?? parentSearch;
            if (searchable !== false) {
                const candidate = this.getCandidate(item);
                if (candidate != null) this.candidates.push(candidate);
            }
            this.searchList(item.children, searchable);
        }
    }

    /** 搜索 */
    search(): SearchResult[] {
        this.searchList(this.documents, undefined);
        this.candidates.sort((a, b) => b.score - a.score);
        return this.candidates.slice(0, 10).map((v) => this.getResult(v));
    }
}

/**
 * 显示md文档
 */
@Component({
    selector: 'app-navbar',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class NavbarComponent extends NavBaseComponent implements AfterViewInit {
    constructor(readonly source: SourceService, readonly global: GlobalService) {
        super();
    }
    @ViewChild('searchInput') readonly searchInput!: MatInput;
    @ViewChild('searchModel') readonly searchModel!: NgModel;

    /** 显示分类 */
    @Input() showCategories = true;

    searchResults!: Observable<SearchResult[]>;
    /** @inheritdoc */
    ngAfterViewInit(): void {
        this.searchResults = combineLatest([
            this.global.language,
            this.source.current,
            this.searchModel.valueChanges as Observable<string>,
        ]).pipe(
            debounceTime(500),
            map(([lang, info, value]) => {
                if (typeof value !== 'string') return [];
                value = value.trim();
                if (!value) return [];
                return new Searcher(info.manifest.sitemap[lang].children, value).search();
            }),
        );
    }

    /** 导航栏列表 */
    readonly nav = combineLatest([this.global.language, this.source.current]).pipe(
        map(([lang, info]) => info.manifest.sitemap[lang].children.filter((c) => c.order != null)),
    );

    /** 选中搜索项 */
    onSelect(value: SearchResult): void {
        this.onNavigate(value.item);
        this.searchInput.value = '';
    }
}
