---
title: 三电平H桥模块
author:

author_email:

date: 2019/4/12 10:20:50
updated: 2019/4/12 10:20:50

type: components
category: 3005
order: 1100

classname: _ThreeLevelHModule
symbol: ThreeLevelHModule
---
## 基本描述

> **该元件为三电平H桥模块的快速化仿真模型，其与详细电磁暂态模型的精度相当。该元件可用于构建整流/逆变器拓扑，适用于大规模微电网仿真。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 |  |
| IGBT On Resistance | Ω | IGBT导通电阻 | 实数（常量） | IGBT导通电阻 |
| IGBT Off Resistance | Ω | IGBT关断电阻 | 实数（常量） | IGBT关断电阻 |
| Diode On Resistance | Ω | 二极管导通电阻 | 实数（常量） | 二极管导通电阻 |
| Diode Off Resistance | Ω | 二极管关断电阻 | 实数（常量） | 二极管关断电阻 |
| Capacitance of C1 | F | 电容C1的容值 | 实数（常量） | 电容C1的容值 |
| Initial Capacitor Voltage of C1| kV | 电容C1的初始电压 | 实数（常量） | 电容C1的初始电压 |
| Capacitance of C2 | F | 电容C2的容值 | 实数（常量） | 电容C2的容值 |
| Initial Capacitor Voltage of C2| kV | 电容C2的初始电压 | 实数（常量） | 电容C2的初始电压 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Switch Voltage Vector \[kV\] | 开关(S1~S6)电压向量(4\*1) | 文本 | 此处输入开关(S1~S4)的电压向量量测信号的标签，以#号开头，如#Vt，其维数为4\*1 |
| Switch Current Vector \[kA\] | 开关(S1~S6)总电流向量(4\*1) | 文本 | 此处输入开关(S1~S4)总电流向量量测信号的标签，以#号开头，如#Itatal，其维数为4\*1 |
| IGBT Current Vector \[kA\] | IGBT(T1~T4)电流向量(4\*1) | 文本 | 此处输入IGBT(T1~T4)电流向量量测信号的标签，以#号开头，如#It，其维数为4\*1 |
| Diode Current Vector \[kA\] | 二极管(D1~D4)电流向量(4\*1) | 文本 | 此处输入二极管(D1~D4)电流向量量测信号的标签，以#号开头，如#Id，其维数为4\*1 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| P | 1×1 |直流侧接线端口的正端 |
| O | 1×1 |直流侧接线端口的中性点 |
| N | 1×1 |直流侧接线端口的负端 |
| GS | 4×1 |开关输入信号，按照开关1~4号依次排列 |
| KB | 1×1 |模块闭锁信号输入端，输入0则闭锁全部开关信号，输入非零则不闭锁 |

## 使用说明


## 相关元件
[背靠背H桥模块](../BacktoBackModule/index.md)、[H桥模块](../HBridgeModule/index.md)、[三相H桥模块](../HBridgeModule_3p/index.md)、[H桥电感模块](../HBridgeWithInductanceModule/index.md)、[H桥变压器模块](../HBridgeWithTransformerModule/index.md)、[半桥模块](../HalfBridgeModule/index.md)