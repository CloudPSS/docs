---
title: Step Generator
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3008
order: 700

classname: _newStepGen
symbol: newStepGen
---

## Basic Description

{% compsymbol newStepGen %}

> **This component is used to generate a step signal.**

## Parameter

### Configuration

| Parameter name | Unit | Remark            |        Type         | Description                      |
| :------------- | :--- | :---------------- | :-----------------: | :------------------------------- |
| Name           |      | Name of component |        Text         | Enter the name of this component |
| Initial Value  |      | Initial value     | Real number (Const) | Initial value before step occur  |
| Final Value    |      | Final value       | Real number (Const) | Final value after step occure    |
| Step Time      | s    | Step time         | Real number (Const) | The time when the step occurs    |

## Pin List

| Pin name | Dimension | Description |
| :------- | :-------: | :---------- |
| Output   |    1×1    | Output pin  |

## Using Instructions

## See Also

[Ramp Generator](comp_newRampGen.html)
