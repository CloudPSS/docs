---
title: Hard Limiter
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3004
order: 100

classname: _newLimiter
symbol: newLimiter
---
## Basic Description
{% compsymbol newLimiter %}

> **This component is used to limit the amplitude of the input signal, If the signal exceeds either limit, the output value remains at that limit.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Limit Type |  | Limit type | Select | Select limit type as "Fixed Limits" or "Dynamic Limits" |
| Upper Limit |  | Upper limit | Real number (Const) | Upper limit for the hard limiter, only valid when "Limit Type" is selected to "Fixed Limits" |
| Lower Limit |  | Lower limit | Real number (Const) |Lower limit for the hard limiter, only valid when "Limit Type" is selected to "Fixed Limits" |
| Upper Limit Signal |  | Upper limit signal (Starting with @) | Text | Upper limit for the hard limiter, only valid when "Limit Type" is selected to "Dynamic Limits" |
| Lower Limit Signal |  | Lower limit signal (Starting with @) | Text | Lower limit for the hard limiter, only valid when "Limit Type" is selected to "Dynamic Limits" |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Input | 1×1 | Input pin |
| Output | 1×1 | Output pin|

## Using Instructions



## See Also


