---
title: Capacitor
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3001
order: 401

classname: newCapacitorRouterWithInitValue
symbol: newCapacitorRouterWithInitValue
---
## Basic Description
{% compsymbol newCapacitorRouterWithInitValue %}

> **This component is used to model single/three-phase capacitor with the initial voltage.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Dimension |  | Single/three-phase capacitor? | Select | Select "Single Phase" or "Three Phase" capacitor |
| Capacitance | μF | Capacitance | Real number (Const) | Capacitance |
| Initial Capacitor Voltage | kV | Initial voltage | Real number (Const) | Initial voltage of capacitor  |

### Monitoring
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Branch Current \[kA\] | Current of capacitor | Text | Enter the label of the current of capacitor (Auto Dimension), starting with #, such as #Ic |
| Branch Voltage \[kV\] | Voltage of capacitor | Text | Enter the label of the voltage of capacitor (Auto Dimension), starting with #, such as #Vc |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Pin + | Auto | Positive terminal |
| Pin - | Auto | Positive terminal |

## Using Instructions



## See Also

[Inductor](compnewInductorRouter.html)、[Resistor](compnewResistorRouter.html)
