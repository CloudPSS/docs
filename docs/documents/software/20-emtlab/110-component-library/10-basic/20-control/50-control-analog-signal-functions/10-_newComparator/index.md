---
title: "比较器"
description: "比较器"
tags:
- emtlab
- components
---

## 元件定义
该元件对两个输入信号比较，并输出矩形波。

## 元件说明



### 属性

CloudPSS 元件包含统一的**属性**选项，其配置方法详见 [参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

### 参数

import Parameters from './_parameters.md'

<Parameters/>

### 引脚

import Pins from './_pins.md'

<Pins/>

### 使用说明
配置 `Expression` 确定比较器的判据，如：`A>=B`，`A< B`。
- 判据为真，则上输出引脚输出设定真值，下输出引脚输出设定假值。
- 判据为假，则上输出引脚输出设定假值，下输出引脚输出设定真值。
## 案例

## 常见问题

