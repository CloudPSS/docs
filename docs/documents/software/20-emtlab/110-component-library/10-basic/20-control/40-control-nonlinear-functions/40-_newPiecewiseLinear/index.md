---
title: "分段线性函数"
description: "分段线性函数"
tags:
- emtlab
- components
---

## 元件定义

该元件根据设定参数生成分段线性函数，输入信号根据该函数，输出对应在线段上的值。

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

需要设定的参数为：两个固定的坐标点 ($x_1$,$y_1$)、($x_2$,$y_2$)，以及坐标点左右两侧的斜率 $K_l$、$K_r$。函数式为：

<center>
$\begin{aligned}
&y(t) =K_lu(t)+y_1-K_lx_1,u(t)\leq x_1 \\
&y(t) =\frac{y_2-y_1}{x_2-x_1}u(t)+\frac{y_1x_2-y_2x_1}{x_2-x_1},x_1<u(t)\leq x_2 \\
&y(t) =K_ru(t)+y_2-K_rx_2,u(t)>x_2 
\end{aligned}$
</center>

## 案例

## 常见问题
