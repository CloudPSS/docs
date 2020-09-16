---
title: Logic Gate
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3006
order: 400

classname: _newLogicGate
symbol: newLogicGate3
---

## Basic Description

{% compsymbol newLogicGate %}
{% compsymbol newLogicGate1 %}
{% compsymbol newLogicGate2 %}  
{% compsymbol newLogicGate3 %}

> **This component implements four types of basic logic operations: AND, OR, NOT, XOR.**

## Parameter

### Configuration

| Parameter name | Remark            |  Type  | Description                                           |
| :------------- | :---------------- | :----: | :---------------------------------------------------- |
| Name           | Name of component |  Text  | Enter the name of this component                      |
| Gate Type      |                   | Select | Select logic gate as "AND", "OR", "NOT" or "XOR" gate |

## Pin List

| Pin name | Dimension | Description                                     |
| :------- | :-------: | :---------------------------------------------- |
| Input 1  |   Auto    | Input pin 1，only valid when gate type is "AND" |
| Input 2  |   Auto    | Input pin 2，only valid when gate type is "AND" |
| Output   |   Auto    | Output pin，only valid when gate type is "AND"  |
| Input 1  |   Auto    | Input pin 1，only valid when gate type is "OR"  |
| Input 2  |   Auto    | Input pin 2，only valid when gate type is "OR"  |
| Output   |   Auto    | Output pin，only valid when gate type is "OR"   |
| Input 1  |   Auto    | Input pin 1，only valid when gate type is "XOR" |
| Input 2  |   Auto    | Input pin 2，only valid when gate type is "XOR" |
| Output   |   Auto    | Output pin，only valid when gate type is "XOR"  |
| Input    |   Auto    | Input pin ，only valid when gate type is "NOT"  |
| Output   |   Auto    | Output pin，only valid when gate type is "NOT"  |

## Using Instructions

{% pullquote info %}
The gate type can be configured as：

- AND gate: The output signal is 1 when all the input signals are 1.
- OR gate: If any input signal is 1, then output signal is 1.
- XOR gate: If the two input signals are not the same, then output signal is 1; if the two input signals are the same, then output signal is 0.
- NOT gate: If the input signal is 1, then output signal is 0; if the input signal is 0, then output signal is 1.
  {% endpullquote %}

## See Also
