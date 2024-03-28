---
title: 运行结果
description: 运行结果控件
sidebar_position: 41
---

本节主要介绍 AppStudio 控件库里的运行结果控件。

![运行结果控件](image.png "运行结果控件")


## 属性

**CloudPSS** 提供了一套统一的控件属性参数

### 通用样式

import CommonStyle from '../../grid/_common-style.md'

<CommonStyle />

### 样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 显示头部 | `showHeader` |  | 是否显示头部 | 开关 | 是否显示头部，默认为否 |
| 显示消息详情 | `showMessageDetails` |  | 是否显示消息详情 | 开关 | 是否显示消息详情，默认为否 |
| 简化样式 | `simpleStyle` |  | 是否简化样式 | 开关 | 是否简化样式，包括不显示消息边框、背景等装饰性样式，默认为否 |


### 内容

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 结果 ID | `key` |  | 输入查看的结果 ID | 常量 | 查看的结果 ID  |
| 消息 key | `messageKey` |  | 查看的消息 ID | 表格 | 查看的消息 ID，省略可以显示所有消息，默认显示所有消息  |
| 消息类型 | `messageType` |  | 输入查看的消息类型 | 常量 | 查看的消息类型，省略可以显示所有消息，默认显示所有消息  |

## 案例介绍

### 颜色选择器类型

import ColorPicker from '../../grid/_color-picker.md'

<ColorPicker />

## 常见问题

### (x) 与 f(x) 的区别

import Fx from '../../grid/_fx.md'

<Fx />

###  事件触发机制

import Event from '../../grid/_event.md'

<Event />

