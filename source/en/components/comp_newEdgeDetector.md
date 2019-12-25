---
title: Edge Detector
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3006
order: 900

classname: _newEdgeDetector
symbol: newEdgeDetector
---
## Basic Description
{% compsymbol newEdgeDetector %}

> **The component compare its present input to its input from the previous time step, and output the defined values of positive transition, non-transition or negative transition.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Output for Positive Transition |  | Output for positive transition | Real number (Const) | The output value when positive transition is detected |
| Output for No Transition |  | Output for no transition | Real number (Const) | The output value when non-transition is detected |
| Output for Negative Transition |  | Output for negative transition | Real number (Const) | The output value when negative transition is detected |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Input | 1×1 | Input pin |
| Output | 1×1 | Output pin|

## Using Instructions



## See Also


