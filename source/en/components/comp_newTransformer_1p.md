---
title: 单相变压器
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3001
order: 700

classname: _newTransformer_1p
symbol: newTransformer_1p
---
## 基本描述
{% compsymbol newTransformer_1p %}

> **该元件用以建模单相两绕组变压器。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入单相变压器的名称（可缺省） |
| Rated Power | MVA | 额定容量 | 实数（常量） | 变压器每侧绕组的额定容量$S_N$（所填变压器参数的功率基值） |
| Winding #1 Rated Voltage (RMS) | kV | 绕组#1额定电压有效值 | 实数（常量） | 绕组1额定电压有效值$V_{1N}$（所填变压器参数的电压基值） |
| Winding #2 Rated Voltage (RMS) | kV | 绕组#2额定电压有效值 | 实数（常量） | 绕组2额定电压有效值$V_{2N}$（所填变压器参数的电压基值） |
| Base Operation Frequency | Hz | 额定频率 | 实数（常量） | 变压器的额定频率$f_n$ |
| Leakage Reactance | p.u. | 等值漏电抗 | 实数（常量） | 变压器的等值漏电抗$X_T$，可由变压器短路实验或变压器铭牌得出 |
| Leakage Resistance | p.u. | 等值漏电阻 | 实数（常量） | 变压器的等值漏电阻$R_T$可由变压器短路实验或变压器铭牌得出 |
| Magnetization Conductance | p.u. | 励磁电导 | 实数（常量） | 变压器器励磁电导$G_M$，可由变压器空载实验或变压器铭牌得出 |
| Magnetizing Current | % | 空载励磁电流 | 实数（常量） | 变压器器空载励磁电流$I_M$，可由变压器空载实验或变压器铭牌得出 |
| Tap Changer |  | 变压器分接头选择 | 选择 | 选择变压器分接头位置（无/绕组1/绕组2) |

### Saturation
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Saturation Enabled |  | 考虑饱和特性? | 选择 | 选择“是”或“否”以开启或关闭铁芯饱和特性的建模 |
| Place Saturation on |  | 励磁绕组位置 | 选择 | 选择励磁绕组添加的位置，考虑饱和特性时，饱和电流由该位置注入 |
| Air Core Reactance | p.u. | 空心电抗 | 实数（常量） | 变压器空心电抗，通常大约是等值漏电抗的两倍 |
| Rush Decay Time Constant | s | 涌流衰减时间 | 实数（常量） | 变压器励磁涌流的衰减时间常数 |
| Knee Voltage | p.u. | 拐点电压 | 实数（常量） | 对应于饱和曲线拐点处的电压 |
| Time to Release Flux Clipping | s | 启动时间 | 实数（常量） | 为防止启动不稳定，需要在一段时间内不计算或限制计算磁链值，该时间即为启动时间 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Winding #1 Current \[kA\] | 绕组1电流 | 文本 | 此处输入变压器绕组1电流量测信号的标签，以#号开头，如#IL1 |
| Winding #2 Current \[kA\] | 绕组2电流 | 文本 | 此处输入变压器绕组2电流量测信号的标签，以#号开头，如#IL2 |
| Magnetizing Current \[kA\] | 励磁电流 | 文本 | 此处输入变压器励磁电流量测信号的标签，以#号开头，如#IM |
| Flux Linkage \[KWb-N\] | 磁链 | 文本 | 此处输入变压器磁链量测信号的标签，以#号开头，如#FLUX |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin #1+ | 1×1 |变压器绕组1的正端（参考方向）|                   
| Pin #1- | 1×1 |变压器绕组1的负端（参考方向）|                   
| Pin #2+ | 1×1 |变压器绕组2的正端（参考方向）|                   
| Pin #2- | 1×1 |变压器绕组2的负端（参考方向）|                   
| Tap1 | 1×1 |变压器绕组1的分接头，输入变比控制信号 |                   
| Tap2 | 1×1 |变压器绕组2的分接头，输入变比控制信号 |                   

## 使用说明



## 相关元件

[三相双绕组变压器](comp_newTransformer_3p2w.html)、[三相三绕组变压器](comp_newTransformer_3p3w.html)
