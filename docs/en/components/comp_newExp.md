---
title: Exponential Function
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3002
order: 900

classname: _newExp
symbol: newExp
---

## Basic Description

{% compsymbol newExp %}

> **The component implements an exponential operation with a configurable base of 10, a natural constant e, or a custom constant a. The function is：** > $y(t) = {10^{u(t)} }$ or $y(t) = {e^{u(t)} }$ or $y(t) = {a^{u(t)} }$，$u(t)>0$。

## Parameter

### Configuration

| Parameter name  | Unit | Remark            |        Type         | Description                                                                                     |
| :-------------- | :--- | :---------------- | :-----------------: | :---------------------------------------------------------------------------------------------- |
| Name            |      | Name of component |        Text         | Enter the name of the exponential function component (Default)                                  |
| Exponent Base   |      | Select base value |       Select        | Select the base of this exponential function as "Base 10", "Base e" or "Base a"                 |
| Value of Base a |      | Value of base a   | Real number (Const) | The value of base a, only valid when the "Exponent Base" is "Base a"custom constant is selected |

## Pin List

| Pin name | Dimension | Description |
| :------- | :-------: | :---------- |
| Input    |    1×1    | Input pin   |
| Output   |    1×1    | Output pin  |

## Using Instructions

## See Also

[Logarithm Function](comp_newLog.html)
