---
title: 变压吸附提纯装置
description: 该元件用以建模变压吸附（PSA）氢气提纯装置，从含氢混合气中分离杂质获取高纯氢。
sidebar_position: 60
tags:
- components
- ieslab
---

## 元件定义

PSA 制氮设备: 变压吸附提纯装置（PSA, Pressure Swing Adsorption, 简称 PSA ), 一种利用变压吸附技术生产高纯度氮气的设备。其工作原理基于碳分子筛对氧和氮的选择性吸附特性。在加压状态下，碳分子筛吸附空气中的氧气、二氧化碳等杂质，而氮气则被大量吸附并在减压时解吸，从而实现连续制取高纯度氮气。

其提纯过程可抽象为：

$$
\dot m_{H_2,out} = \eta_{rec} \cdot \dot m_{H_2,in}
$$

式中，$\dot m_{H_2,out}$、$\dot m_{H_2,in}$ 分别为输出与输入氢气流量（kg/h 或 kW），$\eta_{rec}$ 为氢气回收率（提纯过程中随杂质排放损失的氢气比例由回收率决定）。

![变压吸附提纯装置](./psa.svg)

## 元件说明

### 属性

CloudPSS 元件包含统一的**属性**选项，其配置方法详见 [参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

### 参数

#### 设备参数

| 参数名 | 键值 (key) | 单位 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| 氮气处理能力 | `NiCap` |  | 实数 | 装置对含氮杂质气体的处理容量 |
| 氮气分离系数 | `NiCoe` |  | 实数 | 杂质分离/排放相关系数 |
| 生产厂商 | `manufacturer` |  | 文本 | 生产厂商 |
| 设备型号 | `equipType` |  | 文本 | 设备型号 |
| 采购成本 | `PurchaseCost` | 万元/台 | 实数 | 设备采购成本 |
| 固定运维成本 | `FixedOMCost` | 万元/年 | 实数 | 设备固定运维成本 |
| 可变运维成本 | `VariableOMCost` | 元/kWh | 实数 | 设备可变运维成本 |

### 引脚

元件包含**电接口**与**氮接口**，支持线连接与信号名连接。

## 常见问题

PSA 在系统中的位置？
: PSA 通常位于电解槽等制氢设备之后，合成氨设备之前，提纯为高纯氮，再送入合成氨设备。

