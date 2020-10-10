---
title: GJ
author:
author_email:

date: 2019/12/24 10:26:16
updated: 2019/12/24 10:26:16

type: components
category: -4001
order: 100

classname: _GJGoverner
symbol: GJ
---

## 基本描述

{% compsymbol GJ %}

## 参数列表
### 调节系统模型2（GJ）
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| T1 | s | 转速测量环节时间常数T1（秒） | 实数（常量） |  |
| ε | p.u. | 转速偏差死区ε（相对系统频率的标么值，死区为±0.5ε） | 实数（常量） |  |
| K1 | p.u. | 转速偏差放大倍数K1 | 实数（常量） |  |
| 控制方式 |  | 控制方式选择，（各种方式下，一次调频均能自动投入） | 选择 |  |
| Kp | p.u. | PID比例环节倍数KP | 实数（常量） |  |
| Kd | p.u. | PID微分环节倍数KD | 实数（常量） |  |
| Ki | p.u. | PID积分环节倍数KI | 实数（常量） |  |
| INTG_MAX | p.u. | PID积分环节限幅上限INTG_MAX | 实数（常量） |  |
| INTG_MIN | p.u. | PID积分环节限幅下限INTG_MIN | 实数（常量） |  |
| PID_MAX | p.u. | 调压器放大器的时间常数（秒） | 实数（常量） |  |
| PID_MIN | p.u. | PID输出限幅环节的下限PID_MIN | 实数（常量） |  |
| K2 |  | 负荷控制前馈系数。 | 实数（常量） |  |
| Wmax | p.u. | 一次调频负荷上限 | 实数（常量） |  |
| Wmin | p.u. | 一次调频负荷下限 | 实数（常量） |  |

### 调节系统模型2继续卡（GJ+）
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| TW_DELAY | s | 频率输入信号的纯延迟时间（秒） | 实数（常量） |  |
| TP_DELAY | s | 功率反馈信号的纯延迟时间（秒） | 实数（常量） |  |
| TR | s | 功率反馈信号对应的一阶惯性环节时间常数（秒） | 实数（常量） |  |
| TW2_delay | s | 频率信号放大后的纯延迟时间（秒） | 实数（常量） |  |
| TW_DELAY_PID | s | 频率信号放大后输入PID的纯延迟时间（秒） | 实数（常量） |  |
| DPup | p.u./s | 频率信号放大后输入PID信号的上升速率限制（ pu/秒） | 实数（常量） |  |
| DPdown | p.u./s | 频率信号放大后输入PID信号的下降速率限制（ pu/秒） | 实数（常量） |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pref | 1×1 | |
| PM1 | 1×1 | |
| wref | 1×1 | |
| w | 1×1 | |
| L2N | 1×1 | |
| Pcv | 1×1 | |

## 使用说明
BPA的GJ调速器控制框图如下所示。
![等效图](comp_Governors/GJ.png)

## 相关元件
