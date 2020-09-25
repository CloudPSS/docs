---
title: Voltage Meter
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3000
order: 200

classname: _NewVoltageMeter
symbol: newVoltageMeter
---
## Basic Description
{% compsymbol newVoltageMeter %}

> **This component is used to measure the voltage to ground and the output unit is kV.**

## Parameter
### Monitoring
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Dimension |  | Select | Select single-phase or three-phase voltmeter |
| Name for Voltage Signal \[kV\] | Name for voltage signal | Text | Enter the measurement signal label of the voltage signal, starting with #, such as #Va  |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Pin + | Control by the dimension parameter | Positive terminal of voltmeter |

## Using Instructions



## See Also

[Branch Voltage Meter](comp_NewBranchVoltageMeter.md), [Current Meter](comp_NewCurrentMeter.md)
