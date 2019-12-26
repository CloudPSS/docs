---
title: Phase Locked Oscillator
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3009
order: 100

classname: _newPLO
symbol: newPLO
---
## Basic Description
{% compsymbol newPLO %}

**This component is a three-phase phase-locked loop using π Control, The output signal θ1 is a ramp synchronized to the input signal Va, other output signals (θ2~θ6) are then phase shifted by simply adding a constant angle (60°) to the ramp respectively.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Proportional Gain |  | Proportional gain | Real number (Const) | Proportional gain of PLO |
| Integral Gain |  | Integral gain | Real number (Const) | Integral gain of PLO |
| Base Voltage | kV | Base voltage | Real number (Const) | Base voltage of PLO |
| Base Frequency | Hz | Base frequency | Real number (Const) | Base frequency of PLO |
| Offset Angle to PLO | Rad | Phase shift of PLO output signal | Real number (Const) | Phase shift of PLO output signal, the value is between [-2π,2π] |
| Initialization Time | s | Initialization time, which output of PLO is unavailable | Real number (Const) | Initialization time, which output of PLO is unavailable |
| Upper Tracking Limit | p.u. | Upper tracking limit of frequency | Real number (Const) | Upper tracking limit of frequency |
| Lower Tracking Limit | p.u. | Lower tracking limit of frequency | Real number (Const) | Lower tracking limit of frequency |

### Monitoring
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Tracked Frequency \[Hz\] | Tracked frequency | Text | Enter the measurement signal label of tracked frequency, starting with #, such as #fa |



## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Va | 1×1 | Phase A Input pin |
| Vb | 1×1 | Phase B Input pin |
| Vc | 1×1 | Phase C Input pin |
| Theta 1 | 1×1 | Theta 1 Output pin |
| Theta 2 | 1×1 | Theta 2 Output pin |
| Theta 3 | 1×1 | Theta 3 Output pin |
| Theta 4 | 1×1 | Theta 4 Output pin |
| Theta 5 | 1×1 | Theta 5 Output pin |
| Theta 6 | 1×1 | Theta 6 Output pin |

## Using Instructions



## See Also

[Phase Locked Loop](comp_newPLL.html)
