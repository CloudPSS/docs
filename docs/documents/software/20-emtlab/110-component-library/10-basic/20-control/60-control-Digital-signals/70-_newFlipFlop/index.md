---
title: "触发器"
description: ""
---

## 元件定义
该元件用以实现 `JK`、`RS`、`D`、`T` 类触发器。

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
1. RS 触发器（RS: Reset-Set）  
   RS 触发器是最基本的触发器。输入S 为高（H）时，输出 Q 被设置为高（H）。输出Q为高（H）的状态时，如果把输入 R 设为高（H），输出就被切换为低（L）。

2. JK 触发器（JK: Jack Knife）  
   JK 触发器可以同时把2个输入设定为高（H）。这一点与 RS 触发器不同。在输入到触发引脚 C 的时钟信号的有效边沿（信号的上升沿或下降沿），只有输入 J 是高（H）时输出为 高（H）。J 和 K 被同时输入时输出 Q 翻转。

3. D 触发器（D: Delay）
   在输入到触发引脚 C 的时钟信号的有效边沿（信号的上升沿或下降沿），输入 D 的值必定被保留。

4. T 触发器（T:Toggle）
   把 JK 触发器的 J 和 K 合在一起的触发器。每当时钟信号 C 被输入到触发引脚，Q 发生翻转。

## 案例

## 常见问题

