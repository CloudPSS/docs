---
title: Three-phase Transmission Line
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3004
order: 400

classname: TranssmissionLineRouter
symbol: TLine_3p
---

## Basic Description

{% compsymbol TLine_3p %}

> **The component uses a π-type lumped parameter model and a Begeron distributed parameter model to model a three-phase transmission line.**

## Parameter

### Configuration

| Parameter name                                     | Unit | Remark                                             |        Type         | Description                                                                                                                       |
| :------------------------------------------------- | :--- | :------------------------------------------------- | :-----------------: | :-------------------------------------------------------------------------------------------------------------------------------- |
| Name                                               |      | Name of component                                  |        Text         | Enter the name of this component                                                                                                  |
| Steady-state Frequency                             | Hz   | Rated frequency                                    | Real number (Const) | Rated frequency                                                                                                                   |
| Length of Line                                     | km   | Length of line                                     | Real number (Const) | Length of line $l$                                                                                                                |
| Parameter Format                                   |      | Parameter format                                   |       Select        | Select parameter format as "R,X,B(p.u.)" or "R,Xl,Xc(Ω)"                                                                          |
| 0 Seq. Data                                        |      | 0 Seq. data                                        |       Select        | Select whether to input the 0-sequence parameter. If not, the 0-sequence parameter is the same as the positive sequence parameter |
| Has the Data Been Corrected for Long Line Effects? |      | Has the data been corrected for long line effects? |       Select        | Select "Yes" or "No", indicating whether the data has been corrected for long line effects                                        |
| Model Type                                         |      | Model type                                         |       Select        | Select Model Type as "Bergeron Line Model" or "Lumped π-Model"                                                                    |

### R, X, B (p.u.)

| Parameter name                  | Unit    | Remark                                 |        Type         | Description                                                                                                                  |
| :------------------------------ | :------ | :------------------------------------- | :-----------------: | :--------------------------------------------------------------------------------------------------------------------------- |
| Rated Voltage (L-L, RMS)        | kV      | Rated voltage                          | Real number (Const) | Rated voltage (Base value)                                                                                                   |
| Rated Power Capacity            | MVA     | Rated power capacity                   | Real number (Const) | Rated power capacity (Base value)                                                                                            |
| +/- Seq. Resistance             | p.u./km | +/- Seq. resistance per km             | Real number (Const) | Positive sequence resistance per unit length in per-unit system, $R_1$                                                       |
| +/- Seq. Inductive Reactance    | p.u./km | +/- Seq. inductive reactance per km    | Real number (Const) | Positive sequence inductive reactance per unit length in per-unit system, $X_1$                                              |
| +/- Seq. Capacitive Susceptance | p.u./km | +/- Seq. capacitive susceptance per km | Real number (Const) | Positive sequence capacitive susceptance per unit length in per-unit system, $B_1$                                           |
| 0 Seq. Resistance               | p.u./km | 0 Seq. resistance per km               | Real number (Const) | 0-sequence resistance per unit length in per-unit system, $R_0$, only valid when "Enter 0 Seq. Data" is selected             |
| 0 Seq. Inductive Reactance      | p.u./km | 0 Seq. inductive reactance per km      | Real number (Const) | 0-sequence inductive reactance per unit length in per-unit system, $X_0$, only valid when "Enter 0 Seq. Data" is selected    |
| 0 Seq. Capacitive Susceptance   | p.u./km | 0 Seq. capacitive susceptance per km   | Real number (Const) | 0-sequence capacitive susceptance per unit length in per-unit system, $B_0$, only valid when "Enter 0 Seq. Data" is selected |

### R, Xl, Xc (Ω)

| Parameter name                | Unit   | Remark                              |        Type         | Description                                                                                                                      |
| :---------------------------- | :----- | :---------------------------------- | :-----------------: | :------------------------------------------------------------------------------------------------------------------------------- |
| +/- Seq. Resistance           | Ω/km   | +/- Seq. resistance per km          | Real number (Const) | Positive sequence resistance per unit length in named value system, $R_1$                                                        |
| +/- Seq. Inductive Reactance  | Ω/km   | +/- Seq. inductive Reactance per km | Real number (Const) | Positive sequence inductive per unit length in named value system, $X_{l1}$                                                      |
| +/- Seq. Capacitive Reactance | MΩ\*km | +/- Seq. capacitive reactanceper km | Real number (Const) | Positive sequence capacitive reactance per unit length in named value system, $X_{c1}$                                           |
| 0 Seq. Resistance             | Ω/km   | 0 Seq. resistance per km            | Real number (Const) | 0-sequence resistance per unit length in named value system, $R_0$, only valid when "Enter 0 Seq. Data" is selected              |
| 0 Seq. Inductive Reactance    | Ω/km   | 0 Seq. inductive reactance per km   | Real number (Const) | 0-sequence inductive reactance per unit length in named value system, $X_{l0}$, only valid when "Enter 0 Seq. Data" is selected  |
| 0 Seq. Capacitive Reactance   | MΩ\*km | 0 Seq. capacitive reactance per km  | Real number (Const) | 0-sequence capacitive reactance per unit length in named value system, $X_{c0}$, only valid when "Enter 0 Seq. Data" is selected |

### Monitoring

| Parameter name                                     | Remark                                      | Type | Description                                                                                                        |
| :------------------------------------------------- | :------------------------------------------ | :--: | :----------------------------------------------------------------------------------------------------------------- |
| 3 Phase Current Vector (Sending Terminal) \[kA\]   | 3-phase current vector (Sending Terminal)   | Text | Enter the measurement signal label of the current at sending terminal (3x1), starting with #, such as #Isabc       |
| 3 Phase Current Vector (Receiving Terminal) \[kA\] | 3-phase current vector (Receiving Terminal) | Text | Enter the measurement signal label of the current at receiving terminal (3x1), starting with #, such as #Irabc     |
| RMS Current (Sending Terminal) \[kA\]              | RMS current (Sending Terminal)              | Text | Enter the measurement signal label of the current at sending terminal (1x1), starting with #, such as #Isrms       |
| RMS Current (Receiving Terminal) \[kA\]            | RMS current (Receiving Terminal)            | Text | Enter the measurement signal label of the current at receiving terminal (1x1), starting with #, such as #Irrms     |
| Active Power (Sending Terminal) \[MW\]             | Active power (Sending Terminal)             | Text | Enter the measurement signal label of the active power at sending terminal (1x1), starting with #, such as #Ps     |
| Reactive Power (Sending Terminal) \[MVar\]         | Reactive power (Sending Terminal)           | Text | Enter the measurement signal label of the reactive power at sending terminal (1x1), starting with #, such as #Qs   |
| Active Power (Receiving Terminal) \[MW\]           | Active power (Receiving Terminal)           | Text | Enter the measurement signal label of the active power at receiving terminal (1x1), starting with #, such as #Pr   |
| Reactive Power (Receiving Terminal) \[MVar\]       | Reactive power (Receiving Terminal)         | Text | Enter the measurement signal label of the reactive power at receiving terminal (1x1), starting with #, such as #Qr |
| Active Power Losses \[MW\]                         | Active power losses                         | Text | Enter the measurement signal label of the active power loss (1x1), starting with #, such as #Ploss                 |
| Reactive Power Losses \[MVar\]                     | Reactive power losses                       | Text | Enter the measurement signal label of the reactive power loss (1x1), starting with #, such as #Qloss               |

## Pin List

| Pin name          | Dimension | Description                |
| :---------------- | :-------: | :------------------------- |
| Sending (i) Pin   |    3×1    | Pins of sending terminal   |
| Receiving (j) Pin |    3×1    | Pins of receiving terminal |

## Using Instructions

1. It is recommended to use the Bergeron distribution parameter model with known line length information. The model supports parallel computing in the subnet, which can greatly improve the efficiency of simulation.
2. When the Bergeron model reports the following error, it indicates that the line length is insufficient, and should be switched to the **Lumped π-Model**.
   {% pullquote fail %}
   1. **TLine-XXX Error:** +/- Seq. Travel Time is less than the integration time step. Decrease the time step or use Lumped π-Model instead.
   2. **TLine-XXX Error:** 0 Seq. Travel Time is less than the integration time step. Decrease the time step or use Lumped π-Model instead.
      {% endpullquote %}
      3.If the line length information is unknown, user should select the **Lumped π-Model** and the line length as **1km** when entering the line parameters, and select **Yes** for “Has the Data Been Corrected for Long Line Effects?”
3. Please confirm whether the parameters filled in have been corrected by long line effects. If select "No", and the **Lumped π-Model** is selected, CloudPSS will correct the lumped parameters as follows equation:
   > $$
   > {Z_m} &= Z\frac{ {\sinh \left( {\gamma l} \right)} }{ {\gamma l} } \\
   > {Y_m} &= Y\frac{ {\tanh \left( {\gamma l/2} \right)} }{ {\gamma l/2} }
   > \end{aligned}$$
   > $$

## See Also
