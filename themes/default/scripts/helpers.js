hexo.extend.helper.register('title', function(page){
  if(!page)
    page = this.page;
  let mapped_title = '';
  let sitemap = hexo.locals.get('data').sitemap;
  if(page.type && !page.title && page.path.endsWith('index.html'))
    mapped_title = sitemap[page.type].name;
  else
    mapped_title = (page.title || '').trim();
  return mapped_title;
});

hexo.extend.helper.register('is_index', function(page){
  if(!page)
    page = this.page;
  return page.path.endsWith('index.html');
});

const cdn = new URL(hexo.config.cdn_url);

hexo.extend.helper.register('jscdn', function(path, canMinify = true)
{
  const min = (!hexo.config.debug_mode && canMinify) ? '.min' : '';
  const url = new URL(`${path}${min}`, cdn);
  return `<script src="${url.href}.js" crossorigin="anonymous"></script>`;
});

hexo.extend.helper.register('csscdn', function (path, canMinify = true)
{
  const min = (!hexo.config.debug_mode && canMinify) ? '.min' : '';
  const url = new URL(`${path}${min}`, cdn);
  return `<link rel="stylesheet" href="${url.href}.css" crossorigin="anonymous" />`
});
