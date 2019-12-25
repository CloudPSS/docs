---
title: DC Current Source
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3002
order: 100

classname: _newDCCurrentSource
symbol: newDCCurrentSource
---
## Basic Description
{% compsymbol newDCCurrentSource %}

> **This component is used to model the DC current source.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Source Name |  | Name of component | Text | Enter the name of DC current source. (Default) |
| Is This Source Grounded? |  | Is this source grounded? | Select | Select "Yes" or "No" to ground or unground the Negative terminal of current source |
| Rated Current Magnitude | kA | Rated current magnitude | Real number (Const) | Rated current magnitude |
| Start-up Type |  | Start-up type | Select | Select the start-up type of current source as "Linear Ramp" or "Real Pole Ramp" |
| Current Ramp Up Time | s | Startup time | Real number (Const) | Enter the ramp start time, only when the "Start-up Type" item is "Linear Ramp" |
| Current Time Constant | s | Startup time constant | Real number (Const) | Enter the pole time constant, which only takes effect when the "Start-up Type" item is "Real Pole Ramp" |

### Fault Setting
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Is This a Fault Source ? |  | Is this a fault source? | Select | Select "Yes" or "No" to set the source as a fault source or non-fault source |
| Fault Start Time | s | Fault start time | Real number (Const) | Fault start time is valid only when "Yes" is selected for the "is This a Fault Source" item |
| Fault End Time | s | Fault end time | Real number (Const) | Fault end time is valid only when "Yes" is selected for the "is This a Fault Source" item |
| Drop Ratio | p.u. | Drop ratio | Real number (Const) | The drop Rratio is valid only when the "is This a Fault Source power" item select "Yes"|

### Monitoring
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Source Voltage \[kV\] | Source voltage | Text | Enter the measurement signal label of the voltage of current source, starting with #, such as #Va |
| Source Current \[kA\] | Source current | Text | Enter the measurement signal label of the current of current source, starting with #, such as #Ia |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Pin - | 1×1 | Negative terminal, only valid when the power source is not grounded |
| Pin + | 1×1 | Positive terminal|

## Using Instructions

{% pullquote info %}
The current source in CloudPSS is an `ideal current source` model with an internal resistance of infinity. However, ideal current sources cannot be connected in series or in star form (in violation of the Kirchhoff node current law).
{% endpullquote %}


## See Also



[DC Voltage Source](comp_newDCVoltageSource.html)
