---
title: Hysteresis Comparator
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3005
order: 200

classname: _newHysteresis
symbol: newHysteresis
---

## Basic Description

{% compsymbol newHysteresis %}

> **This component implements a hysteresis comparison of the input signal and outputs a rectangular wave.**

## Parameter

### Configuration

| Parameter name      | Unit | Remark                                                           |        Type         | Description                                                     |
| :------------------ | :--- | :--------------------------------------------------------------- | :-----------------: | :-------------------------------------------------------------- |
| Name                |      | Name of component                                                |        Text         | Enter the name of this component                                |
| Logic 1 Input Level |      | When input signal is larger than setting value, the output is 1  | Real number (Const) | The upper limit of hysteresisshould be larger than lower limit  |
| Logic 0 Input Level |      | When input signal is smaller than setting value, the output is 0 | Real number (Const) | The upper limit of hysteresis should be larger than lower limit |
| Invert Output?      |      | Invert Output？                                                  |       Select        | Select the output value is inverted or not                      |

## Pin List

| Pin name | Dimension | Description |
| :------- | :-------: | :---------- |
| Input    |    1×1    | Input pin   |
| Output   |    1×1    | Output pin  |

## Using Instructions

## See Also

[Comparator](comp_newComparator.md)
