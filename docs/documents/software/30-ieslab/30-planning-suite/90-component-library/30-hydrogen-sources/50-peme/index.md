---
title: PEM 电解槽
description: 该元件用以建模质子交换膜电解槽（PEME），常温快速响应电解水制氢，适合波动新能源。
sidebar_position: 50
tags:
- components
- ieslab
---

## 元件定义

PEM 电解槽（PEME, Proton Exchange Membrane Electrolyzer）采用质子交换膜在常温常压下电解纯水制取氢气与氧气：

$$
\mathrm{2H_2O \;\xrightarrow{电解}\; 2H_2 + O_2}
$$

PEME 具有**启停快、动态响应好、负荷调节范围宽**的特点，非常契合风电、光伏等波动性电源的直接耦合制氢，是分布式/离网"电-氢"转换的优选路线。在综合能源系统规划中，它通常作为新能源消纳与氢储的柔性负荷。

制氢速率与电输入关系为：

$$
\dot m_{H_2} = \eta_{PEME} \cdot \frac{P_{elec}}{LHV_{H_2}}
$$

式中，$\dot m_{H_2}$ 为产氢速率（kg/h 或 kW），$P_{elec}$ 为输入电功率，$\eta_{PEME}$ 为电解效率。

![PEM 电解槽](./peme.svg)

## 元件说明

### 属性

CloudPSS 元件包含统一的**属性**选项，其配置方法详见 [参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

### 参数

#### 设备参数

| 参数名 | 键值 (key) | 单位 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| 是否余热回收 | `IsHeatRecovery` |  | 选择 | 开启后回收电解余热用于供热 |
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

元件包含**电接口**与**氢接口**（产物输出），支持线连接与信号名连接。

## 常见问题

PEME 适合与什么电源配合？
: 适合与风电、光伏等波动性电源配合，因其动态响应快，可跟随新能源出力曲线制氢，提升消纳率。

PEME 与碱性电解槽（ALK）如何选？
: PEME 响应快、纯度高、适合波动与小规模；ALK 技术成熟、成本低、适合稳定大规模基荷。规划中可按电源波动性与投资约束择优。
