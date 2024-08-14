---
title: "采样保持"
description: "采样保持"
---

## 元件定义
该元件根据 `hold` 端特性对输入信号进行保持输出。

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
- 当 `hold` 端由 0 变为 1 时，保持输出该时刻对应的输入信号数值直到 `hold` 端为 0。
- 当 `hold` 端为 0 时，输出等于输入。
 
## 案例

## 常见问题

