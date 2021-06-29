---
title: Hydro Governor
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3010
order: 200

classname: _GOV2
symbol: GOV2
---
## 基本描述


## 参数列表

### Common
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| (Rp) Permanent Droop | p.u. |  | 实数（常量） |  |
| (Gmax) Maximum Gate Position | p.u. |  | 实数（常量） |  |
| (Gmin) Minimum Gate Position | p.u. |  | 实数（常量） |  |
| (MXGTOR) Max. Gate Opening Rate | p.u./s |  | 实数（常量） |  |
| (MXGTCR) Max. Gate closing Rate | p.u./s |  | 实数（常量） |  |

### Gov2:  Electro-Hydraulic (Pid) Governor
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Proportional Gain ( Kp)  | p.u. |  | 实数（常量） |  |
| Integral Gain ( Ki ) | p.u. |  | 实数（常量） |  |
| Derivative Gain ( Kd ) | p.u. |  | 实数（常量） |  |
| Pilot Servomotor Time Constant (TA) | s |  | 实数（常量） |  |
| Gate Servo Time Constant (TC) | s |  | 实数（常量） |  |
| Gate Servomotor Time Constant (TD) | s |  | 实数（常量） |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| z0 | 自动 | |
| w | 自动 | |
| Wref | 自动 | |
| L2N | 自动 | |
| z | 自动 | |

## 使用说明



## 相关元件


