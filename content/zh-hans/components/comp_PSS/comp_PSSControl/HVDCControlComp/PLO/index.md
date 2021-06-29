---
title: 锁相振荡器
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3009
order: 100

classname: _newPLO
symbol: newPLO
---
## 基本描述


**该元件是一个三相π控制的锁相环，可以产生6个与输入电压Va同步且依次相差60度的斜升信号theta。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处锁相振荡器的名称（可缺省） |
| Proportional Gain |  | 比例增益 | 实数（常量） | 锁相振荡器的比例增益 |
| Integral Gain |  | 积分增益 | 实数（常量） | 锁相振荡器的积分增益 |
| Base Voltage | kV | 电压基值 | 实数（常量） | 锁相振荡器的电压基准值 |
| Base Frequency | Hz | 频率基值 | 实数（常量） | 锁相振荡器的频率基准值 |
| Offset Angle to PLO | Deg | PLO输出波形相移 | 实数（常量） | 输出斜升相角信号的相位偏移 |
| Initialization Time | s | 启动时间，即PLO输出屏蔽时间 | 实数（常量） | 锁相振荡器的启动时间 |
| Upper Tracking Limit | p.u. | 被跟踪频率上限(标幺值) | 实数（常量） | 锁相振荡器的频率跟踪的上限  |
| Lower Tracking Limit | p.u. | 被跟踪频率下限(标幺值) | 实数（常量） | 锁相振荡器的频率跟踪的下限 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Tracked Frequency \[Hz\] | 被跟踪频率信号 | 文本 | 此处输锁相振荡器跟踪频率量测信号的标签，以#号开头，如#fa |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Va | 1×1 | A相输入端口|
| Vb | 1×1 |B相输入端口 |
| Vc | 1×1 |C相输入端口 |
| Theta 1 | 1×1 | 相位1输出端口|
| Theta 2 | 1×1 | 相位2输出端口|
| Theta 3 | 1×1 | 相位3输出端口|
| Theta 4 | 1×1 | 相位4输出端口|
| Theta 5 | 1×1 | 相位5输出端口|
| Theta 6 | 1×1 | 相位6输出端口|

## 使用说明



## 相关元件

[锁相环](../../../comp_PSSMeasure/PLL/index.md)
