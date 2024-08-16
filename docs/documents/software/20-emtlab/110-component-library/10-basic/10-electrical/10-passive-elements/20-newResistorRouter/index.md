---
title: "电阻"
description: "电阻"
tags:
- emtlab
- components
---

## 元件定义

该元件用以建模单相或三相电阻。

## 元件说明



### 属性

CloudPSS 元件包含统一的**属性**选项，其配置方法详见 [参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

### 参数

import Parameters from './_parameters.md'

<Parameters/>

### 引脚

<slot class="model-pins">

| 引脚名 | 键名 | 类型 | 维度 | 描述 |
|:------ |:---- |:----:|:----:|:---- |
| Pin \+ | `0` | 电气 | 1 x 1 或 3 x 1 | 电阻正端（参考方向） |
| Pin \- | `1` | 电气 | 1 x 1 或 3 x 1 | 电阻负端（参考方向） |

</slot>

## 案例

电阻元件的使用可参考 [RLC 电路的电磁暂态仿真](../../../../../30-quick-start/20-start-from-scratch/index.md)。

## 常见问题

