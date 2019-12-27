---
title: Synchronous Generator
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3004
order: 900

classname: SyncGeneratorRouter
symbol: SyncGen
---
## Basic Description
{% compsymbol SyncGen %}

> **This component is used to model the synchronous generator.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Poles |  | Poles (Not pole pairs) | Integer (Const) | The pole of synchronous generator, which is twice the pole pairs |
| Rated Power | MVA | Rated power | Real number (Const) | Rated power of the synchronous generator (Base power value of transformer) |
| Rated Voltage (L-G, RMS) | kV | Rated voltage (L-G, RMS) | Real number (Const) | Rated line-ground rms voltage of the synchronous generator |
| Base Operation Frequency | Hz | Base operation frequency | Real number (Const) | The base operation frequency of the synchronous generator, not the rotor rotating frequency |
| Neutral Resistance | p.u. | Neutral resistance | Real number (Const) | The neutral resistance of synchronous generator, which is connected between neutral of the stator and ground. The base value is same as the stator winding parameter |
| Parameter Format |  | Parameter format | Select | Select "Equivalent Circuit Data" or "Experimental Data" |

### Equivalent Circuit Data
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Stator Resistance | p.u. | Stator resistance | Real number (Const) | None |
| Stator Leakage Reactance | p.u. | Stator leakage reactance | Real number (Const) | None |
| Q-Axis Synch. Reactance | p.u. | Q-Axis synchronous reactance | Real number (Const) | None |
| D-Axis Synch. Reactance | p.u. | D-Axis synchronous reactance | Real number (Const) | None |
| Field Resistance | p.u. | D-Axis field resistance | Real number (Const) | None |
| Field Leakage Reactance | p.u. | D-Axis field leakage reactance | Real number (Const) | None |
| D-Axis Damper Resistance | p.u. | D-Axis damper resistance | Real number (Const) | None |
| D-Axis Damper Leakage Reactance | p.u. | D-Axis damper leakage reactance | Real number (Const) | None |
| Q-Axis Damper No. 1 Resistance | p.u. | Q-Axis damper No.1 resistance (g) | Real number (Const) | None |
| Q-Axis Damper No. 1 Leakage Reactance | p.u. | Q-Axis damper No.1 leakage reactance (g) | Real number (Const) | None |
| Q-Axis Damper No. 2 Resistance | p.u. | Q-Axis damper No.2 resistance (Q) | Real number (Const) | None |
| Q-Axis Damper No. 2 Leakage Reactance | p.u. | Q-Axis damper No.2 leakage reactance (Q) | Real number (Const) | None |

### Experimental Data
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Stator Resistance | p.u. | Stator resistance | Real number (Const) | None |
| Stator Leakage Reactance | p.u. | Stator leakage reactance | Real number (Const) | None |
| D-Axis Synch. Reactance | p.u. | D-Axis synchronous reactance | Real number (Const) | None |
| D-Axis Transient Reactance | p.u. | D-Axis transient reactance | Real number (Const) | None |
| D-Axis Sub-Transient Reactance | p.u. | D-Axis sub-transient reactance | Real number (Const) | None |
| Q-Axis Sync. Reactance | p.u. | Q-Axis synchronous reactance | Real number (Const) | None |
| Q-Axis Transient Reactance | p.u. | Q-Axis transient reactance | Real number (Const) | None |
| Q-Axis Sub-Transient Reactance | p.u. | Q-Axis sub-transient reactance | Real number (Const) | None |
| D-Axis Transient Time (Open Circuit) | s | D-Axis transient time (open circuit) | Real number (Const) | None |
| D-Axis Sub-Transient Time (Open Circuit) | s | D-Axis sub-transient time (open circuit) | Real number (Const) | None |
| Q-Axis Transient Time (Open Circuit) | s | Q-Axis transient time (open circuit) | Real number (Const) | None |
| Q-Axis Sub-Transient Time (Open Circuit) | s | Q-Axis sub-transient time (open circuit) | Real number (Const) | None |

### Rotor Equation
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Control Type |  | Select different control type | Select | Select "Speed Control" or "Torque Control" |
| Inertia Constant | s | Inertia time constant of the rator | Real number (Const) | Enter the inertia time constant of the synchronous rator, $T_J=2H$, where H is the inertia constant |
| Damping Constant | s | Damping constant | Real number (Const) |  |

### Initial Condition
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Startup Type |  |  | Select | Select the startup type as "From Zero-state", "From Steady-state" or "Source to Machine" |
| Ramping Time | s | Ramp time | Real number (Const) | When the startup type is "Source to Machine" the ramp time is needed to be set |
| Initial Voltage Magnitude | p.u. | Initial voltage magnitude | Real number (Const) | The initial voltage magnitude is from the results of the power flow, only valid when the startup type is "From Steady-State" or "Source to Machine" |
| Initial Voltage Phase | Deg | Initial voltage phase | Real number (Const) | The initial voltage phase is from the results of the power flow, only valid when the startup type is "from Steady-state" or "Source to Machine" |
| Initial Active Power | MW | Initial active power | Real number (Const) | The initial active power is from the results of the power flow, only valid when the startup type is "from Steady-state" or "Source to Machine" |
| Initial Reactive Power | MVar | Initial reactive power | Real number (Const) | The initial reactive power is from the results of the power flow, only valid when the startup type is "from Steady-state" or "Source to Machine" |
| Source to Machine Transition Signal |  | Source to Machine transition signal | Text | Enter the label of the Source to Machine transition signal, starting with @, such as @S2M, only valid when the startup type is "Source to Machine" |
| Rotor Unlocking Signal |  | Rotor unlocking signal | Text | Enter the label of the Rotor unlocking signal, starting with @, such as @L2N. If it is empty, the rator speed is locked |

### Power Flow Data
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Bus Type |  | Bus type | Select | For power flow calculation function, specify the node type of the bus where the component is located. And select as "PQ Bus", "PV Bus", or "Slack Bus" |
| Injected Active Power | MW | Injected active power | Real number (Const) | For power flow calculation function, only valid when the "Bus Type" is "PQ Bus" or "PV Bus" |
| Injected Reactive Power | MVar | Injected reactive power | Real number (Const) | For power flow calculation function, only valid when the "Bus Type" is "PQ Bus" |
| Bus Voltage Magnitude | p.u. | Bus voltage magnitude | Real number (Const) | For power flow calculation function, only valid when the "Bus Type" is "PQ Bus" or "Slack Bus" |
| Bus Voltage Angle | Deg | Bus voltage angle | Real number (Const) | For power flow calculation function, only valid when the "Bus Type" is "PSlack Bus" |
| Lower Voltage Limit | p.u. | Lower voltage limit | Real number (Const) | For power flow calculation function, only valid when the "Bus Type" is "PQ Bus" |
| Upper Voltage Limit | p.u. | Upper voltage limit | Real number (Const) | For power flow calculation function, only valid when the "Bus Type" is "PQ Bus" |
| Lower Reactive Power Limit | MVar | Lower reactive power limit | Real number (Const) | For power flow calculation function, only valid when the "Bus Type" is "PV Bus" or "Slack Bus" |
| Upper Reactive Power Limit | MVar | Upper reactive power limit | Real number (Const) | For power flow calculation function, only valid when the "Bus Type" is "PV Bus" or "Slack Bus" |

### Monitoring
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Source to Machine Signal | Source to Machine signal | Text | Enter the label of the source to machine signal, starting with #, such as #S2M |
| Rotor Unlocking Signal | Rotor unlocking signal | Text | Enter the label of the rator unlocking signal, starting with #, such as #L2N |
| Initial Open-Circuit Voltage (Ef) \[p.u.\] | Initial open-circuit voltage Ef0 | Text | Enter the label of the initial open-circuit voltage, starting with #, such as #Ef0 |
| Initial Mechanical Torque \[p.u.\] | Initial mechanical torque Tm0 | Text | Enter the label of the initial mechanical torque, starting with #, such as #Tm0 |
| Rotor Speed \[p.u.\] | Rotor speed | Text | Enter the label of the rotor speed, starting with #, such as #w |
| Rotor Angle \[Rad\] | Rotor angle | Text | Enter the label of the rotor angle, starting with #, such as #Theta |
| Load Angle (Q-axis leads Va) \[Rad\] | Angle of Q-axis leading Va | Text | Enter the label of the load angle, starting with #, such as #LA |
| Load Angle (Q-axis leads ωₛ*t) \[Rad\] | Angle of Q-axis leading  ωₛ *t | Text | Enter the label of the load angle, starting with #, such as #LA1 |
| Terminal RMS Voltage \[p.u.\] | Terminal RMS voltage of stator | Text | Enter the label of the terminal RMS voltage, starting with #, such as #Vrms |
| Terminal RMS Current \[p.u.\] | Terminal RMS current of stator | Text | Enter the label of the terminal RMS current, starting with #, such as #Irms |
| Terminal Active Power \[MW\] | Terminal active power of stator | Text | Enter the label of the terminal active power, starting with #, such as #Pmsr |
| Terminal Reactive Power \[MVar\] | Terminal reactive power of stator | Text | Enter the label of the terminal reactive power, starting with #, such as #Qmsr |
| Terminal 3 Phase Current Vector \[kA\] | Terminal 3-phase current of stator | Text | Enter the label of the terminal 3 phase current vector, starting with #, such as #Iabc |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Stator Port | 3×1 | Terminal of the stator |
| w | 1×1 | Input pin of the speed signal, when it is "Speed Control" |
| Tm | 1×1 | Input pin of the mechanical torque, when it is "Torque Control" |
| Te | 1×1 | Output pin of the electromagnetic torque |
| Ef | 1×1 | Input pin of the flux voltage |
| If | 1×1 | Output pin of the flux current |

## Using Instructions

The conversion between the per-unit value and the named value of the synchronous motor is referenced from the [CloudPSSsynchronous motor per-unit value and the named value system](../other/SyncGenPerUnitSystem.html)。

### The startup types of the synchronous generator

CloudPSS provides three different startup types of the synchronous generator. You can select different startup types by modifying the parameters in the `Initial Condition` column of the parameter table. 
 
1.	From Zero-state

    Set `Initial Condition`->`Startup Type` as `from Zero-state`, to achieve a flat start, which is equivalent to not using any special startup method.

    It should be noted that, in the `From Zero-state` startup type, the `initial open-circuit voltage, Ef0`, and the `initial mechanical torque, Tm0`, measurement signal in the synchronous generator measurement mark are meaningless.

2.	From Steady-state

    Set `Initial Condition`->`Startup Type` as `from Steady-state`, which is a steady state startup. At this point, the motor needs to set four parameters `Initial Voltage Magnitude`,  `Initial Voltage Phase`, `Initial Active Power`, `Initial Reactive Power`. This type of startup is suitable for the entire system to be started directly from the power flow snapshot. See the section [Startup of Power Flow Snapshot](../features/Initialization.html) for details.

3.	Source to Machine

    Set `Initial Condition`->`Startup Type` as `Source to Machine`, which is the voltage source to motor start type. In this case, you need to specify the dynamic parameters of `Ramping Time`, `Initial Voltage Magnitude`, `Initial Voltage Phase`, and `Source to Machine Transition Signal`, For the use of dynamic parameters,  see[Parameters and Pins System](../features/ParameterSystem.html) in detail. Such as: it can be filled in`@S2M`. The `@S2M` signal is generated by a step signal generator and is a signal that transitions from 0 to 1. When the `@S2M` is 0, the motor is an ideal voltage source, and its amplitude and phase linearly climb to the terminal voltage value given by `Initial Voltage Magnitude`, and `Initial Voltage Phase`. When the @S2M signal steps to 1, the voltage source switches to the motor.

    It should be noted that, in the `Source to Machine` startup type, the `initial open-circuit voltage, Ef0`, and the `initial mechanical torque, Tm0`, `Rotor Angle` and `Load Angle (Q-axis leads Va)` measurement signal in the synchronous generator measurement mark are meaningless, until the @S2M signal is 1.

### "Rotor Unlocking Signal" of the synchronous generator

By default, the rotor of the synchronous generator is in the "lock speed mode" at rated speed, regardless of whether the "speed control mode" or "the torque control mode" is selected. The user is required to provide `Rotor Unlocking Signal` dynamic parameters to unlock. Such as: can be filled in `@L2N`. The `@L2N` signal is generated by a step signal generator and is a signal that transitions from 0 to 1. When `@L2N` is 0, the speed is constant at the rated speed. When the `@L2N` signal steps to 1, the speed is released. In the "speed control" mode, the speed is the same as the controlled signal; under "torque control", the speed is controlled by the speed equation.

## See Also


