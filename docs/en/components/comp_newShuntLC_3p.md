---
title: Shunt Capacitor/Reactor
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3004
order: 100

classname: _newShuntLC_3p
symbol: newShuntLC
---

## Basic Description

{% compsymbol newShuntLC %}

> **This component is used to model a three-phase shunt capacitor/reactor.**

## Parameter

### Configuration

| Parameter name           | Unit | Remark                                                                           |        Type         | Description                                                                                                     |
| :----------------------- | :--- | :------------------------------------------------------------------------------- | :-----------------: | :-------------------------------------------------------------------------------------------------------------- |
| Name                     |      | Name of component                                                                |        Text         | Enter the name of this component                                                                                |
| Rated Frequency          | Hz   | Rated frequency                                                                  | Real number (Const) | Rated Frequency of the shunt capacitor/reactor                                                                  |
| Rated Voltage (L-L, RMS) | kV   | Rated voltage (L-L, RMS)                                                         | Real number (Const) | Rated voltage (L-L, RMS) of the shunt capacitor/reactor                                                         |
| Input Capacity           | MVar | Input capacity (Set negative value for capacitor and positive value for reactor) | Real number (Const) | Input capacity of the shunt capacitor/reactor (Set negative value for capacitor and positive value for reactor) |

### Monitoring

| Parameter name                | Remark          | Type | Description                                                                                                                           |
| :---------------------------- | :-------------- | :--: | :------------------------------------------------------------------------------------------------------------------------------------ |
| 3 Phase Current Vector \[kA\] | 3-phase current | Text | Enter the measurement signal label of the 3-phase current of shunt capacitor/reactor（3×1）, starting with #, such as #labc           |
| RMS Current \[kA\]            | RMS current     | Text | Enter the measurement signal label of the 3-phase current rms value of shunt capacitor/reactor（1×1）, starting with #, such as #Irms |
| Active Power \[MW\]           | Active power    | Text | Enter the measurement signal label of the active power, starting with #, such as #P                                                   |
| Reactive Power \[MVar\]       | Reactive power  | Text | Enter the measurement signal label of the reactive power, starting with #, such as #Q                                                 |

## Pin List

| Pin name | Dimension | Description                        |
| :------- | :-------: | :--------------------------------- |
| Pin +    |    3×1    | Pin of the shunt capacitor/reactor |

## Using Instructions

## See Also
