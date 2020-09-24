---
title: Logarithm Function
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3002
order: 1000

classname: _newLog
symbol: newLog
---

## Basic Description

{% compsymbol newLog %}

> **This component output the logatithm of the input signal, either base of 10, a natural constant e, or a custom constant a may be used. The function is：** > $y(t) = \log u(t)$或$y(t) = \ln u(t)$或$y(t) = {\log _a}u(t)$，$u(t)>0$。

## Parameter

### Configuration

| Parameter name  | Unit | Remark            |        Type         | Description                                                                                                                                     |
| :-------------- | :--- | :---------------- | :-----------------: | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| Name            |      | Name of component |        Text         | Enter the name of this component                                                                                                                |
| Logarithm Type  |      | Select base value |       Select        | Select base of "Common", "Natural", or "Base a", and the base value is 10, natural constant e, and constant e or custom constant a respectively |
| Value of Base a |      | Value of base a   | Real number (Const) | The value of base a, only valid when the "Logarithm Type" is "Base a"                                                                           |

## Pin List

| Pin name | Dimension | Description |
| :------- | :-------: | :---------- |
| Input    |    1×1    | Input pin   |
| Output   |    1×1    | Output pin  |

## Using Instructions

## See Also

[Exponential Function](comp_newExp.md)
