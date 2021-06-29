---
title: Sampler
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3005
order: 400

classname: _newSample
symbol: newSample
---
## Basic Description


> **This component samples a continuous input signal at discrete intervals, and then holds the output at the sampled level until the next sample is taken.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Sampling Type Control |  | Sampling type control | Select | Select the trigger signal of sampling as "Internal" or "External Pusle" |
| Sampling Rate | Hz | Sampling rate | Real number (Const) | Sampling rate, only valid when "Sampling Type Control" is "Internal" |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Input | 1×1 | Input pin |
| Pulse | 1×1 | External pusle input pin, only valid when "Sampling Type Control" is "External Pusle" |
| Output | 1×1 | Output pin |

## Using Instructions



## See Also

[Sample and Hold](comp_newSampleHold.md)
