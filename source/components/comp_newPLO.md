---
title: 锁相振荡器
author: 
author_email:

date: 2018/12/3 17:35:06
updated: 2018/12/3 17:35:06

type: components
category: -3009
order: 100

classname: _newPLO
symbol: newPLO
---
## 基本描述
{% compsymbol newPLO %}

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 |  |
| Proportional Gain |  | 比例增益 | 实数（常量） |  |
| Integral Gain |  | 积分增益 | 实数（常量） |  |
| Base Voltage | kV | 电压基值 | 实数（常量） |  |
| Base Frequency | Hz | 频率基值 | 实数（常量） |  |
| Offset Angle to PLO | Deg | PLO输出波形相移 | 实数（常量） |  |
| Initialization Time | s | 启动时间，即PLO输出屏蔽时间 | 实数（常量） |  |
| Upper Tracking Limit | p.u. | 被跟踪频率上限(标幺值) | 实数（常量） |  |
| Lower Tracking Limit | p.u. | 被跟踪频率下限(标幺值) | 实数（常量） |  |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Tracked Frequency \[Hz\] | 被跟踪频率信号 | 文本 |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Va | 1×1 | |                   
| Vb | 1×1 | |                   
| Vc | 1×1 | |                   
| Theta 1 | 1×1 | |                   
| Theta 2 | 1×1 | |                   
| Theta 3 | 1×1 | |                   
| Theta 4 | 1×1 | |                   
| Theta 5 | 1×1 | |                   
| Theta 6 | 1×1 | |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了锁相振荡器的典型应用。

## 相关元件


