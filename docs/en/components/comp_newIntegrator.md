---
title: Integrator
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3003
order: 200

classname: _newIntegrator
symbol: newIntegrator
---
## Basic Description


> **This component models a resettable integrator.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Time Constant | s | Time constant | Real number (Const) | Time constant of the integrator |
| Initial Output Value |  | Initial output value | Real number (Const) | Initial output value of integrator |
| Limit Output? |  | Limit output? | Select | Select to limit the output of integrator or not. Could be configured as "Fixed Limits" or "Dynamic Limits" |
| Resettable? |  | Resettable? | Select | Select whether the integrator can be reset or not |

### Fixed Limits
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Maximum Limit |  | Maximum limit | Real number (Const) | Maximum limit for the integrator, only valid when "Limit Output" is selected to "Fixed limits" |
| Minimum Limit |  | Minimum limit | Real number (Const) | Minimum limit for the integrator, only valid when "Limit Output" is selected to "Fixed limits" |

### Dynamic Limits
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Maximum Limit | Maximum limit (Starting with @) | Text | Maximum limit for the integrator, only valid when "Limit Output" is selected to "Dynamic limits" |
| Minimum Limit | Minimum limit (Starting with @) | Text | Minimum limit for the integrator, only valid when "Limit Output" is selected to "Dynamic limits" |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Input | 1×1 | Input pin |
| Output | 1×1 | Output pin|
| Reset Trigger | 1×1 | Reset trigger input pin, and triggered when the input is high level. Only valid when "resettable" item is "yes" |
| Reset Value | 1×1 | The value of the output after reset. Only valid when "resettable" item is "yes" |

## Using Instructions



## See Also

[Derivative](comp_newDerivative.md), [PI Controller](comp_newPICtrl.md)
