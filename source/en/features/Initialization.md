---
title: Startup of Power Flow Snapshot
type: features
category: 1000
order: 700
author: songyk
author_email: songyankan@cloudpss.net
---

CloudPSS version 3.0 provides the function of starting electromagnetic transient simulation from a given power flow snapshot.

In the electromagnetic transient simulation of CloudPSS, the startup of the electrical system can be divided into two types: `From Zero` and `From the Power Flow Snapshot directly`.

## Starting from zero to any power flow snapshot
Starting from zero is starting from a state where the voltage and current are equal to 0. This method is applicable to all components (including all starting modes except Electric machinery started `from Steady-State`) and all connecting modes.

For synchronous generators, it is recommended to select the starting mode of `Source to Machine` during the starting from zero. During start-up, the motor is a ideal voltage source. After starting to steady state, switch the voltage source to the motor by specifying `Source to Machine Signal`.

## Starting from a given power flow snapshot

Starting from a given power flow snapshot mode start from the snapshot to steady state. It has the advantages of short starting time and high efficiency. There are several requirements for this starting mode:

1. The ports of all components **must** be directly connected to `bus` components.
2. The system topology and parameters must be consistent with the electromagnetic transient simulation to ensure the availability of power flow snapshot.
3. The starting parameters of `Motor`, `Voltage Source` and `Bus` need to be consistent with the calculation results of power flow, otherwise the simulation can not reach steady state or even error.
4. Need to enable `Format Panel`->`Electromagnetic Transient`->`Start Parameters`->`Start Prestart Process`.


The following are the parameters to be configured.

### Start parameter configuration of synchronous motor

In the `Initial Condition` page of synchronous motor,
1. For `Startup Type`, select `from Steady-state`.
2. The `node voltage amplitude (p.u.)`, `node voltage phase (Deg)`, `injected active power (MW)` and `injected reactive power (Mvar)` of the generator nodes in the power flow calculation results are filled in the columns of `Initial Voltage Magnitude [p.u.]`, `Initial Voltage Phase [Deg]`, `Initial Active Power [MW]`, and `Initial Reactive Power [MVar]` respectively.
   ![同步电机启动参数](Initialization/sync.png "Start parameters page of synchronous generator") 

{% pullquote tip %}
The phase voltage base value of the synchronous generator and the line voltage base value of the connected bus shall match correctly, otherwise the input `node voltage amplitude (p.u.)` shall be converted to the base value voltage of the synchronous motor.
{% endpullquote %}

### Start parameter configuration of bus

In the bus `Cofiguration` page, the `node voltage amplitude (p.u.)` and `node voltage phase (Deg)` of each bus in the power flow calculation results shall be filled in the `Voltage Magnitude [p.u.]`，`Voltage Angle [Deg]` options. The `basic value of line voltage` used for power flow calculation is filled in `Bus Voltage (L-L, RMS) [kV]`, and the rated frequency of AC system is filled in `Rated Frequency [Hz]`. An item of `Ramping Time (s)` can be left blank (this parameter is not used temporarily).

![母线启动参数](Initialization/bus.png "Three phase bus starting parameters page")

### Start parameter configuration of three-phase voltage source

If the system also contains three-phase AC voltage source, the voltage source needs special treatment. Its `Function Type` needs to be set to `Cosine`, `Initial Phase [Deg]` to fill in the bus voltage phase of the connected bus, `Rated Voltage (L-L, RMS) [kV]` to fill in **the bus voltage actual value** of the power flow calculation result, `Start-up Type` select `Linear Ramp`, `Voltage Ramp Up Time [s]` to set to `0`.

![三相电压源启动参数](Initialization/source.png "Three-phase voltage source start parameter page")


{% pullquote tip %}
The configuration of the above cross-section can be quickly imported by using the [Component Table](ComponentTable.html) function.
{% endpullquote %}

### Pre-start parameter configuration

1. `Format Panel`->`Electromagnetic Transient`->`Start Parameters`->`Voltage Ramp Up Time` shall be determined according to the frequency of AC system, which is generally equal to 3 cycles. Typical value: 0.06s for 50Hz system and 0.05s for 60Hz system. Fill in a larger climb time, the starting effect is more stable, but the corresponding time-consuming becomes longer.
2. `Format Panel`->`Electromagnetic Transient`->`Start Parameters`->`Maximum Startup Time` should be filled with a value greater than or equal to voltage ramp up time (typical value is equal to `Voltage Ramp Up Time`). The `Maximum Startup Time` is the longest startup time of a single non-linear element in the startup process. The larger the value is, the more stable the start-up process is, but the corresponding time-consuming will becomes longer.

### Test Case

See [IEEE39 node system case](../examples/IEEE39.html) and template for details, which will not be detailed here.

