---
title: 冰蓄冷装置
description: 该元件用以建模冰蓄冷（相变蓄冷）装置，在电网低谷制冰蓄冷、高峰融冰供冷，实现冷负荷的时空平移。
sidebar_position: 60
tags:
- components
- ieslab
---

## 元件定义

冰蓄冷装置（Ice Storage）利用水相变（0℃ 结冰/融冰）实现冷量的储存。系统在电网负荷低谷、电价较低时段制冰蓄冷，在冷负荷高峰时段融冰供冷，从而**削峰填谷、降低空调系统运行成本**，是综合能源系统中典型的"冷储能"设备。

蓄冷/融冰前后的冷量关系为：

$$
W_{I}^{1} = W_{I}^{0} + \left( {P_{I,C}\eta_{I,C} - \frac{P_{I,D}}{\eta_{I,D}} } \right)\Delta t
$$

式中，$W_{I}^{0}$、$W_{I}^{1}$ 分别表示蓄冷/融冰前后蓄冷装置的冷量（kWh）；$P_{I,C}$、$P_{I,D}$ 分别表示制冰功率（kW）与融冰供冷功率（kW）；$\eta_{I,C}$、$\eta_{I,D}$ 分别表示制冰与融冰效率，$\Delta t$ 为时间步长。

![冰蓄冷装置](./ice-storage.svg)

## 元件说明

### 属性

CloudPSS 元件包含统一的**属性**选项，其配置方法详见 [参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

### 参数

#### 设备参数

| 参数名 | 键值 (key) | 单位 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| 生产厂商 | `manufacturer` |  | 文本 | 生产厂商 |
| 设备型号 | `equipType` |  | 文本 | 设备型号 |
| 采购成本 | `PurchaseCost` | 万元/台 | 实数 | 设备采购成本 |
| 固定运维成本 | `FixedOMCost` | 万元/年 | 实数 | 设备固定运维成本 |
| 可变运维成本 | `VariableOMCost` | 元/kWh | 实数 | 设备可变运维成本 |

#### 规划参数

| 参数名 | 键值 (key) | 单位 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| 最小蓄冷容量配置 | `MiniCoolStorageTankCapacity` | kW | 实数 | 最小蓄冷容量配置 |
| 最大蓄冷容量配置 | `MaxCoolStorageTankCapacity` | kW | 实数 | 最大蓄冷容量配置 |

#### 仿真参数

| 参数名 | 键值 (key) | 单位 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| 初始蓄冷比例 | `initialCoolStorageTankSOC` |  | 实数 | 初始时刻蓄冷比例 |
| 最大蓄冷 SOC | `maxCoolStorageTankSOC` |  | 实数 | 最大蓄冷 SOC |
| 最小蓄冷 SOC | `minCoolStorageTankSOC` |  | 实数 | 最小蓄冷 SOC |

### 引脚

元件只有一个**冷接口**引脚，用于与其它冷设备连接，支持线连接与信号名连接。

## 常见问题

冰蓄冷与蓄电池有什么区别？
: 二者储能介质不同：蓄电池储存电能，冰蓄冷储存冷量（相变潜热）。冰蓄冷主要服务于空调/工艺冷负荷的削峰填谷，与冷网协同。

能否同时制冰和融冰供冷？
: 通常模型下蓄冷（制冰）与放冷（融冰）互斥，同一时刻不同时满足，避免能量凭空产生。
