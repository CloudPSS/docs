---
title: 边界条件
description: IESLab 建模仿真平台-拓扑编辑模块-边界条件
sidebar_position: 10
---

本节主要介绍综合能源系统的边界条件及相关设置方法，并通过常见问题答疑快速熟悉综合能源系统中电力和热力的边界条件参数及设置方法。

## 功能定义

综合能源系统边界条件及设置方法。


## 边界条件

真实物理世界中的综合能源系统有其明确的`边界和运行规律`，如能源系统的建筑边界范围、系统运行策略和控制逻辑等；在平台的综合能源系统`数字孪生`镜像中进行仿真模拟时，同样也需要参照真实物理世界的参数进行设置。

为对综合能源系统进行仿真模拟计算，需要设置合理的`已知条件`。主要包括：综合能源系统边界、电源出力、负荷曲线、源网储设备元件基础参数、初始状态、运行方式和时序策略等（以下简称边界条件）。

请注意，平台无法在不输入边界条件的情况下直接给出运行策略和结果。只有录入了`合理的边界条件`后才可对系统进行高效准确的仿真模拟，计算系统在该策略下的状态；若录入的边界条件有误，导致`模型方程不封闭`，可能无法计算。同时平台增强了计算鲁棒性，对于部分元件设备，即使用户输入了错误的运行策略，仍可能得到仿真结果，但需自行对计算结果进行分析。


### 电力系统潮流边界

潮流是电力系统分析中最基本、最重要的概念,潮流计算是电力系统规划、运行、调度与控制的基础。对于潮流计算中的设备节点，根据其控制特性一般可归结为 `PV` 节点和 `PQ` 节点。

PQ节点：给定节点的`有功功率P和无功功率Q`，待求的是节点的电压和相位（V，δ）。电力系统中绝大多数节点属于这一类型，如`变电配电设备`和`用电负荷`都是PQ节点，变电配电设备一般有功P为零，负荷需要录入绑定功率曲线（P，Q）。在一些情况下，系统中某些发电厂送出的功率在一定时间内为固定时，如制定出力曲线的风机光伏等新能源电站，也作为PQ节点。


PV节点：给定节点的`有功功率P和电压幅值V`，待求的是节点的无功功率和相位（Q，δ）。PV节点一般是选择有一定无功储备的发电厂和具有可调无功电源设备的变电所作为PV节点。在电力系统中，这一类节点的数目很少。

此外，还有一种特殊的节点，即**slack bus**，用于解决潮流计算中，对未知状态下的系统进行潮流计算的一种特殊节点，即`理想大电源/平衡节点/计算参考节点`， `slack bus` 通常假定其`电压幅值恒定不变`，其`有功功率和无功功率`的变化由系统中其他节点电压幅值和相位的变化决定。平台的**外部电源**元件即为`slack bus`。

请注意，平台的综合能源系统以`外部电源`为唯一平衡节点。请不要搭建多个外部电源元件。

### 热力系统仿真边界

类比于电力系统中的潮流，冷热系统中也有热力潮流。其仿真计算边界参数主要包括`水力`计算边界和`热力`计算边界。

在平台中，水力系统参数（质量流量）主要受`泵和流动阻力`（管网和设备阻力）影响，需要设置合理的`循环水泵运行策略`和`管网设备阻力`（局部压降系数，单位kPa/(m³·s⁻¹)²），无需指定复杂的节点压力和质量流量即可计算。

热力系统主要计算`热源、网损、储热水罐和负荷`的温度，其中，冷热负荷为`给定热功率`模式，热源可选`功率/出口温度`模式，对于`温度运行模式`，设备功率由进出口温差与流量计算得到;对于`功率运行`模式，温度则由功率与流量计算得到。


## 常见问题Q&A

1. 可以不设置边界条件吗？  
   不可用，只有设置边界条件后系统才能够进行仿真模拟。

2. 边界条件设置错了怎么办？  
   边界条件的设置存在一定门槛，需要对仿真和系统运行有一定的基础知识。系统会按照设定的边界条件进行仿真模拟，如边界条件设置不对，系统的运行状态有误，可以检查运行结果判断边界条件是否有误。后续IESLab也将增加更多错误提升，提升用户友好度。