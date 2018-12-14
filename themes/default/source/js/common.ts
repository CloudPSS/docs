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
declare const mxStencilRegistry: any;

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

    function DOMContentLoaded(): Promise<void>
    {
      if (isReady)
        return Promise.resolve();
      return new Promise(function (resolve)
      {
        waiting.push(resolve);
      });
    }

    return DOMContentLoaded;
  })();

  document.addEventListener('DOMContentLoaded', function () { FastClick.attach(document.body) }, false);
  initMobileMenu();
  initSubHeaders();
  initVideos();
  initImages();
  initFlowAndChart();
  initMxGraph();

  function initFlowAndChart()
  {
    document.querySelectorAll("canvas.chartjs").forEach((e) => 
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
    document.querySelectorAll("div.mermaid").forEach((e) => 
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
    const containers = <NodeListOf<HTMLImageElement>>document.querySelectorAll('#main img');
    for (const container of Array.from(containers))
    {
      if (!container.title)
        container.title = container.alt;
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

  /**
   * Mobile burger menu button and gesture for toggling sidebar
   */
  function initMobileMenu()
  {
    const sidebar = <HTMLElement>document.querySelector('.sidebar');
    const menuButton = <HTMLElement>document.getElementById('mobile-menu-button');
    const tocButton = <HTMLElement>document.getElementById('mobile-toc-button');
    const toc = <HTMLElement>document.getElementById('nav-toc');

    tocButton.addEventListener('click', () => { toc.classList.toggle('open') })

    menuButton.addEventListener('click', function ()
    {
      sidebar.classList.toggle('open')
    })

    document.body.addEventListener('click', function (e)
    {
      if (e.target !== menuButton && !sidebar.contains(e.target as Node))
      {
        sidebar.classList.remove('open')
      }
      if (e.target !== tocButton && !toc.contains(e.target as Node))
      {
        toc.classList.remove('open')
      }
    })

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
          sidebar.classList.add('open');
          toc.classList.remove('open');
        }
        else if (xDiff < 0 && start.x >= document.body.clientWidth - 20)
        {
          sidebar.classList.remove('open')
          toc.classList.add('open');
        }
        else
        {
          sidebar.classList.remove('open')
          toc.classList.remove('open');
        }
      }
    })
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
      let headers = content.querySelectorAll('h2');
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
        headers = content.querySelectorAll('h3')
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

    async function loadMxGraph(container: Element, padding?: number)
    {
      padding = padding || 12;
      const getshape = fetchShape(<string>container.getAttribute('symbol'));
      await DOMContentLoaded();

      // Disables the built-in context menu
      mxEvent.disableContextMenu(container);
      const editor = new Editor();
      // Creates the graph inside the given container
      const graph = new Graph(container, null, null, editor.graph.getStylesheet());
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
      svg.viewBox.baseVal.width = width + padding * 2;
      svg.viewBox.baseVal.height = height + padding * 2;
      svg.viewBox.baseVal.x = -padding;
      svg.viewBox.baseVal.y = -padding;
      svg.style.minWidth = svg.viewBox.baseVal.width + 'px';
      svg.style.minHeight = svg.viewBox.baseVal.height + 'px';
      svg.style.maxWidth = svg.viewBox.baseVal.width * 2 + 'px';
      svg.style.maxHeight = svg.viewBox.baseVal.height * 2 + 'px';
    };

    for (const container of Array.from(document.getElementsByTagName("mx-graph")))
      loadMxGraph(container);
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
    const data = await fetchJsonP<ShapeResponse>(`http://192.168.0.133/editor/getCompShapeBySym/?sym=${symbol}`);
    return {
      classname: data.classname,
      shape: mxUtils.parseXml(data.shape)
    };
  }

  interface CompModel
  {

  }

  function fetchCompModel(classname: string): Promise<CompModel>
  {
    return fetchJsonP(`http://192.168.0.133/editor/getCompModelByClassname/?classname=${classname}`);
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

