---
title: 拓扑分析功能介绍
description: 拓扑分析功能介绍
sidebar_position: 10
---


## 功能定义

## 文档摘要
本节介绍拓扑分析功能，并使用模板算例进行演示。

## 功能说明

### 分网功能
自动分网功能主要用于切分电网拓扑，为分网并行计算的前序处理。
#### 分网功能原理

#### 分网功能参数配置

### 自动聚合母线
自动聚合母线功能用于……场景，具体可参见[自动聚合母线](../gethering/index.md)

### 负载均衡配置
自动聚合母线功能用于……场景，具体可参见[负载均衡配置](../load-average/index.md)

## 案例
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="case1" label="10机39节点系统分网并行">


</TabItem>
</Tabs>


## 常见问题 Q&A
为什么在分网后，线路的模型没有发生改变？
:
    ** 线路参数问题，可能零序参数过低等 **

为什么在分网后，仿真效率没有提高？ 
:
    ** 核数配置 **