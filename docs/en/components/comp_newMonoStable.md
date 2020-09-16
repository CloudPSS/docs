---
title: Monostable Multivibrator
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3006
order: 600

classname: _newMonoStable
symbol: newMonoStable
---

## Basic Description

{% compsymbol newMonoStable %}

> **This component simulates a monostable multivibrator. If a positive edge of the input signal is detected, then outputs high and remains high for a set time (Pulse Duration).**

## Parameter

### Configuration

| Parameter name | Unit | Remark            |         Type         | Description                      |
| :------------- | :--- | :---------------- | :------------------: | :------------------------------- |
| Name           |      | Name of component |         Text         | Enter the name of this component |
| Pulse Duration | s    | Pulse duration    | Real number（Const） | Time period of high level output |

## Pin List

| Pin name | Dimension | Description |
| :------- | :-------: | :---------- |
| Input    |    1×1    | Input pin   |
| Output   |    1×1    | Output pin  |

## Using Instructions

## See Also

[Binary Delay](comp_newBinaryDelay.html)
