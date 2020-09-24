---
title: Single-impulse Generator
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3008
order: 500

classname: _newSinglePulse
symbol: newSinglePulse
---

## Basic Description

{% compsymbol newSinglePulse %}

> **The component is used to generate a single impulse signal with a duration of one simulation time step.**

## Parameter

### Configuration

| Parameter name      | Unit | Remark                |        Type         | Description                          |
| :------------------ | :--- | :-------------------- | :-----------------: | :----------------------------------- |
| Name                |      | Name of component     |        Text         | Enter the name of this component     |
| Height of Pulse     |      | Height of impulse     | Real number (Const) | Impulse magnitude                    |
| Start Time of Pulse | s    | Start time of impulse | Real number (Const) | Time at which the impulse will occur |

## Pin List

| Pin name | Dimension | Description |
| :------- | :-------: | :---------- |
| Output   |    1×1    | Output pin  |

## Using Instructions

## See Also

[Impulse Generator](comp_newPulseGen.md)
