---
title: Introduction of Workspace
type: guide
author: zhangr
order: 300
---

Click `EMT simulation` in the function links to open the workspace of CloudPSS, which includes Menu, Toolbar, Components List, Main-workspace, System information, System monitoring, EMT simulation and Global parameters. The location and detail introduction of each part is shown below. 

![Interface of workspace](User2/G1.png "Interface of workspace")

## Menu

Menu includes: File, Edit, View and Help.

## Toolbar

Toolbar shows common tools and shortcut keys, including Wizard, Share, Save, Save as, View, Zoom In/Out, Undo/Redo, Delete, To front, To back, Start simulation and Dashboard.


## Components List

In Components List, multiple simulation components are provided and are classified into Measurements, Output, Electrical, Control and Tools based on their input/output feature. A large simulation system could be constructed by these various components. The classification and detailed composition of these components are listed as follows:

| Classification | Components |
| :--- | :---  |
| Measurements | Oscilloscope Group, Output channel |
| Electrical-Basic Passive Components | Ground, Resistor, Inductor, Capacitor, Single-phase Fault Resistor, Three-phase Fault Resistor, Single-phase Transformer |
| Electrical-Basic Source Components | DC Current Source, DC Voltage Source, Single-phase AC Voltage Source, Controlled Current Source, Controlled Voltage Source, Controlled AC Voltage Source (VF), Controlled AC Voltage Source (VP) |
| Electrical-Power Electronic Switches | Diode, Thyristor, IGBT |
| Electrical-Three-phase Components | Shunt Capacitor/Reactor, Fixed Load, Line Cluster, Three-phase Transmission Line, Three-phase AC Bus, Three-phase AC Voltage Source, Three-phase Two-winding Transformer, Three-phase Three-winding Transformer, Synchronous Generator |
| Electrical-Fast Power Electronic Modules | Half Bridge Submodule, Six-pulse Thyristor Bridge |
| Electrical-Renewable Energy Components | Photovoltaic Source, Lead-acid Battery |
| Measure Components | Branch Voltage Meter, Voltage Meter, Current Meter, RMS Meter, Three-phase Power Meter, Phase Locked Loop, FFT |
| Control-Basic Components | M script, Constant, Time, Simulation Time Step, Non Connection (NC), Loop Break Node, Channel Merge, Channel DeMerge |
| Control-Basic Math Functions | Adder/Subtractor, Multiplier, Divider, Absolute Value, Sign Function, Round Function, Trigonometric Function, Power Function, Exponential Function, Logarithm Function, Maximum/Minimum Function, Maximum/Minimum in One Cycle |
| Control-Linear Transfer Functions | Gain, Integrator, Derivative, PI Controller, Zero-point, Real Pole, Differential Pole, Lead Lag Pole, Second Order Complex Pole, Nth Transfer Function |
| Control-Nonlinear Functions | Hard Limiter, Delay, Angle Resolver, Piecewise Linear Function, Nonlinear Function |
| Control-Analog Signal | Comparator, Hysteresis Comparator, Zero Detector, Sampler, Sample and Hold |
| Control-Digital Signal | Logic Gate, Binary Delay, Monostable MultiVibrator, Flip Flop, Selector, Edge Detector |
| Control-Coordinate Transformation | Park Transformation, Clark Transformation, dq-αβ Coordinates Transformation, Polar/Rectangular Coordinate Converter |
| Control-Singal Generator | Triangular Generator, Squar Generator, Sine Generator, Adjustable FPM Sine Generator, Single-impulse Generator, Impulse Generator, Step Generator, Ramp Generator, Surge Gennerator, Drop Generator, Random Number Generator |
| Control-HVDC Control | Phase Locked Oscillator, Nearest Level Modulation (NLM), SST Fire Pulse Generator |
| Control-AC system Control| ST5B、Hydro Governor、 Hydro Turbine |
| Heat-Basic Components | Pipeline, Heat Source, Bulding (Load), Connection Point, Relay Pump |


To find a component, please fill in its name in the search field above the list and press [[Enter]] to search for the component. The below picture shows the searching result of `Resistor`. User can also search component in the Component List based on its classification. For example, to find `Sine Generator`, user could find it in the `Control-Wave Generator` class.

![Using search filed to find components](User2/G2.png "元件查找界面")
![finding components by category](User2/G3.png "元件查找界面")

## Main Workspace

Main workspace is the window for placing and connecting components and building simulation system.

### Page Zoom in/out

Press [[Alt]] on keyboard and slide mouse pully to zoom in or out the page. The `Toolbar->Zoom In/Out`The  in the toolbar has the same function.

### Page Setting

Gridline could be shown or hidden in `Menu->View->Grid`. `Menu->File->Page setup` could modify the grid size, background color, page size and Portrait/Landscape.

![Page setting interface](User2/G4.png "页面设置界面")

### Outline

Outline picture is a reduced hovering box display of the workspace and is used to quickly locate a part of simulation project. It could be shown or hidden by `Toolbar->View->Outline` or `Menu->View->Outline`.

## System Information Window

The system information window, as shown below, is used to view simulation feedback and fault resolution, including errors and warnings. This window pops up automatically during simulation. The error or warning messages use red font and the statement information uses blue font. In general, the warning message can be ignored.

![Picture of system information window](User2/G5.png "系统信息界面")

### Common Error Info

### Common Warn Info

## Electromagnetic Transient Bar
	
The electromagnetic transient bar is used to control the simulation, including Basic Configuration, EMT Solver Configuration, Initialization, Snapshot and Simulation Control. For most simulation application, the user only needs to change the parameters in `Basic Configuration` and `Simulation Control`.

### Basic Configuration

Set the start/end time of simulation and the integration step.

### EMT Solver Configuration

### Initialization

### Snapshot

### Simulation Control

Control the start and stop of simulation. A simulation progress bar will be shown when simulation starts.

## Global Parameter

Global parameter is used to edit constant value variables that apply to the entire simulation, making the modification of the component’s parameter easier. For example, there are 20 identical resistors in the simulation, the resistance can be defined as a global variable. Modifying the value of the variable in the `Global Variable` window can modify the resistance of all 20 resistors at the same time. For details on how to use global parameters, see [How to Use System Parameters](../features/ParameterSystem.md).




