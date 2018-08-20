//import Vue from 'vue';

(async function ()
{
    interface SearchRecord
    {
        url: string;
        content: string;
        title: string;
    }

    class FormattedSearchRecord implements SearchRecord
    {
        url: string;
        content: string;
        score = 0;
        formattedTitle: string;
        formattedContent: string;
        title: string;

        constructor(record: SearchRecord)
        {
            this.url = record.url;
            this.content = record.content;
            this.formattedContent = this.content.toLowerCase();
            this.title = record.title;
            this.formattedTitle = this.title.toLowerCase();
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
                if(!match)
                    return;
                if(!this.term.trim() || match.title !== this.term.trim())
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
    
    await getFile('/search.json')
    const req = new XMLHttpRequest();
    req.open('get', '/search.json');
    req.onprogress = function (ev)
    {
        if (ev.lengthComputable)
          vueApp.loadedPercent = event.loaded / event.total * 100;
    };
    req.onload = function (ev)
    {
        if (this.status == 200)
        {
            vueApp.succeed = true;
            vueApp.loadedPercent = 100;
            let records = (<SearchRecord[]>JSON.parse(this.response));
            records.forEach(r => {
                r.title = (r.title || '').trim();
                r.content = (r.content || '').trim();
            });
            vueApp.records = records.filter(r => r.title).map(r =>
            {
                return new FormattedSearchRecord(r);
            });
        }
    };
    req.onloadend = function ()
    {
        if (!vueApp.succeed)
            vueApp.failed = true;
    }
    req.send();
    
    function getFile(path: string, progress: (progressPercent: number) => void)
    {
        const p = new Promise();
        const req = new XMLHttpRequest();
        let succeed = false;
        req.open('get', path);
        req.onprogress = function (ev)
        {
            if (ev.lengthComputable && progress)
                progress.call(p, event.loaded / event.total * 100);
        };
        req.onload = function (ev)
        {
            try
            {
                if (this.status == 200)
                {
                    p.accept(JSON.parse(this.response));
                    succeed = true;
                }
            }
            catch(ex)
            {
                p.reject(ex);
            }
        };
        req.onloadend = function ()
        {
            if (!succeed)
                p.reject();
        }
        req.send();
        return p;
    }
})();