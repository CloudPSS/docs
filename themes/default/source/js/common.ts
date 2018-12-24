declare const PAGE_TYPE: string;
declare const IS_INDEX: boolean;
declare const FastClick: any;
declare const Chart: any;
declare const mermaid: any;
declare const mxEvent: any;
declare const Editor: any;
declare const Graph: any;
declare const mxConstants: any;
declare const mxUtils: any;
declare const mxStencilRegistry: any

(function ()
{
    const DOMContentLoaded: () => Promise<void> = (function ()
    {
        let isReady = false;
        let waiting = new Array<() => void>();
        document.addEventListener('DOMContentLoaded', function ()
        {
            isReady = true;
            for (const cb of waiting)
                cb();
            waiting = [];
        }, false);

        return function DOMContentLoaded(): Promise<void>
        {
            if (isReady)
                return Promise.resolve();
            return new Promise(function (resolve)
            {
                waiting.push(resolve);
            });
        }
    })();

    document.addEventListener('DOMContentLoaded', function () { FastClick.attach(document.body) }, false);
    initMobileMenu();
    initSubHeaders();
    initVideos();
    initImages();
    initTables();
    initFlowAndChart();
    initMxGraph();
    initFootnotes();

    function initFootnotes()
    {
        Array.from(document.querySelectorAll('sup.footnote-ref > a') as NodeListOf<HTMLAnchorElement>).forEach(a =>
        {
            a.innerText = a.innerText.replace(/:\d+/, '');
        });
    }

    function initFlowAndChart()
    {
        Array.from(document.querySelectorAll("canvas.chartjs")).forEach((e) => 
        {
            try
            {
                new Chart(e, JSON.parse(e.textContent || ''))
            }
            catch (t)
            {
                e.outerHTML = `<p class="chart-error" title="${htmlEscape(t.toString())}">${e.textContent}</p>`;
            }
        });
        Array.from(document.querySelectorAll("div.mermaid")).forEach((e) => 
        {
            e.setAttribute('data-mermaid', e.innerHTML);
        });

        const config = { theme: 'forest' };
        mermaid.initialize(config);
    }

    async function initVideos()
    {
        await DOMContentLoaded();
        const containers = document.querySelectorAll('#main .video-container, .owl-video');
        for (const container of Array.from(containers))
        {
            const video = container.querySelector('iframe, embed') as HTMLIFrameElement | HTMLEmbedElement;
            if (!video) continue;
            const hint = document.createElement('p');
            hint.innerText = video.src;
            hint.classList.add('video-hint')
            container.appendChild(hint);
        }
    }

    function initImages()
    {
        const containers = <NodeListOf<HTMLImageElement>>document.querySelectorAll('#article img');
        for (const container of Array.from(containers))
        {
            const title = container.title || '';
            const alt = container.alt || '';
            if (alt && !title)
                container.title = container.alt;
            if (alt && title)
            {
                const box = document.createElement('figure');
                const cap = document.createElement('figcaption');
                cap.innerText = title;
                container.title = alt;
                box.setAttribute('id', title)
                box.appendChild(container.cloneNode());
                box.appendChild(cap);
                if (container.nextSibling instanceof HTMLElement && container.nextSibling.tagName == "BR")
                    container.nextSibling.remove();
                container.replaceWith(box);
            }
            container.style.maxHeight = formatValue(container.getAttribute('height'));
            container.removeAttribute('height');
        }

        function formatValue(v?: null | string)
        {
            if (!v || v.endsWith('%'))
                return '';
            if (v.endsWith('px'))
                return v;
            return v + 'px';
        }
    }

    function initTables()
    {
        const containers = <NodeListOf<HTMLImageElement>>document.querySelectorAll('#article table caption[id]');
        for (const container of Array.from(containers))
        {
            container.parentElement.id = container.innerText.replace(/\s/g, '-');
            container.id = '';
        }
    }

    /**
     * Mobile burger menu button and gesture for toggling sidebar
     */
    function initMobileMenu()
    {
        const sidebar = document.querySelector('.sidebar');
        const menuButton = document.getElementById('mobile-menu-button');
        const tocButton = document.getElementById('mobile-toc-button');
        const toc = document.getElementById('nav-toc');

        if (toc)
        {
            if (tocButton)
                tocButton.addEventListener('click', () => { toc.classList.toggle('open') });
        }

        if (sidebar)
        {
            if (menuButton)
                menuButton.addEventListener('click', () => sidebar.classList.toggle('open'));
        }

        if (sidebar || toc)
        {
            document.body.addEventListener('click', function (e)
            {
                if (e.target !== menuButton && sidebar && !sidebar.contains(e.target as Node))
                {
                    sidebar.classList.remove('open')
                }
                if (e.target !== tocButton && toc && !toc.contains(e.target as Node))
                {
                    toc.classList.remove('open')
                }
            });

            class Point
            {
                x: number = 0;
                y: number = 0;
            }
            // Toggle sidebar on swipe
            const start = new Point(), end = new Point();

            document.body.addEventListener('touchstart', function (e)
            {
                start.x = e.changedTouches[0].clientX
                start.y = e.changedTouches[0].clientY
            })

            document.body.addEventListener('touchend', function (e)
            {
                end.y = e.changedTouches[0].clientY
                end.x = e.changedTouches[0].clientX

                const xDiff = end.x - start.x
                const yDiff = end.y - start.y

                if (Math.abs(xDiff) > Math.abs(yDiff))
                {
                    if (xDiff > 0 && start.x <= 20)
                    {
                        if (sidebar) sidebar.classList.add('open');
                        if (toc) toc.classList.remove('open');
                    }
                    else if (xDiff < 0 && start.x >= document.body.clientWidth - 20)
                    {
                        if (sidebar) sidebar.classList.remove('open')
                        if (toc) toc.classList.add('open');
                    }
                    else
                    {
                        if (sidebar) sidebar.classList.remove('open')
                        if (toc) toc.classList.remove('open');
                    }
                }
            });
        }
    }


    /**
     * Sub headers in sidebar
     */
    function initSubHeaders()
    {
        if (IS_INDEX)
            return;

        let animating = false;
        let hoveredOverSidebar = false;

        const main = <HTMLElement>document.getElementById('main');
        const sidebar = <HTMLElement>document.querySelector('.sidebar');
        const content = <HTMLElement>document.querySelector('.content');

        // build sidebar
        const currentPageAnchor = <HTMLElement>sidebar.querySelector('.sidebar-link.current');
        const allHeaders = new Array<HTMLHeadingElement>();
        if (currentPageAnchor)
        {
            const sectionContainer = document.createElement('ul');
            sectionContainer.className = 'menu-sub';
            currentPageAnchor.parentNode!.appendChild(sectionContainer);
            let headers = Array.from(content.querySelectorAll('h2'));
            if (headers.length)
            {
                headers.forEach(function (h)
                {
                    sectionContainer.appendChild(makeLink(h))
                    const h3s = collectH3s(h)
                    allHeaders.push(h)
                    allHeaders.push.apply(allHeaders, h3s)
                    if (h3s.length)
                    {
                        sectionContainer.appendChild(makeSubLinks(h3s))
                    }
                })
            }
            else
            {
                headers = Array.from(content.querySelectorAll('h3'));
                headers.forEach(function (h)
                {
                    sectionContainer.appendChild(makeLink(h))
                    allHeaders.push(h)
                })
            }

            sectionContainer.addEventListener('click', function (e)
            {

                // Not prevent hashchange for smooth-scroll
                // e.preventDefault()
                const target = e.target as HTMLElement;
                if (target.classList.contains('section-link'))
                {
                    sidebar.classList.remove('open')
                    setActive(target)
                    animating = true
                    setTimeout(function ()
                    {
                        animating = false;
                    }, 400)
                }
            }, true)
        }

        sidebar.addEventListener('mouseover', function ()
        {
            hoveredOverSidebar = true;
        })
        sidebar.addEventListener('mouseleave', function ()
        {
            hoveredOverSidebar = false;
        })

        // listen for scroll event to do positioning & highlights
        main.addEventListener('scroll', () => { updateSidebar(true) })
        window.addEventListener('resize', () => { updateSidebar(true) })
        window.addEventListener('DOMContentLoaded', () => { updateSidebar(true) })
        window.addEventListener('load', () => { updateSidebar(true) })

        function updateSidebar(shouldScrollIntoView?: boolean)
        {
            const doc = document.getElementById('main');
            const top = doc && doc.scrollTop || document.body.scrollTop
            if (animating || !allHeaders) return;
            let last: HTMLHeadingElement | null = null;
            for (let i = 0; i < allHeaders.length; i++)
            {
                const link = allHeaders[i]
                if (link.offsetTop > top)
                {
                    if (!last)
                        last = link;
                    break;
                }
                else
                {
                    last = link;
                }
            }
            if (last)
                setActive(last.id, shouldScrollIntoView || !hoveredOverSidebar)
        }

        function makeLink(h: HTMLHeadingElement)
        {
            h = <HTMLHeadingElement>h.cloneNode(true);

            const link = document.createElement('li')

            function mapper(node: Node)
            {
                if (node.nodeType === Node.TEXT_NODE)
                {
                    return node;
                }
                for (const cnode of node.childNodes)
                    node.replaceChild(mapper(cnode), cnode);
                if (node instanceof HTMLElement && ['A'].indexOf(node.nodeName) !== -1)
                {
                    const span = document.createElement('span');
                    span.setAttribute('role', 'a');
                    span.innerHTML = node.innerHTML;
                    return span;
                }
                return node;
            }

            mapper(h);
            link.innerHTML = `<a class="section-link" href="#${h.id}">${h.innerHTML}</a>`;
            Array.from(h.querySelectorAll('.katex-mathml')).forEach(n => n.remove());
            link.title = h.textContent || '';
            return link;
        }

        function collectH3s(h: HTMLHeadingElement)
        {
            const h3s = new Array<HTMLHeadingElement>();
            let next = h.nextSibling;
            while (next && next.nodeName !== 'H2')
            {
                if (next.nodeName === 'H3')
                    h3s.push(next as HTMLHeadingElement);
                next = next.nextSibling;
            }
            return h3s;
        }

        function makeSubLinks(h3s: ReadonlyArray<HTMLHeadingElement>)
        {
            const container = document.createElement('ul')
            h3s.forEach(function (h)
            {
                container.appendChild(makeLink(h));
            })
            return container;
        }

        function setActive(id: string | HTMLElement, shouldScrollIntoView = false)
        {
            var previousActive = sidebar.querySelector('.section-link.active') as HTMLElement;
            var currentActive = typeof id === 'string'
                ? sidebar.querySelector('.section-link[href="#' + id + '"]') as HTMLElement
                : id;
            if (currentActive !== previousActive)
            {
                if (previousActive) previousActive.classList.remove('active');
                currentActive.classList.add('active');
                if (shouldScrollIntoView)
                {
                    var currentPageOffset = currentPageAnchor
                        ? currentPageAnchor.offsetTop - 8
                        : 0;
                    sidebar.scrollTop = currentPageOffset - 48;
                }
            }
        }
    }

    function initMxGraph()
    {
        (<any>window).mxLoadStylesheets = false;
        (<any>window).mxLoadResources = false;

        async function loadMxGraph(container: HTMLElement, padding?: number)
        {
            padding = padding || 0;
            const getshape = fetchShape(<string>container.getAttribute('symbol'));
            await DOMContentLoaded();

            const graph = new Graph(container, null, null, null);
            graph.resetViewOnRootChange = false;
            graph.foldingEnabled = false;
            graph.gridEnabled = false;
            graph.autoScroll = false;
            graph.setTooltips(false);
            graph.setConnectable(false);
            graph.setEnabled(false);
            // Sets the base style for all vertices
            const style = graph.getStylesheet().getDefaultVertexStyle();
            style[mxConstants.STYLE_ROUNDED] = true;
            style[mxConstants.STYLE_FILLCOLOR] = '#ffffff';
            style[mxConstants.STYLE_STROKECOLOR] = '#000000';
            style[mxConstants.STYLE_STROKEWIDTH] = '2';
            style[mxConstants.STYLE_FONTCOLOR] = '#000000';
            style[mxConstants.STYLE_FONTSIZE] = '12';
            style[mxConstants.STYLE_FONTSTYLE] = 1;
            graph.getStylesheet().putDefaultVertexStyle(style);

            const shape = (await getshape).shape;
            const firstChild = <Element>shape.firstChild;
            mxStencilRegistry.parseStencilSet(firstChild);
            const parent = graph.getDefaultParent();
            const width = Number(firstChild.getAttribute('w'));
            const height = Number(firstChild.getAttribute('h'));

            graph.getModel().beginUpdate();
            try
            {
                graph.insertVertex(parent, null, '', 0, 0, width, height, 'shape=' + (firstChild.getAttribute('name') || '').toLowerCase());
            }
            finally
            {
                graph.getModel().endUpdate();
            }
            const svg = container.getElementsByTagName("svg")[0];
            svg.setAttribute('viewBox', [-padding, -padding, width + padding * 2, height + padding * 2].join(','));
            svg.style.minWidth = svg.viewBox.baseVal.width / 4 + 'px';
            svg.style.minHeight = svg.viewBox.baseVal.height / 4 + 'px';
            svg.style.maxWidth = container.style.maxWidth || svg.viewBox.baseVal.width * 2 + 'px';
            svg.style.maxHeight = container.style.maxHeight || svg.viewBox.baseVal.height * 2 + 'px';
            container.style.maxWidth = '';
            container.style.maxHeight = '';
        };

        const tasks = Array.from(document.getElementsByTagName("mx-graph")).map(c => loadMxGraph(c as HTMLElement));
        
        // no `finally` for polyfills
        if(tasks.length !== 0)
            Promise.all(tasks)
                .then(() => mxEvent.release(document))
                .catch(() => mxEvent.release(document));
    }

    function fetchJsonP<T>(url: string | URL): Promise<T>
    {
        const urlData = (typeof url === 'string') ? new URL(url) : url;
        urlData.searchParams.set('callback', 'resolve');
        return new Promise(async function (resolve, reject)
        {
            const response = await fetch(urlData.href);
            eval(await response.text());
        })
    }

    interface ShapeData
    {
        classname: string;
        shape: Document;
    }

    async function fetchShape(symbol: string): Promise<ShapeData>
    {
        interface ShapeResponse
        {
            classname: string;
            shape: string;
        }
        const data = await fetchJsonP<ShapeResponse>(`${BASE}/editor/getCompShapeBySym/?sym=${symbol}`);
        return {
            classname: data.classname,
            shape: new DOMParser().parseFromString(data.shape, 'text/xml')
        };
    }

    interface CompModel
    {

    }

    function fetchCompModel(classname: string): Promise<CompModel>
    {
        return fetchJsonP(`${BASE}/editor/getCompModelByClassname/?classname=${classname}`);
    }

    // Stolen from: https://github.com/hexojs/hexo-util/blob/master/lib/escape_regexp.js
    function escapeRegExp(str: string)
    {
        // http://stackoverflow.com/a/6969486
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    }

    // Stolen from: https://github.com/hexojs/hexo-util/blob/master/lib/slugize.js
    function slugize(str: string, options?: { separator?: string; transform?: ((input: string) => string); })
    {
        const option = options || {}

        const rControl = /[\u0000-\u001f]/g
        const rSpecial = /[\s~`!@#\$%\^&\*\(\)\-_\+=\[\]\{\}\|\\;:"'<>,\.\?\/]+/g
        const separator = option.separator || '-'
        const escapedSep = escapeRegExp(separator)

        var result = str
            // Remove control characters
            .replace(rControl, '')
            // Replace special characters
            .replace(rSpecial, separator)
            // Remove continuous separators
            .replace(new RegExp(escapedSep + '{2,}', 'g'), separator)
            // Remove prefixing and trailing separators
            .replace(new RegExp('^' + escapedSep + '+|' + escapedSep + '+$', 'g'), '')

        if (options && options.transform)
            return options.transform(result);
        else
            return result;
    }

    function htmlEscape(text: string)
    {
        return text
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
    }
})()

