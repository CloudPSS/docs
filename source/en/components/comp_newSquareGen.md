---
title: Square Generator
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3008
order: 200

classname: _newSquareGen
symbol: newSquareGen
---
## Basic Description
{% compsymbol newSquareGen %}

> **This component is used to generate a square wave signal with constant frequency, phase, amplitude, and pulse width.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Frequency | Hz | Frequency | Real number (Const) | Frequency of the square signal |
| Max Output Level |  | Max output level | Real number (Const) | Max output level of the square signal |
| Min Output Level |  | Min output level | Real number (Const) | Min output level of the square signal |
| Duty Ratio |  | Duty ratio | Real number (Const) | Duty ratio, the ratio of high-level duration to square signal period |
| Initial Phase | Deg | Initial phase | Real number (Const) | Initial phase of the square signal |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Output | Auto | Output pin |

## Using Instructions



## See Also

[Impulse Generator](comp_newPulseGen.html)
