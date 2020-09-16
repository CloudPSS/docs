---
title: Sample and Hold
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3005
order: 500

classname: _newSampleHold
symbol: newSampleHold
---

## Basic Description

{% compsymbol newSampleHold %}

> **This component samples the input signal and output a value based on the value of the hold terminal.**

## Parameter

### Configuration

| Parameter name | Remark            | Type | Description                      |
| :------------- | :---------------- | :--: | :------------------------------- |
| Name           | Name of component | Text | Enter the name of this component |

## Pin List

| Pin name | Dimension | Description              |
| :------- | :-------: | :----------------------- |
| Input    |    1×1    | Input pin                |
| Hold     |    1×1    | Input pin of hold signal |
| Output   |    1×1    | Output pin               |

## Using Instructions

{% pullquote info %}

- When hold signal changes from 0 to 1，the output holds the input sample value until the hold signal turns to 0.
- When hold signal is 0, the output value equals input value.
  {% endpullquote %}

## See Also

[Sampler](comp_newSample.html)
