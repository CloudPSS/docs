---
title: 三相传输线
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3004
order: 400

classname: TranssmissionLineRouter
symbol: TLine_3p
---
## 基本描述
{% compsymbol TLine_3p %}

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 |  |
| Steady-state Frequency | Hz | 额定频率 | 实数（常量） |  |
| Length of Line | km | 线路长度 | 实数（常量） |  |
| Parameter Format |  | 参数输入方式 | 选择 |  |
| 0 Seq. Data |  | 零序参数输入方法 | 选择 |  |
| Has the Data Been Corrected for Long Line Effects? |  | 填入的线路参数是否已进行过长导线修正? | 选择 |  |
| Model Type |  | 传输线模型种类 | 选择 |  |

### R, X, B (p.u.)
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Rated Voltage (L-L, RMS) | kV | 额定电压 | 实数（常量） |  |
| Rated Power Capacity | MVA | 额定容量 | 实数（常量） |  |
| +/- Seq. Resistance | p.u./km | 单位长度正序电阻 | 实数（常量） |  |
| +/- Seq. Inductive Reactance | p.u./km | 单位长度正序电抗 | 实数（常量） |  |
| +/- Seq. Capacitive Susceptance | p.u./km | 单位长度正序电纳 | 实数（常量） |  |
| 0 Seq. Resistance | p.u./km | 单位长度零序电阻 | 实数（常量） |  |
| 0 Seq. Inductive Reactance | p.u./km | 单位长度零序电抗 | 实数（常量） |  |
| 0 Seq. Capacitive Susceptance | p.u./km | 单位长度零序电纳 | 实数（常量） |  |

### R, Xl, Xc (Ω)
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| +/- Seq. Resistance | Ω/km | 单位长度正序电阻 | 实数（常量） |  |
| +/- Seq. Inductive Reactance | Ω/km | 单位长度正序感抗 | 实数（常量） |  |
| +/- Seq. Capacitive Reactance | MΩ*km | 单位长度正序容抗 | 实数（常量） |  |
| 0 Seq. Resistance | Ω/km | 单位长度零序电阻 | 实数（常量） |  |
| 0 Seq. Inductive Reactance | Ω/km | 单位长度零序感抗 | 实数（常量） |  |
| 0 Seq. Capacitive Reactance | MΩ*km | 单位长度零序容抗 | 实数（常量） |  |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| 3 Phase Current Vector (Sending Terminal) \[kA\] | 送端电流向量 | 文本 |  |
| 3 Phase Current Vector (Receiving Terminal) \[kA\] | 受端电流向量 | 文本 |  |
| RMS Current (Sending Terminal) \[kA\] | 送端电流均方根值 | 文本 |  |
| RMS Current (Receiving Terminal) \[kA\] | 受端电流均方根值 | 文本 |  |
| Active Power (Sending Terminal) \[MW\] | 送端有功功率 | 文本 |  |
| Reactive Power (Sending Terminal) \[MVar\] | 送端无功功率 | 文本 |  |
| Active Power (Receiving Terminal) \[MW\] | 受端有功功率 | 文本 |  |
| Reactive Power (Receiving Terminal) \[MVar\] | 受端无功功率 | 文本 |  |
| Active Power Losses \[MW\] | 有功功率线路损耗 | 文本 |  |
| Reactive Power Losses \[MVar\] | 无功功率线路损耗 | 文本 |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Sending (i) Pin | 3×1 | |                   
| Receiving (j) Pin | 3×1 | |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了三相传输线的典型应用。

## 相关元件


