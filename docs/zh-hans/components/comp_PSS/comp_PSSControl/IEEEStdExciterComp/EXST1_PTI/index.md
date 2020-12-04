---
title: EXST1_PTI
author:
author_email:

date: 2019/12/24 10:26:16
updated: 2019/12/24 10:26:16

type: components
category: -5000
order: 100

classname: _EXST1_PTI
symbol: EXST1_PTI
---

## 基本描述



## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| \[Rc\] Load Compensating Resistance | p.u. | 负荷补偿电阻 | 实数（常量） |  |
| \[Xc\] Load Compensating Reactance | p.u. | 负荷补偿电抗 | 实数（常量） |  |
| \[TR\] Transducer Time Constant | s | Vc滤波时间常数 | 实数（常量） |  |

### EXST1_PTI Forward Lead-Lag Parameters
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| \[TC\] Lead Time Constant | s | 超前滞后环节超前时间常数 | 实数（常量） |  |
| \[TB\] Lag Time Constant | s | 超前滞后环节滞后时间常数 | 实数（常量） |  |

### EXST1_PTI Feedback and Regulator Parameters
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| \[KF\] Rate Feedback Gain | p.u. | 速率反馈微分环节比例参数 | 实数（常量） |  |
| \[TF\] Rate Feedback Time Constant | s | 速率反馈微分环节时间常数 | 实数（常量） |  |
| \[KA\] Regular Gain | p.u. | 调节器比例参数 | 实数（常量） |  |
| \[TA\] Regulator Time Constant | s | 调节器时间常数 | 实数（常量） |  |

### EXST1_PTI Field Circuit Constants
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| \[VRMAX\] Maximum Field Voltage | p.u. | Maximum Field Voltage | 实数（常量） |  |
| \[VRMIN\] Minimum Field Voltage | p.u. | Minimum Field Voltage | 实数（常量） |  |
| \[KC\] Field Current Commutating Impedance | p.u. | Field Current Commutating Impedance | 实数（常量） |  |
| \[VIMAX\] Upper Limit on Error Signal | p.u. | 电压差值信号上限 | 实数（常量） |  |
| \[VIMIN\] Lower Limit on Error Signal | p.u. | 电压差值信号下限 | 实数（常量） |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Vref | 1×1 | |
| Vs | 1×1 | |
| VT | 1×1 | |
| IT | 1×1 | |
| Ef0 | 1×1 | |
| If | 1×1 | |
| S2M | 1×1 | |
| Vref0 | 1×1 | |
| Ef | 1×1 | |

## 使用说明
IEEE的EXST1_PTI励磁器控制框图如下所示。
![等效图](comp_Exciters/EXST1_PTI_Inner.png)
## 测试模型
[]()显示了EXST1_PTI的典型应用。

## 相关元件

