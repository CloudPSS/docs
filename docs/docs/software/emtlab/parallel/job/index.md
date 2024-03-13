---
title: 并行计算方案配置
description: 并行计算方案配置
sidebar_position: 20
---

## 功能定义
EMTLab 提供的并行计算方案配置功能。
## 文档摘要

本节介绍电磁暂态仿真并行计算方案配置，并以 IEEE39 节点标准测试系统算例进行演示。目前并行计算功能仅在私有服务器上可用，公网暂未开放使用。

## 功能说明
### 基础电磁暂态计算方案配置
详见[电磁暂态计算方案配置](../../emtp-calc/job/index.md)
### 计算选项配置
在高级设置中，CloudPSS提供了4种可选计算选项，包括**常规**、**分网并行**、 **CPU Turbo** 与 **CPU Super Turbo** 。系统默认配置为**常规**计算方案，即仅利用单核 CPU 完成全部计算。针对**大规模算例**，可选择**分网并行**、**CPU Turbo** 或 **CPU Super Turbo** 进行仿真加速。
![高级设置](image-2.png)
:::tip

**常规**：利用单核CPU完成全部计算

**分网并行**：每个电网分区在一个CPU核心中完成计算，利用多核CPU加速仿真

**CPU Turbo**：多核间执行自动负载均衡策略

**CPU Super Turbo**：在CPU Turbo的基础上优化计算流程，进一步提升计算效率

:::
### 队列及逻辑核心设置
针对大规模算例选择**分网并行**、**CPU Turbo** 或 **CPU Super Turbo** 进行仿真加速时，需要选择队列并设置逻辑核心数。

### 核心数配置

### 控制系统与电气系统并行

### 配置负载均衡策略

### 输出分块信息

## 案例介绍

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="case1" label="10机39节点系统分网并行仿真加速">
- **新建算例与电磁暂态仿真方案**  
在 **CloudPSS Simstudio** 个人中心打开 **IEEE-39节点标准测试系统算例**。
![IEEE-39节点标准测试系统算例](IEEE-39.png)
选择**运行标签页**新建电磁暂态仿真方案进行参数配置。
![新建电磁暂态仿真方案](image.png)

- **并行计算方案配置**



- **拓扑分析**

- **电磁暂态仿真计算**

- **效率对比**

</TabItem>
<TabItem value="case2" label="10机39节点系统 CPU Turbo 仿真加速">

- **并行计算方案配置**



- **拓扑分析**

- **电磁暂态仿真计算**

- **效率对比**

</TabItem>
<TabItem value="case3" label="10机39节点系统 CPU Super Turbo 仿真加速">

- **并行计算方案配置**



- **拓扑分析**

- **电磁暂态仿真计算**

- **效率对比**



</TabItem>
</Tabs>


## 常见问题 Q&A

为什么我无法选择多个逻辑核心？
:   

为什么我在分网后仿真效率提升不大？
:

如何选取合适逻辑核心数量？
:   

在仿真时报错:"Error: +/- Seq. Travel Time is less than the integration time step. Decrease the time step or use Lumped π-Model instead."
:

交直流电网拓扑分析方案报错："选择一个电磁暂态仿真方案="args":"@debug":"","@priority":0,"@queue":1,"@tres":"cpu=1"。"
:

如何在拓扑中查看分网结果？
:
