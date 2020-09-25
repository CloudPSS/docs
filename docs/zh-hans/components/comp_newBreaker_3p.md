---
title: 三相断路器
author:

author_email:

date: 2019/4/12 10:20:50
updated: 2019/4/12 10:20:50

type: components
category: 3001
order: 1100

classname: _newBreaker_3p
symbol: newBreaker_3p
---
## 基本描述
{% compsymbol newBreaker_3p %}

> **该元件用以建模三相断路器**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 |  |
| Breaker OPEN Resistance | Ω | 断路器断开电阻 | 实数（常量） | 断路器断开电阻 |
| Breaker Close Resistance | Ω | 断路器闭合电阻 | 实数（常量） | 断路器闭合电阻 |
| Breaker Open Type | | 断路器断开方式 | 选择 | 选择断路器断开方式 |
| Current Chopping Limit | kA | 最大允许断开电流 |  实数（常量） | 最大允许断开电流 |

### Breaker Control
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Single Phase Operation | | 是否独立控制每相断路器 | 选择 | 是否独立控制每相断路器|
| 3 Phase Control Signal Name | | 三相断路器控制信号 | 文本 | 三相断路器控制信号，输入以@符号开头的信号名 |
| Phase A Control Signal Name | | A相断路器控制信号 | 文本 |A相断路器控制信号，输入以@符号开头的信号名|
| Phase B Control Signal Name | | B相断路器控制信号 | 文本 |A相断路器控制信号，输入以@符号开头的信号名|
| Phase C Control Signal Name | | C相断路器控制信号 | 文本 |A相断路器控制信号，输入以@符号开头的信号名|
| Initial Breaker Status (3 Phase) | | 断路器三相初始状态 | 选择 | 断路器三相初始状态 |
| Initial Breaker Status (Phase A) | | 断路器A相初始状态 | 选择 | 断路器A相初始状态|
| Initial Breaker Status (Phase B) | | 断路器B相初始状态 | 选择 | 断路器A相初始状态|
| Initial Breaker Status (Phase C) | | 断路器C相初始状态 | 选择 | 断路器A相初始状态|


### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| 3 Phase Breaker Current \[kA\] | 断路器三相电流 | 文本 | 此处输入断路器三相电流量测信号的标签，以#号开头，如#I，其维数为3\*1 |
| 3 Phase Breaker Voltage \[kA\] | 断路器三相电压 | 文本 | 此处输入断路器三相电压量测信号的标签，以#号开头，如#V，其维数为3\*1 |
| 3 Phase Breaker Status | 断路器三相状态 | 文本 | 此处输入断路器开关状态信号的标签，以#号开头，如#S，其维数为3\*1  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin + | 3×1 |三相断路器接线端口的正端 |
| Pin - | 3×1 |三相断路器接线端口的负端 |

## 使用说明


## 相关元件
[单相断路器](comp_newBreaker_1p.md)
