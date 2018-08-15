declare const PAGE_TYPE: string;

(function ()
{
  checkBrowser();
  initMobileMenu()
  initVideos()
  if (PAGE_TYPE && !IS_INDEX)
  {
    initSubHeaders()
  }
  
  function checkBrowser()
  {
    var $buoop = {required:{e:-1,f:-1,o:-3,s:0,c:-3},insecure:true,unsupported:true,style:"bottom",api:2018.08 }; 
    function $buo_f(){ 
      var e = document.createElement("script"); 
      e.src = "//browser-update.org/update.min.js"; 
      document.body.appendChild(e);
    };
    try {document.addEventListener("DOMContentLoaded", $buo_f, false)}
    catch(e){window.attachEvent("onload", $buo_f)}
  }

  function initVideos()
  {
    const containers = document.querySelectorAll('.video-container, .owl-video');
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

  /**
   * Mobile burger menu button and gesture for toggling sidebar
   */
  function initMobileMenu()
  {
    const sidebar = document.querySelector('.sidebar')
    const menuButton = document.getElementById('mobile-menu-button')
    const tocButton = document.getElementById('mobile-toc-button')
    const toc = document.getElementById('nav-toc')

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
        if (xDiff > 0 && start.x <= 60)
        {
          sidebar.classList.add('open');
          toc.classList.remove('open');
        }
        else if (xDiff < 0 && start.x >= document.body.clientWidth - 60)
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
    const main = document.getElementById('main')
    const header = document.getElementById('header')
    const sidebar = document.querySelector('.sidebar')
    const content = document.querySelector('.content')

    // build sidebar
    const currentPageAnchor = sidebar.querySelector('.sidebar-link.current') as HTMLElement;
    const contentClasses = document.querySelector('.content').classList;
    if (currentPageAnchor)
    {
      var allHeaders = new Array<HTMLHeadingElement>();
      const sectionContainer = document.createElement('ul');
      sectionContainer.className = 'menu-sub';
      currentPageAnchor.parentNode.appendChild(sectionContainer);
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

      var animating = false;
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

    let hoveredOverSidebar = false;
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
    window.addEventListener('load', () => { updateSidebar(true) })

    function updateSidebar(shouldScrollIntoView?: boolean)
    {
      const doc = document.getElementById('main');
      const top = doc && doc.scrollTop || document.body.scrollTop
      if (animating || !allHeaders) return;
      let last: HTMLHeadingElement;
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
      const link = document.createElement('li')

      const text = Array.from(h.childNodes).map(function (node)
      {
        if (node.nodeType === Node.TEXT_NODE)
        {
          return node.nodeValue;
        }
        else if (['CODE', 'SPAN'].indexOf(node.nodeName) !== -1)
        {
          return node.textContent;
        }
        else
        {
          return ''
        }
      }).join('').replace(/\(.*\)$/, '');
      link.innerHTML = `<a class="section-link" data-scroll href="#${h.id}">${htmlEscape(text)}</a>`;
      return link;
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

    if (options.transform)
      return options.transform(result);
    else
      return result;
  }
})()
