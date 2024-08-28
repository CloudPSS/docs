---
title: "多边形阻抗继电器"
description: "该类继电器输入为阻抗实部、虚部，输出为动作信号。继电器的动作特性在复数阻抗平面上可以是各种形状的多边形，多边形以内是动作区，多边形以外是不动作区。 该类继电器的特性曲线通常是由一组折线和两个直线合成，有时也由两组折线合成。"
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
多边形阻抗继电器的动作特性为任一 `Nop` 顶点个数以内的多边形，首先确定顶点 `Nop` 的个数，然后确定各顶点的位置坐标。

以四边形阻抗继电器为例，其原理如下图所示，其中四边形以内为动作区，四边形以外为不动作区，顶点按照逆时针方向编号。

![原理图](./_polygonalrelay.png)




:::info 动作信号

测量阻抗位于动作区时，动作信号输出为1，否则为0。

:::

## 案例

## 常见问题

