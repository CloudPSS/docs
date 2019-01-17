(function ()
{
    const link = document.querySelector("body > footer a[data]") as HTMLAnchorElement;
    if (!link)
        return;
        
    const data = (link.getAttribute('data') || '').trim();
    link.removeAttribute('data');
    if (!data)
        return;
            
    const maillink = 'mailto:' + atob(atob(atob(data)));
    const op = { once: true };
    window.addEventListener('beforeprint', setLink, op);
    document.addEventListener('touchstart', setLink, op);
    document.addEventListener('mouseover', setLink, op);
    
    function setLink()
    {
        link.href = maillink;
    }
})();