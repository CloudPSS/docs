---
title: PEM 燃料电池
description: 该元件用以建模质子交换膜燃料电池（PEMFC），常温将氢高效转化为电能并副产热。
sidebar_position: 70
tags:
- components
- ieslab
---

## 元件定义

PEM 燃料电池（PEMFC, Proton Exchange Membrane Fuel Cell）采用质子交换膜在常温常压下将氢气与氧气的电化学能直接转化为电能，是综合能源系统中典型的**清洁分布式电源**：

$$
\mathrm{H_2 + \tfrac{1}{2}O_2 \;\rightarrow\; H_2O + 电能 + 热}
$$

PEMFC 具有**启停快、动态响应好、功率密度高**的特点，既可作为园区稳定电源，也可与储能协同平抑波动，构成"氢-电"可逆利用回路。

发电与余热关系为：

$$
P_{elec} = \dot m_{H_2} \cdot LHV_{H_2} \cdot \eta_{gen}, \qquad
Q_{chp} = P_{elec}\left(\frac{1}{\eta_{gen}}-1\right)\eta_{chp}
$$

式中，$P_{elec}$ 为发电功率，$\dot m_{H_2}$ 为耗氢速率，$\eta_{gen}$ 为发电效率，$Q_{chp}$ 为可回收余热，$\eta_{chp}$ 为余热回收系数。

![PEM 燃料电池](./pemfc.svg)

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

PEMFC 与 SOFC 如何配合？
: PEMFC 常温、启停快，适合波动与调峰；SOFC 高温、效率高，适合基荷 CHP。二者可互补构成多时间尺度的氢燃料电池电源组合。

燃料电池的余热能否利用？
: 可以。开启 `IsHeatRecovery` 后，按 `CHPEff` 回收余热并入热网，形成热电联供，提升综合能效。
