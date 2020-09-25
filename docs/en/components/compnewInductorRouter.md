---
title: Inductor
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3001
order: 300

classname: newInductorRouter
symbol: newInductor
---
## Basic Description
{% compsymbol newInductor %}

> **This component is used to model single or three phase inductor.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of inductor (Default) |
| Dimension |  | Single-phase or three-phase inductor？ | Select | Select single-phase or three-phase inductor |
| Inductance | H | Inductance （Each Phase） | Real number（Const） | Inductance |

### Monitoring
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Branch Current \[kA\] | Current of inductor | Text | Enter the label of the current in inductor (Auto Dimension), starting with #, such as #Il |
| Branch Voltage \[kV\] | Voltage of inductor | Text | Enter the label of the Voltage on inductor (Auto Dimension), starting with #, such as #Vl |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Pin + | Auto | Positive terminal |
| Pin - | Auto | Negative terminal |

## Using Instructions



## See Also

[Resistor](compnewResistorRouter.md), [Capacitor](compnewCapacitorRouter.md)