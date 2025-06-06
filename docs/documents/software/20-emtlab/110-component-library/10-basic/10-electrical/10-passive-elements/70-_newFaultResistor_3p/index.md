---
title: "三相故障电阻"
description: ""
tags:
- emtlab
- components
---

## 元件定义

该元件用以建模三相故障电阻。

## 元件说明



### 属性

CloudPSS 元件包含统一的**属性**选项，其配置方法详见 [参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

### 参数

import Parameters from './_parameters.md'

<Parameters/>

### 引脚

import Pins from './_pins.md'

<Pins/>

### 使用说明
三相故障电阻的等效电路如下图所示，在故障开始时刻前，电阻阻值均等于 `Initial Resistance`。故障期间根据设置的故障类型改变对应的电阻阻值为 `Fault Resistance`。

![三相故障电阻等效电路图 =x350](./_newFaultResistor_3p.png)

## 案例
三相故障电阻的使用可参考 [3 机 9 节点标准测试系统](../../../../../30-quick-start/10-start-from-template/index.md#典型模板案例)。

## 常见问题

