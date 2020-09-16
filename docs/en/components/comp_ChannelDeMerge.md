---
title: Channel DeMerge
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3001
order: 0

classname: _ChannelDeMerge
symbol: ChannelDeMerge
---

## Basic Description

{% compsymbol ChannelDeMerge %}

> **The component realizes splitting a single multi-dimensional input signal into multiple output signals, and each output signal can be multi-dimensional.**

## Using Instructions

### Principle of Channel DeMerge

Assume that a signal of M\*N dimension (M rows and N columns) is generated during the simulation, as shown in the figure. This signal can be split using the Channel DeMerge component.

![信号图](comp_DeMux/M1.png)

For example, the user needs to obtain a 2\*2-dimensional signal starting with coordinates (1,1) and a 3\*1-dimensional signal starting with coordinates (1,0). In this case, drag the Channel DeMerge component to the workspace. Click on the component to make the settings, fill in the input pin dimensions and pin names (could be default), click “Add Pin”, and fill in the dimensions and starting coordinates of each output pins. As the parameter box shown below, the output pin Out1 would be a 2\*2-dimensional signal and the output pin Out2 is a 3\*1-dimensional signal.

![信号图1](comp_DeMux/M2.png)

{% pullquote info %}
The input and output dimensions need to be matched. For the previous example, the original M\*N-dimensional signal is at least 4\*3 dimensions.
{% endpullquote %}

## See Also

[Channel Merge](comp_ChannelMerge.html)
