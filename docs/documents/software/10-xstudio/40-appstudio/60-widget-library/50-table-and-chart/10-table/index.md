---
title: 表格
description: 表格控件
tags:
- xstudio
- appstudio
- widgets
---

本节主要介绍 AppStudio 控件库里的表格控件。

![表格控件](image.png "表格控件")

## 属性

**CloudPSS** 提供了一套统一的控件属性参数

### 通用样式

import CommonStyle from '../../60-grid/_common-style.md'

<CommonStyle />

### 表头样式


| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 高度 | `styleOption/headerHeight` |  | 表头高度 | 常量 | 输入表头高度，默认 20 |
| 背景颜色 | `style/--cwe-custom-table-thead-background-color` |  | 输入背景颜色 | 常量 | 输入背景颜色，默认为 #fafafa |
| 文字字体 | `style/--cwe-custom-table-head-font-family` |  | 选择文字字体 | 选择 | 文字字体样式，字体类型包括：默认、宋体、黑体、楷体、微软雅黑、Georgia、Palatino Linotype、Times New Roman、Arial、Arial Black、Verdana、Courier New、Trebuchet MS |
| 文字间距 | `style/--cwe-custom-table-head-letter-spacing` |  | 输入文字间距 | 常量 | 文字间距 |
| 文字字号 | `style/--cwe-custom-table-head-font-size` |  | 输入文字字号 | 常量 | 输入文字字号 |
| 文字颜色 | `style/--cwe-custom-table-head-color` |  | 选择文字颜色 | 颜色选择器 | 点击文字颜色，弹出颜色选择器自定义颜色 |
| 文字粗细 | `style/--cwe-custom-table-head-font-weight` |  | 选择文字粗细 | 选择 | 选择文字粗细，默认、100、200、300、400、500、600、700、800、900、1000 |
| 边框宽度 | `style/--cwe-custom-table-head-border-weight` | px | 边框宽度 | 常量 | 边框宽度，默认为 1px |
| 边框颜色 | `style/--cwe-custom-table-head-border-color` |  | 边框颜色 | 常量 | 边框颜色，默认为 #e8e8e8 |
| 边框类型 | `style/--cwe-custom-table-head-border-style` |   | 边框类型 | 选择 | 边框类型分为：默认、无边框、虚线边框、实线边框、双重边框、3D 沟槽边框、3D 脊边框、3D 突出边框、3D 嵌入边框，默认为实线边框 |


### 表格体样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 背景颜色 | `style/--cwe-custom-table-tbody-background-color` |  | 输入背景颜色 | 常量 | 输入背景颜色，默认为 #FFFFFF00 |
| 文字字体 | `style/--cwe-custom-table-cell-font-family` |  | 选择文字字体 | 选择 | 文字字体样式，字体类型包括：默认、宋体、黑体、楷体、微软雅黑、Georgia、Palatino Linotype、Times New Roman、Arial、Arial Black、Verdana、Courier New、Trebuchet MS |
| 文字间距 | `style/--cwe-custom-table-cell-letter-spacing` |  | 输入文字间距 | 常量 | 文字间距 |
| 文字字号 | `style/--cwe-custom-table-cell-font-size` |  | 输入文字字号 | 常量 | 输入文字字号 |
| 文字颜色 | `style/--cwe-custom-table-cell-color` |  | 选择文字颜色 | 颜色选择器 | 点击文字颜色，弹出颜色选择器自定义颜色 |
| 文字粗细 | `style/--cwe-custom-table-cell-font-weight` |  | 选择文字粗细 | 选择 | 选择文字粗细，默认、100、200、300、400、500、600、700、800、900、1000 |
| 边框宽度 | `style/--cwe-custom-table-cell-border-weight` | px | 边框宽度 | 常量 | 边框宽度，默认为 1px |
| 边框颜色 | `style/--cwe-custom-table-cell-border-color` |  | 边框颜色 | 常量 | 边框颜色，默认为 #e8e8e8 |
| 边框类型 | `style/--cwe-custom-table-cell-border-style` |   | 边框类型 | 选择 | 边框类型分为：默认、无边框、虚线边框、实线边框、双重边框、3D 沟槽边框、3D 脊边框、3D 突出边框、3D 嵌入边框，默认为实线边框 |

### 行样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 高度 | `styleOption/cellHeight` |  | 表头高度 | 常量 | 输入表头高度，默认 20 |


### 内容

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 列定义 | `columnDefinitionlist` |  | 列定义 | 表格 | 点击 `编辑数据`，弹出控件列定义内容表格 |
| 值 | `dataJsonString` |  | 列定义 | 表格 | 点击 `编辑数据`，弹出控件值内容表格（JSON 格式） |

### 事件

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 切换 | `@change` |  | 当选中状态变化时触发 | 函数 | 采用更新方式触发函数，当选中状态变化时触发，必须设置**自动切换**选项 |


## 案例介绍

### 颜色选择器类型

import ColorPicker from '../../60-grid/_color-picker.md'

<ColorPicker />

## 常见问题



import Fx from '../../60-grid/_expression.md'

<Fx />



import Event from '../../60-grid/_event.md'

<Event />
