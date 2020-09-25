---
title: Differential Pole
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3003
order: 700

classname: _newDiffPole
symbol: newDiffPole
---
## Basic Description
{% compsymbol newDiffPole %}

> **This component simulates the differential pole function.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text |  Enter the name of this component |
| Gain |  | Gain | Real number (Const) | Gain of the differential pole |
| Time Constant | s | Time constant | Real number (Const) | Time constant of the differential pole |
| Initialization Type |  | Initialization type | Select | Select the initialization type as "steady state" or "any value" |
| Initial Value |  | Initial value | Real number (Const) | Initial value of the differential pole |
| Limit Output? |  | Limit output? | Select | Select to limit the output of integrator or not. It could be configured as "Fixed Limits" or "Dynamic Limits" |

### Fixed Limits
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Maximum Limit |  | Maximum limit | Real number (Const) | Limits the maximum output to this signal，only valid when "Limit Output" is configured as "Fixed Limits" |
| Minimum Limit |  | Minimum limit | Real number (Const) | Limits the minimum output to this signal，only valid when "Limit Output" is configured as "Fixed Limits" |

### Dynamic Limits
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Maximum Limit | Maximum limit (Starting with @) | Text |  Limits the maximum output to this signal，only valid when "Limit Output" is configured as "Dynamic Limits" |
| Minimum Limit | Maximum limit (Starting with @) | Text | Limits the minimum output to this signal，only valid when "Limit Output" is configured as "Dynamic Limits" |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Input | 1×1 | Input pin |
| Output | 1×1 | Output pin |

## Using Instructions



## See Also

[Real Pole](comp_newRealPole.md), [Lead Lag Pole](comp_newLeadLag.md), [Second Order Complex Pole](comp_newComplexPole.md)
