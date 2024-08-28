---
title: "零序电流保护元件"
description: "输入所控断路器状态，测点安装处的三相时域电流，输出为保护动作信号。"
---

## 元件定义

## 元件说明



### 属性

CloudPSS 元件包含统一的**属性**选项，其配置方法详见 [参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

### 参数

import Parameters from './_parameters.md'

<Parameters/>

### 引脚

import Pins from './_pins.md'

<Pins/>

## 使用说明
**零序电流保护元件**通过判断零序电流幅值是否超过各段整定值，结合动作时限，输出跳闸信号以及零序过流Ⅰ、Ⅱ、Ⅲ段动作信号，其使用方式可参考[电流保护元件使用案例](../10-CurrentProtection/index.md)。

## 常见问题

