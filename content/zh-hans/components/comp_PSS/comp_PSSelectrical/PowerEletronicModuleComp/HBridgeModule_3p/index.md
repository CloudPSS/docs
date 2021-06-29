---
title: 三相H桥模块
author:

author_email:

date: 2019/4/12 10:20:50
updated: 2019/4/12 10:20:50

type: components
category: 3005
order: 800

classname: _ThreePhaseHBridgeModule
symbol: ThreePhaseHBridgeModule
---
## 基本描述

> **该元件为三相H桥电路模块的快速化仿真模型，其与详细电磁暂态模型的精度相当。该元件可用于构建整流/逆变器拓扑，适用于大规模微电网仿真。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 |  |
| IGBT On Resistance | Ω | IGBT导通电阻 | 实数（常量） | IGBT导通电阻 |
| IGBT Off Resistance | Ω | IGBT关断电阻 | 实数（常量） | IGBT关断电阻 |
| Diode On Resistance | Ω | 二极管导通电阻 | 实数（常量） | 二极管导通电阻 |
| Diode Off Resistance | Ω | 二极管关断电阻 | 实数（常量） | 二极管关断电阻 |
| DC Side Capacitance | F | 直流侧电容值 | 实数（常量） | 直流侧电容值 |
| Initial Capacitor Voltage | kV | 初始电容电压 | 实数（常量） | 初始电容电压 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| IGBT Voltage Vector \[kV\] | IGBT电压向量(6*1) | 文本 | 此处输入IBGT的电压向量量测信号的标签，以#号开头，如#Vt，其维数为6\*1 |
| IGBT Current Vector \[kA\] | IGBT电流向量(6*1) | 文本 | 此处输I入BGT的电流向量量测信号的标签，以#号开头，如#It，其维数为6\*1 |
| Diode Current Vector \[kA\] | 二极管电流向量(6*1) | 文本 | 此处输入二极管的电流向量量测信号的标签，以#号开头，如#Id，其维数为6\*1 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| AC | 3×1 | 交流侧接线端 |
| DC+ | 1×1 |直流侧接线端口的正端 |
| DC- | 1×1 |直流侧接线端口的负端 |
| GS | 6×1 |开关输入信号，按照开关1~6号依次排列 |
| KB | 1×1 |模块闭锁信号输入端，输入0则闭锁全部开关信号，输入非零则不闭锁 |

## 使用说明
下图示出三相H桥模块的单元测试算例，算例详见[三相H桥变流器](https://cloudpss.net/project/CloudPSSTemplate/3HM#/design)。

![单元测试图](./T6.png)

该电路为基本的三相电压源逆变拓扑。开关S1\~S6的脉冲信号分别由正弦脉宽调制逻辑实现，开关频率为5KHz。脉宽调制器产生的6路PWM信号，经过**多路信号合并**元件合成为一个6\*1维的输出信号，送至H桥模块的GS端。电感电流为准正弦波，直流电压为带高频纹波的直流。

## 相关元件
[背靠背H桥模块](../BacktoBackModule/index.md)、[H桥模块](../HBridgeModule/index.md)、[H桥电感模块](../HBridgeWithInductanceModule/index.md)、[H桥变压器模块](../HBridgeWithTransformerModule/index.md)、[半桥模块](../HalfBridgeModule/index.md)
