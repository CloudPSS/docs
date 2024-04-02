---
title: MarkDown 语法介绍
---

## Front-matter

[Front-matter 介绍](../30-frontmatter-intro.md)

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

## 列表

使用 `- ` 构建无序列表，使用 `1. ` 构建有序列表。通过缩进构建列表及列表内容的嵌套关系。

为了避免有序列表序号超过一位数导致缩进量变化，应当始终使用一位数字对有序列表编号。最后渲染的实际数字与编号无关。

对于包含复杂内容的列表，应当在每个元素间保留一行空行。

```md
复杂有序列表：

1. Item 1

1. Item 2

1. Item 3
   1. Sub Item 1  
      description of sub item 1
   1. Sub Item 2
      
      description of sub item 2, in a seperate paragraph.
   1. Sub Item 3

1. Item 4

简单无序列表：
- Item
- Item  
  description of item
- Item

```

> 复杂有序列表：
> 1. Item 1
> 
> 1. Item 2
> 
> 1. Item 3
>    1. Sub Item 1  
>       description of sub item 1
>    1. Sub Item 2
>       
>       description of sub item 2, in a seperate paragraph.
>    1. Sub Item 3
> 
> 1. Item 4
> 
> 简单无序列表：
> - Item
> - Item  
>   description of item
> - Item

## 公式

使用 [$\KaTeX$](https://github.com/Khan/KaTeX) 引擎插件渲染，兼容 $\LaTeX$ 公式，对 $\LaTeX$ 的支持情况见 [Things that $\KaTeX$ does not (yet) support](https://github.com/Khan/KaTeX/wiki/Things-that-KaTeX-does-not-(yet)-support)。使用 `$` 插入行内公式，使用 `$$` 插入行间公式，插入行间公式时，`$$` 必须位于独立的行。

```md
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

## 链接和图片

### 链接

添加链接时使用 `[text](url "title")` 语法。

- `text` 为链接文本，可嵌套其他 MarkDown 语法；
- `title` 为鼠标悬停时的提示文本，可省略；

### 图片

引用图片时使用 `![alt text =size](path "title")` 语法。

图片显示规则如下：

- 当图片上下为空行时，图片将居中显示；
- `title` 为鼠标悬停时的提示文本，可省略；
- `alt text` 为图片题注，可省略；
- `=size` 用于指定图片尺寸，可省略，具体使用方法见下文。

如 `![alt-text =x100](intro1.png "Title")` 得到 

![alt-text =x100](intro1.png "Title")

:::info

可以使用以下语法指定图片的尺寸：
- 指定最大宽度  
  `![alt text =200x](intro1.png "Title")`
- 指定最大高度  
  `![alt text =x100](intro1.png "Title")`

对于文档系统外的图片，需要同时指定宽度和高度，否则显示效果可能受文档样式影响。

:::

### URL

使用 `cloudpss:` 协议创建指向主站的链接，如：

```md
[IEEE39](cloudpss:/model/CloudPSS/IEEE39)
```

以上链接在部署到公网时解析为 `https://cloudpss.net/model/CloudPSS/IEEE39`；部署到内网时解析为 `/model/CloudPSS/IEEE39`。
 
:::tip
对于指向文档系统内部的链接，包括超链接和图片，一般应使用相对路径，并指定到文件。如：

```md
[CloudPSS 同步电机标幺值和有名值系统](../60-other/10-SyncGenPerUnitSystem.md)
[Park 变换器](./10-comp_newParkTransform.md)
```

不要写：
```md
[CloudPSS 同步电机标幺值和有名值系统](../other/SyncGenPerUnitSystem)
[Park 变换器](comp_newParkTransform)
```

参考 [docusaurus 文档](https://docusaurus.io/docs/markdown-features/links)
:::



## 表格

支持表格功能。

如：

```md
| First Header | Second Header | Third Header |
| ------------ | :-----------: | -----------: | {/* 使用 `:` 调整某一列的对齐方式 */}
| Content      |  _Long Cell_  | Cell         |
| Content      |   **Cell**    | Cell         |
| Content      |   **Cell**    | Cell         |
```

效果：

| First Header | Second Header | Third Header |
| ------------ | :-----------: | -----------: |
| Content      |  _Long Cell_  | Cell         |
| Content      |   **Cell**    | Cell         |
| Content      |   **Cell**    | Cell         |

## 文本居中

```md
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

## 脚注

如：

```md
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

- **粗体**：`**bold**` **bold**
- **斜体**：`*italic*` *italic*
- **代码**：`` `code` `` `code`
- **插入与删除**：`++Inserted++` ++Inserted++；`~~Del~~` ~~Del~~
- **[Emoji](https://www.webpagefx.com/tools/emoji-cheat-sheet/)**：`:smile:` :smile:
- **标记**：`<mark>mark</mark>` <mark>mark</mark>
- **键盘按键**：`<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd>` <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd>
- **下标**：`H<sub>2</sub>O` H<sub>2</sub>O
- **上标**：`x<sup>2</sup>` x<sup>2</sup>
- **分隔线**：`---`（独立一行放置）
---
