---
title: 折线图
description: 折线图控件
tags:
- xstudio
- appstudio
- widgets
---

本节主要介绍 AppStudio 控件库里的折线图控件。

![折线图控件](image.png "折线图控件")

## 属性

**CloudPSS** 提供了一套统一的控件属性参数

### 通用样式

import CommonStyle from '../../60-grid/_common-style.md'

<CommonStyle />

### 布局

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 标题-文本 | `layoutConfig/title/text` |  | 控件标题内容 | 常量 | 图标标题，默认为 新建图表 |
| 标题-文本字体 | `layoutConfig/title/font/family` |  | 控件标题文本字体 | 选择 | 标题文字字体样式，字体类型包括：默认、宋体、黑体、楷体、微软雅黑、Georgia、Palatino Linotype、Times New Roman、Arial、Arial Black、Verdana、Courier New、Trebuchet MS |
| 标题-文本大小 | `layoutConfig/title/font/size` |  | 控件标题文本大小 | 常量 | 表格标题文本大小，默认为 17 |
| 是否显示图例 | `layoutConfig/showLegend` |  | 是否显示图例开关 | 开关 | 是否显示图例开关，默认为 关 |
| 图例-宽度 | `layoutConfig/legend/borderwidth` |  | 控件图例宽度 | 常量 | 表格图例宽度，默认为 20 |
| 图例-文本字体 | `layoutConfig/legend/font/family` |  | 控件图例文本字体 | 选择 | 图例文字字体样式，字体类型包括：默认、宋体、黑体、楷体、微软雅黑、Georgia、Palatino Linotype、Times New Roman、Arial、Arial Black、Verdana、Courier New、Trebuchet MS |
| 图例-文本大小 | `layoutConfig/legend/font/size` |  | 控件图例文本大小 | 常量 | 表格标题文本大小，默认为 17 |
| 图例-项目宽度 | `layoutConfig/legend/itemwidth` |  | 控件图例项目宽度 | 常量 | 表格图例项目宽度，默认为 30 |
| 图例-布局方向 | `layoutConfig/legend/orientation` |  | 控件图例布局方向 | 选择 | 表格图例布局方向：水平、垂直；默认为 水平 |
| 整体背景颜色 | `style/--cwe-plot-background` |  | 控件整体背景颜色 | 常量 | 表格整体背景颜色；默认为 #fff |
| 图表背景颜色 | `layoutConfig/plot_bgcolor` |  | 控件图表背景颜色 | 常量 | 图表背景颜色；默认为 #fff |
| 鼠标悬浮效果 | `layoutConfig/hovermode` |  | 控件鼠标悬浮效果 | 选择 | 表格鼠标悬浮效果：x 轴、y 轴、靠近、x 轴统一显示、y 轴统一显示、关闭 ；默认为 x 轴 |
| 鼠标拖曳效果 | `layoutConfig/dragmodemode` |  | 控件鼠标拖曳效果 | 选择 | 表格鼠标拖曳效果：放大、移动、框选、套索、画封闭路径、画开放路径、画线段、画矩形、画圆；默认为 放大 |
| 鼠标悬浮距离 | `layoutConfig/hoverdistance` |  | 控件鼠标悬浮距离 | 常量 | 表格鼠标悬浮距离，默认为 20 |
| 是否隐藏工具栏 | `layoutConfig/displayModeBar` |  | 控件是否隐藏工具栏开关 | 开关 | 表格是否隐藏工具栏开关，默认为 关 |


### 内容

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 数据 | `dataJsonString` |  | 表格数据 | 表格 | 点击 `编辑数据`，弹出控件值内容表格（JSON 格式） |

## 案例介绍

## 常见问题



import Fx from '../../60-grid/_expression.md'

<Fx />



import Event from '../../60-grid/_event.md'

<Event />
