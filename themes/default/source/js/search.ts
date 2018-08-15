import Vue from 'vue'
import { TypeOfExpression } from 'typescript';

(function ()
{
    interface SearchRecord
    {
        url: string;
        content: string;
        title?: string;
        score?: number;
    }

    interface FormattedSearchRecord extends SearchRecord
    {
        formattedTitle: string;
        formattedContent: string;
        title: string;
    }

    var vueApp = new Vue({
        el: '#saerch-form',
        data:
        {
            records: null as (null | Array<FormattedSearchRecord>),
            term: '',
            failed: false,
            succeed: false
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
                        if (content.includes(term))
                            score += (term.length + 1) / content.length;
                    })
                    return score;
                }
                function getScore(record: FormattedSearchRecord)
                {
                    return match(record.formattedTitle) * 10 + match(record.formattedContent);
                }
                let records = Array.from<FormattedSearchRecord>(this.records);
                records.forEach(r => { r.score = getScore(r); });
                records.sort((a, b) => { return b.score - a.score; });
                records = records.splice(0, 10).filter(r => { return r.score > 0; });
                return records;
            }
        }
    })
    const req = new XMLHttpRequest();
    req.open('get', '/search.json');
    req.onload = function (ev)
    {
        if (this.status == 200)
        {
            vueApp.succeed = true;
            initSearch(JSON.parse(this.response));
        }
    }
    req.onloadend = function ()
    {
        if (!vueApp.succeed)
            vueApp.failed = true;
    }
    req.send();
})();