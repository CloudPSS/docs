---
title: 并行计算方案配置
description: 并行计算方案配置
sidebar_position: 20
---

## 功能定义
EMTLab 提供的并行计算方案配置功能。
## 文档摘要

本节介绍电磁暂态仿真并行计算方案配置，并以 IEEE39 节点标准测试系统算例进行演示。目前分网功能仅在私有服务器上可用，公网暂未开放使用。

## 功能说明
### 基础电磁暂态计算方案配置
详见[电磁暂态计算方案配置](../../emtp-calc/job/index.md)
### 队列及逻辑核心设置

### 计算选项配置

### 核心数配置

### 控制系统与电气系统并行

### 配置负载均衡策略

### 输出分块信息

## 案例介绍

### 10机39节点系统分网并行

#### 创建算例

#### 并行计算方案配置

#### 拓扑分析

#### 电磁暂态仿真计算

#### 效率对比

## 常见问题 Q&A
### 为什么我无法选择多个逻辑核心？

### 在仿真时报错Error: +/- Seq. Travel Time is less than the integration time step. Decrease the time step or use Lumped π-Model instead.

### 交直流电网拓扑分析方案报错：选择一个电磁暂态仿真方案="args":"@debug":"","@priority":0,"@queue":1,"@tres":"cpu=1","begin time":0,"comm":I,"comm freg"。

### 如何在拓扑中查看分网结果？

### 为什么我在分网后仿真效率提升不大？
