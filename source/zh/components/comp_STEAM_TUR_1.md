---
title: STEAM_TUR_1
author:
author_email:

date: 2019/12/24 10:26:16
updated: 2019/12/24 10:26:16

type: components
category: -5001
order: 301

classname: _STEAM_TUR_1
symbol: STEAM_TUR_1
---

## 基本描述

{% compsymbol STEAM_TUR_1 %}

## 参数列表
### Hp Turbine: Contributions
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| K1 Fraction | p.u. | 比例参数K1 | 实数（常量） |  |
| K3 Fraction | p.u. | 比例参数K3 | 实数（常量） |  |
| K5 Fraction | p.u. | 比例参数K5 | 实数（常量） |  |
| K7 Fraction | p.u. | 比例参数K7 | 实数（常量） |  |

### Lp Turbine: Contributions
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| K2 Fraction | p.u. | 比例参数K2 | 实数（常量） |  |
| K4 Fraction | p.u. | 比例参数K4 | 实数（常量） |  |
| K6 Fraction | p.u. | 比例参数K6 | 实数（常量） |  |
| K8 Fraction | p.u. | 比例参数K8 | 实数（常量） |  |

### Time Constants
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| \[T4\] Steam Chest Time Constant | s | 蒸汽箱时间常数 | 实数（常量） |  |
| \[T5\] Reheater Time Constant | s | 再热器时间常数 | 实数（常量） |  |
| \[T6\] Reheater/Cross-over Time Constant | s | 再热器/交叉时间常数 | 实数（常量） |  |
| \[T7\] Cross-over Time Constant | s | 交叉时间常数 | 实数（常量） |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Cv | 1×1 | |
| w | 1×1 | |
| wref | 1×1 | |
| Pm0 | 1×1 | |
| L2N | 1×1 | |
| Cv0 | 1×1 | |
| Tm1 | 1×1 | |
| Tm2 | 1×1 | |
| Tm | 1×1 | |

## 使用说明
IEEE的STEAM_TUR1原动机控制框图如下所示。
![等效图](comp_Governors/STEAM_TUR1.png)

## 相关元件

