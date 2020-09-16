---
title: Operation of Simulation
type: guide
author: zhangr
order: 400
---

## Project

### New Project

After clicking `Menu->File->New Project`, a window named `New Simulation` will pop up. Press [[ESC]] to exit guide wizard. The project name could be modified when the project is saving.

### Open Project

After clicking `Menu->File->Open Project`, an open simulation dialog box will show. User could select to open project files from `My Simulation` or `Simulation Case Plaza`.

The `My Simulation` stored project files saved by users. The interface shows below includes Folder, File List and Thumbnail. Select simulation file in any folder and click `Open` or `Open in new window` to open project.

![打开工程界面](User3/J1.png 'The interface of opening My Simulation')

The `Simulation Case Plaza` contains the public project files published by other users. The interface includes File list and Thumbnail. Select simulation file in arbitrary folder and click `Open` or `Open in new window` to open project.

![打开工程界面1](User3/J2.png 'The interface of opening Simulation Case Plaza')

### Save Project

After clicking `Menu->File->Save Project` or `Toolbar->Fast Save`, the Save Project dialog box will pop up, as shown below. Fill in the name of the simulation, the simulation number and the simulation description, select the saved folder and click the Save button to save the project. The operation of saving as a project is similar to this and will not be described here.

![保存工程界面](User3/J3.png 'The interface of saving projects ')

## Construction of Simulation

This section takes a simple simulation case as an example (sinusoidal controlled voltage source with resistive load) to explain the construction process of a simulation.

### Place component

First, create a blank project, click on a component in the component list and drag it to the workspace. Users can also use hot keys to copy, paste, undo or delete the component by clicking `Menu->Edit` or `Toolbar->Undo`. Long-press the component to drag or select the component and then use the keyboard arrow keys to change the component position. Click the circular arrow above the component or use [[Ctrl]]+[[R]] to rotate the component. The Main Workspace after placing components is shown as the figure.

![放置元件界面](User3/J4.png 'Interface of placing components')

{% pullquote tip %}
It is unavailable to Copy or Paste components to another project window.
{% endpullquote %}

### Connect Component

Move the mouse cursor at the component pin. If a green circular shadow shows, then this pin is available. Click on the pin and move the cursor, a green dotted line will appear to mark the movement path. During the connection process, uses can click the left mouse button to set the inflection point or click the right mouse button to exit the connection. If the mouse moves to another pin that can be connected, then an same green circular shadow will shows, click on this pin to connect these two components. An example of component connections is shown in figure.

![连接元件界面](User3/J5.png 'Connecting elements with wires')

If there are many components and the connection is inconvenient, users can connect two or more pins by “pin mark”. When clicking on the component, the `Parameter Configuration` panel will appear on the right side of the main workspace. The connection can be realized by marking the same character on the pins of different components, as shown in the figure.

![连接元件界面1](User3/J6.png 'Connecting elements using pin mark')

{% pullquote tip %}

- Electrical pins and signal pins cannot be connected to each other.
- The signal input pin cannot be connected in parallel, and the signal output pin cannot be connected in parallel. That is, the signal output pin needs to be connected to another signal input pin.
- The pin connection should satisfy the dimension requirement. For example, the `3-phase AC Voltage Source` has 3-dimension electrical pin and cannot be connected to single-phase `Resistor` which has 1-dimension pin.
  {% endpullquote %}

### Set Parameter

After finishing the connection of components, the parameters of each component need to be set. When users click on any component, the `Parameter Configuration` panel will appear on the right side of the workspace. After editing, the system will automatically save the parameters.

![设置参数界面](User3/J7.png 'Interface of setting parameter')

The `Format Panel`, as shown in the figure, is on the right side of the `Parameter Configuration` panel, which is used to set the display properties of the component, such as style, text, and arrangement.

![设置参数界面1](User3/J8.png 'Interface of format panel')

### Add Measure Components

After the construction of main circuit, the measurement components needs to be added to measure the electrical quantity. The commonly used measurement components are `Voltage Meter`, `Branch Voltage Meter` and `Current Meter`. Taking a `Voltage Meter` as an example, drag it from the component list to the main workspace and connect to the circuit. Click on the component to display the `Parameter Configuration` panel, fill in the name of the measures voltage signal. Note that the name of the measured signals should start with the mark #.

![添加量测界面](User3/J9.png 'Adding a voltage meter to the main workspace')
![添加量测界面](User3/J10.png 'configuring the measured signal name of the voltage meter')

In addition, electrical components can output their inner measured signals without any additional measurement components. Click `Component->Parameter Configuration->Parameter->Monitoring` and fill in the output signal name starting with mark #, as shown in the figure.

![添加量测界面1](User3/J11.png 'Using component internal monitoring')

For more information on signal names, please see [How to use the parameter system](../features/ParameterSystem.html).

### Waveform Output

In order to display the measured signals, the `Output Components` (both the `Oscilloscope Group` and `Output Channel`) need to be added into the main workspace. `Output Channel` works as the actual physical oscilloscope's probe and the `Oscilloscope Group` works as an actual physical multichannel oscilloscope.

Drag the `Output Channel` component to the workspace and fill in the Channel Name with ‘Load Voltage’. The sampling frequency is set to 1000Hz. Note that the higher the sampling frequency, the more accurate the output waveform and lower display speed the data. The input signal dimension is set to 1 since the acquired load voltage is 1 dimension. The input pin is named #Vr, where #Vr is the measured output signal of the voltmeter. In addition, add another `Output Channel` named #V1 to display the Monitoring output signal of the controlled voltage source.

![配置输出通道](User3/J12.png 'Configuring output channel of Vr')
![配置输出通道](User3/J13.png 'Configuring output channel of V1')

Drag the `Oscilloscope Group` component to the workspace and click `Set Parameters` on the upper right corner of the main workspace, as shown below. Fill in the name of the component as Group 1. The `Oscilloscope Group` component can automatically identify the name of all the `Output Channel` and users can select which waveform channels to be displayed.

![配置示波器分组](User3/J14.png 'Configuring the oscilloscope group component')

An overall simulation diagram is shown below.

![总仿真图](User3/J15.png 'The overall simulation diagram')

### Simulation Control

Click on the blank space of the main workspace, fill in the simulation time and step size in the `Eelectromagnetic Transient` panel on the right side, as shown in the figure. Click `Simulation Control->Start` and pop up the computational node selection window, then select the `ShenWei Node` and the simulation results window pops up.

![仿真控制界面](User3/J16.png 'Interface of simulation control')

The simulation result is shown below.

![仿真结果](User3/J17.png 'Simulation results window')

By sliding the gray slider at bottom or right most, the coordinate display range could be adjusted. The bottom of the coordinate axis shows the name of output channels. The upper right corner shows the waveform control, which can realize area zoom in (magnify the waveform of a certain area), area zoom out (return to the previous area zoom), restore (return to the original display waveform) and save as a picture (the browser automatically downloads the simulation result picture). Click on the top left corner and click `Share Content` to create a shared document, as shown in the figure.

![文档分享](User3/J18.png 'Document sharing window')

Click the close button in the upper right corner of the document and click the close button in the upper left corner of the simulation result to end the simulation.
