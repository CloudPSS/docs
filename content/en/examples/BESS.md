---
title: Energy storage grid-connected generation system
type: examples
author: songyk
author_email: songyankan@cloudpss.net
category: 1000
order: 400
---

## Description
With the development of power electronic technology and electric vehicle technology, the proportion of charging piles and energy storage systems in distribution networks and microgrids has gradually increased. It is of great significance for detailed modeling and simulation of distributed energy storage inverter systems.

CloudPSS provides the detailed model and the average model of the energy storage grid-connected generation system and provides a comparison of the two models. Users can select the corresponding model according to their needs, and modify and research on the basis.

## Model Introduction

The distributed energy storage inverter system consists of the Thevenin equivalent model of the energy storage battery (lead-acid battery), the voltage source converter (detail/average model), the grid side filter capacitor, the converter control system and the off-grid switching control.

Among them, the detailed model of the voltage source converter is composed of six discrete IGBTs and their anti-parallel diodes, as shown below.
![详细模型](BESS/BESS.png)

The average model of the converter consists of three controlled voltage sources on the AC side and one controlled current source on the DC side, as shown below.
![平均模型](BESS/BESS_avm.png)

There are two types of control systems for the converter: grid-connected control and off-grid control.
* The grid-connected control uses constant active power-reactive power control (PQ control).
* Off-grid control uses constant AC voltage-frequency control (VF control).

The two control modes in the example, grid-connected control and off-grid control, can be flexibly switched to each other. At the switching point, the voltage outer loop control of the converter is switched overall.

The control system of detailed model consists of four parts: grid voltage orientation, voltage-loop & current-loop double closed loop control, reference signal generation, and SPWM control.

![详细模型控制系统](BESS/BESS_ctrl.png)

The average model's control system omits the SPWM control, but adds the averager model control of the converter (the main function is to ensure the power balance between the AC side and the DC side).

![平均模型控制系统](BESS/BESS_avm_ctrl.png)

## Simulation

The simulation step size is set according to the selected model, and the electromagnetic transient simulation of the energy storage grid-connected generation system is performed. Among them, the detailed model has discrete switching events. It is recommended to check the `Switch/Discrete Event Processing Enhancement` option in the `Format Panel`->`Electromagnetic Transient`->`Solver Settings`  and simulate with a smaller simulation step. If the PWM carrier frequency is $f_c$, it is recommended that the simulation step size be less than $1/({20f_c})$. When using the average model, since there is no switching event, the `Normal (default)` option can be selected to set a higher simulation step size (50 μs is recommended, usually no more than 100 μs).

### Test1：Charge and discharge state switching

The detailed model and the average model are built in the unified example project, and the following settings are made.
* Keep the given conditions of the detailed model and the average model the same, and set basic information such as the start and end time of the study and the integration step (5μs);
* Set `Charge to Discharge Change Time [s]` in `Format Panel`->`Global Parameters` to 1;
* Set the PQ control power of the grid-connected inverter (before 1s, `P=0.04 MW`, `Q=-0.01 MVar`, after 1s, `P=-0.01 MW`, `Q=0.02 MVar`.)
![并网控制设定值](BESS/BESS_PQctrl.png)

Click `Format Panel`->`Electromagnetic Transient`->`Simulation Control`->`Start` and select the corresponding calculation node to get the simulation result. Draw a comparison figure of DC voltage, active/reactive power, AC current, and State of Charge (SOC).

![直流电压](BESS/BESS_udc_sim1.png)
![有功功率](BESS/BESS_p_sim1.png)
![交流电流](BESS/BESS_iac_sim1.png)
![SOC](BESS/BESS_soc_sim1.png)

It can be seen that in the charging and discharging state switching transient process, the average model is consistent with the detailed model results.

### Test2：Grid-connected control switches to off-grid control

The detailed model and the average model are built in the unified example project, and the following settings are made.
* Set the discharge mode before off-grid, the power setting is`P=-0.01 MW`, `Q=0.02 MVar`;
* Set `Grid-connected to off-grid Change Time [s]` in `Format Panel`->`Global Parameters` to 5;
* Set the reference voltage of the off-grid inverter (`Vd_ref=0.311`, `Vq_ref=0`).
![离网控制设定值](BESS/BESS_VFctrl.png)
Click `Format Panel`->`Electromagnetic Transient`->`Simulation Control`->`Start` and select the corresponding calculation node to get the simulation result. Draw a comparison figure of DC voltage, active/reactive power, AC current, State of Charge (SOC), and AC voltage.

![直流电压](BESS/BESS_udc_sim2.png)
![有功功率](BESS/BESS_p_sim2.png)
![无功功率](BESS/BESS_q_sim2.png)
![交流电流](BESS/BESS_iac_sim2.png)
![SOC](BESS/BESS_soc_sim2.png)
![交流电压](BESS/BESS_uac_sim2.png)

It can be seen that the detailed model of the process of the grid-connected control switching to the off-grid control is consistent with the average model results, and the switching process is smooth.

In practical applications, if you need to study control algorithms and system-level dynamics, to improve simulation efficiency, an average model can be used.