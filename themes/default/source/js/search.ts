(function ()
{
    interface SearchRecord
    {
        url: string;
        content: string;
        title?: string;
        score?: number;
    }

    const req = new XMLHttpRequest();
    req.open('get', '/search.json');
    req.onload = function (ev)
    {
        if (this.status == 200)
        {
            initSearch(JSON.parse(this.response));
        }
    }
    req.send();

    function initSearch(data: Array<SearchRecord>)
    {
        data = data.filter(r=>{return !!r.title});
        const queryinput = document.getElementById('search-query') as HTMLInputElement;
        const suggest = document.getElementById('search-suggest') as HTMLUListElement;
        let currentTerms = null;
        function refreshCandidates()
        {
            const nextTerms = queryinput.value;
            if (currentTerms && currentTerms.trim() === nextTerms.trim())
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
            function getScore(record: SearchRecord)
            {
                return match(record.title) * 10 + match(record.content);
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
        queryinput.addEventListener('input', refreshCandidates);
        queryinput.addEventListener('focus', refreshCandidates);

        queryinput.addEventListener('focus', () => { suggest.classList.add('open') });
        queryinput.addEventListener('blur', () => { setTimeout(() => { suggest.classList.remove('open') }, 200) });
        suggest.addEventListener('focus', () => { suggest.classList.add('focus') });
        queryinput.addEventListener('blur', () => { setTimeout(() => { suggest.classList.remove('focus') }, 200) });
    }
})();