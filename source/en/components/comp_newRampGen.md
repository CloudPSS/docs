---
title: Ramp Generator
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3008
order: 800

classname: _newRampGen
symbol: newRampGen
---
## Basic Description
{% compsymbol newRampGen %}

> **This component is used to generate ramp signal.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Ramping Start Time | s | Ramping start time T1 | Real number (Const) | Ramping start time T1  |
| Ramping End Time | s | Ramping end time T2(>T1) | Real number (Const) | Ramping end time T2(>T1) |
| Peak Output |  | Peak output | Real number (Const) | Peak output of ramp signal |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Output | 1×1 | Output pin |

## Using Instructions



## See Also

[Step Generator](comp_newStepGen.html)

