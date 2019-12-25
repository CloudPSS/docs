---
title: STEAM_GOV_1
author:
author_email:

date: 2019/12/24 10:26:16
updated: 2019/12/24 10:26:16

type: components
category: -4001
order: 300

classname: _STEAM_GOV_1
symbol: STEAM_GOV_1
---

## 基本描述

{% compsymbol STEAM_GOV_1 %}

## 参数列表
### Gov1:Mechanical-Hydraulic Governor
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| \[DB\] Dead Band Value | p.u. | 输入死区 | 实数（常量） |  |
| \[Kg\] Inverse of Droop | p.u. | Inverse of Droop | 实数（常量） |  |
| \[TSR\] Speed Relay Time Constant | s | Speed Relay Time Constant | 实数（常量） |  |
| \[TSM\] Gate Servo Time Constant | s | Gate Servo Time Constant | 实数（常量） |  |
| \[P_up\]Maximum Opening Rate | p.u./s | Maximum Opening Rate | 实数（常量） |  |
| P_down | p.u./s | Maximum Closing Rate | 实数（常量） |  |
| \[Cmax\]Maximum Servo Position | p.u. | Maximum Servo Position | 实数（常量） |  |
| \[Cmin\]Minimum Servo Position | p.u. | Minimum Servo Position | 实数（常量） |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Cv0 | 1×1 | |
| wref | 1×1 | |
| w | 1×1 | |
| L2N | 1×1 | |
| Cv | 1×1 | |

## 使用说明
IEEE的STEAM_GOV1调速器控制框图如下所示。
![等效图](comp_Governors/STEAM_GOV1.png)

## 测试模型
[]()显示了STEAM_GOV_1的典型应用。

## 相关元件

