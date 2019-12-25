---
title: Front-matter 介绍 
author: lzy 
author_email: lzy@live.in 
date: 2018-08-08 12:23:34 
---
Front-matter 是文件最上方以 `---` 分隔的区域，用于指定文件的元数据。

示例如下：
```yaml post header 
---
## 基本数据
title: 写作说明 
author: lzy 
author_email: lzy@live.in

date: 2018-08-08 12:23:34 
updated: 2018-08-09 12:23:34 

full_footer: true
sidebar: true

## 分类信息
type: components
category: 3001
order: 10

## “元件说明”文章专用
classname: _Abs 
symbol: Abs 
---
```

具体使用说明见以下分类介绍。

## 基本数据
### 标题 `title`
文章的标题，用于网页标题和页面顶部的大标题，有最高的搜索权重。

Front-matter 之后可以直接开始正文，大标题将依据 `title` 生成，不需要重复书写。

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

### 作者信息 `author` `author_email`

用于页面底部的作者联系信息，登录 <http://cn.gravatar.com> 上传头像，头像与 `author_email` 关联。

- `author`

  作者名字，置空隐藏作者；
  
- `author_email`

  作者联系邮箱，置空使用 CloudPSS 官方邮箱。
  {% pullquote info %}
  官方邮箱通过 `_config.yml` 文件中的 `contact` 字段指定。
  {% endpullquote %}

### 创作时间信息 `date` `updated`

页面的创建和编辑时间信息，未指定时将使用创建和编辑时间。

{% pullquote tip %}
强烈建议显式指定这些数据。
由于 git 本身不保存文件的创建和编辑时间，如不显式指定这些值，网页部署以后显示的创建和编辑时间将会改变。
{% endpullquote %}

### 页面布局 `full_footer` `sidebar`

- `full_footer`

  指定是否显示完整页脚，默认为 `false`，当显示完整页脚时，作者和编辑信息将被隐藏。
- `sidebar`

  指定是否显示页面左侧的侧边栏，默认为 `true`。

{% pullquote info %}
效果可参考[完整页脚 / 隐藏侧边栏样例](full-footer-no-sidebar.html)。
{% endpullquote %}

## 分类信息

### 文章类型 `type`

应与文件夹名字相同。

### 文章分类 `category`

文章分类编号，也可置空或省略此项。

{% pullquote tip %}
文章的类型和分类应先在 `source/_data/sitemap.yml` 中定义。

编辑 `sitemap.yml` 文件时需要注意：
- 使用 [[Space]] 而非 [[Tab]] 进行缩进；
- **类型**的命名只允许使用==小写==字母（`a-z`）、数字（`0-9`）和连字符（`-`）；
- **分类**的编号需为整数；
- 类型和分类的排序决定了其在页面目录的显示顺序。 
{% endpullquote %}

### 文章排序 `order` 
序号小的在前，序号相同则使用标题排序。
