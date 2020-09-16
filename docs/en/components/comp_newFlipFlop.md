---
title: Flip Flop
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3006
order: 700

classname: _newFlipFlop
symbol: newFlipFlop
---

## Basic Description

{% compsymbol newFlipFlop %}

> **This component represents one of four flip-flop configurations: JK, SR, D and T.**

## Parameter

### Configuration

| Parameter name            | Remark                  |  Type  | Description                                      |
| :------------------------ | :---------------------- | :----: | :----------------------------------------------- |
| Flip-Flop Type:           | Flip-Flop type          | Select | Select flip flop type as JK、RS、D or T          |
| Initial State of Output Q | Initial state of output | Select | Select the initial state of Q to "Low" or "High" |
| Active Clock Trigger Edge | Select trigger edge     | Select | Select trigger edge to "Positive" or "Negative"  |

## Pin List

| Pin name | Dimension | Description                                                       |
| :------- | :-------: | :---------------------------------------------------------------- |
| J        |    1×1    | Input pin of J signal, only valid when flip-flop type is JK       |
| K        |    1×1    | Input pin of K signal, only valid when flip-flop type is JK       |
| C        |    1×1    | Input pin of C signal, only valid when flip-flop type is JK       |
| Q        |    1×1    | Output pin of Q signal, only valid when flip-flop type is JK      |
| Q̅        |    1×1    | Output pin of not-Q signal, only valid when flip-flop type is JK  |
| S        |    1×1    | Input pin of S signal, only valid when flip-flop type is RS       |
| R        |    1×1    | Input pin of R signal, only valid when flip-flop type is RS       |
| C        |    1×1    | Input pin of C signal, only valid when flip-flop type is RS       |
| Q        |    1×1    | Input pin of Q signal, only valid when flip-flop type is RS       |
| Q̅        |    1×1    | Input pin of not-Q signal, only valid when flip-flop type is RS   |
| D        |    1×1    | Input pin of D signal, only valid when flip-floptrigger type is D |
| C        |    1×1    | Input pin of C signal, only valid when flip-flop type is D        |
| Q        |    1×1    | Input pin of Q signal, only valid when flip-flop type is D        |
| Q̅        |    1×1    | Input pin of not-Q signal, only valid when flip-flop type is D    |
| T        |    1×1    | Input pin of T signal, only valid when flip-flop type is T        |
| C        |    1×1    | Input pin of C signal, only valid when flip-flop type is T        |
| Q        |    1×1    | Input pin of Q signal, only valid when flip-flop type is T        |
| Q̅        |    1×1    | Input pin of not-Q signal, only valid when flip-flop type is T    |

## Using Instructions

## See Also
