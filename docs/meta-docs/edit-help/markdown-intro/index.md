---
title: MarkDown 语法介绍
sidebar_position: 100
---

## Front-matter

[Front-matter 介绍](../frontmatter-intro.md)

## 换行与分段

在一行的末尾添加两个空格来换行，使用一个空行来分段。

```md
一行的内容
不会因为换行断开

需要在行末  
添加两个空格
```

一行的内容
不会因为换行断开

需要在行末  
添加两个空格

## 公式

使用 [$\KaTeX$](https://github.com/Khan/KaTeX) 引擎插件渲染，兼容 $\LaTeX$ 公式，对 $\LaTeX$ 的支持情况见 [Things that $\KaTeX$ does not (yet) support](https://github.com/Khan/KaTeX/wiki/Things-that-KaTeX-does-not-(yet)-support)。使用 `$` 插入行内公式，使用 `$$` 插入行间公式。

```tex equation
行内公式：$\sin{x}$  
行间公式：
$$ 
\sum_{{i=1}}^n a_i = 0
$$
渲染错误的公式 $\error$。
```

效果：

> 行内公式：$\sin{x}$  
> 行间公式：
> $$ 
> \sum_{{i=1}}^n a_i = 0
> $$
> 渲染错误的公式 $\error$。

## 链接

:::tip
对于指向文档系统内部的链接，包括超链接和图片，一般应使用相对路径。如：

```md
<!-- in /zh-hans/components/comp_newClarkTransform.md-->

[CloudPSS 同步电机标幺值和有名值系统](../other/SyncGenPerUnitSystem.md)
[Park 变换器](comp_newParkTransform.md)
```

:::


## 图片

引用图片时使用 `![alt text](path "title")` 语法。

图片显示规则如下：

- 当图片上下为空行时，图片将居中显示；
- `title` 为鼠标悬停时的提示文本；
- `alt text` 为图片题注。

如 `![alt-text](intro1.png "Title")` 得到 

![alt-text](intro1.png "Title")

## 重用内容

可以将 MarkDown 文件内容导入。导入声明上下必须各有一行空白行。

```tsx

import Intro from '../edit-help/markdown-intro/index.md';

<Intro/>

```


## 媒体

使用 `![alt-text](provider:id_or_url)` 语法插入媒体。

```md media
![](youtube:_QobdWOa02o)

![](youku:XMTQ2MjU2NTU2OA)

![](vimeo:111114712)

![](bilibili:https://www.bilibili.com/video/av27150168/)

![](tencent:w3156zebhpv)
```

效果：

![](youtube:_QobdWOa02o)

![](youku:XMTQ2MjU2NTU2OA)

![](vimeo:111114712)

![](bilibili:https://www.bilibili.com/video/av27150168/)

![](tencent:w3156zebhpv)


## 表格

支持表格功能。

如：

```md table
| First Header | Second Header | Third Header |
| ------------ | :-----------: | -----------: |
| Content      |  _Long Cell_  |              |
|              |   **Cell**    |         Cell |
| Content      |   **Cell**    |              |

```

效果：

| First Header | Second Header | Third Header |
| ------------ | :-----------: | -----------: |
| Content      |  _Long Cell_  |              |
|              |   **Cell**    |         Cell |
| Content      |   **Cell**    |              |

## 文本居中

```md center
<center>
centered  
text
</center>
```

效果

> <center>
> centered  
> text
> </center>

## 代码

语法如下：

````markdown codeblock
```[语言]

```
````

可用的 `[语言]` 包括 `plain` `tex` `md` `yaml` `js` `html` `css` `c` `cpp` `csharp` `pyhton` `matlab`……

使用 `title="标题"` 可以添加标题，使用 `{}` 可以高亮指定行，使用 `showLineNumbers` 可以显示行号。

如：

````md
```jsx title="a simple js script" {1,4-6,11} showLineNumbers
import React from 'react';

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
}

export default MyComponent;
```
````

效果：

```jsx title="a simple js script" {1,4-6,11} showLineNumbers
import React from 'react';

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
}

export default MyComponent;
```

## 脚注

如：

```md footnote
定义一个脚注：
[^test-platform]: 测试平台为 NVIDIA(R) Tesla(R) V100

    使用缩进来产生多行内容

在文中使用脚注：
测试[^test-platform]结果如下[^test-platform]：……
```

效果：

> 定义一个脚注：
> [^test-platform]: 测试平台为 NVIDIA(R) Tesla(R) V100
> 
>     使用缩进来产生多行内容
> 
> 在文中使用脚注：
> 测试[^test-platform]结果如下[^test-platform]：……

## 杂项

- **下标**：`H<sub>2</sub>0` H<sub>2</sub>0
- **上标**：`x<sup>2</sup>` x<sup>2</sup>
- **标记**：`<mark>mark</mark>` <mark>mark</mark>
- **插入与删除**：`++Inserted++` ++Inserted++；`~~Del~~` ~~Del~~
- **[Emoji](https://www.webpagefx.com/tools/emoji-cheat-sheet/)**：`:smile:` :smile:
- **键盘按键**：`<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd>` <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd>
- 其他标准 MarkDown 语法不再赘述。
