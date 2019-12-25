---
title: PSS1A
author:
author_email:

date: 2019/12/24 10:26:16
updated: 2019/12/24 10:26:16

type: components
category: -5002
order: 300

classname: _PSS1A
symbol: PSS1A
---

## 基本描述

{% compsymbol PSS1A %}

## 参数列表
### Pss1A: Power System Stabilizer Data
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| \[T6\] Transducer Time Constant | s | Transducer Time Constant | 实数（常量） |  |
| \[Ks\] PSS Gain | s | 比例放大系数 | 实数（常量） |  |
| \[T5\] Washout Time Constant | s | Washout Time Constant | 实数（常量） |  |
| \[A1\] Filter Constant | p.u. | 滤波器常数1 | 实数（常量） |  |
| \[A2\] Filter Constant | p.u. | 滤波器常数2 | 实数（常量） |  |
| \[T1\] 1st Lead Time Constant | s | 第一个超前滞后环节超前时间常数 | 实数（常量） |  |
| \[T2\] 1st Lag Time Constant | s | 第一个超前滞后环节滞后时间常数 | 实数（常量） |  |
| \[T3\] 2st Lead Time Constant | s | 第二个超前滞后环节超前时间常数 | 实数（常量） |  |
| \[T4\] 2st Lag Time Constant | s | 第二个超前滞后环节滞后时间常数 | 实数（常量） |  |
| \[VSTMAX\] PSS Output Maximum Limit | p.u. | PSS输出最大值 | 实数（常量） |  |
| \[VSTMIN\] PSS Output Minimum Limit | p.u. | PSS输出最小值 | 实数（常量） |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| In | 1×1 | |
| ENAB | 1×1 | |
| Vs | 1×1 | |

## 使用说明
IEEE的PSS1A励磁器控制框图如下所示。
![等效图](comp_PSSs/PSS1A.png)

## 相关元件

