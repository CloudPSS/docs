import Vue from '../../../../node_modules/vue/types/index';

(async function ()
{

    interface SearchRecord
    {
        url?: string;
        content?: string;
        title?: string;
        categories?: string[];

        extend?: string;
    }

    class FormattedSearchRecord
    {
        url: string;
        content: string;
        categories: string[];
        score = 0;
        formattedTitle: string;
        formattedContent: string;
        title: string;
        extend: string;

        constructor(record: SearchRecord)
        {
            this.url = record.url || '';
            this.content = (record.content || '').trim();
            this.formattedContent = this.content.toLowerCase();
            this.title = (record.title || '').trim();
            this.formattedTitle = this.title.toLowerCase();
            this.categories = record.categories || [];
            this.extend = record.extend || '';
        }
    }

    const queryinput = document.getElementById('search-query') as HTMLInputElement;
    const suggest = document.getElementById('search-suggest') as HTMLUListElement;
    queryinput.addEventListener('focus', () => { suggest.classList.add('open') });
    queryinput.addEventListener('blur', () => { setTimeout(() => { suggest.classList.remove('open') }, 50) });

    var vueApp = new Vue({
        el: '#search-form',
        data:
        {
            records: null as (null | Array<FormattedSearchRecord>),
            term: '',
            failed: false,
            succeed: false,
            loadedPercent: 0,
            suggestOpen: false
        },
        methods:
        {
            showSuggest()
            {
                this.suggestOpen = true;
            },
            hideSuggest()
            {
                setTimeout(() =>
                {
                    this.suggestOpen = false;
                }, 100);
            },
            submit()
            {
                let match = this.matches[0];
                if (!match)
                    return;
                if (!this.term.trim() || match.title !== this.term.trim())
                    return;
                window.location.pathname = match.url;
            }
        },
        computed:
        {
            matches: function (): Array<FormattedSearchRecord>
            {
                if (!this.records || this.records.length === 0)
                    return new Array<FormattedSearchRecord>();
                const terms = this.term.split(/\s+/g).filter(function (s) { return s !== '' });
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
                    return match(record.formattedTitle) * 10 + match(record.formattedContent);
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
        let data = await getFile('/search.json', p => vueApp.loadedPercent = p) as SearchRecord[];
        vueApp.loadedPercent = 100;
        vueApp.succeed = true;
        vueApp.records = data.filter(r => r.title).map(r => new FormattedSearchRecord(r));
    }
    catch
    {
        vueApp.failed = true;
    }

    function getFile(path: string, progress?: (progressPercent: number) => void)
    {
        return new Promise((resolve, reject) =>
        {
            const req = new XMLHttpRequest();
            let succeed = false;
            req.open('get', path);
            req.onprogress = function (ev)
            {
                if (ev.lengthComputable && progress)
                    progress.call(p, ev.loaded / ev.total * 100);
            };
            req.onload = function (ev)
            {
                try
                {
                    if (this.status == 200)
                    {
                        resolve(JSON.parse(this.response));
                        succeed = true;
                    }
                }
                catch (ex)
                {
                    reject(ex);
                }
            };
            req.onloadend = function (ev)
            {
                if (!succeed)
                    reject(this.statusText);
            }
            req.send();
        });
    }
})();