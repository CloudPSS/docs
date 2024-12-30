---
title: 燃气发电站
description: 该元件用以建模燃气发电站。

sidebar_position: 600

tags: 
- components
- dslab
---


<!-- ## 元件定义

该元件指燃气发电站的设备设施，燃气发电机组是适应世界环保要求和市场新环境而开发的新型发电机组，一些发电机组还可与余热回收装置一起作为热电联供机组。燃气发电站的工作过程是：压气机(即压缩机)连续地从大气中吸入空气并将其压缩；压缩后的空气进入燃烧室，与喷入的燃料混合后燃烧，成为高温燃气，随即流入燃气透平中膨胀作功，推动透平叶轮带着压气机叶轮一起旋转；加热后的高温燃气的作功能力显著提高，因而燃气透平在带动压气机的同时，尚有余功作为燃气发电站的输出机械功。燃气发电站由静止起动时，需用起动机带着旋转，待加速到能独立运行后，起动机才脱开。燃气发电站的工质来自大气，最后又排至大气，是开式循环；此外，还有工质被封闭循环使用的闭式循环。

![燃气发电站](./IES-Generator-3GT.svg ) -->


## 元件说明

### 属性

CloudPSS 元件包含统一的**属性**选项，其配置方法详见 [参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

### 参数

#### 基础参数

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 元件名称 | `Name` |  | 元件名称 | 文本 | 元件名称 |
| 出力曲线 | `PowerCurve` |  | 出力曲线模型 | 选择 | 选择数据管理模块中创建的出力曲线模型 |
| 是否新建 | `IsNew` |  | 是否新建 | 选择 | 是否新建 |
| 单位容量建设成本 | `CostPercapacity` | 万元/KW | 单位容量建设成本 | 实数 | 
| 上网电价模型 | `OnGridPowerPrice` |   | 上网电价模型 | 选择 | 选择数据管理模块中创建的上网电价模型 |

<!-- #### 仿真参数

在仿真参数中编辑设备的仿真边界条件，主要包含**运行方式**和**运行策略曲线**。

| 参数名 | 键值 (key)  | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 出力模式 | `SettingParaType` |  | 选择运行模式 | 选择 | 在输入仿真运行策略前需要指定设备运行模式。有**温度**和**功率**两种模式。若选择**温度**模式，则设备出力根据系统计算得到。若选择**功率**模式，设备出力为用户指定功率。|
| 温度模式运行策略 | `OutletTemp` |  | 配置设备在不同时刻的运行温度 | 表格 | 仅当**出力模式**项为温度模式时生效，在表格中录入**各个时间段对应的出口温度**。 **开始时间**对应每个仿真时刻，**供水温度**为设备出口温度。|
| 功率模式运行策略 | `PowerGenerating` |  | 配置设备在不同时刻的功率 | 表格 | 仅当**出力模式**项为功率模式时生效，在表格中录入**各个时间段对应的设备运行策略**。 **开始时间**对应每个仿真时刻，**设备启停运行策略**为设备运行挡位和运行台数的组合，注意设备运行总台数不能超过设备配置台数。|


#### 优化参数

在优化参数中编辑设备的优化条件。

| 参数名 | 键值 (key)  | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 是否优化该设备 | `OptimizationChoice` |  | 是否对燃气发电站元件的运行方式进行优化 | 选择 | 选择在运行优化时是否优化该元件，如果选是则会对设备的运行策略进行优化生成，如果选否则会直接使用仿真策略参与优化| -->

### 引脚

燃气发电站只有一个**电接口**引脚，用于将燃气发电站元件与其他电设备连接，支持**线连接**和**信号名**的连接方式。

引脚的**名称、键值、维度、定义描述**的详细说明如下表所示。

| 引脚名 | 键名 | 类型 | 维度 | 描述 |
|:------ |:---- |:----:|:----:|:---- |
| Pin \+ | `0` | 电气 | 3 x 1 | 可以在引脚处输入相同的字符使得该元件与其他电元件相连 |