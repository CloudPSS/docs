---
title: "X-Y输出通道"
description: ""
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

### 使用说明
**X-Y输出通道**的X轴支持任意数据，通常用于显示XY图，而[常规输出通道](../10-_newChannel/index.md)X轴默认只支持时间。


## 案例
例如绘制距离保护元件的测量阻抗轨迹。用户首先利用[多路信号分离元件](docs/documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-basic/10-_ChannelDeMerge/index.md)将测量阻抗 `Za0_Ⅰ`分解为二维信号，再将每一维度信号输入到X-Y输出通道中并设置好通道名称，最后在**计算方案**中选择**XY输出通道进行配置**。

![X-Y输出通道元件使用案例](./_xychannel.png)

:::warning
XY输出通道的信号只能在计算方案中的XY输出通道中配置，不可与常规输出通道混淆。
:::

## 常见问题

