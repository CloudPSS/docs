---
title: Delay
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3004
order: 200

classname: _newDelay
symbol: newDelay
---
## Basic Description


> **This component output a time delay of the input signal.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Delay Time | s | Delay time | Real number (Const) | The delay time between input signal and output signal |
| Max Sample Points |  | Max sample points | Integer(Const) | Max sample points during the delay time |
| Initial Output Value | | Initial output value | Real number (Const) | Initial output value of the delay |

## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Input | 1×1 | Input pin |
| Output | 1×1 | Output pin |

## Using Instructions

::: info
**Max Sample Points**

If the delay time is much larger than the simulation time step, the size of the queue may become very large. To prevent this, the input values are sampled N times in the delay time.
:::


## See Also


