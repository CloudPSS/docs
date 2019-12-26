(async () => {
    const sls = Object.keys((await (await fetch("/sitemap.json")).json())[""].name)
    let newLocation = '/zh/'
    let cl = localStorage.lang || 'zh'
    if (sls.indexOf(cl) < 0)
        cl = 'zh'
    let pl: string | undefined = location.pathname.split('/')[1]
    const data = location.pathname.split('/').slice(1)
    if (sls.indexOf(pl) < 0)
        pl = undefined
    else
        data.shift()
    const path = data.join('/')
    if (pl === cl) {
        if (cl === 'zh')
            newLocation = `/zh/`
        else
            newLocation = `/zh/${path}?notTranslated=${cl}`
    } else if (!pl)
        newLocation = `/${cl}/${path}`
    else {
        if (cl === 'zh')
            newLocation = `/zh/${path}?notTranslated=${cl}`
        else
            newLocation = `/${cl}/`
    }
    document.body.innerHTML = `Redirecting to <a href="${newLocation}">${newLocation}</a>`
    location.replace(newLocation)
})()