---
title: 三相三绕组变压器
author: 
author_email:

date: 2018/12/3 15:48:31
updated: 2018/12/3 15:48:31

type: components
category: 3004
order: 800

classname: _newTransformer_3p3w
symbol: newTransformer_3p3w
---
## 基本描述
{% compsymbol newTransformer_3p3w %}

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 |  |
| Winding #1 Rated Power | MVA | 绕组#1额定容量 | 实数（常量） |  |
| Winding #2 Rated Power | MVA | 绕组#2额定容量 | 实数（常量） |  |
| Winding #3 Rated Power | MVA | 绕组#3额定容量 | 实数（常量） |  |
| Winding #1 Rated Voltage (L-L, RMS) | kV | 绕组#1额定线电压有效值 | 实数（常量） |  |
| Winding #2 Rated Voltage (L-L, RMS) | kV | 绕组#2额定线电压有效值 | 实数（常量） |  |
| Winding #3 Rated Voltage (L-L, RMS) | kV | 绕组#3额定线电压有效值 | 实数（常量） |  |
| Base Operation Frequency | Hz | 额定频率 | 实数（常量） |  |
| Winding #1 Type |  | 绕组#1连接类型 | 选择 |  |
| Winding #2 Type |  | 绕组#2连接类型 | 选择 |  |
| Winding #3 Type |  | 绕组#3连接类型 | 选择 |  |
| Delta Lags or Leads Y |  | Delta绕组连接方式 | 选择 |  |
| Winding #1 Neutral Point Resistance | Ω | 绕组#1中性点电阻 | 实数（常量） |  |
| Winding #2 Neutral Point Resistance | Ω | 绕组#2中性点电阻 | 实数（常量） |  |
| Winding #3 Neutral Point Resistance | Ω | 绕组#3中性点电阻 | 实数（常量） |  |
| Positive Sequence Leakage Reactance (#1-#2) | p.u. | 绕组(#1-#2)正序漏电抗 | 实数（常量） |  |
| Positive Sequence Leakage Reactance (#1-#3) | p.u. | 绕组(#1-#3)正序漏电抗 | 实数（常量） |  |
| Positive Sequence Leakage Reactance (#2-#3) | p.u. | 绕组(#2-#3)正序漏电抗 | 实数（常量） |  |
| Positive Sequence Leakage Resistance (#1-#2) | p.u. | #1-#2绕组正序漏电阻 | 实数（常量） |  |
| Positive Sequence Leakage Resistance (#1-#3) | p.u. | #1-#3绕组正序漏电阻 | 实数（常量） |  |
| Positive Sequence Leakage Resistance (#2-#3) | p.u. | #2-#3绕组正序漏电阻 | 实数（常量） |  |
| Magnetization Conductance | p.u. | 励磁电导(空载损耗标幺值) | 实数（常量） |  |
| Magnetizing Current | % | 空载励磁电流 | 实数（常量） |  |
| Tap Changer |  | 变压器分接头选择 | 选择 |  |
| Initial Tap Ratio |  | 初始分接头档位 | 实数（常量） |  |

### Saturation
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Saturation Enabled |  | 考虑饱和特性? | 选择 |  |
| Place Saturation on |  | 励磁绕组位置 | 选择 |  |
| Air Core Reactance | p.u. | 空心电抗 | 实数（常量） |  |
| Rush Decay Time Constant | s | 涌流衰减时间 | 实数（常量） |  |
| Knee Voltage | p.u. | 拐点电压 | 实数（常量） |  |
| Time to Release Flux Clipping | s | 启动时间 | 实数（常量） |  |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Winding #1 Line Current Vector \[kA\] | 绕组1三相线电流 | 文本 |  |
| Winding #1 Phase Current Vector \[kA\] | 绕组1三相相电流 | 文本 |  |
| Winding #2 Line Current Vector \[kA\] | 绕组2三相线电流 | 文本 |  |
| Winding #2 Phase Current Vector \[kA\] | 绕组2三相相电流 | 文本 |  |
| Winding #3 Line Current Vector \[kA\] | 绕组3三相线电流 | 文本 |  |
| Winding #3 Phase Current Vector \[kA\] | 绕组3三相相电流 | 文本 |  |
| Winding #1 RMS Line Current \[kA\] | 绕组1线电流均方根值 | 文本 |  |
| Winding #2 RMS Line Current \[kA\] | 绕组2线电流均方根值 | 文本 |  |
| Winding #3 RMS Line Current \[kA\] | 绕组3线电流均方根值 | 文本 |  |
| Winding #1 Active Power \[MW\] | 绕组1有功功率 | 文本 |  |
| Winding #1 Reactive Power \[MVar\] | 绕组1无功功率 | 文本 |  |
| Winding #2 Active Power \[MW\] | 绕组2有功功率 | 文本 |  |
| Winding #2 Reactive Power \[MVar\] | 绕组2无功功率 | 文本 |  |
| Winding #3 Active Power \[MW\] | 绕组3有功功率 | 文本 |  |
| Winding #3 Reactive Power \[MVar\] | 绕组3无功功率 | 文本 |  |
| 3 Phase Magnetizing Current \[kA\] | 三相励磁电流 | 文本 |  |
| 3 Phase Flux Linkage \[KWb-N\] | 三相磁链 | 文本 |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin #1 | 3×1 | |                   
| Pin #2 | 3×1 | |                   
| Pin #3 | 3×1 | |                   
| Tap | 1×1 | |                   
| Tap | 1×1 | |                   
| Tap | 1×1 | |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了三相三绕组变压器的典型应用。

## 相关元件


