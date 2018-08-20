---
title: Hexo 标签语法介绍 
author: 刘正元
author_email: lzy@live.in 
date: 2018-08-18 14:23:34
---

## 引用
扩展了 MarkDown 的引用功能，以显示更丰富的样式。

如：
```md pullquote
{% pullquote tip %}
tip
{% pullquote question %}
question
{% endpullquote %}
{% endpullquote %}

{% pullquote info %}
info
{% endpullquote %}

{% pullquote success %}
success
{% endpullquote %}

{% pullquote fail %}
fail
{% endpullquote %}
```
效果：
{% pullquote tip %}
tip
{% pullquote question %}
question
{% endpullquote %}
{% endpullquote %}

{% pullquote info %}
info
{% endpullquote %}

{% pullquote success %}
success
{% endpullquote %}

{% pullquote fail %}
fail
{% endpullquote %}

## Raw
在 Raw 标签内部将停用 Hexo 语法扩展的解析。
```md raw
{% raw %}
content
{% endraw %}
```

## 媒体
使用 [hexo-tag-owl](https://github.com/m80126colin/hexo-tag-owl) 插入媒体。

```md hexo owl media
{% owl youtube 4-5xmxI8fWA %}
{% owl youku XMTQ2MjU2NTU2OA  %}
{% owl vimeo 111114712 %}
{% owl bilibili av27150168 %}
{% owl giphy 9NLYiOUxnKAJLIycEv %}
```
效果：

{% owl youtube 4-5xmxI8fWA %}
{% owl youku XMTQ2MjU2NTU2OA  %}
{% owl vimeo 111114712 %}
{% owl bilibili av27150168 %}
{% owl giphy 9NLYiOUxnKAJLIycEv %}

## 杂项
详见 <https://hexo.io/zh-cn/docs/tag-plugins>。

```md hexo extensions
{% gist 7fc91f7e717920d4ab7561cbd12586bf %}

{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}
```

效果：

{% gist 7fc91f7e717920d4ab7561cbd12586bf %}

{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}

