---
title: "多相分线器"
description: "集线器"
tags:
- emtlab
- components
---

## 元件定义

该元件为多相分线器或多相集线器。

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
此元件适用于电气场景，可作为多相分线器或多相集线器使用。

- **作为分线器**：信号从Input引脚输入，通过Output表格配置多路输出，每路输出信号可以为多维。

- **作为集线器**：信号从各个配置好的Output引脚输入，每路输入信号可以为多维，从Input引脚聚合输出。


使用技巧：涉及多端口时建议使用该元件，三相系统优先使用[分线/集线器](../../40-three-phase-ac-components/40-LineCluster/index.md)。

:::warning
- **维度一致性**：作为集线器使用时，所有输入信号的维度总和必须与预设的Input DimX × Input DimY完全一致。
- **电气量专用**：仅用于处理电气信号，不适用于控制信号。
:::



## 案例

## 常见问题

