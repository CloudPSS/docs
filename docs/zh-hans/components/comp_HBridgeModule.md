---
title: H桥模块
author:

author_email:

date: 2019/4/12 10:20:50
updated: 2019/4/12 10:20:50

type: components
category: 3005
order: 400

classname: _HBridgeModule
symbol: HBridgeModule
---

## 基本描述

{% compsymbol HBridgeModule %}

> **该元件为单相 H 桥电路模块的快速化仿真模型，其与详细电磁暂态模型的精度相当。该元件可用于构建整流/逆变器拓扑，适用于大规模微电网仿真。**

## 参数列表

### Configuration

| 参数名                    | 单位 | 备注           |     类型     | 描述           |
| :------------------------ | :--- | :------------- | :----------: | :------------- |
| Name                      |      | 元件名称       |     文本     |                |
| IGBT On Resistance        | Ω    | IGBT 导通电阻  | 实数（常量） | IGBT 导通电阻  |
| IGBT Off Resistance       | Ω    | IGBT 关断电阻  | 实数（常量） | IGBT 关断电阻  |
| Diode On Resistance       | Ω    | 二极管导通电阻 | 实数（常量） | 二极管导通电阻 |
| Diode Off Resistance      | Ω    | 二极管关断电阻 | 实数（常量） | 二极管关断电阻 |
| DC Side Capacitance       | F    | 直流侧电容值   | 实数（常量） | 直流侧电容值   |
| Initial Capacitor Voltage | kV   | 初始电容电压   | 实数（常量） | 初始电容电压   |

### Monitoring

| 参数名                      | 备注                 | 类型 | 描述                                                                      |
| :-------------------------- | :------------------- | :--: | :------------------------------------------------------------------------ |
| IGBT Voltage Vector \[kV\]  | IGBT 电压向量(4\*1)  | 文本 | 此处输入 IBGT 的电压向量量测信号的标签，以#号开头，如#Vt，其维数为 4\*1   |
| IGBT Current Vector \[kA\]  | IGBT 电流向量(4\*1)  | 文本 | 此处输 I 入 BGT 的电流向量量测信号的标签，以#号开头，如#It，其维数为 4\*1 |
| Diode Current Vector \[kA\] | 二极管电流向量(4\*1) | 文本 | 此处输入二极管的电流向量量测信号的标签，以#号开头，如#Id，其维数为 4\*1   |

## 端口列表

| 端口名 | 数据维数 | 描述                                                            |
| :----- | :------: | :-------------------------------------------------------------- |
| AC +   |   1×1    | 交流侧接线端口的正端                                            |
| AC -   |   1×1    | 交流侧接线端口的负端                                            |
| DC +   |   1×1    | 直流侧接线端口的正端                                            |
| DC -   |   1×1    | 直流侧接线端口的负端                                            |
| GS     |   4×1    | 开关输入信号，按照开关 1~4 号依次排列                           |
| KB     |   1×1    | 模块闭锁信号输入端，输入 0 则闭锁全部开关信号，输入非零则不闭锁 |

## 使用说明

下图示出了 H 桥模块的单元测试算例，算例详见[Test_HBridge](https://www.cloudpss.net/editor/?id=1183)。
![单元测试图](comp_VSCModule/H.png)
该电路为基本的电压源逆变拓扑。开关 S1\~S4 的脉冲信号分别由正弦脉宽调制逻辑实现，开关频率为 5KHz。脉宽调制器产生的 4 路 PWM 信号，经过**ChannelMerge**元件合成为一个 4\*1 维的输出信号，送至 H 桥模块的 GS 端。电感电流为准正弦波，直流电压为 100Hz 脉动直流。

## 相关元件

[背靠背 H 桥模块](comp_BacktoBackModule.md)
[三相 H 桥模块](comp_ThreePhaseHBridgeModule.md)
[H 桥电感模块](comp_HBridgeWithInductanceModule.md)
[H 桥变压器模块](comp_HBridgeWithTransformerModule.md)
[半桥模块](comp_HalfBridgeModule.md)
