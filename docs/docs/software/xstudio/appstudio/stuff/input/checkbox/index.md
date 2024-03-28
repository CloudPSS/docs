---
title: 复选框
description: 复选框控件
sidebar_position: 16
---

本节主要介绍 **AppStudio** 控件库里的复选框控件。

![复选框控件](image.png "复选框控件")

## 属性

**CloudPSS** 提供了一套统一的控件属性参数

### 通用样式

import CommonStyle from '../../grid/_common-style.md'

<CommonStyle />

### 样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 布局 | `layout` |  | 选择控件布局 | 选择 | 垂直或者水平布局，默认为垂直 |


### 标签样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 文字字号 | `style/--spectrum-global-dimension-font-size-100` |  | 输入文字字号 | 常量 | 输入文字字号 |
| 文字颜色 | `style/--spectrum-alias-label-text-color` |  | 选择文字颜色 | 颜色选择器 | 点击文字颜色，弹出颜色选择器自定义颜色 |
| 文字粗细 | `style/--spectrum-alias-body-text-font-weight` |  | 选择文字粗细 | 选择 | 选择标签文字粗细，默认、100、200、300、400、500、600、700、800、900、1000 |

### 选项文字样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 文字字号 | `style/--spectrum-checkbox-m-text-size` |  | 输入文字字号 | 常量 | 输入文字字号 |
| 文字颜色 | `style/--spectrum-checkbox-m-text-color` |  | 选择文字颜色 | 颜色选择器 | 点击文字颜色，弹出颜色选择器自定义颜色 |
| 文字粗细 | `style/--spectrum-checkbox-m-text-font-weight` |  | 选择文字粗细 | 选择 | 选项文字粗细，默认、100、200、300、400、500、600、700、800、900、1000，默认为 400 |


### 方块样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 默认颜色 | `style/--spectrum-checkbox-m-box-border-color` |  | 方块默认颜色 | 颜色选择器 | 点击默认颜色，弹出颜色选择器自定义方块默认颜色 |
| 按下颜色 | `style/--spectrum-checkbox-m-box-border-color-down` |  | 方块按下颜色 | 颜色选择器 | 点击按下颜色，弹出颜色选择器自定义方块按下颜色 |
| 悬浮颜色 | `style/--spectrum-checkbox-m-box-border-color-hover` |  | 方块悬浮颜色 | 颜色选择器 | 点击悬浮颜色，弹出颜色选择器自定义方块悬浮颜色 |
| 选中颜色 | `style/--spectrum-checkbox-m-box-border-color-selected` |  | 方块选中颜色 | 颜色选择器 | 点击选中颜色，弹出颜色选择器自定义方块选中颜色 |
| 选中按下颜色 | `style/--spectrum-checkbox-m-emphasized-box-border-color-selected-down` |  | 方块选中颜色 | 颜色选择器 | 点击选中按下颜色，弹出颜色选择器自定义方块选中按下颜色 |
| 选中悬浮颜色 | `style/--spectrum-checkbox-m-emphasized-box-border-color-selected-hover` |  | 方块选中颜色 | 颜色选择器 | 点击选中悬浮颜色，弹出颜色选择器自定义方块选中悬浮颜色 |
| 方块大小 | `style/--spectrum-checkbox-m-box-size` | `px` | 方块大小 | 常量 | 复选框控件方块大小，需要输入单位 |

### 内容

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 标签 | `label` |  | 控件内容标签 | 常量 | 复选框控件文字标签 |
| 禁用 | `disabled` |  | 禁用开关 | 开关 | 禁用选择**开**或者**关**，开启后控件禁止点击和交互，默认为**关** |
| 占位符 | `placeholder` |  | 复选框占位符 | 常量 | 复选框内容为空时显示的提示性内容，仅用于占位，默认为 Select Me! |
| 值 | `value` |  | 复选框控件值 | 开关 | 复选框控件值默认值，默认为**关** |

### 事件

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 更改 | `@change` |  | 输入结束时触发事件 | 函数 | 采用更新方式触发，失去焦点后控件的值才会更新 |

## 案例介绍

### 颜色选择器类型

import ColorPicker from '../../grid/_color-picker.md'

<ColorPicker />

## 常见问题

### (x) 与 f(x) 的区别

import Fx from '../../grid/_expression.md'

<Fx />

###  事件触发机制

import Event from '../../grid/_event.md'

<Event />