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

直线特性阻抗继电器原理如下图所示。

![原理图](./_linerelay.png)

直线特性阻抗继电器的动作特性为任一直线，由原点O作动作特性边界线的垂线，其矢量表示为 $Z{set}$，测量阻抗 $Z_{K}$位于直线的左侧为动作区，右侧为不动作区。

:::info 动作信号

测量阻抗 $Z_{K}$ 位于动作区时，动作信号输出为1，否则为0。

:::

## 动作条件
$\lvert Z_{K}\rvert \leq \lvert 2Z_{set}-Z_{K}\rvert$

其中，$ Z_{K} $ = $R+jX$;$ Z_{0} $ = $R_{0}+jX_{0}$;$Z_{set}$ = $R_{set}$+$jX_{set}$。
## 常见问题

