(function ()
{
    const link = document.getElementById('footer-author-link') as HTMLLinkElement;
    if (link)
    {
        const data = link.getAttribute('data');
        link.removeAttribute('data');
        setTimeout(() => { link.href = 'mailto:' + atob(atob(atob(data))) }, 2000);
    }
})();