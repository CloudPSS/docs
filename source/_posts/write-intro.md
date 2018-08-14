---
title: 写作说明 # 文章标题
author: 刘正元 # 作者名字，置空隐藏作者
author_email: lzy@live.in # 作者联系邮箱，置空使用 CloudPSS 官方邮箱
date: 2018-08-08 12:23:34 # 创建时间，置空使用文件创建时间
updated: 2018-08-09 12:23:34 # 最后修改时间，置空使用文件最后修改时间
---
## 文章结构 
文章头部包含了文章的元数据。

示例如下：
```yaml post header
---
title: 写作说明 # 文章标题
author: 刘正元 # 作者名字，置空隐藏作者
author_email: lzy@live.in # 作者联系邮箱，置空使用 CloudPSS 官方邮箱

date: 2018-08-08 12:23:34 # 创建时间，置空使用文件创建时间
updated: 2018-08-09 12:23:34 # 最后修改时间，置空使用文件最后修改时间

type: components # 文章类型，应与文件夹名字相同，也可置空以隐藏左侧文章列表
order: 10 #文章排序，序号小的在前，序号相同则使用标题排序
full_footer: true #页脚模式，默认为 false

# “元件说明”文章专用
classname: _Abs 
symbol: Abs 
---
```

{% pullquote info %}
`full_footer: true` 的页面可参考 [Full Footer](/posts/full-footer.html)。
{% endpullquote %}

之后可以直接开始正文，大标题将依据 `title` 生成，不需要重复书写。
[^end]: 往下看:arrow_lower_right:

与作者和时间相关的元数据的显示效果可参考本页末尾[^end]，登录 <http://cn.gravatar.com> 上传头像，头像与 `author_email` 关联。

由于大标题使用 `<h1>`(`#`), 后续小标题请直接从 `<h2>`(`##`) 开始编号：
```md subtitles
# 不要使用
## 标题2
### 标题3
#### 标题4
##### 标题5
###### 标题6
```
## 标题2
### 标题3
#### 标题4
##### 标题5
###### 标题6

## MarkDown 语法扩展

### 公式

使用 [$\KaTeX$](https://github.com/Khan/KaTeX) 引擎和 [markdown-it-katex](https://github.com/iktakahiro/markdown-it-katex) 插件渲染，兼容 $\LaTeX$ 公式，对 $\LaTeX$ 的支持情况见 [Things that $\KaTeX$ does not (yet) support](https://github.com/Khan/KaTeX/wiki/Things-that-KaTeX-does-not-(yet)-support)。使用 `$` 插入行内公式，使用 `$$` 插入行间公式。
```tex equation
行内公式：$\sin{x}$  
行间公式：:arrow_left: ==注意行间公式需要**独行书写**==
$$ \sum_{i=1}^n a_i=0 $$
... :arrow_left: ==同理，行间公式结束后也需要换行==
对于渲染错误的公式 $\error$，将鼠标悬浮其上以查看错误信息。
```
效果：
> 行内公式：$\sin{x}$  
> 行间公式：:arrow_left: ==注意行间公式需要**独行书写**==
> $$ \sum_{i=1}^n a_i=0 $$
> ... :arrow_left: ==同理，行间公式结束后也需要换行==
> 对于渲染错误的公式 $\error$，将鼠标悬浮其上以查看错误信息。

{% pullquote tip %}
{% raw %}
由于渲染引擎和预处理引擎冲突，公式中不能出现连续的 `{` 或 `}`，请使用 `{ {` 替代 `{{`，`}` 同理。

也可以使用 [Raw](#raw)。
{% endraw %}
{% endpullquote %}

### 代码

语法如下：
`````markdown codeblock
```[语言] [标题] [链接] [链接文字]
 
```
`````
由于 `[语言]` 和 `[链接]` 中不会包含空格，另两项可以任意添加空格而不影响解析。

可用的 `[语言]` 包括 `plain` `tex` `md` `yaml` `js` `html` `css` `c` `cpp` `csharp` `pyhton` `matlab`……

如：
`````md codeblock example
```js a simple js script /sample.js file: sample.js
console.log('hello world');
```
`````
效果：
```js a simple js script /sample.js file: sample.js
console.log('hello world');
```

### 引用
如：
```md quote
> Level1
> > Level2
>  <!-- 退出层级需要一行空行-->
> Level1
```
效果：
> Level1
> > Level2
>  <!-- 退出层级需要一行空行-->
> Level1

{% pullquote info %}
同理，引用结束需要一行空行。
{% endpullquote %}

### 定义
如：
```tex deflist
有效值
: 在相同的电阻上分别通过直流电流和交流电流，经过一个交流周期的时间，如果它们在电阻上所消耗的电能相等的话，则把该直流电流（电压）的大小作为交流电流（电压）的有效值。
  $$ G_{rms} = \sqrt{\frac{1}{T} \int_{-\frac{T}{2} } ^{\frac{T}{2} }{ g(t)^{2} \operatorname{d}\! t } } $$
: 正弦电流（电压）的有效值等于其最大值（幅值）的 $\frac{1}{\sqrt{2} }$ ，约 $0.707$ 倍。
```
效果：

有效值
: 在相同的电阻上分别通过直流电流和交流电流，经过一个交流周期的时间，如果它们在电阻上所消耗的电能相等的话，则把该直流电流（电压）的大小作为交流电流（电压）的有效值。
  $$ G_{rms} = \sqrt{\frac{1}{T} \int_{-\frac{T}{2} } ^{\frac{T}{2} }{ g(t)^{2} \operatorname{d}\! t } } $$
: 正弦电流（电压）的有效值等于其最大值（幅值）的 $\frac{1}{\sqrt{2} }$ ，约 $0.707$ 倍。

{% pullquote info %}
定义的前后需要空行分隔。
{% endpullquote %}

### 缩写
如：
```md abbr
定义一个缩写：
*[RMS]: 有效值
在文中使用缩写：
RMS 指有效值
```
效果：
> 定义一个缩写：
> *[RMS]: 有效值
> 在文中使用缩写：
> RMS 指有效值

### 脚注
如：
```md footnote
定义一个脚注：
[^test-platform]: 测试平台为 NVIDIA® Tesla® V100

在文中使用脚注：
测试[^test-platform]结果如下：……
```
效果：
> 定义一个脚注：
> [^test-platform]: 测试平台为 NVIDIA® Tesla® V100
> 
> 在文中使用脚注：
> 测试[^test-platform]结果如下：……

### 杂项
+ 下标：`H~2~0` H~2~0
+ 上标：`x^2^` x^2^
+ 标记：`==mark==` ==mark==
+ 插入与删除：`++Inserted++` ++Inserted++；`~~Del~~` ~~Del~~
+ [Emoji](https://www.webpagefx.com/tools/emoji-cheat-sheet/) `:smile:` :smile:
+ 其他标准 MarkDown 语法不再赘述。

## Hexo 语法扩展

### 引用
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

### Raw
在 Raw 标签内部将停用 Hexo 语法扩展的解析。
```md raw
{% raw %}
content
{% endraw %}
```

### 媒体
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

### 杂项
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

