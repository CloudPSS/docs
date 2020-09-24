---
title: Half Bridge Submodule
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3005
order: 100

classname: _MultiHalfBridgeModule
symbol: HBM
---

## Basic Description

{% compsymbol HBM %}

> **This component is used to model a half bridge submodule in an MMC (Modular Multilevel Converter).**

## Parameter

### Configuration

| Parameter name               | Unit | Remark                       |         Type         | Description                                     |
| :--------------------------- | :--- | :--------------------------- | :------------------: | :---------------------------------------------- |
| Name                         |      | Name of component            |         Text         | Enter the name of the half bridge MMC (Default) |
| No. of Sub-Modules           |      | Number of sub-modules        |  Integer （Const）   | Number of sub-modules                           |
| Capacitance Per Sub-Module   | F    | Capacitance of sub-module    | Real number（Const） | Capacitance of sub-module                       |
| Initial Capacitor Voltage    | kV   | Initial capacitor voltage    | Real number（Const） | Initial capacitor voltage                       |
| Capacitor Leakage Resistance | Ω    | Capacitor leakage resistance | Real number（Const） | Capacitor leakage resistance                    |
| IGBT ON Resistance           | Ω    | IGBT on resistance           | Real number（Const） | IGBT on resistance                              |
| IGBT OFF Resistance          | Ω    | IGBT off resistance          | Real number（Const） | IGBT off resistance                             |
| Diode ON Resistance          | Ω    | Diode on Resistance          | Real number（Const） | Diode on Resistance                             |
| Diode OFF Resistance         | Ω    | Diode off Resistance         | Real number（Const） | Diode off Resistance                            |

### Monitoring

| Parameter name                  | Remark            | Type | Description                                                                                                         |
| :------------------------------ | :---------------- | :--: | :------------------------------------------------------------------------------------------------------------------ |
| Capacitor Voltage Vector \[kV\] | Capacitor voltage | Text | Enter the measurement signal label of the capacitor voltage of Half-bridge submodule, starting with #, such as #Vc  |
| Capacitor Current Vector \[kA\] | Capacitor current | Text | Enter the measurement signal label of the capacitor current of Half-bridge submodule, starting with #, such as #Ic  |
| IGBT A Voltage Vector \[kV\]    | IGBT (A) voltage  | Text | Enter the measurement signal label of the IGBT (A) voltage of Half-bridge submodule, starting with #, such as #Va   |
| IGBT A Current Vector \[kA\]    | IGBT (A) current  | Text | Enter the measurement signal label of the IGBT (A) current of Half-bridge submodule, starting with #, such as #Ia   |
| Diode A Voltage Vector \[kV\]   | Diode (A) voltage | Text | Enter the measurement signal label of the Diode (A) voltage of Half-bridge submodule, starting with #, such as #Vda |
| Diode A Current Vector \[kA\]   | Diode (A) current | Text | Enter the measurement signal label of the Diode (A) current of Half-bridge submodule, starting with #, such as #Ida |
| IGBT B Voltage Vector \[kV\]    | IGBT (B) voltage  | Text | Enter the measurement signal label of the IGBT (B) votlage of Half-bridge submodule, starting with #, such as #Vb   |
| IGBT B Current Vector \[kA\]    | IGBT (B) current  | Text | Enter the measurement signal label of the IGBT (B) current of Half-bridge submodule, starting with #, such as #Ib   |
| Diode B Voltage Vector \[kV\]   | Diode (B) voltage | Text | Enter the measurement signal label of the Diode (B) voltage of Half-bridge submodule, starting with #, such as #Vdb |
| Diode B Current Vector \[kA\]   | Diode (B) current | Text | Enter the measurement signal label of the Diode (B) current of Half-bridge submodule, starting with #, such as #Idb |

## Pin List

| Pin name |     Dimension     | Description                                                                |
| :------- | :---------------: | :------------------------------------------------------------------------- |
| Pin +    |        1×1        | Positive terminal of submodule, which is also the emit pin of IGBT (A)     |
| Pin -    |        1×1        | Negative terminal of submodule, which is also the emit pin of IGBT (B)     |
| Gate     | Control by signal | Switch signal input terminal. Its dimension is twice the number of modules |

## Using Instructions

## See Aslo

[NLM2Ref](comp_FirePulseGenNLM2Ref.md)
