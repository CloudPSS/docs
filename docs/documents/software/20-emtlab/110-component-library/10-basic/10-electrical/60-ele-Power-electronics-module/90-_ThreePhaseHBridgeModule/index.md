---
title: "三相 H 桥模块"
description: ""
---

## 元件定义

该元件为三相 H 桥电路模块的快速化仿真模型，其与详细电磁暂态模型的精度相当。该元件可用于构建整流/逆变器拓扑，适用于大规模微电网仿真。

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

下图示出三相 H 桥模块的单元测试算例，算例详见 [三相 H 桥变流器](https://cloudpss.net/model/CloudPSS/3HM)。

![单元测试图](./单元测试.png)

该电路为基本的三相电压源逆变拓扑。开关 S1\~S6 的脉冲信号分别由正弦脉宽调制逻辑实现，开关频率为 5KHz。脉宽调制器产生的 6 路 PWM 信号，经过**多路信号合并**元件合成为一个 6\*1 维的输出信号，送至 H 桥模块的 GS 端。电感电流为准正弦波，直流电压为带高频纹波的直流。

## 案例

## 常见问题
