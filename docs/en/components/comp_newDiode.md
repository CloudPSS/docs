---
title: Diode
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/5 10:03:10

type: components
category: 3003
order: 100

classname: _newDiode
symbol: newDiode
---

## Basic Description

{% compsymbol newDiode %}

> **This component is used to model the diode.**

## Parameter

### Configuration

| Parameter name            | Unit | Remark                    |              Type               | Description                                                                                                                   |
| :------------------------ | :--- | :------------------------ | :-----------------------------: | :---------------------------------------------------------------------------------------------------------------------------- |
| Name                      |      | Name of component         |              Text               | Enter the name of diode (Default)                                                                                             |
| Enable Snubber Circuit?   |      | Enable snubber circuit?   |             Select              | Select "Yes" or "No" to enable or disable the snubber circuit paralleled with diode                                           |
| ON Resistance             | Ω    | ON resistance             |       Real number (Const)       | Resistance of diode when in the on state                                                                                      |
| OFF Resistance            | Ω    | OFF resistance            |       Real number (Const)       | Resistance of diode when in the off state                                                                                     |
| Forward Voltage Drop      | kV   | Forward voltage drop      | Real number (Const)实数（常量） | Forward voltage drop of diode. The voltage drop when the diode is on                                                          |
| Forward Breakover Voltage | kV   | Forward breakover voltage |       Real number (Const)       | Forward breakover voltage of diode. Diode will be forced into conduction if this voltage is exceeded                          |
| Reverse Withstand Voltage | kV   | Reverse withstand voltage |       Real number (Const)       | Reverse withstand voltage of diode. Diode will be forced into conduction in the reverse direction if this voltage is exceeded |
| Minimum Extinction Time   | s    | Minimum extinction time   |       Real number (Const)       | Minimum extinction time of diode. The time interval between the reception of the turn-on signal and the actual conduction     |
| Snubber Resistance        | Ω    | Snubber resistance        |       Real number (Const)       | Resistance of RC snubber resistance, only valid when "Enable Snubber Circuit" is "Yes"                                        |
| Snubber Capacitance       | μF   | Snubber capacitance       |       Real number (Const)       | Resistance of RC snubber resistance, only valid when "Enable Snubber Circuit" is "Yes"                                        |

### Monitoring

| Parameter name                    | Remark                     | Type | Description                                                                                                                    |
| :-------------------------------- | :------------------------- | :--: | :----------------------------------------------------------------------------------------------------------------------------- |
| Current (Snubber Excluded) \[kA\] | Current (Snubber excluded) | Text | Enter the measurement signal label of the branch current excluding Snubber circuit, starting with #, such as #Is1              |
| Total Current \[kA\]              | Total current              | Text | Enter the measurement signal label of the total current including the diode and Snubber circuit, starting with #, such as #Is2 |
| Branch Voltage \[kV\]             | Branch voltage             | Text | Enter the measurement signal label of the branch voltgae, starting with #, such as #Vd                                         |

## Pin List

| Pin name | Dimension | Description                |
| :------- | :-------: | :------------------------- |
| Pin +    |   Auto    | Positive terminal of Diode |
| Pin -    |   Auto    | Negative terminal of Diode |

## Using Instructions

## See Also

[Thyristor](comp_newThyristor.html), [IGBT](comp_newIGBT.html)
