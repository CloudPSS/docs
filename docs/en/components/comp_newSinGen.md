---
title: Sine Generator
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3008
order: 300

classname: _newSinGen
symbol: newSinGen
---

## Basic Description

{% compsymbol newSinGen %}

> **This component is used to generate single or three phase sinusoidal signals with adjustable frequency, phase, amplitude and offset.**

## Parameter

### Configuration

| Parameter name | Unit | Remark            |         Type         | Description                                |
| :------------- | :--- | :---------------- | :------------------: | :----------------------------------------- |
| Name           |      | Name of component |         Text         | Enter the name of this component           |
| Frequency      | Hz   | Frequency         | Real number（Const） | Frequency of sine wave                     |
| Magnitude      |      | Magnitude         | Real number（Const） | Magnitude of sine wave                     |
| Initial Phase  | Deg  | Initial phas      | Real number（Const） | Initial phase of sine wave                 |
| Function Type  |      | Function type     |        Select        | Select sine function as “Sine” or “Cosine” |
| Offset         |      | Offset            | Real number（Const） | DC offset of sine wave                     |
| Dimension      |      | Dimension         |        Select        | Select single phase or three phase         |

## Pin Lsit

| Pin name | Dimension | Description                                           |
| :------- | :-------: | :---------------------------------------------------- |
| Output   |    1×1    | Output pin，only valid when dimension is single-phase |
| Output A |    1×1    | Output pinA，only valid when dimension is three-phase |
| Output B |    1×1    | Output pinB，only valid when dimension is three-phase |
| Output C |    1×1    | Output pinC，only valid when dimension is three-phase |

## Using Instructions

## See Also

[Adjustable FPM Sine Generator](comp_newAFPMGen.html)
