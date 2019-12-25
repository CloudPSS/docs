---
title: DC Voltage Source
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3002
order: 200

classname: _newDCVoltageSource
symbol: newDCVoltageSource
---
## Basic Description
{% compsymbol newDCVoltageSource %}

> **This component is used to model the DC voltage source.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Source Name |  | Name of component | Text | Enter the name of DC voltage source (Default) |
| Is This Source Grounded? |  | Is this source grounded? | Select选择 | Select "Yes" or "No" to ground or unground the voltage source Negative terminal |
| Rated Voltage Magnitude | kV | Rated voltage magnitude | Real number (Const) | Output voltage magnitude of DC voltage source |
| Resistance | Ω | Resistance | Real number (Const) | Rated resistance of DC voltage source |
| Start-up Type |  | Start-up type | Select | Select start-up type of DC voltage source as "Linear Ramp" or "Real Pole Ramp" |
| Voltage Ramp Up Time | s | Startup time | Real number (Const) | Enter the startup time, only when the "Start-up Type" item is "Linear Ramp" |
| Voltage Time Constant | s | Startup time constant | Real number (Const)实 | Enter the startup constant, only when the "Start-up Type" item is "Real Pole Ramp" |

### Fault Setting
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Is This a Fault Source ? |  | Is this a fault source? | Select | Select "Yes" or "No" to set the source as a fault source or non-fault source |
| Fault Start Time | s | Fault start time | Real number (Const) | Fault start time is valid only when "Yes" is selected for the "is this a fault source" item |
| Fault End Time | s | Fault end time | Real number (Const) | Fault end time is valid only when "Yes" is selected for the "is this a fault source" item |
| Drop Ratio | p.u. | Drop ratio | Real number (Const) | Drop Ratio is valid only when "Yes" is selected for the "is this a fault source" item |

### Monitoring
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Source Voltage \[kV\] | Source voltage | Text | Enter the measurement signal label of the voltage of DC Voltage Source, starting with #, such as #Va |
| Source Current \[kA\] | Source current | Text | Enter the measurement signal label of the current of DC Voltage Source, starting with #, such as #Ia |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Pin - | 1×1 | Negative terminal, only valid when the power source is not grounded |
| Pin + | 1×1 | Positive terminal |

## Using Instructions

{% pullquote info %}
If the internal resistance of the voltage source is zero, CloudPSS will set it to the `ideal voltage source` automatically. However, multiple ideal voltage sources cannot be connected in parallel or in a loop (in violation of Kirchhoff's loop voltage law).
{% endpullquote %}


## See Also



[DC Current Source](comp_newDCCurrentSource.html)
