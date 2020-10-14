---
title: Test Cases
type: guide
author: zhangr
order: 500
---

This chapter takes two test cases as examples to help users better understand the rules and methods of using CloudPSS.

## Simulation Test Case of RLC Circuit

### RLC Series Circuit Principle

The RLC circuit is a second-order circuit consisting of resistor, inductor, and capacitor, as shown in the figure. The values of voltage and current in the circuit are the solutions of the second order differential equation whose coefficients are determined by the circuit structure. 

![RLC series circuit](User4/51.png "拓扑图")

In this circuit, all three components are connected in series with the voltage source. According to Kirchhoff's Voltage Law (KVL), the circuit voltage equation of the circuit is:
$$ Ri(t) + L\frac{ {di} }{ {dt} } + \frac{1}{C}\int\limits_{ - \infty }^{\tau  = t} {i(t)d\tau  = v(t)} $$

When the power supply voltage is constant, the derivative of the above formula can obtain the following second-order differential equation:
$$\frac{ { {d^2}i(t)} }{ {d{t^2} } } + \frac{R}{L}\frac{ {di(t)} }{ {dt} } + \frac{1}{ {LC} }i(t) = 0$$

Let $\alpha  = \frac{R}{L}$，${\omega _0} = \frac{1}{ {\sqrt {LC} } }$, where $\alpha$ is the decrement and $\omega _0$ is the resonance angle frequency. The damping coefficient is defined as:

$$ \zeta  = \frac{\alpha }{ { {\omega _0} } } = \frac{R}{2} \sqrt {\frac{C}{L} } $$ 

According to the circuit theory, different parameters of circuit components means different damping coefficients, which will lead to different changes in the zero state response of voltage, current and other electrical quantities in the circuit. By solving the circuit voltage equation, the general solution of the differential equation can be obtained as the linear superposition of two exponential functions:

$$i(t) = {A_1}{e^{ - {s_1}t} } + {A_2}{e^{ - {s_2}t} }$$

Coefficients$A_1$, $A_2$ are given by boundary condition.

The following are three situations of different $\zeta$.

+ Overdamped ($\zeta >1$)

  Overdamped response of is:
  $$i(t) = {A_1}{e^{ - {\omega _0}(\zeta  + \sqrt { {\zeta ^2} - 1} )t} } + {A_2}{e^{ - {\omega _0}(\zeta  - \sqrt { {\zeta ^2} - 1} )t} }$$

+ Underdamped ($\zeta <1$)

  Underdamped response is:
  $$i(t) = {B_1}{e^{ - \alpha t} }\cos ({\omega _d}t) + {B_2}{e^{ - \alpha t} }\sin ({\omega _d}t)$$

+ Critical damping ($\zeta =1$)

  Critical damping response is:
  $$ i(t) = {D_1}t{e^{ - \alpha t} } + {D_2}t{e^{ - \alpha t} }$$

### Simulation Analyzation

The RLC series circuit simulation model built in CloudPSS is shown below.

![RLC series circuit simulation model](User4/A1.png "仿真图")

Drag the DC Voltage Source, Capacitor, Inductor, Resistor, Current Meter, Output Channel and Oscilloscope Group component to the main workspace. Set the all the DC voltage source parameter to 0.1kV, voltage rise time to 0.001s, inductance parameter to 0.1H, capacitance parameter to 100000uF. Set the resistance parameters to 0.5Ω, 2Ω and 10Ω, and the ammeter output signals to #I1, #I2, #I3, respectively. The input pins of the output channels are set to #I1, #I2, #I3, respectively.  The simulation results are shown in the figure.

![Simulation results of the RLC series circuit](User4/A2.png "仿真结果")

## Three-phase Bridge Rectifier Circuit

### Principle of the Three-phase Rectifier Circuit

The three-phase H-bridge rectifier circuit is the most widely used rectifier circuit in industry. It consists of a set of common cathode and a set of common anode three-phase half wave controlled rectifier circuit in series, as shown in the figure. In this figure, thyristors VS1, VS2, VS3 are common cathode groups, and thyristors VS4, VS5, and VS6 are common anode groups.

![Three-phase H-bridge rectifier circuit](User4/A3.png "电路拓扑")

In one cycle, the electrical angle at which the thyristor is not conducting under the action of the forward anode voltage is called the control angle or the phase shift angle, which is represented by α. In the three-phase controlled rectifier circuit, the starting point of the control angle is not at the zero crossing point of the alternating voltage, but at the natural commutation point (also known as the natural commutation point), that is, the intersection of the three phase voltages. When double-narrow pulse triggering is used, the trigger circuit applies trigger pulses to the two thyristors simultaneously every 60°, and the trigger sequence of each cycle is 1/5-1/6-2/6-2/4-3/4-3/5.

The figure shows the theoretical switch and output waveforms when α equals to 0°, 60° and 90°, respectively.

![The theoretical switch and output waveforms when α equals to 0°](User4/A4.png "α角为0°")
![The theoretical switch and output waveforms when α equals to 60°](User4/A41.png "α角为60°")
![The theoretical switch and output waveforms when α equals to 90°](User4/A42.png "α角为90°")

### Simulation Analyzation

The figure shows the test three-phase rectifier bridge circuit established in CloudPSS.

![Simulation diagram of three-phase H-bridge rectifier circuit](User4/A5.png "仿真图")

Drag the 3-phase AC Voltage Sources, Splitters, Thyristors, Resistors, Voltage Meters, Square Generators, Adder, Delay, Output Channels, and Oscilloscope Group into the main workspace. Set the three-phase voltage source line voltage to 0.1kV, frequency to 50Hz, voltage rise time to 0s. Thyristors parameters remain as default values. Square wave generators are set to square waves with 60° degree interval, 0.01 duty cycle, 50Hz frequency. Adder is used to generate a double-narrow pulse.  The delay time of the Delay component is set to the global variable \$T, which should be filled in the global variable window. The maximum number of sampling points is set to 500. The voltmeter is used to measure the load voltage, marked #Vr. The input pin of the output channel is set to #Vr. The Oscilloscope is used to display the waveform of output channels. Set the global parameters \$T to 0s, 0.00333s, and 0.005s respectively. The simulation results of different \$T (α) are shown in the figure below.

![Simulation results when α is 0°](User4/A6.png "仿真结果1")
![Simulation results when α is 60°](User4/A7.png "仿真结果2")
![Simulation results when α is 90°](User4/A8.png "仿真结果3")




