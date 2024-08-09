---
title: "选择器"
description: "选择器"
---

## 元件定义
该元件根据控制端信号，选择输出信号为某一输入信号(非控制信号)。

## 元件说明

选择器元件参数标签页包括**属性**、**参数**、**引脚**三类参数，下面对每类参数进行详细说明。

### 属性

CloudPSS 提供了一套统一的元件属性功能，关于元件属性参数的配置，详见 [参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

### 参数

import Parameters from './_parameters.md'

<Parameters/>

### 引脚

import Pins from './_pins.md'

<Pins/>

### 使用说明
配置 `Select A When`、`Threshold` 确定选择器判据，如：`Ctrl ≥ Threshold`，`Ctrl < Threshold`。
- 当输入控制信号满足判据条件时，元件输出信号选择为信号 A。
- 当输入控制信号不满足判据条件时，元件输出信号选择为信号 B。
 
## 案例

## 常见问题

