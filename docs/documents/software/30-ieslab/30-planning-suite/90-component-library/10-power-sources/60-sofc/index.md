---
title: 固体氧化物燃料电池
description: 该元件用以建模固体氧化物燃料电池（SOFC），高温将氢（富氢气体）高效转化为电能并副产热。
sidebar_position: 60
tags:
- components
- ieslab
---

## 元件定义

固体氧化物燃料电池（SOFC, Solid Oxide Fuel Cell）是一种**高温**燃料电池，在 600~1000℃ 下直接将氢气（或富氢重整气）与氧气的电化学能转化为电能，并发出高品质余热，适合**热电联供（CHP）**。其电化学反应为：

$$
\mathrm{H_2 + \tfrac{1}{2}O_2 \;\rightarrow\; H_2O + 电能 + 热}
$$

SOFC 发电效率与余热品位均高，特别适合需要同时供电、供热的园区级综合能源系统，与电解制氢（SOEC）构成高温"电-氢"可逆循环。

发电与余热关系为：

$$
P_{elec} = \dot m_{H_2} \cdot LHV_{H_2} \cdot \eta_{gen}, \qquad
Q_{chp} = P_{elec}\left(\frac{1}{\eta_{gen}}-1\right)\eta_{chp}
$$

式中，$P_{elec}$ 为发电功率，$\dot m_{H_2}$ 为耗氢速率，$\eta_{gen}$ 为发电效率，$Q_{chp}$ 为可回收余热，$\eta_{chp}$ 为余热回收系数。

![固体氧化物燃料电池](./sofc.svg)

## 元件说明

### 属性

CloudPSS 元件包含统一的**属性**选项，其配置方法详见 [参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

### 参数

#### 设备参数

| 参数名 | 键值 (key) | 单位 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| 发电效率 | `PowerGenEff` |  | 实数 | 氢→电的转换效率（0~1） |
| 余热回收系数 | `CHPEff` |  | 实数 | 余热回收比例（0~1） |
| 是否余热回收 | `IsHeatRecovery` |  | 选择 | 开启后余热并入热网 |
| 生产厂商 | `manufacturer` |  | 文本 | 生产厂商 |
| 设备型号 | `equipType` |  | 文本 | 设备型号 |
| 采购成本 | `PurchaseCost` | 万元/台 | 实数 | 设备采购成本 |
| 固定运维成本 | `FixedOMCost` | 万元/年 | 实数 | 设备固定运维成本 |
| 可变运维成本 | `VariableOMCost` | 元/kWh | 实数 | 设备可变运维成本 |

#### 规划参数

| 参数名 | 键值 (key) | 单位 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| 最大发电功率配置 | `MaxPowerGen` | kW | 实数 | 最大发电功率配置 |

### 引脚

元件包含**氢接口**（燃料输入）、**电接口**（发电输出）与**热接口**（余热输出），支持线连接与信号名连接。

## 常见问题

SOFC 与 PEM 燃料电池（PEMFC）有何区别？
: SOFC 为高温燃料电池，效率与余热品位高、适合 CHP，但启停慢；PEMFC 为常温燃料电池，启停快、动态好，适合车用或波动工况。二者都是"氢-电"转换设备。

SOFC 的余热如何利用？
: 开启 `IsHeatRecovery` 后，按 `CHPEff` 回收高温余热并入热网，用于供暖或驱动吸收式制冷/热泵，显著提升系统综合能效。
