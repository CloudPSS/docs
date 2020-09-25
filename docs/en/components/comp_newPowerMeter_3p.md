---
title: Three-phase Power Meter
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3000
order: 500

classname: _newPowerMeter_3p
symbol: newPowerMeter_3p
---
## Basic Description
{% compsymbol newPowerMeter_3p %}

> **This component measures 3-phase active and reactive power.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Fundamental Frequency | Hz | Fundamental frequency | Real number (Const)  | Fundamental frequency of power measurement |
| Smoothing Time Constant | s | Smoothing time constant | Real number (Const) | Smoothing time constant of power measurementconstant |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| 3 Phase Voltage \[kV\] | 3×1 | Enter the measurement signal label of the 3-phase voltage, starting with #, such as #Vabc |
| 3 Phase Current \[kA\] | 3×1 | Enter the measurement signal label of the 3-phase current, starting with #, such as #Iabc |
| Active Power \[MW\] | 1×1 | Enter the measurement signal label of the active power, starting with #, such as #P |
| Reactive Power \[MVar\] | 1×1 | Enter the measurement signal label of the reactive power, starting with #, such as #Q |

## Using Instructions



## See Also

[Branch Voltage Meter](comp_NewBranchVoltageMeter.md), [Voltage Meter](comp_NewVoltageMeter.md), [Current Meter](comp_NewCurrentMeter.md)

