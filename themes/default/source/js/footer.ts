(function ()
{
    const link = document.querySelector("body > footer .author[data]") as HTMLSpanElement;
    if (link)
    {
        const data = (link.getAttribute('data') || '').trim();
        link.removeAttribute('data');
        if (!data)
            return;
        const mail = atob(atob(atob(data)));
        const mailspan = document.createElement('span');
        mailspan.innerText = `(${mail})`;
        mailspan.classList.add('print-only');
        link.addEventListener('click', () =>
        {
            const win = window.open('mailto:' + mail, 'emailWindow');
            setTimeout(() => { if (win && win.open && !win.closed) win.close(); }, 100);
        });
        window.addEventListener('beforeprint', () =>
        {
            link.appendChild(mailspan);
        });
        window.addEventListener('afterprint', () =>
        {
            link.removeChild(mailspan);
        });
    }
})();