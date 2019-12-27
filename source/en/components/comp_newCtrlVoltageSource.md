---
title: Controlled Voltage Source
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3002
order: 500

classname: _newCtrlVoltageSource
symbol: newCtrlVoltageSource
---
## Basic Description
{% compsymbol newCtrlVoltageSource %}

> **This component is used to model a controlled voltage source.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Source Name |  | Name of component | Text | Enter the name of controlled voltage source. (Default) |
| Is This Source Grounded? |  | Is this source grounded? | Select | Select "Yes" or "No" to ground or unground the Negative terminal of controlled voltage source |
| Resistance | Ω | Resistance | Real number (Const)  | Resistance of controlled voltage source |

### Monitoring
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Source Voltage \[kV\] | Source voltage | Text | Enter the measurement signal label of the voltage of voltage source, starting with #, such as #Va |
| Source Current \[kA\] | Source current | Text | Enter the measurement signal label of the current of voltage source, starting with #, such as #Ia |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Pin - | Auto | Negative terminal, only valid when the power source is not grounded |
| Pin + | Auto | Positive terminal |
| Ctrl | Auto | Controlled input, when the port input is 1, the corresponding output voltage is 1V |

## Using Instructions

{% pullquote info %}
If the internal resistance of the voltage source is zero, CloudPSS will set it to the `ideal voltage source` automatically. However, multiple ideal voltage sources cannot be connected in parallel or in a loop (in violation of Kirchhoff's loop voltage law).
{% endpullquote %}


## See Also

[Controlled AC Voltage Source (VP)](comp_newCtrlVPAcVoltageSource.html), [Controlled AC Voltage Source (VF)](comp_newCtrlAcVoltageSource.html), [Controlled Current Source](comp_newCtrlCurrentSource.html)
