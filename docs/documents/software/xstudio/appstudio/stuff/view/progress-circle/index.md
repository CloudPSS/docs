---
title: 进度环
description: 进度环控件
sidebar_position: 43
---

本节主要介绍 AppStudio 控件库里的进度环控件。

![进度环控件](image.png "进度环控件")


## 属性

**CloudPSS** 提供了一套统一的控件属性参数

### 通用样式

import CommonStyle from '../../grid/_common-style.md'

<CommonStyle />


### 样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 背景 | `attribute/over-background` |  | 是否显示背景 | 开关 | 是否显示背景，默认为否 |


### 圆环样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 轨道颜色 | `style/--spectrum-progresscircle-medium-track-color` |  | 轨道颜色 | 颜色选择器 | 点击轨道颜色，弹出颜色选择器自定义轨道颜色 |
| 已填充轨道颜色 | `style/--spectrum-progresscircle-medium-track-fill-color` |  | 已填充轨道颜色 | 颜色选择器 | 点击已填充轨道颜色，弹出颜色选择器自定义已填充轨道颜色 |

### 内容

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 进度 | `progress` | `%`  | 输入控件内容进度 | 常量 | 控件内容进度，默认显示：27（百分制） |
| 不设定进度 | `indeterminate` |   | 不设定进度开关 | 开关 | 不设定进度开关，开启后进度条始终在加载状态 |

## 案例介绍

### 颜色选择器类型

import ColorPicker from '../../grid/_color-picker.md'

<ColorPicker />

## 常见问题



import Fx from '../../grid/_expression.md'

<Fx />



import Event from '../../grid/_event.md'

<Event />