---
title: Zero-point
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3003
order: 500

classname: _newZero
symbol: newZero
---
## Basic Description
{% compsymbol newZero %}

> This component simulates the zero-point function.

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Time Constant | s | Time constant | Real number (Const) | Time constant of the zero-point |
| Initialization Type |  | Initialization type | Select | Select the initialization type as "steady state" or "any value" |
| Initial Value |  | Initial value | Real number (Const) | Initial value of the zero-point |
| Limit Output? |  | Limit output? | Select | Select to limit the output of integrator or not. Could be configured as "Fixed Limits" or "Dynamic Limits" |

### Fixed Limits
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Maximum Limit |  | Maximum limit | Real number (Const) | Limits the maximum output to this signal，only valid when "Limit Output" is configured as "Fixed Limits" |
| Minimum Limit |  | Minimum limit | Real number (Const) | Limits the minimum output to this signal，only valid when "Limit Output" is configured as "Fixed Limits" |

### Dynamic Limits
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Maximum Limit | Maximum limit (Starting with @signal) | Text | Limits the maximum output to this signal，only valid when "Limit Output" is configured as "Dynamic Limits" |
| Minimum Limit | Minimum limit (Starting with @signal) | Text | Limits the minimum output to this signal，only valid when "Limit Output" is configured as "Dynamic Limits" |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Input | 1×1 | Input pin |
| Output | 1×1 | Output pin |

## Using Instructions



## See Also

[Differential Pole](comp_newDiffPole.html)
