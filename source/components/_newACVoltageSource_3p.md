---
title: 三相交流电压源
author: 
author_email:

date: 2018/12/3 15:48:31
updated: 2018/12/3 15:48:31

type: components
category: 3004
order: 600

classname: _newACVoltageSource_3p
symbol: newACVoltageSource_3p
---
## 基本描述
{% compsymbol newACVoltageSource_3p %}

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Source Name |  | 元件名称 | 文本 |  |
| Is Star Point Grounded? |  | 电压源中性点是否接地？ | 选择 |  |
| Rated Voltage (L-L, RMS) | kV | 线电压有效值 | 实数（常量） |  |
| Function Type |  | 函数类型 | 选择 |  |
| Initial Phase | Deg | 初始相位 | 实数（常量） |  |
| Frequency | Hz | 频率 | 实数（常量） |  |
| Resistance | Ω | 内阻 | 实数（常量） |  |
| Start-up Type |  | 启动方式 | 选择 |  |
| Voltage Ramp Up Time | s | 启动时间 | 实数（常量） |  |
| Voltage Input Time Constant | s | 启动时间常数 | 实数（常量） |  |

### Fault Setting
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Is This a Fault Source ? |  | 是否为故障电压源 | 选择 |  |
| Fault Start Time | s | 故障开始时间 | 实数（常量） |  |
| Fault End Time | s | 故障结束时间 | 实数（常量） |  |
| Drop Ratio | p.u. | 故障电压降 | 实数（常量） |  |

### Power Flow Data
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Bus Type |  | 节点类型 | 选择 |  |
| Injected Active Power | MW | 节点注入有功功率 | 实数（常量） |  |
| Injected Reactive Power | MVar | 节点注入无功功率 | 实数（常量） |  |
| Bus Voltage Magnitude | p.u. | 母线电压幅值 | 实数（常量） |  |
| Bus Voltage Angle | Deg | 母线电压相位 | 实数（常量） |  |
| Lower Voltage Limit | p.u. | 母线电压下限 | 实数（常量） |  |
| Upper Voltage Limit | p.u. | 母线电压上限 | 实数（常量） |  |
| Lower Reactive Power Limit | MVar | 无功功率下限 | 实数（常量） |  |
| Upper Reactive Power Limit | MVar | 无功功率上限 | 实数（常量） |  |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| 3 Phase Source Voltage Vector \[kV\] | 电压源端电压 | 文本 |  |
| 3 Phase Source Current Vector \[kA\] | 电压源输出电流 | 文本 |  |
| RMS Source Voltage \[kV\] | 电压源电压均方根值 | 文本 |  |
| RMS Source Current \[kA\] | 电压源电流均方根值 | 文本 |  |
| Active Power \[MW\] | 有功功率 | 文本 |  |
| Reactive Power \[MVar\] | 无功功率 | 文本 |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin - | 3×1 | |                   
| Pin + | 3×1 | |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了三相交流电压源的典型应用。

## 相关元件


