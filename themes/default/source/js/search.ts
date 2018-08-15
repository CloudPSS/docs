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

    const req = new XMLHttpRequest();
    let succeed = false;
    req.open('get', '/search.json');
    req.onload = function (ev)
    {
        if (this.status == 200)
        {
            succeed = true;
            initSearch(JSON.parse(this.response));
        }
    }
    req.onloadend = function ()
    {
        if (!succeed)
            suggest.innerHTML = '<span class="failed"></span>';
    }
    req.send();

    const queryinput = document.getElementById('search-query') as HTMLInputElement;
    const suggest = document.getElementById('search-suggest') as HTMLUListElement;

    queryinput.addEventListener('focus', () => { suggest.classList.add('open') });
    queryinput.addEventListener('blur', () => { setTimeout(() => { suggest.classList.remove('open') }, 50) });

    function initSearch(rawData: ReadonlyArray<SearchRecord>)
    {
        let data = rawData.filter(r => { return !!r.title }).map(r =>
        {
            const d = r as FormattedSearchRecord;
            d.formattedContent = r.content.toLowerCase();
            d.formattedTitle = r.title.toLowerCase();
            return d;
        });
        let currentTerms = null;
        function refreshCandidates()
        {
            const nextTerms = queryinput.value.toLowerCase();
            if (currentTerms && (currentTerms.trim() === nextTerms.trim()))
                return;
            currentTerms = nextTerms;

            const terms = nextTerms.split(/\s+/g).filter(function (s) { return s !== '' });
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
            data.forEach(r => { r.score = getScore(r); });
            data.sort((a, b) => { return b.score - a.score; });
            while (suggest.firstChild)
                suggest.removeChild(suggest.firstChild)
            for (const record of data)
            {
                if (suggest.childNodes.length >= 8)
                    break;
                if (record.score === 0)
                    break;
                const htmlCandidate = document.createElement('li');
                htmlCandidate.innerHTML = (record.title || record.content.substr(0, 20).trim()).link(record.url);
                suggest.appendChild(htmlCandidate);
            }
            if (!suggest.firstChild)
                suggest.innerHTML = '<span class="no-result"></span>';
        }
        refreshCandidates();

        queryinput.addEventListener('input', refreshCandidates);
        queryinput.addEventListener('focus', refreshCandidates);
    }
})();