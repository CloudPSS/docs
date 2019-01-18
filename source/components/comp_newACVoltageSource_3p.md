---
title: 三相交流电压源
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
## 基本描述
{% compsymbol newACVoltageSource_3p %}

> **该元件用以建模三相交流电压源（单线图）。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Source Name |  | 元件名称 | 文本 | 此处输入三相交流电压源的名称（可缺省） |
| Is Star Point Grounded? |  | 电压源中性点是否接地？ | 选择 | 选择“Yes”或“No”以使电压源负端接地或不接地 |
| Rated Voltage (L-L, RMS) | kV | 线电压有效值 | 实数（常量） | 电压源额定线电压有效值 |
| Function Type |  | 函数类型 | 选择 | 选择电压源为正弦表达式或余弦表达式 |
| Initial Phase | Deg | 初始相位 | 实数（常量） | 电压源在t=0时的相位 |
| Frequency | Hz | 频率 | 实数（常量） |  电压源额定频率 |
| Resistance | Ω | 内阻 | 实数（常量） | 电压源额定内阻 |
| Start-up Type |  | 启动方式 | 选择 | 选择电压源启动发式为“Linear Ramp”或“Real Pole Ramp” |
| Voltage Ramp Up Time | s | 启动时间 | 实数（常量） | 输入斜坡启动时间，仅当“启动方式"项为“Linear Ramp”时生效 |
| Voltage Input Time Constant | s | 启动时间常数 | 实数（常量） | 输入极点时间常数，仅当“启动方式”项为“RealPoleRamp”时生效 |

### Fault Setting
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Is This a Fault Source ? |  | 是否为故障电压源 | 选择 | 选择“Yes”或“No”以选择是否为故障电压源 |
| Fault Start Time | s | 故障开始时间 | 实数（常量） | 故障开始的时间，仅当“是否为故障电压源”项选择"Yes"时有效 |
| Fault End Time | s | 故障结束时间 | 实数（常量） | 故结束的时间，仅当“是否为故障电压源”项选择"Yes"时有效 |
| Drop Ratio | p.u. | 故障电压降 | 实数（常量） | 故障时间电压的标幺值，仅当“是否为故障电压源”项选择"Yes"时有效 |

### Power Flow Data
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Bus Type |  | 节点类型 | 选择 | 该功能暂未开放 |
| Injected Active Power | MW | 节点注入有功功率 | 实数（常量） | 该功能暂未开放 |
| Injected Reactive Power | MVar | 节点注入无功功率 | 实数（常量） | 该功能暂未开放 |
| Bus Voltage Magnitude | p.u. | 母线电压幅值 | 实数（常量） | 该功能暂未开放 |
| Bus Voltage Angle | Deg | 母线电压相位 | 实数（常量） | 该功能暂未开放 |
| Lower Voltage Limit | p.u. | 母线电压下限 | 实数（常量） | 该功能暂未开放 |
| Upper Voltage Limit | p.u. | 母线电压上限 | 实数（常量） | 该功能暂未开放 |
| Lower Reactive Power Limit | MVar | 无功功率下限 | 实数（常量） | 该功能暂未开放 |
| Upper Reactive Power Limit | MVar | 无功功率上限 | 实数（常量） | 该功能暂未开放 |

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

{% pullquote tip %}
若电压源的内阻为0，CLoudPSS会自动选择为`理想电压源`模型。但多个理想电压源不能并联或成环状连接（违背基尔霍夫回路电压定律）。
{% endpullquote %}

## 测试模型
[<test name>](<test link>)显示了三相交流电压源的典型应用。

## 相关元件

[单相交流电压源](/components/comp_newACVoltageSource_1p.html)
