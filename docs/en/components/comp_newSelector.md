---
title: Selector
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3006
order: 800

classname: _newSelector
symbol: newSelector
---

## Basic Description

{% compsymbol newSelector %}

> **This component selects input A or B to output depend on the value of the Ctrl signal.**

## Parameter

### Configuration

| Parameter name | Unit | Remark            |        Type         | Description                                                      |
| :------------- | :--- | :---------------- | :-----------------: | :--------------------------------------------------------------- |
| Name           |      | Name of component |        Text         | Enter the name of this component                                 |
| Select A When  |      | Select criterion  |       Select        | Select the criterion as "Ctrl ≥ Threshold" or "Ctrl < Threshold" |
| Threshold      |      | Threshold         | Real number (Const) | Threshold value                                                  |

## Pin List

| Pin name | Dimension | Description       |
| :------- | :-------: | :---------------- |
| A        |    1×1    | Input pin A       |
| B        |    1×1    | Input pin B       |
| Ctrl     |    1×1    | Control input pin |
| Output   |    1×1    | Output pin        |

## Using Instructions

{% pullquote info %}
Configure "Select A When" and "Threshold" to determine selector criteria, such as: "Ctrl ≥ Threshold", "Ctrl < Threshold".

- If "Ctrl" satisfies the criterion, then output A.
- If "Ctrl" doesn't satisfie the criterion, then output B.
  {% endpullquote %}

## See Also
