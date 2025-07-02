---
title: 固体氧化物电解槽
description: 该元件用以建模固体氧化物电解槽（SOEC），高温电解水蒸气制氢，支持余热回收。
sidebar_position: 40
tags:
- components
- ieslab
---

## 元件定义

固体氧化物电解槽（SOEC, Solid Oxide Electrolysis Cell）是一种**高温电解**设备，在 600~900℃ 下电解水蒸气制取氢气与氧气：

$$
\mathrm{2H_2O \;(高温) \;\xrightarrow{电解}\; 2H_2 + O_2}
$$

由于工作温度高，SOEC 的理论电耗低于常温电解（如 PEM/ALK），并可利用外部余热（如核热、工业废热）降低电耗，是高效"电-氢"转换路线，适合与高温热源、可再生能源耦合的集中式制氢。

制氢速率与电/热输入关系为：

$$
\dot m_{H_2} = \eta_{SOEC} \cdot \frac{P_{elec}}{LHV_{H_2}}
$$

式中，$\dot m_{H_2}$ 为产氢速率（kg/h 或 kW），$P_{elec}$ 为输入电功率，$\eta_{SOEC}$ 为电解效率，$LHV_{H_2}$ 为氢气低热值。

![固体氧化物电解槽](./soec.svg)

## 元件说明

### 属性

CloudPSS 元件包含统一的**属性**选项，其配置方法详见 [参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

### 参数

#### 设备参数

| 参数名 | 键值 (key) | 单位 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| 是否余热回收 | `IsHeatRecovery` |  | 选择 | 开启后利用/回收高温余热降低电耗 |
| 生产厂商 | `manufacturer` |  | 文本 | 生产厂商 |
| 设备型号 | `equipType` |  | 文本 | 设备型号 |
| 采购成本 | `PurchaseCost` | 万元/台 | 实数 | 设备采购成本 |
| 固定运维成本 | `FixedOMCost` | 万元/年 | 实数 | 设备固定运维成本 |
| 可变运维成本 | `VariableOMCost` | 元/kWh | 实数 | 设备可变运维成本 |

#### 规划参数

| 参数名 | 键值 (key) | 单位 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| 最小制氢容量配置 | `MiniHydrogenCapacity` | kW | 实数 | 最小制氢容量配置 |
| 最大制氢容量配置 | `MaxHydrogenCapacity` | kW | 实数 | 最大制氢容量配置 |

### 引脚

元件包含**电接口**、**热接口**（余热回收）与**氢接口**（产物输出），支持线连接与信号名连接。

## 常见问题

SOEC 与 PEM 电解槽（PEME）、碱性电解槽（ALK）有何区别？
: SOEC 为高温电解，电耗最低但需高温热源、启停慢；PEME 为常温质子膜电解，响应快、适合波动电源；ALK 为成熟碱性电解，成本较低。三者分别对应不同工况的"电-氢"转换。

SOEC 的余热回收有什么意义？
: 开启 `IsHeatRecovery` 后，可用外部高温余热替代部分电耗制氢，进一步提升电-氢转化效率，适合与高温堆/工业废热协同。
