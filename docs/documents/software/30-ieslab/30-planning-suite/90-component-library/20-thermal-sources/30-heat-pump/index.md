---
title: 热泵
description: 该元件用以热泵系统，利用电能驱动制冷制热。

sidebar_position: 300

tags: 
- 元件
- IESLab
---

## 元件定义

该元件指热泵的设备设施，热泵是一种**以电驱动**，将**低温热源的热能转移到高温热源**的装置，从而达到**制热和制冷**的目的。以冬季取暖为例介绍热泵的工作原理：由压缩机排出的高温高压工质蒸汽，经换向阀后流入室内冷凝器，工质蒸汽冷凝时放出的潜热，将室内空气加热，达到室内取暖目的，冷凝后的液态工质，从反向流过节流装置进入蒸发器用，吸收外界热量而蒸发，蒸发后的蒸汽经过换向阀后被压缩机吸入，完成制热循环。根据外界热源的不同，热泵可以分为空气源热泵，水源热泵，地源热泵等。对于不同的热泵，都是通过**消耗电能提供热能**，它们数学模型可由下式表示：

 $$
 P_r*cop = Q
 $$  
式中：$P_r$是额定用电功率(kW)，$cop$是性能系数，$Q$是额定制冷制热功率(kW)。

![热泵 =x300](./IES-CH-1Heatpump.png )



## 元件说明

光伏系统元件参数标签页包括**属性**、**参数**、**引脚**三类参数，下面对每类参数进行详细说明。

### 属性

CloudPSS 提供了一套统一的元件属性功能，关于元件属性参数的配置，详见[元件属性配置](/docs/docs/software/xstudio/simstudio/basic/moduleEncapsulation/index.md)页面。

### 参数

#### 设备参数

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 生产厂商 | `manufacturer` |  | 生产厂商 | 文本 | 生产厂商 |
| 设备型号 | `equipType` |  | 设备型号 | 文本 | 设备型号 |
| 制热COP | `HeatingCOP` |  | 制热COP | 实数 | 制热COP |
| 制冷COP | `CoolingCOP` |  | 制冷COP | 实数 | 制冷COP |
| 最大供热量 | `MaxHeatGen` | kW | 最大供热量 | 实数 | 最大供热量 |
| 最大供冷量 | `MaxCoolGen` | kW | 最大供冷量 | 实数 | 最大供冷量 |
| 采购成本 | `PurchaseCost` | 万元/台 | 采购成本 | 实数 | 设备采购成本 |
| 固定运维成本 | `FixedOMCost` | 万元/年 | 固定运维成本 | 实数 | 设备固定运维成本 |
| 可变运维成本 | `VariableOMCost` | 元/kWh | 可变运维成本 | 实数 | 设备可变运维成本 |

#### 基础参数

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 元件名称 | `CompName` |  | 元件名称 | 文本 | 元件名称 |
| 元件类型 | `CompType` |  | 选择元件类型 | 选择 | 选择**交流元件**时为交流电，选择**直流元件**时为直流电|
| 设备配置台数 | `DeivceNumber` | 台 | 设备配置台数 | 自然数 | 设备配置台数 |
| 待选设备类型 | `DeviceSelection` |  | 从设备库中选择设备类型 | 选择 | **选择数据管理模块录入的设备型号**，的厂家、产品型号、额定运行参数自动绑定为对应设备在数据管理模块中录入的参数。|

#### 规划参数

在规划参数中编辑设备的仿真边界条件，主要包含**运行方式**和**运行策略曲线**。

| 参数名 | 键值 (key)  | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 出力模式 | `SettingParaType` |  | 选择运行模式 | 选择 | 在输入仿真运行策略前需要指定设备运行模式。有**温度**和**功率**两种模式。若选择**温度**模式，则设备出力根据系统计算得到。若选择**功率**模式，设备出力为用户指定功率，进出口温度根据热功率和流量计算得到。|
| 温度模式运行策略 | `OutletTemp` |  | 配置设备在不同时刻的运行温度 | 表格 | 仅当**出力模式**项为温度模式时生效，在表格中录入**各个时间段对应的出口温度**。 **开始时间**对应每个仿真时刻，**供水温度**为设备出口温度。|
| 功率模式运行策略 | `EnergySupply` |  | 配置设备在不同时刻的功率 | 表格 | 仅当**出力模式**项为功率模式时生效，在表格中录入**各个时间段对应的设备运行策略**。 **开始时间**对应每个仿真时刻，**设备启停运行策略**为设备运行挡位和运行台数的组合，注意设备运行总台数不能超过设备配置台数。|

#### 优化参数

在优化参数中编辑优化参数。

| 参数名 | 键值 (key)  | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 是否优化该设备 | `OptimizationChoice` |  | 是否元件的运行方式进行优化 | 选择 | 选择**是**，则设备的运行策略由系统优化得到，不读取规划参数中设置的运行模式和运行策略；选择**否**，则系统按照规划参数的运行模式和运行策略运行。|

### 引脚

引脚用于将元件与其他电设备连接，支持**线连接**和**信号名**的连接方式。

引脚的**名称、键值、维度、定义描述**的详细说明如下表所示。

| 引脚名 | 键值 (key)  | 维度 | 描述 |
| :--- | :--: | :--- | :--- |
| 电接口 | `DC/AC` | 1×1 | 可以在引脚处输入相同的字符使得元件与其他电元件相连，当基础参数**元件类型**项是**直流元件**时，键值为**DC**；**元件类型**项是**交流元件**时，键值为**AC**。|
| 水入口 | `WaterInlet` | 1×1 | 可以在引脚处输入相同的字符使得设备与其他电元件相连|
| 水出口 | `WaterOutlet` | 1×1 | 可以在引脚处输入相同的字符使得设备与其他电元件相连|



## 常见问题

元件模型是否具有代表性？

:   IESLab 平台的设备主要关注**能量流的变化和转换**过程，主要建立能量转换的**通用简化模型**。暂未按照其子特征建立详细的子类模型。空气源热泵，水源热泵，地源热泵等不同类型的热泵，都是通过消耗电能提供热能，均可以使用该通用模型。


能否优化模型，提升精度？
:   有提升模型精度的计划，建立热泵的 COP（Coefficient of Performance，性能系数）与冷却水温度、冷冻水温度、环境温度、负载率等参数的关系模型。

热泵能否同时供冷和供热？
:   不可以，热泵虽然能够制冷和制热，但一个设备在同一时刻只能选择一项功能，但如果配置了多台热泵，不同热泵的供能模式可以不同。平台通过数值正负识别制冷还是制热。

设备的串并联模式有何不同？
:   1. 当设备配置多台时，默认为并联，所有设备型号相同，各支路局部阻力均相同，局部压降相同，各支路流量相同。
:   2. 当不同设备并联时，各支路局部压降相同，总流量为各支路流量之和。
:   3. 当不同设备串联时，各支路流量相同，总局部压降为各设备段的局部压降之和。

热泵的交直流元件有什么区别？

:   选择交流时为交流电，选择直流时为直流电
    在能量流计算过程中均为 PQ 节点。

    注意，交流元件和直流元件不能直接相连。

热泵元件在规划设计平台使用时需要配置哪些元件参数？数据管理模块需要配置哪些数据？

:   在对热泵元件进行仿真模拟前，务必录入编辑元件的**基础参数**和**规划参数**；

    在数据管理模块需要配置**热泵**的**额定运行参数**。并在基础参数中绑定数据管理模块的热泵。

热泵元件的运行方式有哪几种配置方式？

:   共有 3 种，其中仿真 2 种，运行优化 1 种模式。


:   1. **仿真：供水温度模式**

        用户已知热泵机组的**冷水出口温度**时，**运行模式**设置为**供水温度**，同时**优化参数**选择“否，使用仿真策略”。  
        此时，热泵机组**制冷制热功率**由进出口温度、流量等参数计算得到，设备制冷还是制热，由下游需求决定。
        特别注意：设备运行在温度模式时，设备出力完全由系统计算得到，不受设备配置台数和设备挡位等限制
        
:   2. **仿真：功率模式**

        用户已知热泵机组供冷功率时，**运行模式**设置为**制冷制热功率**，同时**优化参数**选择“否，使用仿真策略”。  
        此时，热泵机组的进出口温度根据制冷功率和流量等参数计算得到。 
        特别注意：设备运行在功率模式时，设备出力根据运行策略计算得到，受设备配置台数和设备挡位等限制，设备启停运行策略中，设备运行台数超过配置台数之后的策略无效。

:   3. **运行优化**

        此时热泵元件的出力由系统优化计算得到，但是**不读取规划参数**，需要将**优化参数**的**是否优化该设备**项设置为**是**即可。


温度和功率策略的开始时刻必须和仿真时刻一致吗？

:   **建议保持一致**。若运行策略的开始时刻与仿真时刻不一致，平台会**自动采用插值和外推算法填充**。    特别注意：对于运行策略，在仿真时刻之外的时间段策略，为**前平推和后平推**，即，策略之前的数值始终为策略的第一个值，策略之后的数值始终为策略里最后一个值。