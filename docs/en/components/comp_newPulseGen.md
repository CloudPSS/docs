---
title: Impulse Generator
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3008
order: 600

classname: _newPulseGen
symbol: newPulseGen
---

## Basic Description

{% compsymbol newPulseGen %}

> **The component is used to generate a impulse signal with variable amplitude and frequency, and each impulse duration is one simulation time step.**

## Parameter

### Configuration

| Parameter name      | Unit | Remark                |        Type         | Description                                |
| :------------------ | :--- | :-------------------- | :-----------------: | :----------------------------------------- |
| Name                |      | Name of component     |        Text         | Enter the name of this component           |
| Frequency           | Hz   | Frequency             | Real number (Const) | Frequency of the impulse signal            |
| Height of Pulse     |      | High value of impulse | Real number (Const) | Impulse magnitude                          |
| Time of First Pulse | s    | Time of first impulse | Real number (Const) | Time at which the first impulse will occur |

## Pin List

| Pin name | Dimension | Description |
| :------- | :-------: | :---------- |
| Output   |   Auto    | Output pin  |

## Using Instructions

## See Also

[Single-impulse Generator](comp_newSinglePulse.md), [Square Generator](comp_newSquareGen.md)
