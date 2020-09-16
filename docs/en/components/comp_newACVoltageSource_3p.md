---
title: Three-phase AC Voltage Source
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3004
order: 600

classname: _newACVoltageSource_3p
symbol: newACVoltageSource_3p
---

## Basic Description

{% compsymbol newACVoltageSource_3p %}

> **This component is used to model a three-phase AC voltage source.**

## Parameter

### Configuration

| Parameter name              | Unit | Remark                         |        Type         | Description                                                                                       |
| :-------------------------- | :--- | :----------------------------- | :-----------------: | :------------------------------------------------------------------------------------------------ |
| Source Name                 |      | Name of component              |        Text         | Enter the name of three-phase ac voltage source (Default)                                         |
| Is Star Point Grounded?     |      | Is star point grounded?        |       Select        | Select "Yes" or "No" to ground or unground the Negative terminal of three-phase ac voltage source |
| Rated Voltage (L-L, RMS)    | kV   | Rated line-to line RMS voltage | Real number (Const) | Rated line-to-line RMS voltage                                                                    |
| Function Type               |      | Function type                  |       Select        | Select the signal type as "Sin" or "Cos"                                                          |
| Initial Phase               | Deg  | Initial phase                  | Real number (Const) | Initial phase of three-phase ac voltage source when t=0                                           |
| Frequency                   | Hz   | Frequency                      | Real number (Const) | Rated frequency                                                                                   |
| Resistance                  | Ω    | Resistance                     | Real number (Const) | Rated resistance                                                                                  |
| Start-up Type               |      | Start-up type                  |       Select        | Select startup type as "Linear Ramp" or "Real Pole Ramp"                                          |
| Voltage Ramp Up Time        | s    | Voltage ramp up time           | Real number (Const) | Voltage ramp up time, only valid when Start-up type is "Linear Ramp"                              |
| Voltage Input Time Constant | s    | Voltage input time constant    | Real number (Const) | Voltage input time const, only valid when Start-up type is "Linear Ramp"                          |

### Fault Setting

| Parameter name           | Unit | Remark                  |        Type         | Description                                                                                           |
| :----------------------- | :--- | :---------------------- | :-----------------: | :---------------------------------------------------------------------------------------------------- |
| Is This a Fault Source ? |      | Is this a fault source? |       Select        | Select "Yes" or "No" to set the source as a fault source or non-fault source                          |
| Fault Start Time         | s    | Fault start time        | Real number (Const) | Fault start time is valid only when "Yes" is selected for the "is This a Fault Source" item           |
| Fault End Time           | s    | Fault end time          | Real number (Const) | Fault end time is valid only when "Yes" is selected for the "is This a Fault Source" item             |
| Drop Ratio               | p.u. | Drop ratio              | Real number (Const) | Per-unit value of drop ratio, only valid when "Yes" is selected for the "is This a Fault Source" item |

### Power Flow Data

| Parameter name             | Unit | Remark                     |        Type         | Description     |
| :------------------------- | :--- | :------------------------- | :-----------------: | :-------------- |
| Bus Type                   |      | Bus type                   |       Select        | Unavailable now |
| Injected Active Power      | MW   | Injected active power      | Real number (Const) | Unavailable now |
| Injected Reactive Power    | MVar | Injected reactive power    | Real number (Const) | Unavailable now |
| Bus Voltage Magnitude      | p.u. | Bus voltage magnitude      | Real number (Const) | Unavailable now |
| Bus Voltage Angle          | Deg  | Bus voltage angle          | Real number (Const) | Unavailable now |
| Lower Voltage Limit        | p.u. | lower bus voltage limit    | Real number (Const) | Unavailable now |
| Upper Voltage Limit        | p.u. | Upper bus voltage limit    | Real number (Const) | Unavailable now |
| Lower Reactive Power Limit | MVar | Lower reactive power limit | Real number (Const) | Unavailable now |
| Upper Reactive Power Limit | MVar | Upper reactive power limit | Real number (Const) | Unavailable now |

### Monitoring

| Parameter name                       | Remark                                   | Type | Description                                                                                                             |
| :----------------------------------- | :--------------------------------------- | :--: | :---------------------------------------------------------------------------------------------------------------------- |
| 3 Phase Source Voltage Vector \[kV\] | Voltage of 3-phase ac voltage source     | Text | Enter the measurement signal label of the voltage of 3-phase ac voltage source(3x1), starting with #, such as #Vabc     |
| 3 Phase Source Current Vector \[kA\] | Current of 3-phase ac voltage source     | Text | Enter the measurement signal label of the current of 3-phase ac voltage source（3×1） , starting with #, such as #Iabc  |
| RMS Source Voltage \[kV\]            | RMS voltage of 3-phase ac voltage Source | Text | Enter the measurement signal label of the rms voltage of 3-phase ac voltage source(1x1), starting with #, such as #Vrms |
| RMS Source Current \[kA\]            | RMS current of 3-phase ac voltage Source | Text | Enter the measurement signal label of the rms current of voltage source(1x1), starting with #, such as #Irms            |
| Active Power \[MW\]                  | Active power                             | Text | Enter the measurement signal label of the active power of voltage source(1x1), starting with #, such as #P              |
| Reactive Power \[MVar\]              | Reactive power                           | Text | Enter the measurement signal label of the reactive power of voltage source(1x1), starting with #, such as #Q            |

## Pin List

| Pin name | Dimension | Description                                                                       |
| :------- | :-------: | :-------------------------------------------------------------------------------- |
| Pin -    |    3×1    | Negative terminal of power source, only valid when voltage source is non-grounded |
| Pin +    |    3×1    | Positive terminal of power source                                                 |

## Using Instructions

{% pullquote info %}
If the internal resistance of the voltage source is zero, CloudPSS will set it to the `ideal voltage source` automatically. However, multiple ideal voltage sources cannot be connected in parallel or in a loop (in violation of Kirchhoff's loop voltage law).
{% endpullquote %}

## See Also

[Single-phase AC Voltage Source](comp_newACVoltageSource_1p.html)
