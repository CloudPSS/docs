---
title: 储氢罐
description: 该元件用以建模储氢罐，能够根据充放氢功率和效率等模型参数模拟储氢罐的运行状态。

sidebar_position: 400

tags: 
- components
- ieslab
---


## 元件定义

该元件指储氢罐的设备设施，氢能作为一种清洁能源具有许多优势，包括可持续、可再生、污染少和能量密度高等。在全球碳达峰和碳减排战略中，它的重要性越来越显著。迄今为止，全球氢能产业链的制氢、储氢和应用等方面的相关技术已经取得了重大突破。

目前氢气主要储存在储氢罐中，主要有高压气态、液态和固态储氢等技术。

**储氢前后的储氢量关系为:**
 $$
 W_{B}^{1} = W_{B}^{0}+ \left( {P_{B,C}\eta_{B,C} - \frac{P_{B,D} }{\eta_{B,D} } } \right)\Delta t
 $$
 式中，$W_{B}^{0}$、 $W_{B}^{1}$分别表示蓄氢/放氢前后蓄氢装置的储氢量（kWh）；$P_{B,C}$、$P_{B,D}$分别表示蓄氢装置的蓄氢功率（kW）和放氢功率（kW）；$\eta_{B,C}$ 、$\eta_{B,D}$分别表示蓄氢装置蓄氢和放氢效率,$\Delta t$为时间步长。


![储氢罐](./HydrogenTank.svg )


## 元件说明



### 属性

CloudPSS 元件包含统一的**属性**选项，其配置方法详见 [参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

### 参数

#### 设备参数

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 生产厂商 | `manufacturer` |  | 生产厂商 | 文本 | 生产厂商 |
| 设备型号 | `equipType` |  | 设备型号 | 文本 | 设备型号 |
| 储氢罐容量 | `HydrogenTankCap` | Nm^3 | 储氢罐容量 | 实数 | 储氢罐容量 |
| 储氢效率 | `HydrogenStoEff` |  | 储氢效率 | 实数 | 范围为0-1 |
| 释氢效率 | `HydrogenRelEff` |  | 释氢效率 | 实数 | 范围为0-1 |
| 最大储氢量 | `MaxHydrogenSto` | Nm^3/h | 最大储氢量 | 实数 | 最大储氢量 |
| 最大释氢量 | `MaxHydrogenRel` | Nm^3/h | 最大释氢量 | 实数 | 最大释氢量 |
| 采购成本 | `PurchaseCost` | 万元/台 | 采购成本 | 实数 | 设备采购成本 |
| 固定运维成本 | `FixedOMCost` | 万元/年 | 固定运维成本 | 实数 | 设备固定运维成本 |
| 可变运维成本 | `VariableOMCost` | 元/kWh | 可变运维成本 | 实数 | 设备可变运维成本 |

#### 基础参数

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 元件名称 | `CompName` |  | 元件名称 | 文本 | 元件名称 |



#### 规划参数

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 待选设备类型 | `DeviceSelection` |  | 从设备库中选择设备类型 | 选择 | **选择数据管理模块录入的设备型号**，将自动绑定对应设备的厂家、产品型号和额定运行参数。 |
| 最小储氢容量配置 | `MinStorageCapacity` | kW | 设备的最小储氢容量配置 | 实数 | 仅当**待选设备类型**选择数据管理模块输入的设备后生效。|
| 最大储氢容量配置 | `MaxStorageCapacity` | kW | 设备的最大储氢容量配置 | 实数 | 仅当**待选设备类型**选择数据管理模块输入的设备后生效。|


#### 仿真参数

在规划参数中编辑元件的仿真边界条件，主要包含**运行方式**和**运行策略曲线**。

| 参数名 | 键值 (key)  | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 初始蓄氢比例 | `InitialPowerStorage` |  | 初始蓄氢比例 | 实数 | 初始时刻蓄氢比例 = 初始时刻蓄氢量/蓄氢容量 |
| 最大蓄氢 SOC | `maxlPowerStorage` |  | 最大蓄氢 SOC | 实数 | 最大蓄氢 SOC = 最大蓄氢量/蓄氢容量 |
| 最小蓄氢 SOC | `miniPowerStorage` |  | 最小蓄氢 SOC | 实数 | 最下蓄氢 SOC = 最小蓄氢量/蓄氢容量，注意最小蓄氢 SOC 需小于最大蓄氢 SOC |
| 循环氢充放次数 | `PowCycle` |  | 优化周期内允许的最大循环氢充放次数 | 实数 | 循环氢充放次数 = （总充氢量 + 总放氢量）/（最大蓄氢量-最小蓄氢量） |
| 蓄氢策略 | `Power` |  | 配置储氢罐在不同时刻的设备启停策略 | 表格 | 在表格中录入**各个时间段对应的充放氢停策略**。 **开始时刻**对应每个仿真时刻，**正充负放**，蓄氢量不能超过**最大蓄氢量**，不能低于**最小蓄氢量**。|

<!-- 
#### 优化参数

在优化参数中编辑元件的优化参数。

| 参数名 | 键值 (key)  | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 是否优化该设备 | `OptimizationChoice` |  | 是否对元件的运行方式进行优化 | 选择 | 选择**是**，则设备的运行策略由系统优化得到，不读取规划参数中设置的运行策略；选择**否**，则系统按照规划参数的运行策略运行。|


| 蓄氢量始末最大偏差比例 | `MaxPoweStorageDiff` | % | 蓄氢量始末最大偏差比例仅在“是否优化该设备”选择“**是**”生效 | 实数 |蓄氢量始末最大偏差比例= （初始时刻蓄氢量-结束时刻蓄氢量）/总蓄氢量，比例范围为 0-100% |
-->



### 引脚

元件只有一个**氢接口**引脚，用于与其他氢设备连接，支持**线连接**和**信号名**的连接方式。

引脚的**名称、键值、维度、定义描述**的详细说明如下表所示。

| 引脚名 | 键值 (key)  | 维度 | 描述 |
| :--- | :--: | :--- | :--- |
| 氢接口 | `hydrogenPort` | 1×1 | 可以在引脚处输入相同的字符使得元件与其他氢元件相连。|

## 常见问题

元件模型是否具有代表性？

:   IESLab 平台的设备主要关注**能量流的变化和转换**过程，主要建立能量转换的**通用简化模型**。暂未按照其子特征建立详细的子类模型。锂离子氢池、铅酸氢池、钠硫氢池、液流氢池和镍氢氢池等氢化学储氢氢池，都是通过储存氢能的设备，均可以使用该通用模型。

能否设置储氢 SOC 上下限？
:   支持。

能否同时充氢和放氢？
:   不可以。
