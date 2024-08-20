---
title: "直线特性阻抗继电器"
description: "输出测量阻抗的实部、虚部；满足动作条件后输出跳闸信号(高电平)"
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

直线特性阻抗继电器的动作特性为任一直线，直线特性阻抗继电器原理较为简单，只需确定整定阻抗 $Z{set}$ 的实部`Rset`、虚部 `Xset`即可。

直线特性阻抗继电器原理如下图所示，测量阻抗 $Z_{K}$位于直线的左侧为动作区，右侧为不动作区。

![原理图](./_linerelay.png)

:::info 动作信号

测量阻抗 $Z_{K}$ 位于动作区时，动作信号输出为1，否则为0。

:::

## 动作条件
$\lvert Z_{K}\rvert \leq \lvert 2Z_{set}-Z_{K}\rvert$

其中，$Z_{K}$ 表示测量阻抗。

## 案例

## 常见问题

