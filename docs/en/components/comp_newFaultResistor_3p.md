---
title: Three-phase Fault Resistor
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3001
order: 600

classname: _newFaultResistor_3p
symbol: newFaultResistance_3p
---

## Basic Description

{% compsymbol newFaultResistance_3p %}

> **This component is used to model three-phase fault resistor.**

## Parameter

### Configuration

| Parameter name     | Unit | Remark             |          Type          | Description                                                    |
| :----------------- | :--- | :----------------- | :--------------------: | :------------------------------------------------------------- |
| Name               |      | Name of component  |          Text          | Enter the name of three-pahse fault resistor (Default)         |
| Initial Resistance | Ω    | Initial resistance |  Real number (Const)   | Initial resistance                                             |
| Fault Start Time   | s    | Fault start time   | Real number (Variable) | Fault start time                                               |
| Fault End Time     | s    | Fault end time     | Real number (Variable) | Fault end time                                                 |
| Fault Resistance   | Ω    | Fault resistance   | Real number (Variable) | The resistance during the fault                                |
| Fault Type         |      | Fault type         |         Select         | Select fault types (A、B、C、AB、BC、AC or ABC)                |
| Fault Clear Type   |      | Fault clear type   |         Select         | Select fault types as "at Zero-Crossing Time" or "at Any Time" |

### Monitoring

| Parameter name                | Remark                            | Type | Description                                                                                              |
| :---------------------------- | :-------------------------------- | :--: | :------------------------------------------------------------------------------------------------------- |
| 3 Phase Branch Current \[kA\] | Current of 3-phase fault resistor | Text | Enter the label of the current of 3-phase fault resistor (3×1 dimension), starting with #, such as #Iabc |
| 3 Phase Branch Voltage \[kV\] | Voltage of 3-phase fault resistor | Text | Enter the label of the voltage of 3-phase fault resistor (3×1 dimension), starting with #, such as #Vabc |

## Pin List

| Pin name | Dimension | Description       |
| :------- | :-------: | :---------------- |
| Pin +    |    3×1    | Positive terminal |
| Pin -    |    3×1    | Negative terminal |

## Using Instructions

## See Also

[Single-phase Fault Resistor](comp_newFaultResistor.html), [Resistor](compnewResistorRouter.html)
