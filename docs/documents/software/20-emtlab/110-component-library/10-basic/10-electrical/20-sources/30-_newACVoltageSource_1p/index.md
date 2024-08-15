---
title: "单相交流电压源"
description: "交流电压源"
---

## 元件定义
该元件用以建模单相交流电压源。
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
若电压源的内阻为 0，CloudPSS 会自动选择为理想电压源模型。但多个理想电压源不能并联或成环状连接（违背基尔霍夫回路电压定律）。

## 案例

## 常见问题

