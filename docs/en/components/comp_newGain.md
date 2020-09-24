---
title: Gain
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3003
order: 100

classname: _newGain
symbol: newGain
---

## Basic Description

{% compsymbol newGain %}

> **This component multiply input signal by the factor specified. Its math function is:** > $$y(t) = Ku(t)$$

## Parameter

### Configuration

| Parameter name | Unit | Remark            |        Type         | Description                      |
| :------------- | :--- | :---------------- | :-----------------: | :------------------------------- |
| Name           |      | Name of component |        Text         | Enter the name of this component |
| Gain Constant  |      | Gain constant     | Real number (Const) | Gain constant K                  |

## Pin List

| Pin name | Dimension | Description |
| :------- | :-------: | :---------- |
| Input    |    1×1    | Input pin   |
| Output   |    1×1    | Output pin  |

## Using Instructions

## See Also

[Multiplier](comp_newMultiply.md)
