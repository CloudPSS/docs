---
title: 超链接
description: 超链接控件
tags:
- xstudio
- appstudio
- widgets
---

本节主要介绍 AppStudio 控件库里的超链接控件。

![超链接控件](hyperlink-control.png "超链接控件")


## 属性

**CloudPSS** 提供了一套统一的控件属性参数

### 通用样式

import CommonStyle from '../../60-grid/_common-style.md'

<CommonStyle />


### 样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 大小 | `size` |  | 选择样式大小 | 选择 | 样式大小：S、M、L、XL，默认为 M |
| 下划线 | `attribute/quiet` |  | 下划线开关 | 开关 | 默认为否，不显示下划线 |
| 背景 | `attribute/over-background` |  | 背景开关 | 开关 | 默认为否 |


### 文本样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 文字字体 | `style/font-family` |  | 选择文字字体 | 选择 | 标签文字字体样式，字体类型包括：默认、宋体、黑体、楷体、微软雅黑、Georgia、Palatino Linotype、Times New Roman、Arial、Arial Black、Verdana、Courier New、Trebuchet MS |
| 文字间距 | `style/letter-spacing` |  | 输入文字间距 | 常量 | 文字间距 |
| 文字字号 | `style/font-size` |  | 输入文字字号 | 常量 | 输入文字字号 |
| 默认颜色 | `style/--spectrum-link-primary-m-text-color` |  | 文本默认颜色 | 颜色选择器 | 点击默认颜色，弹出颜色选择器自定义文本默认颜色 |
| 按下颜色 | `style/--spectrum-link-primary-m-text-color-down` |  | 文本按下颜色 | 颜色选择器 | 点击按下颜色，弹出颜色选择器自定义文本按下颜色 |
| 悬浮颜色 | `style/--spectrum-link-primary-m-text-color-hover` |  | 文本悬浮颜色 | 颜色选择器 | 点击悬浮颜色，弹出颜色选择器自定义文本悬浮颜色 |
| 文字粗细 | `style/font-weight` |  | 选择文字粗细 | 选择 | 选择标签文字粗细，默认、100、200、300、400、500、600、700、800、900、1000 |


### 内容

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 文本 | `innerText` |  | 控件文本内容 | 常量 | 按钮控件文本内容，默认为：Click Me! |
| 链接 | `href` |  | 控件链接 | 常量 | 按钮控件链接 |
| 目标 | `target` |  | 超链接 | 常量 | 超链接打开的位置：`_blank` 表示在新窗口打开；`self` 表示在当前窗口打开；默认为 `_blank` |
| 禁用 | `disabled` |  | 禁用开关 | 开关 | 禁用选择**开**或者**关**，开启后控件禁止点击和交互，默认为**关** |


### 事件

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 点击 | `@click` |  | 当点击时触发 | 函数 | 采用点击方式触发函数 |

## 案例介绍

### 跳转链接到 CloudPSS 首页

1. 创建一个超链接控件，在右侧的属性配置区内给超链接命名为 A

2. 鼠标选中超链接 A 的内容/链接属性栏，输入 `https://www.cloudpss.net`

3. 点击工具栏的预览快捷超链接(或者 <kbd>Ctrl</kbd> + <kbd>P</kbd> )，进入预览模式，点击超链接即可跳转到 **CloudPSS** 首页

![创建超链接控件](create-hyperlink-control.png "创建超链接控件")

![配置超链接属性](change-hyperlink-attributes.png "配置超链接属性")

![预览模式](preview-mode.png "预览模式")


## 常见问题



import Fx from '../../60-grid/_expression.md'

<Fx />



import Event from '../../60-grid/_event.md'

<Event />

