//import Vue from '../../../../node_modules/vue/types/index';

(async function ()
{

    interface SearchRecord
    {
        url?: string;
        content?: string;
        title?: string;
        type?: string;
        category?: number;

        extend?: string;
    }

    interface SiteMap
    {
        [key: string]: Type;
    }

    interface Type
    {
        name: string;
        categories?: CategoryMap;
    }

    interface CategoryMap
    {
        [key: number]: string[] | undefined;
    }

    class FormattedSearchRecord
    {
        url: string;
        formattedUrl: string;
        content: string;
        categories: string[];
        score = 0;
        formattedTitle: string;
        formattedContent: string;
        title: string;
        extend: string;
        type?: string;

        constructor(record: SearchRecord, sitemap: SiteMap)
        {
            this.url = record.url || '';
            this.formattedUrl = this.url.toLowerCase();
            this.type = record.type || undefined;
            this.content = (record.content || '').trim();
            this.formattedContent = this.content.toLowerCase();
            this.title = (record.title || '').trim();
            this.formattedTitle = this.title.toLowerCase();
            this.categories = [];
            if (record.category && record.type)
            {
                let cat = sitemap[record.type].categories;
                if (cat)
                    this.categories = cat[record.category] || [];
            }
            this.extend = record.extend || '';
        }
    }

    const queryinput = document.getElementById('search-query') as HTMLInputElement;
    const suggest = document.getElementById('search-suggest') as HTMLUListElement;
    queryinput.addEventListener('focus', () => { suggest.classList.add('open') });
    queryinput.addEventListener('blur', () => { setTimeout(() => { suggest.classList.remove('open') }, 50) });

    var vueApp = new Vue({
        el: 'body > header #search-form',
        data:
        {
            records: null as (null | Array<FormattedSearchRecord>),
            term: '',
            failed: false,
            loadedPercent: 0,
            suggestOpen: 0,
            sitemap: null as (null | SiteMap)
        },
        methods:
        {
            showSuggest()
            {
                this.suggestOpen++;
            },
            hideSuggest()
            {
                setTimeout(() =>
                {
                    this.suggestOpen--;
                }, 100);
            },
            submit()
            {
                let match = this.matches[0];
                if (!match || !this.term.trim())
                    return;
                window.location.assign(match.url);
            }
        },
        computed:
        {
            succeed: function ()
            {
                return !!(this.sitemap && this.records && !this.failed);
            },
            matches: function (): Array<FormattedSearchRecord>
            {
                if (!this.records || this.records.length === 0)
                    return new Array<FormattedSearchRecord>();
                const terms = this.term.toLowerCase().split(/\s+/g).filter(function (s) { return s !== '' });
                function match(content: string): number
                {
                    if (!content)
                        return 0;
                    let score = 0;
                    terms.forEach(term =>
                    {
                        if (content.indexOf(term) >= 0)
                            score += (term.length + 1) / content.length;
                    })
                    return score;
                }
                function getScore(record: FormattedSearchRecord)
                {
                    return match(record.formattedTitle) * 10 + match(record.extend) * 5 + match(record.formattedUrl) * 5
                        + match(record.formattedContent)
                        + record.categories.reduce((sum, cat) => sum + match(cat), 0);
                }
                let records = this.records.slice();
                records.forEach(r => { r.score = getScore(r); });
                records.sort((a, b) => { return b.score - a.score; });
                records = records.splice(0, 10).filter(r => { return r.score > 0; });
                return records;
            }
        }
    })

    try
    {
        let getSearch = getJson('/search.json');
        let getSitemap = getJson('/sitemap.json');
        let data = await getSearch as SearchRecord[];
        const sitemap = await getSitemap;
        vueApp.loadedPercent = 100;
        vueApp.sitemap = sitemap;
        vueApp.records = data.filter(r => r.title).map(r => new FormattedSearchRecord(r, sitemap));
    }
    catch
    {
        vueApp.failed = true;
    }

    async function getJson(path: string): Promise<any>
    {
        const response = await fetch(path);
        if (!response.ok)
            throw new Error(response.statusText);
        return await response.json();
    }
})();