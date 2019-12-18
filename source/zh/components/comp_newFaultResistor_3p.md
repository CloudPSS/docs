---
title: 三相故障电阻
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3001
order: 600

classname: _newFaultResistor_3p
symbol: newFaultResistance_3p
---
## 基本描述
{% compsymbol newFaultResistance_3p %}

> **该元件用以建模三相故障电阻（单线图）。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入故障电阻的名称（可缺省） |
| Initial Resistance | Ω | 初始电阻 | 实数（常量） | 电阻的初始值 |
| Fault Start Time | s | 故障开始时刻 | 实数（变量） | 故障开始的时刻 |
| Fault End Time | s | 故障结束时刻 | 实数（变量） | 故障结束的时刻 |
| Fault Resistance | Ω | 故障期间电阻 | 实数（变量） | 故障期间的电阻值 |
| Fault Type |  | 故障类型 | 选择 | 选择故障的类型（A相、B相、C相、AB相、BC相、AC相、ABC相） |
| Fault Clear Type | | 故障清除时刻 | 选择 | 选择故障清除时刻为过零时刻或任意时刻 |
### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| 3 Phase Branch Current \[kA\] | 三相电阻故障电流 | 文本 |  此处输入电阻端电压量测信号的标签（3×1维），以#号开头，如#Vabc |
| 3 Phase Branch Voltage \[kV\] | 三相电阻故障电压 | 文本 | 此处输入电阻电流量测信号的标签（3×1维），以#号开头，如#Iabc |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin + | 3×1 |电阻正端（参考方向）|
| Pin - | 3×1 |电阻负端（参考方向）|

## 使用说明



## 相关元件

[单相故障电阻](comp_newFaultResistor.html)、[电阻](compnewResistorRouter.html)
