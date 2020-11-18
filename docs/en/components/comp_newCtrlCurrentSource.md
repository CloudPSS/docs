---
title: Controlled Current Source
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3002
order: 400

classname: _newCtrlCurrentSource
symbol: newCtrlCurrentSource
---
## Basic Description


> **This component is used to model a controlled current source.**

## Parameter
### Configuration
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Source Name | Name of component | Text | Enter the name of controlled current source. (Default) |
| Is This Source Grounded? | Is this source grounded? | Select | Select "Yes" or "No" to ground or unground the Negative terminal of current source |

### Monitoring
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Source Voltage \[kV\] | Source voltage | Text | Enter the measurement signal label of the voltage of controlled current source, starting with #, such as #Va |
| Source Current \[kA\] | Source Current | Text | Enter the measurement signal label of the current of controlled current source, starting with #, such as #Ia |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Pin - | 1×1 | Negative terminal, only valid when the power source is not grounded |
| Pin + | 1×1 | Positive terminal |
| Ctrl | 1×1 | Controlled input, when the port input is 1, the corresponding output current is 1A |

## Using Instructions

::: info
The current source in CloudPSS is an `ideal current source`  model with an internal resistance of infinity. However, ideal current sources cannot be connected in series or in star form (in violation of the Kirchhoff node current law).
:::


## See Also

[Controlled Voltage Source](comp_newCtrlVoltageSource.md)
