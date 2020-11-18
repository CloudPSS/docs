---
title: Real Pole
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3003
order: 600

classname: _newRealPole
symbol: newRealPole
---
## Basic Description


> **This component simulates a lag or 'real pole' function, where the output can be reset to the user specified value at any instant.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Gain |  | Gain | Real number (Const) | Gain of the real pole component |
| Time Constant | s | Time constant | Real number (Const) | Time constant of the real pole component|
| Initialization Type |  | Initialization type | Select | Select the initialization type as "Steady-State" or "Any Value" |
| Initial Value |  | Initial value | Real number (Const) | Initial value the real pole component |
| Limit Output? |  | Limit output? | Select | Select to limit the output or not. Could be configured as "Fixed Limits" or "Dynamic Limits" |

### Fixed Limits
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Maximum Limit |  | Maximum limit | Real number (Const) | Maximum limit for the real pole component, only valid when "Limit Output" is selected to "Fixed limits" |
| Minimum Limit |  | Minimum limit | Real number (Const) | Minimum limit for the real pole component, only valid when "Limit Output" is selected to "Fixed limits" |

### Dynamic Limits
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Maximum Limit | Maximum limit (Starting with @) | Text | Maximum limit for the real pole component, only valid when "Limit Output" is selected to "Dynamic limits" |
| Minimum Limit | Minimum limit (Starting with @) | Text | Minimum limit for the real pole component, only valid when "Limit Output" is selected to "Dynamic limits" |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Input | 1×1 | Input pin |
| Output | 1×1 | Output pin |

## Using Instructions



## See Also

[Second Order Complex Pole](comp_newComplexPole.md), [Lead Lag Pole](comp_newLeadLag.md), [Nth Order Transfer Function](comp_newNthOrderTransFunc.md)
