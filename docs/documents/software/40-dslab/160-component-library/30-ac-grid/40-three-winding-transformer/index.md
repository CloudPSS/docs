---
title: 三绕组变压器
description: 该元件用以建模三绕组变压器。

sidebar_position: 400

tags: 
- components
- dslab
---

<!-- ## 元件定义

该元件指交流三绕组变压器的设备设施，交流三绕组变压器是配电系统的重要元件，按照三绕组变压器用途可以分为**升压三绕组变压器和降压三绕组变压器**。平台采用电力系统常用的非标准变比三绕组变压器模型。

 **三绕组变压器简易模型：**

 ![交流三绕组变压器 =x100](./IES-GD-1Transformer-2.png)

**三绕组变压器的Π型等值电路：**

![交流三绕组变压器 =x200](./IES-GD-1Transformer-1.png)

$$
Z_{e} = k_{*}Z_{T}
$$
$$
Y_{1e} = \frac{k_{*} - 1}{k_{*}Z_{T} }
$$
$$
Y_{2e}=  \frac{1 - k_{*} }{ {k_{*} }^{2}Z_{T} }
$$
式中：$k_{*}$为变比标幺值，Z为等值阻抗，Y为等值导纳。

**三绕组变压器非标准变比$k_{\ast}$：**
$$
k_{*} = \frac{k}{k_{B}}
$$
$k$为三绕组变压器的实际变比，$k_B$ 为三绕组变压器的标准变比，即变比的基准值；$k_\ast$ 为变比的标幺值，也称非标准变比。一般而言，三绕组变压器非标准变比的范围在0.95-1.05之间。

![交流三绕组变压器 =x300](./IES-GD-1Transformer.png ) -->

## 元件说明

### 属性

CloudPSS 元件包含统一的**属性**选项，其配置方法详见 [参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。


### 引脚

交流电接口，可以在引脚处填写相同的字符使得两个元件相连。

### 参数

<!-- #### 设备参数

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 生产厂商 | `manufacturer` |  | 生产厂商 | 文本 | 生产厂商 |
| 设备型号 | `equipType` |  | 设备型号 | 文本 | 设备型号 |
| 额定容量 | `windingMVABase` | MVA | 额定容量 | 实数 | 额定容量 |
| 一次侧短路电阻 | `shortCircuitResistance` | Ω | 一次侧短路电阻 | 实数 | 一次侧短路电阻 |
| 一次侧短路电抗 | `shortCircuitImpedance` | Ω | 一次侧短路电抗 | 实数 | 一次侧短路电抗 |
| 三绕组变压器非标准变比 | `wind2Ratio` | p.u. | 三绕组变压器非标准变比 | 实数 | 三绕组变压器非标准变比 |
| 最大非标准变比 | `maxWind2Ratio` | p.u. | 最大非标准变比 | 实数 | 最大非标准变比 |
| 最小非标准变比 | `miniWind2Ratio` | p.u. | 最小非标准变比 | 实数 | 最小非标准变比 | -->

#### 基础参数

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 元件名称 | `CompName` |  | 元件名称 | 文本 | 元件名称 |
| 待选设备类型 | `DeviceSelection` |  | 从设备库中选择设备类型 | 选择 | **选择数据管理模块录入的设备型号**，将自动绑定对应设备的厂家、产品型号和额定运行参数。|
| 绕组#1额定电压有效值 | `V1` | kV | 绕组#1额定电压有效值 | 实数 | 绕组1额定电压有效值（所填三绕组变压器参数的电压基值） |
| 绕组#2额定电压有效值 | `V2` | kV | 绕组#2额定电压有效值 | 实数 | 绕组2额定电压有效值（所填三绕组变压器参数的电压基值） |
| 绕组#3额定电压有效值 | `V3` | kV | 绕组#3额定电压有效值 | 实数 | 绕组3额定电压有效值（所填三绕组变压器参数的电压基值） |
| 建造类型 | `IsNew` |  | 建造类型 | 选择 | 建造类型包括现状、扩建、新建 |
| 输配电价模型 | `PowerTransPriceModel` |  | 输配电价模型 | 选择 | 输配电价模型 |


### 引脚

元件有**电接口**引脚，用于与其他电设备连接，支持**线连接**和**信号名**的连接方式。

引脚的**名称、键值、维度、定义描述**的详细说明如下表所示。

| 引脚名 | 键值 (key)  | 维度 | 描述 |
| :--- | :--: | :--- | :--- |
| Pin #0 | `0` | 3×1 | 变压器绕组1接线端，可以在引脚处输入相同的字符使得元件与其他元件相连|
| Pin #1 | `1` | 3×1 | 变压器绕组2接线端，可以在引脚处输入相同的字符使得元件与其他元件相连|
| Pin #2 | `2` | 3×1 | 变压器绕组3接线端，可以在引脚处输入相同的字符使得元件与其他元件相连|
<!-- 
## 常见问题

元件模型是否具有代表性？
:   IESLab 平台的设备主要关注**能量流的变化和转换**过程，主要建立能量转换的**通用简化模型**。交流三绕组变压器主要关注电压转换过程，暂未按照其子特征建立详细的子类模型，不论是干式三绕组变压器，箱式三绕组变压器，还是油浸式三绕组变压器，不论是双绕组还是三绕组三绕组变压器，均可以用该通用模型。

能否调整三绕组变压器效率？
:   不能，模型内部参数不公开，转换效率不可见也不可修改。

是否考虑了额定容量等运行约束？
:   不考虑，平台暂不支持运行约束校验。

三绕组变压器的变比如何填写？
:   平台的变比为变比的标幺值，也称非标准变比。一般而言，三绕组变压器非标准变比的范围在 0.95-1.05 之间。

三绕组变压器的一次侧与二次侧可以接反吗？
:   可以的，平台三绕组变压器的一次侧与二次侧没有实际物理意义，只是便于计算区分而已。 -->