---
title: Controlled AC Voltage Source (VF)
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3002
order: 600

classname: _newCtrlAcVoltageSource
symbol: newCtrlVFACSource
---

## Basic Description

{% compsymbol newCtrlVFACSource %}

> **This component is used to model a single-phase or three-phase AC voltage source with controllable amplitude and frequency.**

## Parameter

### Configuration

| Parameter name              | Unit | Remark                   |        Type         | Description                                                                        |
| :-------------------------- | :--- | :----------------------- | :-----------------: | :--------------------------------------------------------------------------------- |
| Source Name                 |      | Name of component        |        Text         | Enter the name of controlled voltage source. (Default)                             |
| Is This Source Grounded?    |      | Is this source grounded? |       Select        | Select "Yes" or "No" to ground or unground the Negative terminal of voltage source |
| No. of Phases               |      | Number of phases         |       Select        | Select single-phase or three-phase source                                          |
| Function Type               |      | Function type            |       Select        | Select the signal type as “Sin” or “Cos”                                           |
| Initial Frequency           | Hz   | Initial frequency        | Real number (Const) | Initial frequency of the voltage source                                            |
| Initial Phase               | Deg  | Initial phase            | Real number (Const) | The phase of the voltage source when t=0s                                          |
| Resistance                  | Ω    | Resistance               | Real number (Const) | Resistance of the voltage source                                                   |
| Start-up Type               |      | Start-up type            |       Select        | Select start-up type of voltage source as "Linear Ramp" or "Real Pole Ramp"        |
| Voltage Ramp Up Time        | s    | Startup time             | Real number (Const) | Enter the voltage ramping time, only valid when "Startup Type" is "Linear Ramp"    |
| Voltage Input Time Constant | s    | Startup constant         | Real number (Const) | Enter the startup constant, only valid when Startup Type is "Real Pole Ramp"       |

### Monitoring

| Parameter name        | Remark         | Type | Description                                                                                                                                                                 |
| :-------------------- | :------------- | :--: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Source Voltage \[kV\] | Source voltage | Text | Enter the measurement signal label of the voltage of controlled ac voltage source, starting with #, such as #Va. This is valid when voltage source is a single-phase source |
| Source Current \[kA\] | Source current | Text | Enter the measurement signal label of the current of controlled ac voltage source, starting with #, such as #Ia. This is valid when voltage source is a single-phase source |

### Monitoring

| Parameter name                       | Remark             | Type | Description                                                                                                                                                                                          |
| :----------------------------------- | :----------------- | :--: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3 Phase Source Voltage Vector \[kV\] | Source voltage     | Text | Enter the measurement signal label of the voltage of controlled ac voltage source (3×1 dimension), starting with #, such as #Vabc. Only valid when the voltage source phase is three-phase           |
| 3 Phase Source Current Vector \[kA\] | Source current     | Text | Enter the measurement signal label of the current of controlled ac voltage source (3×1 dimension), starting with #, such as #Iabc. Only valid when the voltage source phase is three-phase           |
| RMS Source Voltage \[kV\]            | RMS source voltage | Text | Enter the measurement signal label of the RMS voltage value of controlled ac voltage source (1×1 dimension), starting with #, such as #Vrms. Only valid when the voltage source phase is three-phase |
| RMS Source Current \[kA\]            | RMS source current | Text | Enter the measurement signal label of the RMS current value of controlled ac voltage source (1×1 dimension), starting with #, such as #Irms. Only valid when the voltage source phase is three-phase |
| Active Power \[MW\]                  | Active power       | Text | Enter the measurement signal label of the active power of controlled ac voltage source (1×1 dimension), starting with #, such as #Pa. Only valid when the voltage source phase is three-phase        |
| Reactive Power \[MVar\]              | Reactive power     | Text | Enter the measurement signal label of the reactive power of controlled ac voltage source (1×1 dimension), starting with #, such as #Qr. Only valid when the voltage source phase is three-phase      |

## Pin List

| Pin name                |        Dimension         | Description                                                         |
| :---------------------- | :----------------------: | :------------------------------------------------------------------ |
| Pin -                   | Controlled by parameters | Negative terminal, only valid when the power source is not grounded |
| Pin +                   | Controlled by parameters | Positive terminal                                                   |
| Voltage \[kV, L-G, Pk\] |           1×1            | Input of voltage amplitude                                          |
| Frequency \[Hz\]        |           1×1            | Input of voltage frequency                                          |

## Using Instructions

{% pullquote info %}
If the internal resistance of the voltage source is zero, CloudPSS will set it to the `ideal voltage source` automatically. However, multiple ideal voltage sources cannot be connected in parallel or in a loop (in violation of Kirchhoff's loop voltage law).
{% endpullquote %}

## See Aslo

[Controlled AC Voltage Source (VP)](comp_newCtrlVPAcVoltageSource.html), [Controlled Voltage Source](comp_newCtrlVoltageSource.html)
