---
title: Lead Lag Pole
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3003
order: 800

classname: _newLeadLag
symbol: newLeadLag
---
## Basic Description
{% compsymbol newLeadLag %}

> **This component models a lead-lag function with gain.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Gain |  | Gain | Real number (Const) | The gain of the lead lag pole component |
| Lead Time Constant | s | Lead time constant | Real number (Const) | The lead time constant of the lead lag pole component |
| Lag Time Constant | s | Lag time constant | Real number (Const) | The lag time constant of the lead lag pole component |
| Initialization Type |  | Initialization type | Select | Select the initialization type as "steady state" or "any value" |
| Initial Value |  | Initial value | Real number (Const) | The Initial value constant of the lead lag pole component |
| Limit Output? |  | Limit output? | Select | Select to limit the output of integrator or not. Could be configured as "Fixed Limits" or "Dynamic Limits" |

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

## Using Instructions



## See Also

[Real Pole](comp_newRealPole.md), [Second Order Complex Pole](comp_newComplexPole.md), [Differential Pole](comp_newDiffPole.md)
