---
title: 多路信号合并
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

## 基本描述

{% compsymbol ChannelMerge %}

> **该元件实现将多路输入信号进行合并输出，输出信号为多维信号。**

## 使用说明

### ChannelMerge 多路信号合并工作原理

假设仿真过程中需要生成一个 M\*N 维(M 行 N 列)的信号，如图所示。可利用 ChannelMerge 元件对多个信号进行合并。

![信号图](comp_Mux/M1.png)

假设仿真过程中产生了两个信号，一个为 3\*1 维信号，另一个维 2\*2 维信号，现需要将其合并为 5\*5 维的信号。此时先拖拽 ChannelMerge 元件至工作空间，单击该元件进行设定，点击添加引脚，填写输入引脚的维数和起始坐标以及引脚名称，接着填写输出引脚的维数及名称。参数框设置如下图所示，点击应用即可。此时输出为 5\*5 维信号，信号分布如下图所示，其中灰色信号为 0 信号。

![信号图3](comp_Mux/M3.png)

{% pullquote info %}
输入输出维数需要匹配，如在上例中理论构成的新多维信号不得小于参数设置的输出引脚维数。
{% endpullquote %}

## 相关元件

[多路信号分离](comp_ChannelDeMerge.html)
