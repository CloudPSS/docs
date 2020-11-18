---
title: 锁相环
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3000
order: 600

classname: _newPLL
symbol: newPLL
---
## 基本描述


> **该元件是一个三相π控制的锁相环，可以产生一个在0到2π变化的，与输入电压Va同步或锁相的斜升信号theta。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入锁相环的名称（可缺省） |
| Proportional Gain |  | 比例增益 | 实数（常量） | 锁相环的比例增益 |
| Integral Gain |  | 积分增益 | 实数（常量） | 锁相环的积分增益 |
| Base Voltage | kV | 电压基值 | 实数（常量） | 锁相环的电压基准值 |
| Base Frequency | Hz | 频率基值 | 实数（常量） | 锁相环的频率基准值 |
| Offset Angle to PLL | Rad | PLL输出波形相移 | 实数（常量） | 输出斜升相角信号的相位偏移，填入值范围为[-2π,2π] |
| Initialization Time | s | 启动时间，即PLL输出屏蔽时间 | 实数（常量） | 锁相环的启动时间 |
| Upper Tracking Limit | p.u. | 被跟踪频率上限 | 实数（常量） | 锁相环频率跟踪的上限 |
| Lower Tracking Limit | p.u. | 被跟踪频率下限 | 实数（常量） | 锁相环频率跟踪的下限 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Tracked Frequency \[Hz\] | 被跟踪频率信号 | 文本 | 此处输入锁相环跟踪频率量测信号的标签，以#号开头，如#fa |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Va | 1×1 | A相输入端口|
| Vb | 1×1 |B相输入端口 |
| Vc | 1×1 |C相输入端口 |
| Theta | 1×1 |相角输出端口 |

## 使用说明



## 相关元件

[锁相振荡器](comp_newPLO.md)
