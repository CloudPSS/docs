---
title: RMS Meter
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3000
order: 400

classname: RMSRouter
symbol: newRMS
---
## Basic Description
{% compsymbol newRMS %}

> **This component calculates the RMS value of the input variables, which can measure the single-phase or three-phase RMS value.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Dimension |  | Single-phase/ Three-phase | Select | Select "Single-phase" or “Three-phase” RMS measurement |
| Meter Type |  | Meter type | Select | Select "Analog" or "Digital" RMS measurement |
| Rated Value |  | Rated value | Real number (Const) |  |
| Smoothing Time Constant | s | Smoothing time constant | Real number (Const) |  |
| Fundamental Frequency | Hz | Fundamental frequency | Real number (Const) |  |
| No. of Samples / Cycle |  | Sampling number per cycle | Integer (Const) |  |
| Initial Value |  | Initial value | Real number (Const) |  |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Input | Control by the dimension parameter | |
| Output | 1×1 | |

## Using Instructions



## See Also


