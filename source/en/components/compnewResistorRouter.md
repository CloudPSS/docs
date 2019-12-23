---
title: Resistor
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3001
order: 200

classname: newResistorRouter
symbol: newResistor
---
## Basic Description
{% compsymbol newResistor %}

> **This component is used to model single-phase or 3-phase resistor.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of resistor (Default) |
| Dimension |  | Single-phase or three-phase resistor？ | Select | Select single-phase or three-phase resistor |
| Resistance | Ω | Resistance（Each Phase） | Real number（Const） | Resistance |

### Monitoring
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Branch Current \[kA\] | Current of resistor | Text | Enter the label of the current of resistor (Auto Dimension), starting with #, such as #Ir |
| Branch Voltage \[kV\] | Voltage of resistor | Text | Enter the label of the voltage of resistor (Auto Dimension), starting with #, such as #Vr |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Pin + | Auto | Positive terminal |
| Pin - | Auto | Negative terminal |

## Using Instructions



## See Also

[Capacitor](compnewCapacitorRouter.html)、[Inductor](compnewInductorRouter.html)
