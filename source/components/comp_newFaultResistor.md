---
title: 单相故障电阻
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3001
order: 500

classname: _newFaultResistor
symbol: newFaultResistance_1p
---
## 基本描述
{% compsymbol newFaultResistance_1p %}

> **该元件用以建模单相故障电阻。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入故障电阻的名称（可缺省） |
| Initial Resistance | Ω | 初始电阻 | 实数（常量） | 电阻的初始值 |
| Fault Start Time | s | 故障开始时刻 | 实数（变量） | 故障开始的时刻 |
| Fault End Time | s | 故障结束时刻 | 实数（变量） | 故障结束的时刻 |
| Fault Resistance | Ω | 故障期间电阻 | 实数（变量） | 故障期间的电阻值 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Branch Current \[kA\] | 故障电阻电流 | 文本 | 此处输入电阻电压量测信号的标签，以#号开头，如#Va |
| Branch Voltage \[kV\] | 故障电阻电压 | 文本 | 此处输入电阻电流量测信号的标签，以#号开头，如#Ia |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin + | 1×1 |电阻正端（参考方向）|                   
| Pin - | 1×1 |电阻负端（参考方向）|                   

## 使用说明



## 相关元件

[三相故障电阻](/components/comp_newFaultResistor_3p.html)、[电阻](/components/compnewResistorRouter.html)
