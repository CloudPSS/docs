---
title: Three-phase AC Voltage Source
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3004
order: 600

classname: _newACVoltageSource_3p
symbol: newACVoltageSource_3p
---
## Basic Description
{% compsymbol newACVoltageSource_3p %}

> **This component is used to model a three-phase AC voltage source.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Source Name |  | Name of component | Text | Enter the name of three-phase ac voltage source (Default) |
| Is Star Point Grounded? |  | Is star point grounded? | Select | Select “Yes” or “No” to ground or unground the Negative terminal of three-phase ac voltage source |
| Rated Voltage (L-L, RMS) | kV | Rated line-to line RMS voltage | Real number (Const) | Rated line-to-line RMS voltage |
| Function Type |  | Function type | Select | Select the signal type as “Sin” or “Cos” |
| Initial Phase | Deg | Initial phase | Real number (Const) | Initial phase of three-phase ac voltage source when t=0 |
| Frequency | Hz | Frequency | Real number (Const) |  Rated frequency |
| Resistance | Ω | Resistance | Real number (Const) | Rated resistance |
| Start-up Type |  | Start-up type | Select | Select startup type as “Linear Ramp” or “Real Pole Ramp” |
| Voltage Ramp Up Time | s | Voltage ramp up time | Real number (Const) | Voltage ramp up time, only valid when Start-up type is “Linear Ramp” |
| Voltage Input Time Constant | s | Voltage input time constant | Real number (Const) | Voltage input time const, only valid when Start-up type is “Linear Ramp” |

### Fault Setting
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Is This a Fault Source ? |  | Is this a fault source? | Select | Select “Yes” or “No” to set the source as a fault source or non-fault source |
| Fault Start Time | s | Fault start time | Real number (Const) | 故障开始的时间，仅当“是否为故障电压源”项选择"Yes"时有效 |
| Fault End Time | s | 故障结束时间 | 实数（常量） | 故结束的时间，仅当“是否为故障电压源”项选择"Yes"时有效 |
| Drop Ratio | p.u. | 故障电压降 | 实数（常量） | 故障时间电压的标幺值，仅当“是否为故障电压源”项选择"Yes"时有效 |

### Power Flow Data
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Bus Type |  | 节点类型 | 选择 | 用于潮流计算功能，指定电源所在母线的节点类型 |
| Injected Active Power | MW | 节点注入有功功率 | 实数（常量） | 用于潮流计算功能，对 PV、PQ 节点有效 |
| Injected Reactive Power | MVar | 节点注入无功功率 | 实数（常量） | 用于潮流计算功能，对 PQ 节点有效 |
| Bus Voltage Magnitude | p.u. | 母线电压幅值 | 实数（常量） | 用于潮流计算功能，对 PV、平衡节点有效 |
| Bus Voltage Angle | Deg | 母线电压相位 | 实数（常量） | 用于潮流计算功能，对平衡节点有效 |
| Lower Voltage Limit | p.u. | 母线电压下限 | 实数（常量） | 用于潮流计算功能，对 PQ 节点有效 |
| Upper Voltage Limit | p.u. | 母线电压上限 | 实数（常量） | 用于潮流计算功能，对 PQ 节点有效 |
| Lower Reactive Power Limit | MVar | 无功功率下限 | 实数（常量） | 用于潮流计算功能，对 PV、平衡节点有效 |
| Upper Reactive Power Limit | MVar | 无功功率上限 | 实数（常量） | 用于潮流计算功能，对 PV、平衡节点有效 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| 3 Phase Source Voltage Vector \[kV\] | 电压源端电压 | 文本 | 此处输入电压源电压量测信号的标签（3×1维），以#号开头，如#Vabc |
| 3 Phase Source Current Vector \[kA\] | 电压源输出电流 | 文本 | 此处输入电压源输出电流量测信号的标签（3×1维），以#号开头，如#Iabc |
| RMS Source Voltage \[kV\] | 电压源电压均方根值 | 文本 | 此处输入电压源电压均方根值量测信号的标签（1×1维），以#号开头，如#Vrms |
| RMS Source Current \[kA\] | 电压源电流均方根值 | 文本 | 此处输入电压源电流均方根值量测信号的标签（1×1维），以#号开头，如#Irms |
| Active Power \[MW\] | 有功功率 | 文本 | 此处输入电压源有功功率量测信号的标签（1×1维），以#号开头，如#P |
| Reactive Power \[MVar\] | 无功功率 | 文本 | 此处输入电压源无功功率量测信号的标签（1×1维），以#号开头，如#Q |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin - | 3×1 |电压源的负端（参考方向），仅当电压源非接地时有效 |
| Pin + | 3×1 |电压源的正端（参考方向）|

## 使用说明

{% pullquote info %}
若电压源的内阻为0，CLoudPSS会自动选择为`理想电压源`模型。但多个理想电压源不能并联或成环状连接（违背基尔霍夫回路电压定律）。
{% endpullquote %}


## 相关元件

[单相交流电压源](comp_newACVoltageSource_1p.html)
