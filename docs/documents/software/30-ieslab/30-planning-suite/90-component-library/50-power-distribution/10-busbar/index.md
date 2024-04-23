---
title: 母线
description: 该元件用以建模母线。

sidebar_position: 100

tags: 
- 元件
- IESLab
---

## 元件定义

该元件指母线，平台支持交直流电网潮流计算，母线类型可选交流或直流。

![母线 =x100](./IES-GD-4BusLine.png )

## 元件说明

元件参数标签页包括**属性**、**参数**、**引脚**三类参数，下面对每类参数进行详细说明。

### 属性

CloudPSS 提供了一套统一的元件属性功能，关于元件属性参数的配置，详见[参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md)页面。

### 引脚

整个母线元件均为电引脚供与其他元件相连，可以在引脚处填写相同的字符使得两个元件相连。

### 参数

#### Configuration

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| Name | `Name` |  | 元件名称 | 文本 | 元件名称 |
| 元件类型 | `CompType` |  | 选择元件类型 | 选择 | 选择**交流元件**时为交流电，选择**直流元件**时为直流电|
| Voltage Angle | `Voltage Angle` | deg | Voltage Angle | 实数 | 初始相角 |
| Voltage Magnitude | `Voltage Magnitude` | p.u. | Voltage Magnitude | 实数 | 初始电压 |
| Base Voltage | `Base Voltage` | $\mathrm{kV}$ | Base Voltage | 实数 | 基准电压 |

### 引脚

元件只有一个**电接口**引脚，用于与其他电设备连接，支持**线连接**和**信号名**的连接方式。

引脚的**名称、键值、维度、定义描述**的详细说明如下表所示。

| 引脚名 | 键值 (key)  | 维度 | 描述 |
| :--- | :--: | :--- | :--- |
| 电接口 | `Pin DC/AC` | 1×1 | 可以在引脚处输入相同的字符使得元件与其他电元件相连，当基础参数**元件类型**项是**直流元件**时，键值为**Pin DC**；**元件类型**项是**交流元件**时，键值为**Pin AC**。|

:::tip
整个母线元件均为引脚，任意位置均可与其他元件连接
:::

