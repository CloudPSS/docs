---
title: Single-phase AC Voltage Source
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3002
order: 300

classname: _newACVoltageSource_1p
symbol: newACVoltageSource_1p
---
## Basic Description
{% compsymbol newACVoltageSource_1p %}

> **This component is used to model a single-phase AC voltage source.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Source Name |  | Name of component | Text | Enter the name of Single-phase AC voltage source （Default） |
| Is This Source Grounded? |  | Is this source grounded? | Select | Select “Yes” or “No” to ground or unground the voltage source Negative terminal |
| Rated Voltage (L-G, RMS) | kV | Rated voltage (L-G, RMS) | Real number (Const) | Rated voltage of line to ground (RMS) |
| Function Type |  | Function type | Select | Select the signal type as “Sine” or “Cos” |
| Initial Phase | Deg | Initial phase位 | Real number (Const)  | The phase of voltage source when t=0s |
| Frequency | Hz | Frequency | Real number (Const) | Rated frequency of voltage source |
| Resistance | Ω | Resistance | Real number (Const) | Rated resistance of voltage source |
| Start-up Type |  | Start-up type | Select | Select start-up type of voltage source as” Linear Ramp” or “Real Pole Ramp” |
| Voltage Ramp Up Time | s | Startup time | Real number (Const) | Enter the startup time, only when the "Start-up Type" item is "Linear Ramp" |
| Voltage Input Time Constant | s | Startup constant | Real number (Const) | Enter the startup constant, only when the "Start-up Type" item is " Real Pole Ramp " |

### Fault Setting
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Is This a Fault Source ? |  | Is this a fault source? | Select | Select “Yes” or “No” to set the source as a fault source or non-fault source |
| Fault Start Time | s | Fault start time | Real number (Const) | Fault start time is valid only when "Yes" is selected for the "is this a fault source" item |
| Fault End Time | s | Fault end time | Real number (Const) | Fault end time is valid only when "Yes" is selected for the "is this a fault source" item |
| Drop Ratio | p.u. | Drop ratio | Real number (Const) | Drop ratio is valid only when "Yes" is selected for the "is this a fault source" item |

### Monitoring
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Source Voltage \[kV\] | Source voltage | Text | Enter the measurement signal label of the voltage of voltage source, starting with #, such as #Va |
| Source Current \[kA\] | Source current | Text | Enter the measurement signal label of the current of voltage source, starting with #, such as #Ia |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Pin - | 1×1 | Negative terminal, only valid when power source is ungrounded |
| Pin + | 1×1 | Positive terminal |

## Using Instructions

{% pullquote info %}
If the internal resistance of the voltage source is zero, CloudPSS will set it to the ideal voltage source automatically. However, multiple ideal voltage sources cannot be connected in parallel or in a loop (in violation of Kirchhoff's loop voltage law).
{% endpullquote %}


## See Also

[Three-phase AC Voltage Source](comp_newACVoltageSource_3p.md)
