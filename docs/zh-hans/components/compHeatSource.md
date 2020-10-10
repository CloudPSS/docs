---
title: 热源
author: 
author_email:

date: 2018/12/4 18:05:35
updated: 2018/12/4 18:05:35

type: components
category: 10000
order: 1000

classname: HeatSource
symbol: heat1
---
## 基本描述
{% compsymbol heat1 %}

> **该元件指为供热系统提供热量（或冷量）的设备设施。**

## 参数列表
### 水力控制条件
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| 是否控制流量？ |  | Specify Mass Flowrate? | 选择 | 通过热源进行循环的热媒流量，此处选择是否将热媒流量设定为已知值 |
| 流量 | kg/s | Mass Flowrate | 表格 | 输入不同时间点热媒流量的设定值 |
| 是否控制回水压力？ |  | Specify Return Pressure? | 选择 | 热源进口处的热媒压力，此处选择是否将回水压力设定为已知值 |
| 回水压力 | MPa | Return Pressure | 表格 | 输入不同时间点回水压力的设定值 |
| 是否控制站内增压？ |  | Specify Pressure Increment? | 选择 | 热源内部的压力增量，此处选择是否将站内增压设定为已知值 |
| 站内增压 | MPa | Pressure Increment | 表格 | 输入不同时间点站内增压的设定值 |

### 热力控制条件
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| 是否控制供热量？ |  | Specify Heat Supply? | 选择 | 热源向外输出的热量，此处选择是否将供热量设定为已知值 |
| 供热量 | kW | Heat Supply | 表格 | 输入不同时间点供热量的设定值 |
| 是否控制供热温度？ |  | Specify Supply Temperature? | 选择 | 热源出口处的热媒温度，此处选择是否将供热温度设定为已知值 |
| 供热温度 | ℃ | Supply Temperature | 表格 | 输入不同时间点供热温度的设定值 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Input&Output | 1×1 | 同时代表热源元件的入口连接点和出口连接点 |

## 使用说明

::: tip
目前版本中热源与其它元件相连时热源应作为起点，否则极易引发错误。
:::

## 相关元件

