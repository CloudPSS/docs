---
title: Phase Locked Loop
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3000
order: 600

classname: _newPLL
symbol: newPLL
---
## Basic Description
{% compsymbol newPLL %}

> **The component is a three-phase π-controlled phase locked loop that produces theta, a ramp-up signal that is synchronized or phase-locked with the input voltage Va, varying from 0° to 360°.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Proportional Gain |  | Proportional gain | Real number (Const) | Proportional gain of PLL |
| Integral Gain |  | Integral gain | Real number (Const) | Integral gain of PLL |
| Base Voltage | kV | Base voltage | Real number (Const) | Base voltage of PLL |
| Base Frequency | Hz | Base frequency | Real number (Const) | Base frequency of PLL |
| Offset Angle to PLL | Rad | Phase shift of PLL output signal | Real number (Const) | Phase shift of PLL output signal, the value is between [-2π,2π] |
| Initialization Time | s | Initialization time, which output of PLL is unavailable | Real number (Const) | Initialization time, which output of PLL is unavailable |
| Upper Tracking Limit | p.u. | Upper tracking limit of frequency | Real number (Const) | Upper tracking limit of frequency |
| Lower Tracking Limit | p.u. | Lower tracking limit of frequency | Real number (Const) | Lower tracking limit of frequency |

### Monitoring
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Tracked Frequency \[Hz\] | Tracked frequency | Text | Enter the measurement signal label of tracked frequency, starting with #, such as #fa |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Va | 1×1 | Input pin of phase A |
| Vb | 1×1 | Input pin of phase B |
| Vc | 1×1 | Input pin of phase C |
| Theta | 1×1 | Output pin of phase angle |

## Using Instructions



## See Also

[Phase Locked Oscillator](comp_newPLO.html)
