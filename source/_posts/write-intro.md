---
title: 写作说明
author: opportunity
author_email: opportunity@live.in
date: 
updated: 
---
## 文章结构

文章头部包含了文章的元数据。

示例如下：
```yaml post-header
---
title: 写作说明 # 文章标题
type: components # 文章类型，应与文件夹名字相同，也可置空以隐藏左侧文章列表
classname: _Abs # “元件说明”文章专用
symbol: Abs # “元件说明”文章专用
author: opportunity # 作者名字
author_email: opportunity@live.in # 作者联系邮箱，置空使用 CloudPSS 官方邮箱
date: 2018-08-08 12:23:34 # 创建时间，置空使用文件创建时间
updated: 2018-08-08 12:23:34 # 最后修改时间，置空使用文件最后修改时间
---
```

之后可以直接开始正文，大标题将依据 `title` 生成，不需要重复书写。

由于大标题使用 `<h1>`(`#`), 后续小标题请直接从 `<h2>`(`##`) 开始编号：
```md post-subtitle
## 标题2
### 标题3
#### 标题4
##### 标题5
###### 标题6
```

## MarkDown 语法扩展

### 公式

使用 $\KaTeX$ 引擎渲染，兼容 $\LaTeX$ 公式。使用 `$` 插入行内公式，使用 `$$` 插入行间公式。
```tex equation
行内公式：$\sin{x}$
行间公式：<- ==注意行间公式需要独行书写==
$$\sum_{i=1}^n a_i=0$$
... <- ==同理，行间公式结束后也需要换行==
```
效果：
> 行内公式：$\sin{x}$
> 行间公式：<- ==注意行间公式需要独行书写==
> $$\sum_{i=1}^n a_i=0$$
> ... <- ==同理，行**间**公式结束后也需要换行==

{% pullquote tip %}
{% raw %}
由于渲染引擎冲突，公式中不能出现连续的 <code>{</code> 或 <code>}</code>，请使用 <code>{ {</code> 替代 <code>{{</code>，<code>}</code> 同理。
{% endraw %}
{% endpullquote %}

### 代码

语法如下：
`````markdown
```[语言] [标题] [链接] [链接文字]
 
```
`````
由于 `[语言]` 和 `[链接]` 中不会包含空格，另两项可以任意添加空格而不影响解析。
可用的 `[语言]` 包括 `plain` `tex` `md` `yaml` `js` `html` `css` `c` `cpp` `csharp` `pyhton` `matlab`……
如：
`````md
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
```md
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

{% pullquote tip %}
同理，引用结束需要一行空行。
{% endpullquote %}

### 定义
如：
```tex deflist
有效值
: 在相同的电阻上分别通过直流电流和交流电流，经过一个交流周期的时间，如果它们在电阻上所消耗的电能相等的话，则把该直流电流（电压）的大小作为交流电流（电压）的有效值。
: 正弦电流（电压）的有效值等于其最大值（幅值）的 $\frac{1}{\sqrt{2} }$ ，约 $0.707$ 倍。
```
效果：

有效值
: 在相同的电阻上分别通过直流电流和交流电流，经过一个交流周期的时间，如果它们在电阻上所消耗的电能相等的话，则把该直流电流（电压）的大小作为交流电流（电压）的有效值。
: 正弦电流（电压）的有效值等于其最大值（幅值）的 $\frac{1}{\sqrt{2} }$ ，约 $0.707$ 倍。

{% pullquote tip %}
定义的前后需要空行分隔。
{% endpullquote %}

### 缩写
如：
```md
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
```md
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
+ 插入与删除,：`++Inserted++` ++Inserted++；`~~Del~~` ~~Del~~
+ [Emoji](https://www.webpagefx.com/tools/emoji-cheat-sheet/)
+ 其他标准 MarkDown 语法不再赘述。

## Hexo 语法扩展

### 引用
如：
```md
{% pullquote tip %}
tip
{% endpullquote %}
{% pullquote success %}
success
{% endpullquote %}
```
效果：
{% pullquote tip %}
tip
{% endpullquote %}
{% pullquote success %}
success
{% endpullquote %}

### 杂项

见 <https://hexo.io/zh-cn/docs/tag-plugins>。

