(function ()
{
  initMobileMenu()
  if (PAGE_TYPE)
  {
    initSubHeaders()
  }

  /**
   * Mobile burger menu button and gesture for toggling sidebar
   */
  function initMobileMenu()
  {
    var sidebar = document.querySelector('.sidebar')
    var menuButton = document.getElementById('mobile-menu-button')
    var tocButton = document.getElementById('mobile-toc-button')
    var toc = document.getElementById('nav-toc')

    tocButton.addEventListener('click', () => { toc.classList.toggle('open') })

    menuButton.addEventListener('click', function ()
    {
      sidebar.classList.toggle('open')
    })

    document.body.addEventListener('click', function (e)
    {
      if (e.target !== menuButton && !sidebar.contains(e.target))
      {
        sidebar.classList.remove('open')
      }
      if (e.target !== tocButton && !toc.contains(e.target))
      {
        toc.classList.remove('open')
      }
    })

    // Toggle sidebar on swipe
    var start = {}, end = {}

    document.body.addEventListener('touchstart', function (e)
    {
      start.x = e.changedTouches[0].clientX
      start.y = e.changedTouches[0].clientY
    })

    document.body.addEventListener('touchend', function (e)
    {
      end.y = e.changedTouches[0].clientY
      end.x = e.changedTouches[0].clientX

      var xDiff = end.x - start.x
      var yDiff = end.y - start.y

      if (Math.abs(xDiff) > Math.abs(yDiff))
      {
        if (xDiff > 0 && start.x <= 80) sidebar.classList.add('open')
        else sidebar.classList.remove('open')
      }
    })
  }


  /**
   * Sub headers in sidebar
   */
  function initSubHeaders()
  {
    var each = [].forEach
    var main = document.getElementById('main')
    var header = document.getElementById('header')
    var sidebar = document.querySelector('.sidebar')
    var content = document.querySelector('.content')

    // build sidebar
    var currentPageAnchor = sidebar.querySelector('.sidebar-link.current')
    var contentClasses = document.querySelector('.content').classList
    var isAPIOrStyleGuide = (
      contentClasses.contains('api') ||
      contentClasses.contains('style-guide')
    )
    if (currentPageAnchor || isAPIOrStyleGuide)
    {
      var allHeaders = []
      var sectionContainer
      if (isAPIOrStyleGuide)
      {
        sectionContainer = document.querySelector('.menu-root')
      } else
      {
        sectionContainer = document.createElement('ul')
        sectionContainer.className = 'menu-sub'
        currentPageAnchor.parentNode.appendChild(sectionContainer)
      }
      var headers = content.querySelectorAll('h2')
      if (headers.length)
      {
        each.call(headers, function (h)
        {
          sectionContainer.appendChild(makeLink(h))
          var h3s = collectH3s(h)
          allHeaders.push(h)
          allHeaders.push.apply(allHeaders, h3s)
          if (h3s.length)
          {
            sectionContainer.appendChild(makeSubLinks(h3s, isAPIOrStyleGuide))
          }
        })
      } else
      {
        headers = content.querySelectorAll('h3')
        each.call(headers, function (h)
        {
          sectionContainer.appendChild(makeLink(h))
          allHeaders.push(h)
        })
      }

      var animating = false
      sectionContainer.addEventListener('click', function (e)
      {

        // Not prevent hashchange for smooth-scroll
        // e.preventDefault()

        if (e.target.classList.contains('section-link'))
        {
          sidebar.classList.remove('open')
          setActive(e.target)
          animating = true
          setTimeout(function ()
          {
            animating = false
          }, 400)
        }
      }, true)

      // make links clickable
      allHeaders
        .filter(function (el)
        {
          if (!el.querySelector('a'))
          {
            return false
          }
          var demos = [].slice.call(document.querySelectorAll('demo'))
          return !demos.some(function (demoEl)
          {
            return demoEl.contains(el)
          })
        })
        .forEach(makeHeaderClickable)

      smoothScroll.init({
        speed: 400,
        offset: 0
      })
    }

    var hoveredOverSidebar = false
    sidebar.addEventListener('mouseover', function ()
    {
      hoveredOverSidebar = true
    })
    sidebar.addEventListener('mouseleave', function ()
    {
      hoveredOverSidebar = false
    })

    // listen for scroll event to do positioning & highlights
    window.addEventListener('scroll', updateSidebar)
    window.addEventListener('resize', updateSidebar)
    window.addEventListener('load', () => { updateSidebar(true) })

    function updateSidebar(shouldScrollIntoView)
    {
      var doc = document.documentElement
      var top = doc && doc.scrollTop || document.body.scrollTop
      if (animating || !allHeaders) return
      var last
      for (var i = 0; i < allHeaders.length; i++)
      {
        var link = allHeaders[i]
        if (link.offsetTop > top)
        {
          if (!last) last = link
          break
        } else
        {
          last = link
        }
      }
      if (last)
        setActive(last.id, shouldScrollIntoView || !hoveredOverSidebar)
    }

    function makeLink(h)
    {
      var link = document.createElement('li')
      window.arst = h
      var text = [].slice.call(h.childNodes).map(function (node)
      {
        if (node.nodeType === Node.TEXT_NODE)
        {
          return node.nodeValue
        } else if (['CODE', 'SPAN'].indexOf(node.tagName) !== -1)
        {
          return node.textContent
        } else
        {
          return ''
        }
      }).join('').replace(/\(.*\)$/, '')
      link.innerHTML =
        '<a class="section-link" data-scroll href="#' + h.id + '">' +
        htmlEscape(text) +
        '</a>'
      return link
    }

    function htmlEscape(text)
    {
      return text
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
    }

    function collectH3s(h)
    {
      var h3s = []
      var next = h.nextSibling
      while (next && next.tagName !== 'H2')
      {
        if (next.tagName === 'H3')
        {
          h3s.push(next)
        }
        next = next.nextSibling
      }
      return h3s
    }

    function makeSubLinks(h3s, small)
    {
      var container = document.createElement('ul')
      if (small)
      {
        container.className = 'menu-sub'
      }
      h3s.forEach(function (h)
      {
        container.appendChild(makeLink(h))
      })
      return container
    }

    function setActive(id, shouldScrollIntoView)
    {
      var previousActive = sidebar.querySelector('.section-link.active')
      var currentActive = typeof id === 'string'
        ? sidebar.querySelector('.section-link[href="#' + id + '"]')
        : id
      if (currentActive !== previousActive)
      {
        if (previousActive) previousActive.classList.remove('active')
        currentActive.classList.add('active')
        if (shouldScrollIntoView)
        {
          var currentPageOffset = currentPageAnchor
            ? currentPageAnchor.offsetTop - 8
            : 0
          var currentActiveOffset = currentActive.offsetTop + currentActive.parentNode.clientHeight
          var sidebarHeight = sidebar.clientHeight
          var currentActiveIsInView = (
            currentActive.offsetTop >= sidebar.scrollTop &&
            currentActiveOffset <= sidebar.scrollTop + sidebarHeight
          )
          var linkNotFurtherThanSidebarHeight = currentActiveOffset - currentPageOffset < sidebarHeight
          var newScrollTop = currentActiveIsInView
            ? sidebar.scrollTop
            : linkNotFurtherThanSidebarHeight
              ? currentPageOffset
              : currentActiveOffset - sidebarHeight
          sidebar.scrollTop = newScrollTop
        }
      }
    }

    function makeHeaderClickable(header)
    {
      var link = header.querySelector('a')
      link.setAttribute('data-scroll', '')

      // transform DOM structure from
      // `<h2><a></a>Header</a>` to <h2><a>Header</a></h2>`
      // to make the header clickable
      var nodes = Array.prototype.slice.call(header.childNodes)
      for (var i = 0; i < nodes.length; i++)
      {
        var node = nodes[i]
        if (node !== link)
        {
          link.appendChild(node)
        }
      }
    }
  }

  // Stolen from: https://github.com/hexojs/hexo-util/blob/master/lib/escape_regexp.js
  function escapeRegExp(str)
  {
    if (typeof str !== 'string') throw new TypeError('str must be a string!');

    // http://stackoverflow.com/a/6969486
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
  }

  // Stolen from: https://github.com/hexojs/hexo-util/blob/master/lib/slugize.js
  function slugize(str, options)
  {
    if (typeof str !== 'string') throw new TypeError('str must be a string!')
    options = options || {}

    var rControl = /[\u0000-\u001f]/g
    var rSpecial = /[\s~`!@#\$%\^&\*\(\)\-_\+=\[\]\{\}\|\\;:"'<>,\.\?\/]+/g
    var separator = options.separator || '-'
    var escapedSep = escapeRegExp(separator)

    var result = str
      // Remove control characters
      .replace(rControl, '')
      // Replace special characters
      .replace(rSpecial, separator)
      // Remove continuous separators
      .replace(new RegExp(escapedSep + '{2,}', 'g'), separator)
      // Remove prefixing and trailing separators
      .replace(new RegExp('^' + escapedSep + '+|' + escapedSep + '+$', 'g'), '')

    switch (options.transform)
    {
      case 1:
        return result.toLowerCase()
      case 2:
        return result.toUpperCase()
      default:
        return result
    }
  }
})()
