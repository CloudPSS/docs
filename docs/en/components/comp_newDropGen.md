---
title: Drop Generator
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3008
order: 1000

classname: _newDropGen
symbol: newDropGen
---

## Basic Description

{% compsymbol newDropGen %}

> **This component is used to generate drop signal.**

## Parameter

### Configuration

| Parameter name | Unit | Remark               |        Type         | Description                           |
| :------------- | :--- | :------------------- | :-----------------: | :------------------------------------ |
| Name           |      | Name of component    |        Text         | Enter the name of this component      |
| Drop Time      | s    | Drop time T1         | Real number (Const) | Drop time                             |
| Recover Time   | s    | Recover time T2(>T1) | Real number (Const) | Recover time                          |
| Initial Value  |      | Initial value        | Real number (Const) | Initial value                         |
| Drop Value     |      | Drop value           | Real number (Const) | Output value during the drop duration |

## Pin List

| Pin name | Dimension | Description |
| :------- | :-------: | :---------- |
| Output   |    1×1    | Output pin  |

## Using Instructions

## See Also

[Surge Generator](comp_newSurgeGen.md)
