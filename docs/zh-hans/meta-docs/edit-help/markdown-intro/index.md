---
title: MarkDown 语法介绍
order: 10
---

## Front-matter

[Front-matter 介绍](../frontmatter-intro.md)

## 换行与分段

在一行的末尾添加两个空格来换行，使用一个空行来分段。

```md line breaks
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

使用 [$\KaTeX$](https://github.com/Khan/KaTeX) 引擎和 [markdown-it-math](https://github.com/runarberg/markdown-it-math) 插件渲染，兼容 $\LaTeX$ 公式，对 $\LaTeX$ 的支持情况见 [Things that $\KaTeX$ does not (yet) support](https://github.com/Khan/KaTeX/wiki/Things-that-KaTeX-does-not-(yet)-support)。使用 `$` 插入行内公式，使用 `$$` 插入行间公式。

```tex equation
行内公式：$\sin{x}$
行间公式：:arrow_left: ==注意行间公式需要**独行书写**==
$$ \sum_{i=1}^n a_i = 0 $$
... :arrow_left: ==同理，行间公式结束后也需要换行==
对于渲染错误的公式 $\error$，可以鼠标悬浮其上查看错误信息。
```

效果：

> 行内公式：$\sin{x}$  
> 行间公式：:arrow_left: ==注意行间公式需要**独行书写**==
> $$ \sum_{{i=1}}^n a_i = 0 $$
> ... :arrow_left: ==同理，行间公式结束后也需要换行==
> 对于渲染错误的公式 $\error$，可以鼠标悬浮其上查看错误信息。

## 链接

::: tip
对于指向文档系统内部的链接，包括超链接和图片，一般应使用相对路径。如：

:::

```md
<!-- in /zh-hans/components/comp_newClarkTransform.md-->

[CloudPSS 同步电机标幺值和有名值系统](../other/SyncGenPerUnitSystem.md)
[Park 变换器](comp_newParkTransform.md)
```

## 图片

引用图片时使用 `![alt text](path "title" =size)` 语法。

图片显示规则如下：

- 当图片上下为空行时，图片将居中显示；
- `title` 为鼠标悬停时的提示文本；
- `alt text` 为图片题注；
- `size` 用于指定图片尺寸，具体使用方法见下文。

如 `![alt-text](intro1.png "Title" =x100)` 得到 

![alt-text](intro1.png "Title" =x100)

可以使用题注进行交叉引用，如 `[link](#alt-text)` [link](#alt-text)。

:::: info
可以使用以下语法指定图片的尺寸：

- 指定最大宽度

  `![alt text](intro1.png "Title" =200x)`

- 指定最大高度

  `![alt text](intro1.png "Title" =x100)`

::: tip
不建议同时指定宽度和高度，可能导致图片变形。
:::
::::

## 重用内容

使用类似图片的语法，可以将 MarkDown 文件内容导入。导入声明上下必须各有一行空白行，导入声明不能包含 `alt text` `title` 等元素。

```md

![](../edit-help/markdown-intro/index.md)

![](../../about/bad.md)

```

## 媒体

使用 `@[provider](id_or_url)` 语法插入媒体。

```md media
@[youtube](_QobdWOa02o)

@[youku](XMTQ2MjU2NTU2OA)

@[vimeo](111114712)

@[bilibili](av27150168)

@[tencent](w3156zebhpv)
```

效果：

@[youtube](_QobdWOa02o)

@[youku](XMTQ2MjU2NTU2OA)

@[vimeo](111114712)

@[bilibili](av27150168)

@[tencent](w3156zebhpv)


## 表格

支持高级表格功能。

如：

```md table
[高级表格]
|              | Grouping                    ||
| First Header | Second Header | Third Header |
| ------------ | :-----------: | -----------: |
| Content      |  _Long Cell_  |              |
| ^^           |   **Cell**    |         Cell |
| Content      |   **Cell**    |           ^^ |

| New section  | More          | Data         |

如[上表](#高级表格)所示……
```

效果：

[高级表格]
|              | Grouping                    ||
| First Header | Second Header | Third Header |
| ------------ | :-----------: | -----------: |
| Content      |  _Long Cell_  |              |
| ^^           |   **Cell**    |         Cell |
| Content      |   **Cell**    |           ^^ |

| New section  | More          | Data         |

如[上表](#高级表格)所示……

::: tip
省略开头的 `[高级表格]` 将隐藏表名。
:::

## 文本居中

```md center
->centered
text<-
```

效果

> ->centered
> text<-

## 代码

语法如下：

````markdown codeblock
```[语言] [标题]

```
````

可用的 `[语言]` 包括 `plain` `tex` `md` `yaml` `js` `html` `css` `c` `cpp` `csharp` `pyhton` `matlab`……

如：

````md codeblock example
```javascript a simple js script
console.log('hello world');
```
````

效果：

```javascript a simple js script
console.log('hello world');
```

代码块也可以使用标题进行交叉引用，如 `[上文的代码](#a-simple-js-script)` [上文的代码](#a-simple-js-script)。

## 缩写

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

## 脚注

如：

```md footnote
定义一个脚注：
[^test-platform]: 测试平台为 NVIDIA(R) Tesla(R) V100

    使用缩进来产生多行内容

在文中使用脚注：
测试[^test-platform]结果如下[^test-platform]：……

如果只使用一次的话，也可以使用内联语法。^[内联脚注更方便吗？]
```

效果：

> 定义一个脚注：
> [^test-platform]: 测试平台为 NVIDIA(R) Tesla(R) V100
> 
>     使用缩进来产生多行内容
> 
> 在文中使用脚注：
> 测试[^test-platform]结果如下[^test-platform]：……
> 
> 如果只使用一次的话，也可以使用内联语法。^[内联脚注更方便吗？]

## 杂项

- **下标**：`H~2~0` H~2~0
- **上标**：`x^2^` x^2^
- **标记**：`==mark==` ==mark==
- **插入与删除**：`++Inserted++` ++Inserted++；`~~Del~~` ~~Del~~
- **[Emoji](https://www.webpagefx.com/tools/emoji-cheat-sheet/)**：`:smile:` :smile: `8-)` 8-) `(R)` (R) `(TM)` (TM)
- **键盘按键**：`[[Ctrl]]+[[Alt]]+[[Del]]` [[Ctrl]]+[[Alt]]+[[Del]]
- 其他标准 MarkDown 语法不再赘述。
