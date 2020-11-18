---
title: Relay Pump
author: 
author_email:

date: 2018/12/4 18:05:35
updated: 2018/12/4 18:05:35

type: components
category: 10000
order: 4000

classname: Pump
symbol: Heat4
---
## Basic Description


> **This component refers to a device that provides circulating power to a heating system.**

## Parameter
### Device installation
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Installation Position | Installation position | Select | Select the relay pump to be installed in the heating supply pipe or the water return pipe |

### Parameter setting
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Head | m | Head | Table | Enter the head that the relay pump provides at different times |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Input | 1×1 | Pump input, this pin can only be used as the outlet of the pipeline |
| Output | 1×1 | Pump output, this pin can only be used as an inlet for the pipeline |

## Using Instructions

::: tip
In the current version, the relay pump component needs to be the starting point of one pipe and the end point of other pipe at least, otherwise it is easy to cause an error.
:::


## See Also


