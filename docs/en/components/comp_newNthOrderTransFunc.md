---
title: Nth Order Transfer Function
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3003
order: 1000

classname: _newNthOrderTransFunc
symbol: newNthOrderTransFunc
---

## Basic Description

{% compsymbol newNthOrderTransFunc %}

> **This component models the nth-order transfer functions (1-order to 10-order).**

## Parameter

### Configuration

| Parameter name | Unit | Remark            |        Type         | Description                       |
| :------------- | :--- | :---------------- | :-----------------: | :-------------------------------- |
| Name           |      | Name of component |        Text         | Enter the name of this component  |
| Order of N(s)  |      | The order of N(s) |       Select        | The order of numerator            |
| Order of D(s)  |      | The order of D(s) |       Select        | The order of denominator          |
| Gain           |      | Gain              | Real number (Const) | The gain of Nth transfer function |

### Numerator Coefficients

| Parameter name       | Unit | Remark                            |        Type         | Description                           |
| :------------------- | :--- | :-------------------------------- | :-----------------: | :------------------------------------ |
| Constant Coefficient |      | Constant coefficient of numerator | Real number (Const) | The constant coefficient of numerator |
| Coefficient of s     |      | 1-order coefficient of numerator  | Real number (Const) | The 1-order coefficient of numerator  |
| Coefficient of s^2   |      | 2-order coefficient of numerator  | Real number (Const) | The 2-order coefficient of numerator  |
| Coefficient of s^3   |      | 3-order coefficient of numerator  | Real number (Const) | The 3-order coefficient of numerator  |
| Coefficient of s^4   |      | 4-order coefficient of numerator  | Real number (Const) | The 4-order coefficient of numerator  |
| Coefficient of s^5   |      | 5-order coefficient of numerator  | Real number (Const) | The 5-order coefficient of numerator  |
| Coefficient of s^6   |      | 6-order coefficient of numerator  | Real number (Const) | The 6-order coefficient of numerator  |
| Coefficient of s^7   |      | 7-order coefficient of numerator  | Real number (Const) | The 7-order coefficient of numerator  |
| Coefficient of s^8   |      | 8-order coefficient of numerator  | Real number (Const) | The 8-order coefficient of numerator  |
| Coefficient of s^9   |      | 9-order coefficient of numerator  | Real number (Const) | The 9-order coefficient of numerator  |
| Coefficient of s^10  |      | 10-order coefficient of numerator | Real number (Const) | The 10-order coefficient of numerator |

### Denominator Coefficients

| Parameter name       | Unit | Remark                              |        Type         | Description                             |
| :------------------- | :--- | :---------------------------------- | :-----------------: | :-------------------------------------- |
| Constant Coefficient |      | Constant coefficient of denominator | Real number (Const) | The constant coefficient of denominator |
| Coefficient of s     |      | 1-order coefficient of denominator  | Real number (Const) | The 1-order coefficient of denominator  |
| Coefficient of s^2   |      | 2-order coefficient of denominator  | Real number (Const) | The 2-order coefficient of denominator  |
| Coefficient of s^3   |      | 3-order coefficient of denominator  | Real number (Const) | The 3-order coefficient of denominator  |
| Coefficient of s^4   |      | 4-order coefficient of denominator  | Real number (Const) | The 4-order coefficient of denominator  |
| Coefficient of s^5   |      | 5-order coefficient of denominator  | Real number (Const) | The 5-order coefficient of denominator  |
| Coefficient of s^6   |      | 6-order coefficient of denominator  | Real number (Const) | The 6-order coefficient of denominator  |
| Coefficient of s^7   |      | 7-order coefficient of denominator  | Real number (Const) | The 7-order coefficient of denominator  |
| Coefficient of s^8   |      | 8-order coefficient of denominator  | Real number (Const) | The 8-order coefficient of denominator  |
| Coefficient of s^9   |      | 9-order coefficient of denominator  | Real number (Const) | The 9-order coefficient of denominator  |
| Coefficient of s^10  |      | 10-order coefficient of denominator | Real number (Const) | The 10-order coefficient of denominator |

## Pin List

| Pin name | Dimension | Description |
| :------- | :-------: | :---------- |
| Input    |    1×1    | Input pin   |
| Output   |    1×1    | Output pin  |

## Using Instructions

## See Also

[Second Order Complex Pole](comp_newComplexPole.html)、[Lead Lag Pole](comp_newLeadLag.html)、[一阶惯性环节](comp_newRealPole.html)
