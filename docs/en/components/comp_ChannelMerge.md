---
title: Channel Merge
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3001
order: 0

classname: _ChannelMerge
symbol: ChannelMerge
---
## Basic Description
{% compsymbol ChannelMerge %}

> **The component realizes combined output of multiple input signals, and the output signal is a multi-dimensional signal.**

## Using Instructions

### Principle of Channel Merge  

Assume that a signal of M*N dimension (M rows and N columns) is required during the simulation, as shown in the figure. This signal can be merged using the Channel Merge component.

![信号图](comp_Mux/M1.png)

Assume that two signals are generated during the simulation, one is a 3\*1-dimensional signal, and another one is a 2\*2-dimensional signal. Now it needs to be combined into a 5\*5-dimensional signal. Drag the Channel Merge component to the workspace, click the component to change the settings, click “Add Pin”, fill in the dimension and start coordinates of each input pin, then fill in the dimension and name of the output pin. As the parameter box shown below, the output would be a 5*5-dimensional signal. The signal distribution is as shown in the figure below, wherein the gray signal is null signal.

![信号图3](comp_Mux/M3.png)

::: info
The input and output dimensions need to be matched. For example, the new multi-dimensional signal theoretically constructed in the above example must not be smaller than the output pin dimension set by the parameter.
:::


## See Also

[Channel Merge](comp_ChannelDeMerge.md)