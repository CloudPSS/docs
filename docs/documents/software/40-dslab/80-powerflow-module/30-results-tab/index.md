---
title: 结果页面
description: DSLab 源网荷储协同仿真平台-时序潮流模块-结果页面
sidebar_position: 30
tags:
- dslab
- function
---

本节主要介绍 DSLab 源网荷储协同仿真平台进行时序潮流计算时查看计算结果的方法，包括统计性指标表格、元件时序运行结果等。

## 功能定义

用于展示 DSLab 仿真计算的结果。

## 功能说明

### 启动仿真

通过点击**启动任务**按钮能执行当前计算方案下的时序潮流。

![启动时序潮流](./start.png "启动时序潮流")

### 结果概览

在计算完成后，结果页面的**结果概览**选项卡下会显示在当前计算周期内的系统预测曲线。用户在结果展示区左侧选择需要查看的元件预测结果，如下图所示。

![结果概览](./overview.png "结果概览")

此外，结果概览页面还用于展示一些日志信息，如上图中的 **时序潮流开始** 和 **时序潮流完成** 代表预测的开始和结束。当用户设置的参数有误时，会在此页面出现一些警告或者报错日志。

### 时序结果
在计算过程中以及完成后，结果页面的时序结果选项卡下会显示当前系统拓扑，用户可以通过点击目标元件，在下方的图标栏中查看该元件不同运行参数的时序曲线。对于部分元件的计算结果，时序曲线会根据结果类型进行分组，比如图中的电压、相角和注入无功，用户可以通过切换选项卡查看不同分组下的数据曲线。

![（计算过程中）时序结果](./results-topo.png "（计算过程中）时序结果")

## 常见问题

运行时间过长？
:   源网荷储系统规模、仿真时间范围长短以及计算方法等都会影响预测耗时。用户可实时关注**结果**页面，查看程序进度，以及是否存在报错。

