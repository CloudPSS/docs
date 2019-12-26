(async () => {
    const sls = Object.keys((await (await fetch("/sitemap.json")).json())[""].name)
    if(sls.indexOf('zh') < 0){
        sls.splice(0, sls.length, 'zh')
    }
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
    console.info(`Redirecting to ${newLocation}`)
    location.replace(newLocation)
})()
