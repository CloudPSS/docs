---
title: 电压缩制冷机
description: 该元件用以建模电压缩制冷机，能够利用电能驱动制冷。

sidebar_position: 200

tags: 
- components
- ieslab
---

## 元件定义

该元件指电压缩制冷机的设备设施，电压缩制冷机组是指**依靠压缩机提高制冷剂的压力**以实现制冷循环的制冷机。依靠压缩机提高制冷剂的压力以实现制冷循环的制冷机。按所用制冷剂的种类不同，压缩式制冷机分为气体压缩式制冷机和蒸气压缩式制冷机两类。蒸气压缩式制冷机又有氨制冷机和氟利昂制冷机等。气体压缩式制冷机又分为空气制冷机和氦气制冷机等。按所用压缩机种类不同，压缩式制冷机又分为往复式制冷机、离心式制冷机和回转式制冷机（螺杆式制冷机、滚动转子式制冷机）等。蒸汽压缩式制冷机按其系统组成不同分为单级、多级（两级或三级）和复叠式等。

以气体压缩式制冷机为例，压缩机以气体为制冷剂，由压缩机、冷凝器、回热器、膨胀机和冷箱等组成。经压缩机压缩的气体先在冷凝器中被冷却，向冷却水（或空气）放出热量，然后流经回热器被返流气体进一步冷却,并进入膨胀机绝热膨胀,压缩气体的压力和温度同时下降。气体在膨胀机中膨胀时对外作功，成为压缩机输入功的一部分。同时膨胀后的气体进入冷箱，吸取被冷却物体的热量，即达到制冷的目的。此后，气体返流经过回热器，同压缩气体进行热交换后又进入压缩机中被压缩。气体制冷机都应采用回热器，这不但能提高制冷机的经济性而且可以降低膨胀机前压缩气体的温度，因而降低制冷温度。

对不同种类的电压缩制冷机来说，都是通过**消耗电能来制冷**，并未对不同类型的制冷机进行建模，而是采用通用模型，其数学模型如下：

额定工况下：
 $$
 P_r*COP = Q
 $$  
式中：$P_r$ 是额定用电功率（$\mathrm{kW}$），$COP$ 是性能系数，$Q$ 是额定制冷功率（$\mathrm{kW}$）。

其他工况下，用电功率跟负载率有关：
 $$
 P_r*r_{pl} = P
 $$  
式中：$P_r$ 是额定用电功率（$\mathrm{kW}$），$r_{pl}$ 是负载率 PLR（part load ratio），$P$ 是实际工况用电功率（$\mathrm{kW}$）。

![电压缩制冷机 =x300](./IES-CH-5CR.svg )

额定工况的典型性能特性曲线如下：

| 冷冻水供应温度（$^{\circ}$C） | 冷却水供应温度（$^{\circ}$C） | 制冷功率比  | COP 比    |
|------------|------------|--------|---------|
| 5          | 16         | 1.0403 | 1.3348  |
| 5          | 20         | 1.0161 | 1.1843  |
| 5          | 25         | 0.9859 | 1.0742  |
| 5          | 30         | 0.9556 | 0.9596  |
| 5          | 35         | 0.9253 | 0.8629  |
| 5          | 40         | 0.8951 | 0.7775  |
| 6          | 16         | 1.0623 | 1.3573  |
| 6          | 20         | 1.0381 | 1.2292  |
| 6          | 25         | 1.0081 | 1.0944  |
| 6          | 30         | 0.9778 | 0.9798  |
| 6          | 35         | 0.9475 | 0.8809  |
| 6          | 40         | 0.9175 | 0.7978  |
| 7          | 16         | 1.0843 | 1.382   |
| 7          | 20         | 1.0601 | 1.2517  |
| 7          | 25         | 1.0301 | 1.1169  |
| 7          | 30         | 1      | 1       |
| 7          | 35         | 0.9699 | 0.9011  |
| 7          | 40         | 0.9397 | 0.8157  |
| 8          | 16         | 1.1061 | 1.4045  |


不同负载率下的典型用能性能特性曲线如下：

| 负载率  | 耗电功率比   |
|------|---------|
| 0.0  | 0.0000  |
| 0.25 | 0.2497  |
| 0.5  | 0.4956  |
| 0.75 | 0.6902  |
| 1.0  | 1.0000  |


## 元件说明

元件参数标签页包括**属性**、**参数**、**引脚**三类参数，下面对每类参数进行详细说明。

### 属性

CloudPSS 提供了一套统一的元件属性功能，关于元件属性参数的配置，详见 [参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

### 参数

#### 基础参数

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 元件名称 | `CompName` |  | 元件名称 | 文本 | 元件名称 |
| 元件类型 | `CompType` |  | 选择元件类型 | 选择 | 选择**交流元件**时为交流电，选择**直流元件**时为直流电|


#### 外界环境

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 冷冻水供应温度 | `ChilledWaterTemperature` | $^{\circ}$C | 冷却水供应温度 | 实数 | 冷冻水出口温度，即制冷机组的供冷出口温度 |
| 冷却水供应温度 | `CoolingWaterTemperature` |  | 冷却水供应温度 | 表格 | 分别输入**时间**和**冷却水温度**，用于计算制冷机组的性能系数 COP，一般冷却水温度受环境温度影响，为时变值 |

#### 规划参数

在规划参数中编辑设备的仿真边界条件，主要包含**运行方式**和**运行策略曲线**。

| 参数名 | 键值 (key)  | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 待选设备类型 | `DeviceSelection` |  | 从设备库中选择设备类型 | 选择 | **选择数据管理模块录入的设备型号**，的厂家、产品型号、额定运行参数自动绑定为对应设备在数据管理模块中录入的参数。|
| 最小供冷容量配置 | `MinCoolCapacity` | kW | 设备的最小供冷容量配置 | 实数 | 仅当**待选设备类型**选择数据管理模块输入的设备后生效。|
| 最大供冷容量配置 | `MaxCoolCapacity` | kW | 设备的最大供冷容量配置 | 实数 | 仅当**待选设备类型**选择数据管理模块输入的设备后生效。|


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
| 电接口 | `DC/AC` | 1×1 | 可以在引脚处输入相同的字符使得元件与其他电元件相连，当基础参数**元件类型**项是**直流元件**时，键值为 **DC**；**元件类型**项是**交流元件**时，键值为 **AC**。|
| 热接口 | `heatPort` | 1×1 | 可以在引脚处输入相同的字符使得设备与其他电元件相连|




## 常见问题

元件模型是否具有代表性？

:   IESLab 平台的设备主要关注**能量流的变化和转换**过程，主要建立能量转换的**通用简化模型**。暂未按照其子特征建立详细的子类模型。。

电压缩制冷机的交直流元件有什么区别？

:   选择交流时为交流电，选择直流时为直流电
    在能量流计算过程中均为 PQ 节点。

    注意，交流元件和直流元件不能直接相连。

电压缩制冷机元件在规划优化平台使用时需要配置哪些元件参数？数据管理模块需要配置哪些数据？

:   在对电压缩制冷机元件进行仿真模拟前，务必录入编辑元件的**基础参数**和**规划参数**；

    在数据管理模块需要配置**电压缩制冷机**的**额定运行参数**。并在基础参数中绑定数据管理模块的电压缩制冷机。

电压缩制冷机元件的仿真参数是否有效？

:   无效，目前规划平台电压缩制冷机元件暂未考虑按照既定策略进行仿真，其策略由系统优化得到。


运行策略的开始时刻必须和仿真时刻一致吗？

:   **建议保持一致**。若运行策略的开始时刻与仿真时刻不一致，平台会**自动采用插值和外推算法填充**。    特别注意：对于运行策略，在仿真时刻之外的时间段策略，为**前平推和后平推**，即，策略之前的数值始终为策略的第一个值，策略之后的数值始终为策略里最后一个值。