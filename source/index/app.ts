//import Vue from '../../../../node_modules/vue/types/index';

(async function ()
{
    interface DownloadResource
    {
        name: string,
        desc: string?,
        upload: Date,
        link: string,
    }
    
    var vueApp = new Vue({
        el: '#vueapp',
        data:
        {
            records: null as (null | Array<FormattedSearchRecord>),
            term: '',
            failed: false,
            loadedPercent: 0,
            suggestOpen: false,
            sitemap: null as (null | SiteMap)
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
                if (!match || !this.term.trim())
                    return;
                if (match.title === this.term.trim() || this.matches.length === 1)
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
})();