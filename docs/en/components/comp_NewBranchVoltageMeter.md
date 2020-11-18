---
title: Branch Voltage Meter
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3000
order: 100

classname: _NewBranchVoltageMeter
symbol: newBranchVoltageMeter
---
## Basic Description


> **This component is used to measure the branch voltage and the output unit is kV.**

## Parameter
### Monitoring
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Dimension | Dimension | Select | Select single-phase or three-phase voltmeter |
| Name for Voltage Signal \[kV\] | Name for voltage signal | Text | Enter the measurement signal label of the voltage signal, starting with #, such as #Va |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Pin + | Control by the dimension parameter | Positive terminal of voltmeter |
| Pin - | Control by the dimension parameter | Negative terminal of voltmeter |

## Using Instructions



## See Also

[Voltage Meter](comp_NewVoltageMeter.md), [Current Meter](comp_NewCurrentMeter.md)
