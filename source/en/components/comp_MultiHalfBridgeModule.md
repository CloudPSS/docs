---
title: 半桥子模块
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3005
order: 100

classname: _MultiHalfBridgeModule
symbol: HBM
---
## 基本描述
{% compsymbol HBM %}

> **该元件用于建模MMC（模块化多电平变流器）中的半桥子模块。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入半桥子模块的名称 |
| No. of Sub-Modules |  | 子模块数量 | 整数（常量） | 子模块数量 |
| Capacitance Per Sub-Module | F | 子模块电容 | 实数（常量） | 子模块电容容值 |
| Initial Capacitor Voltage | kV | 初始电容电压 | 实数（常量） | 初始电容电压 |
| Capacitor Leakage Resistance | Ω | 电容泄露电阻 | 实数（常量） | 电容泄露电阻 |
| IGBT ON Resistance | Ω | IGBT导通电阻 | 实数（常量） | IGBT导通电阻 |
| IGBT OFF Resistance | Ω | IGBT关断电阻 | 实数（常量） | IGBT关断电阻 |
| Diode ON Resistance | Ω | 二极管导通电阻 | 实数（常量） | 二极管导通电 |
| Diode OFF Resistance | Ω | 二极管关断电阻 | 实数（常量） | 二极管关断电阻 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Capacitor Voltage Vector \[kV\] | 电容电压向量 | 文本 | 此处输入半桥子模块电容电压信号量测信号的标签，以#号开头，如#Vc |
| Capacitor Current Vector \[kA\] | 电容充电电流向量 | 文本 | 此处输入半桥子模块电容电流信号量测信号的标签，以#号开头，如#Ic |
| IGBT A Voltage Vector \[kV\] | IGBT(A)电压向量 | 文本 | 此处输入半桥子模块中IBGT(A)的电压信号量测信号的标签，以#号开头，如#Va |
| IGBT A Current Vector \[kA\] | IGBT(A)电流向量 | 文本 | 此处输入半桥子模块中IBGT(A)的电流信号量测信号的标签，以#号开头，如#Ia |
| Diode A Voltage Vector \[kV\] | 二极管(A)电压向量 | 文本 | 此处输入半桥子模块中二极管(A)的电压信号量测信号的标签，以#号开头，如#Vda |
| Diode A Current Vector \[kA\] | 二极管(A)电流向量 | 文本 | 此处输入半桥子模块中二极管(A)的电压信号量测信号的标签，以#号开头，如#Ida |
| IGBT B Voltage Vector \[kV\] | IGBT(B)电压向量 | 文本 | 此处输入半桥子模块中IBGT(B)的电压信号量测信号的标签，以#号开头，如#Vb |
| IGBT B Current Vector \[kA\] | IGBT(B)电流向量 | 文本 | 此处输入半桥子模块中IBGT(B)的电流信号量测信号的标签，以#号开头，如#Ib |
| Diode B Voltage Vector \[kV\] | 二极管(B)电压向量 | 文本 | 此处输入半桥子模块中二极管(B)的电压信号量测信号的标签，以#号开头，如#Vdb |
| Diode B Current Vector \[kA\] | 二极管(B)电流向量 | 文本 | 此处输入半桥子模块中二极管(B)的电压信号量测信号的标签，以#号开头，如#Idb |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin + | 1×1 |子模块的接线正端，也即IGBT(a)的s发射极 |
| Pin - | 1×1 |子模块的接线负端，也即IGBT(b)的s发射极 |
| Gate | 由参数控制 |开关信号输入端，其维数为模块数的2倍 |

## 使用说明



## 相关元件

[NLM2Ref](comp_FirePulseGenNLM2Ref.html)

