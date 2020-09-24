---
title: Single-phase Fault Resistor
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3001
order: 500

classname: _newFaultResistor
symbol: newFaultResistance_1p
---

## Basic Description

{% compsymbol newFaultResistance_1p %}

> **This component is used to model single-phase fault resistor.**

## Parameter

### Configuration

| Parameter name     | Unit | Remark                  |          Type          | Description                                                    |
| :----------------- | :--- | :---------------------- | :--------------------: | :------------------------------------------------------------- |
| Name               |      | Name of component       |          Text          | Enter the name of single-phase resistor (Default)              |
| Initial Resistance | Ω    | Initial resistance      |  Real number (Const)   | Initial resistance                                             |
| Fault Start Time   | s    | Fault start time        | Real number (Variable) | Fault start time                                               |
| Fault End Time     | s    | Fault end time          | Real number (Variable) | Fault end time                                                 |
| Fault Resistance   | Ω    | Resistance during fault | Real number (Variable) | Resistance during fault                                        |
| Fault Clear Type   |      | Fault clear type        |         Select         | Select fault types as "at Zero-Crossing Time" or "at Any Time" |

### Monitoring

| Parameter name        | Remark                    | Type | Description                                                                                     |
| :-------------------- | :------------------------ | :--: | :---------------------------------------------------------------------------------------------- |
| Branch Current \[kA\] | Current of fault resistor | Text | Enter the label of the current of fault resistor (Auto Dimension), starting with #, such as #la |
| Branch Voltage \[kV\] | Voltage of fault resistor | Text | Enter the label of the voltage of fault resistor (Auto Dimension), starting with #, such as #Va |

## Pin List

| Pin name | Dimension | Description       |
| :------- | :-------: | :---------------- |
| Pin +    |    1×1    | Positive terminal |
| Pin -    |    1×1    | Negative terminal |

## Using Instructions

## See Also

[Three-phase Fault Resistor](comp_newFaultResistor_3p.md), [Resistor](compnewResistorRouter.md)
