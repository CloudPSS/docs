(function ()
{
    const link = document.getElementById('footer-author-link') as HTMLLinkElement;
    if (link)
    {
        const data = link.getAttribute('data');
        link.removeAttribute('data');
        let herfSet = false;
        function setHref()
        {
            if (herfSet)
                return;
            herfSet = true;
            link.href = 'mailto:' + atob(atob(atob(data)));
        }
        link.addEventListener('focus', setHref);
        link.addEventListener('pointerover', setHref);
        window.addEventListener('beforeprint', setHref);
        window.addEventListener('touchstart', setHref);
    }
})();