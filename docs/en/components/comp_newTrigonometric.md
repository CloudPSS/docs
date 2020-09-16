---
title: Trigonometric Function
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3002
order: 700

classname: _newTrigonometric
symbol: newTrigonometric
---

## Basic Description

{% compsymbol newTrigonometric %}

> **This component implements trigonometric functions. The function types can be configured as six types: Sin, Cos, Tan, ArcSin, ArcCos, and ArcTan.**

## Parameter

### Configuration

| Parameter name | Remark            |  Type  | Description                                                                                  |
| :------------- | :---------------- | :----: | :------------------------------------------------------------------------------------------- |
| Name           | Name of component |  Text  | Enter the name of this component                                                             |
| Function Type  | Function type     | Select | Select one from the six function types, "Sin", "Cos", "Tan", "ArcSin", "ArcCos", or "ArcTan" |
| Angle Type     | Angle type        | Select | Select angle unit as "Rad" or "Deg"                                                          |

## Pin List

| Pin name | Dimension | Description |
| :------- | :-------: | :---------- |
| Input    |    1×1    | Input pin   |
| Output   |    1×1    | Output pin  |

## Using Instructions

{% pullquote info %}

- Tan function is meaning less when angle equals to (n+0.5)π.
- The input of ArcSin and ArcCos function should be in the range [-1.0, 1.0].
  {% endpullquote %}

## See Also
