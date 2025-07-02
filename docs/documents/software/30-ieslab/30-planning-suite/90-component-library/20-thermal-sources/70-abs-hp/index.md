---
title: 吸收式热泵
description: 该元件用以建模吸收式热泵，利用低温热源制取高温热，实现热-热品位提升。
sidebar_position: 70
tags:
- components
- ieslab
---

## 元件定义

吸收式热泵（Absorption Heat Pump）与吸收式制冷机原理同源，均以热能驱动，但吸收式热泵将**低温热源**提质为**高温热能**输出，用于供热或工艺加热。它以少量高温驱动热源为代价，回收大量中低温余热，实现热品位提升。

其供热输出与驱动/余热输入的关系为：

$$
Q_{heat,out} = COP_{hp} \cdot (Q_{drive} + Q_{source})
$$

式中，$Q_{heat,out}$ 为供热输出（kW），$Q_{drive}$ 为驱动热功率，$Q_{source}$ 为从低温热源提取的功率，$COP_{hp}$ 为吸收式热泵能效比（通常 >1，因回收了低温热源热量）。

![吸收式热泵](./abs-hp.svg)

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
| 最小制热容量配置 | `MinCoolingCapacity` | kW | 实数 | 最小供热容量配置（键名沿用 CoolingCapacity） |
| 最大制热容量配置 | `MaxCoolingCapacity` | kW | 实数 | 最大供热容量配置（键名沿用 CoolingCapacity） |

### 引脚

元件包含**低温热源接口**、**驱动热接口**与**供热输出接口**，支持线连接与信号名连接。

## 常见问题

吸收式热泵为什么能效比可以大于 1？
: 因为它不仅消耗驱动热，还从低温热源"搬运"了大量热量到高温侧，供热量来自两部分之和，因此 $COP_{hp}>1$。

吸收式热泵与吸收式制冷机如何区分使用？
: 二者均热驱动；制冷机输出冷量，热泵输出热量（品位提升）。在综合能源系统中分别服务于冷负荷与热负荷需求。
