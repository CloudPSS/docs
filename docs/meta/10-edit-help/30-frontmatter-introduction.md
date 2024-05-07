---
title: Front-matter 介绍
---

Front-matter 是文件最上方以 `---` 分隔的区域，用于指定文件的元数据。

示例如下：

```yaml front-matter
---
title: 写作说明
description: 本文档介绍了如何使用 Markdown 编写文档。

hide_table_of_contents: false
unlisted: false
draft: false

tags:
- tag1
- tag2
---

```

具体使用说明见以下介绍。

## 标题 `title`

文章的标题，用于网页标题和页面顶部的大标题，有最高的搜索权重。

Front-matter 之后可以直接开始正文，大标题将依据 `title` 生成，不需要重复书写。

由于大标题使用 `<h1>` (`#`), 后续小标题请直接从 `<h2>` (`##`) 开始编号：

```md subtitles
# 不要使用

## 标题 2

### 标题 3

#### 标题 4

##### 标题 5

###### 标题 6
```

> ## 标题 2
> 
> ### 标题 3
> 
> #### 标题 4
> 
> ##### 标题 5
> 
> ###### 标题 6

## 描述 `description`

文章的描述，在链接预览中显示。未指定时，将使用文章的第一段作为描述。

## 隐藏 TOC `hide_table_of_contents`

指定为 `true` 时，文章右侧的目录将隐藏。

## 隐藏 `unlisted`

指定为 `true` 时，文章将不会出现在侧边栏中，只能通过链接访问。

## 草稿 `draft`

指定为 `true` 时，文章将只在调试时可用，不会生成至网站中。

## 标签 `tags`

文章的标签，用于分类和搜索。可以指定多个标签。

## 其他

更多 Front-matter 选项请参考 [Docusaurus 官方文档](https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter)。