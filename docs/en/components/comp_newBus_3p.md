---
title: Three-phase AC Bus
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3004
order: 500

classname: _newBus_3p
symbol: newBus_3p
---
## Basic Description


> **This component is used to model a three-phase AC bus. The three-phase AC bus is only an ideal connection point and has no practical physical meaning.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of AC bus | Text | Enter the name of three-phase AC bus. (Default) |
| Voltage Magnitude (L-L, RMS) | p.u. | Voltage magnitude (L-L, RMS) | Real number (Const) | Voltage magnitude of AC bus for AC system quick start. (could be default) |
| Voltage Angle | Deg | Voltage angle of AC bus | Real number (Const) | Voltage angle of AC bus for AC system quick start. (could be default) |
| Base Voltage (L-L, RMS) | kV | Base voltage of AC bus | Real number (Const) | Base voltage of AC bus for AC system quick start. (could be default) |
| Rated Frequency | Hz | Rated frequency | Real number (Const) | Rate frequency of AC bus for AC system quick start. (could be default) |
| Ramping Time | s | Ramping time (for initialization) | Real number (Const) | Voltage ramping time of AC bus for AC system quick start. (colud be default) |

### Monitoring
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| 3 Phase Voltage Vector \[kV\] | 3 phase voltage | Text | Enter the measurement signal label of the 3-phase voltage of AC bus (3x1), starting with #, such as #Vabc |
| RMS Voltage \[kV\] | Rms voltage | Text | Enter the measurement signal label of rms voltage of AC bus (3x1), starting with #, such as #Vrms |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Pin + | 3×1 | AC bus pins, which can be used as a connection point for multiple three-phase components |

## Using Instructions



## See Also


