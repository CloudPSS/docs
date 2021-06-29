---
title: PI Controller
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3003
order: 400

classname: _newPICtrl
symbol: newPICtrl
---
## Basic Description


> **This component performs a proportional integral. And the output is the sum of proportional and integral gains of the input signal.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Proportional Gain |  | Proportional gain | Real number (Const) | Proportional gain of the PI Controller |
| Integral Time Constant | s | Integral time constant | Real number (Const)） | Integral time constant of the PI Controller |
| Limit Output? |  | Limit output? | Select | Select to limit the output of PI controller or not. Could be configured as "Fixed Limits" or "Dynamic Limits" |
| Initial Output of Integrator |  | Initial value of integrator | Real number (Const) | Initial value of integrator |
| Resettable? |  | Resettable? | Select | Select whether the integrator can be reset or not |

### Fixed Limits
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Maximum Limit |  | Maximum limit | Real number (Const) | Maximum limit for the PI controller, only valid when "Limit Output" is selected to "Fixed limits" |
| Minimum Limit |  | Minimum limit | Real number (Const) | Minimum limit for the PI controller, only valid when "Limit Output" is selected to "Fixed limits" |

### Dynamic Limits
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Maximum Limit | Maximum limit (Starting with @) | Text | Maximum limit for the PI controller, only valid when "Limit Output" is selected to "Dynamic limits" |
| Minimum Limit | Minimum limit (Starting with @) | Text | Minimum limit for the PI controller, only valid when "Limit Output" is selected to "Dynamic limits" |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Input | 1×1 | Input pin |
| Output | 1×1 | Output pin|
| Reset Trigger | 1×1 | Reset trigger input pin, and triggered when the input is high level. Only valid when "resettable" item is "yes" |
| Reset Value | 1×1 | The value of the output after reset. Only valid when "resettable" item is "yes" |

## Using Instructions



## See Also

[Integrator](comp_newIntegrator.md), [Gain](comp_newGain.md)
