---
title: 柔性电负荷
description: 柔性电负荷

sidebar_position: 100

tags: 
- components
- ieslab
---

## 基本描述

> **本元件为柔性电负荷，能够与电网进行能量互动，具有柔性特征的可调节负荷。**

![负荷](./ElecLoad.svg )

柔性电负荷需要绑定基准负荷曲线，平台研究统计了电力负荷历史数据，建立电力负荷模型，建立了典型日负荷、分月详细负荷和自定义负荷。

**典型日负荷模型**
典型日负荷模型按照负荷指标的模式设计，负荷指标由单位面积的负荷指标和建筑面积相乘得到，平台对常见类型的负荷曲线进行统计分析，根据负荷指标自动生成8760h负荷数据，提供了居民、工厂、医院、学校、商场、影院等共计13种典型8760h冷热电负荷数据模型，仅供用户在规划项目初期，严重缺少相关负荷数据时，进行综合能源系统规划设计时参考。

**分月详细负荷模型**
分月详细负荷模型由用户输入每个月的2典型日4h平均负荷数据，根据是否区分工作日和休息日分为两类。

**自定义负荷模型**
自定义负荷模型允许用户上传负荷数据，表头分别为开始时间和负荷数值。用户可以上传已有的任意时间间隔的负荷数据（如24点、96点数据），用户上传的负荷数据平台会自动校验数据格式和合法性校验，当负荷数据时间点与仿真计算时间点不一致时，平台会自动进行数据插值外推。



## 元件说明

### 属性

CloudPSS 元件包含统一的**属性**选项，其配置方法详见 [参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

### 参数

#### 负荷参数

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 负荷名称 | `loadName` |  | 负荷名称 | 文本 | 负荷名称 |
| 负荷模型 | `model` |  | 负荷模型 | 选择 | 选择负荷模型，可选择：典型日负荷（8760h）、分月详细负荷和自定义负荷 |
| 功率因数 | `PowerFactor` |  | 功率因数 | 实数 | 功率因数，范围在0-1之间，一般大于0.85 |
| 建筑面积 | `Floorage` | $\mathrm{m^2}$ | 建筑面积 | 实数 | 仅当负荷模型选择**典型日负荷（8760h）** 时生效 |
| 单位建筑面积负荷指标 | `UnitFloorageElectricalLoadIndex` | $\mathrm{W / m^2}$ | 单位建筑面积负荷指标 | 实数 | 仅当负荷模型选择**典型日负荷（8760h）** 时生效 |
| 电负荷指标 | `ElectricalLoadIndex` | $\mathrm{kW}$ | 电负荷指标 | 实数 | 电负荷指标由系统根据建筑面积和单位建筑面积负荷指标计算得到 |
| 区分工作日和休息日 | `isDayOff` |  | 是否区分工作日和休息日 | 选择 | 仅当负荷模型选择**分月详细负荷** 时生效，选择是否区分工作日和休息日，选择“**是**”时，分别录入每个月典型工作日和休息日的 24h 负荷曲线；选择“**否**”时，录入每个月典型日的 24h 负荷曲线 |


#### 基础参数

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 元件名称 | `CompName` |  | 元件名称 | 文本 | 元件名称 |
| 元件类型 | `CompType` |  | 选择元件类型 | 选择 | 选择**交流元件**时为交流电，选择**直流元件**时为直流电|
| 负荷曲线 | `ElectricalLoad` |  | 选择 | 选择 | **选择数据管理模块录入的负荷曲线**，将自动绑定为对应在数据管理模块中录入的负荷曲线。 |
| 用电计价模型 | `PowerPriceModel` |  | 选择用电计价模型 | 选择 | 选择**选择数据管理模块录入的用电计价模型**，将自动绑定为对应在数据管理模块中录入的用电计价模型。 |

#### 优化参数

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 是否优化该负荷 | `OptimizationChoice` |  | 选择 | 选择 | 选择**否，使用仿真策略**时，不优化该柔性负荷的曲线，为其绑定的固定电负荷曲线；选择**是**时，优化该柔性负荷的曲线 |
| 最大负荷 | `MaxLoad` | % | 最大负荷可调比例 | 实数 | 仅当是否优化该负荷选择**是**时生效，录入最大负荷可调比例，如基准负荷曲线当前值为 100 kW，最大负荷可调比例为 150%，则柔性负荷可调范围为 0 - 150 kW |

### 引脚

元件有**电接口**引脚，用于与其他电设备连接，支持**线连接**和**信号名**的连接方式。

引脚的**名称、键值、维度、定义描述**的详细说明如下表所示。

| 引脚名 | 键值 (key)  | 维度 | 描述 |
| :--- | :--: | :--- | :--- |
| 直流电接口 | `DC` | 1×1 | 可以在引脚处输入相同的字符使得元件与其他元件相连，当基础参数**元件类型**项是**直流元件**时，键名为`DC` |
| 交流电接口 | `AC` | 1×1 | 可以在引脚处输入相同的字符使得元件与其他元件相连，当基础参数**元件类型**项是**交流元件**时，键名为`AC` |

## 常见问题

为什么要绑定价格模型？

:   平台主要扮演**运营商**的角色，一般在综合能源系统中，运营商通过建设高效的综合能源系统，向多能用户提供多种能源，对负荷收取对应的费用。因此负荷需要通过绑定对应的价格模型以计算系统的能源收入。

柔性负荷优化的约束是什么？

:   总电负荷保持不变，平台的柔性电负荷可通过主动参与电网运行控制，能够与电网进行能量互动，其用电时间与功率均可调整，但所需的总电负荷量不变。