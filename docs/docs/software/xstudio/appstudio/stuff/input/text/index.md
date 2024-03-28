---
title: 输入框
description: 输入框控件
sidebar_position: 11
---

本节主要介绍 **AppStudio** 控件库里的输入框控件。

![输入框控件](image.png "输入框控件")

## 属性

**CloudPSS** 提供了一套统一的控件属性参数管理

### 通用样式

import CommonStyle from '../../grid/_common-style.md'

<CommonStyle />

### 样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 布局 | `layout` |  | 选择控件布局 | 选择 | 垂直或者水平布局，默认为垂直 |
| 安静 | `quiet` |  | 选择是否安静 | 选择 | 选择**是**或者**否**，默认为**否**状态 |

### 标签样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 文字字体 | `style/font-family` |  | 选择文字字体 | 选择 | 标签文字字体样式，字体类型包括：默认、宋体、黑体、楷体、微软雅黑、Georgia、Palatino Linotype、Times New Roman、Arial、Arial Black、Verdana、Courier New、Trebuchet MS |
| 文字字号 | `style/--spectrum-global-dimension-font-size-100` |  | 输入文字字号 | 常量 | 输入文字字号 |
| 文字颜色 | `style/--spectrum-alias-label-text-color` |  | 选择文字颜色 | 颜色选择器 | 点击文字颜色，弹出颜色选择器自定义颜色 |
| 文字粗细 | `style/--spectrum-alias-body-text-font-weight` |  | 选择文字粗细 | 选择 | 选择标签文字粗细，默认、100、200、300、400、500、600、700、800、900、1000 |

### 输入框及其内容样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 文字字体 | `style/--spectrum-alias-body-text-font-family` |  | 选择文字字体 | 选择 | 输入框内容文字字体样式，字体类型包括：默认、宋体、黑体、楷体、微软雅黑、Georgia、Palatino Linotype、Times New Roman、Arial、Arial Black、Verdana、Courier New、Trebuchet MS |
| 文字字号 | `style/--spectrum-textfield-m-text-size` |  | 输入文字字号 | 常量 | 输入文字字号 |
| 文字颜色 | `style/--spectrum-alias-text-color` |  | 选择文字颜色 | 颜色选择器 | 点击文字颜色，弹出颜色选择器自定义颜色 |
| 输入框高度 | `style/--spectrum-textfiled-m-height` | `px` | 输入输入框高度 | 常量 | 输入输入框高度 |


### 内容

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 标签 | `label` |  | 输入内容标签 | 常量 | 输入框控件文字标签 |
| 输入格式 | `type` |  | 选择输入格式 | 选择 | 输入格式：字符串、实数、整数 |
| 禁用 | `disabled` |  | 禁用开关 | 开关 | 禁用选择**开**或者**关**，开启后控件禁止点击和交互，默认为**关** |
| 占位符 | `placeholder` |  | 输入框占位符 | 常量 | 输入框内容为空时显示的提示性内容，仅用于占位 |
| 值 | `value` |  | 输入框默认内容 | 常量 | 输入框默认内容 |
| 后缀 | `suffix` |  | 输入框后缀 | 常量 | 输入框最右侧显示的内容，一般为单位符号 |


### 事件

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 输入 | `@input` |  | 输入时触发事件 | 函数 | 输入时触发事件函数 |
| 更改 | `@change` |  | 输入结束时触发事件 | 函数 | 输入结束时触发事件函数 |

## 案例介绍

###  事件触发机制

事件是指对控件操作后产生的效果，事件触发使用 HTML 元素事件触发的回调函数结合 math.js 的表达式解析器进行控件属性或者资源的调用。详情参考[事件触发机制](../../../basic/event/index.md)

