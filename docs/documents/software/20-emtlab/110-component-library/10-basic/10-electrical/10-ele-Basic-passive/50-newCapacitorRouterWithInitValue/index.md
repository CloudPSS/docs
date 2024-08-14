---
title: "电容(初值)"
description: ""
---

## 元件定义

该元件用以建模带初始电压的单相或三相电容。

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
| Pin \+ | `0` | 电气 | 1 x 1 或 3 x 1 |  |
| Pin \- | `1` | 电气 | 1 x 1 或 3 x 1 |  |

</slot>

## 案例

电容（初值）元件的使用方法与 [电容元件](../40-newCapacitorRouter/index.md#案例) 基本相同。

## 常见问题

