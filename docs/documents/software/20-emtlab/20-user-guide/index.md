---
title: 使用指南
description: CloudPSS EMTLab 文档使用指南
sidebar_position: 20
tags:
- emtlab
- user-guide
---

循序渐进，全面了解熟悉 EMTLab 工作台。

## 入门向导

这里是 EMTLab 的基础功能。

### 算例创建与编辑

用户可以通过[从模板案例创建](../30-quick-start/10-start-from-template/index.md) 或通过 
[从零开始搭建入门案例](../30-quick-start/20-start-from-scratch/index.md) 快速创建EMTLab算例。

### 电磁暂态仿真计算

[电磁暂态仿真计算](../50-emts/index.md)帮助用户快速了解电磁暂态仿真计算基本原理，以及量测通道、计算方案配置。

## 进阶向导

这里是EMTLab的进阶功能，供需要的用户参考。

### 元件封装

[模块封装](../40-simstudio/30-modeling/40-module-packaging/index.md)帮助用户了解模块封装方法。用户将能将若干现有元件封装为一个模块，供其它算例使用。


### 潮流功能

[潮流计算及初始化](../60-power-flow/index.md)帮助用户了解潮流计算的方案配置方法。在阅读后，用户将能利用EMTLab进行潮流计算、学会利用得到的潮流结果进行电磁暂态仿真，也可以给自定义元件赋予潮流的定义。

## 高级需求

这里列举了一些EMTLab的高级功能，供需要的用户参考。

### 电磁暂态并行加速

[电磁暂态仿真并行加速](../70-parallel-acceleration/index.md)帮助用户了解 EMTLab 电磁暂态仿真多核并行加速的基本原理以及仿真方案配置方法。

目前并行计算功能仅在私有服务器上可用，公网暂未开放使用。

### 自定义元件

[自定义电磁暂态仿真元件](../50-emts/50-user-defined/index.md)帮助用户了解基于Matlab/Octave、Python、C++多种语法的自定义元件实现方法，也包括基于 Simulink 的自定义 S-Function 元件接入方法。

### 实时仿真

[电磁暂态实时仿真](../80-emts-rt/index.md)帮助用户了解硬件在环仿真、多机实时仿真、联合实时仿真的配置方法。

该功能需搭配硬件产品 CloudPSS Mini (RT) 或 CloudPSS Pro (RT) 使用，公网平台暂不支持电磁暂态实时仿真。