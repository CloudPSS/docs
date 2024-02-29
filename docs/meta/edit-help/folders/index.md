---
title: 文档组织
sidebar_position: 200
---

## 命名

一般情况下，文件和文件夹全部使用小写字母，多个单词使用连接号（`-`）代替空格，不要以数字开头。

:::warning

特殊情况下，可以使用大写字母等其他 ASCII 字符。

禁止使用 ASCII 范围外字符（如汉字等）作为文件、文件夹名称。

![ASCII 表](./ascii-table.svg)

:::

## 组织结构

每个文件夹中的 `index.md` 为该文件夹的默认页面，如 `/docs/meta/example/index.md` 在浏览时使用 `/meta/example/` 即可访问。

因此，当一个文档（如 `foo/bar.md`）需要包含媒体文件时，建议建立同名的文件夹（`foo/bar/`） 进行存放，并将文档移动到文件夹内（`foo/bar/index.md`）。如图：

![文件组织结构](asset-folder.jpg)

即图片存储于和页面同名（此处为`markdown-intro`）的文件夹内。

### 文档

文档内容存放于 `/docs` 文件夹。可以任意建立多层文件夹形成树形的组织结构。

### 博客

博客内容存放于 `/blog` 文件夹，使用 `YYYY/MM-dd-blog-title/` 或 `YYYY/MM-dd-blog-title.md` 存放博客文章。

### 页面

页面内容存放于 `/src/pages` 文件夹。于文档类似，请勿定义于文档 URL 冲突的页面。
