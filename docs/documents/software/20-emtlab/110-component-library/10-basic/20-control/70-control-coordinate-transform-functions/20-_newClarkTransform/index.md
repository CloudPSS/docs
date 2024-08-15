---
title: "Clark 变换器"
description: "Clark 变换器"
---

## 元件定义

该元件实现 Clark 变换和逆 Clark 变换计算。

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

![坐标位置 =400x](./ClarkTransform2.jpg  "坐标位置")

αβ轴为静止坐标轴，其相对位置为图所示。Clark 变换及逆 Clark 变换的计算公式为：
 + **Clark 变换**
<center>
$\begin{bmatrix}U_\alpha\\U_\beta\end{bmatrix}=\frac23\begin{bmatrix}1&-\frac12&-\frac12\\0&\frac{\sqrt3}2&-\frac{\sqrt3}2\end{bmatrix}\begin{bmatrix}U_\mathrm{a}\\U_\mathrm{b}\\U_\mathrm{c}\end{bmatrix}$
</center>

+ **逆 Clark 变换**

<center>
$\begin{bmatrix}U_\mathrm{a}\\U_\mathrm{b}\\U_\mathrm{c}\end{bmatrix}=\begin{bmatrix}1&0\\-\frac12&\frac{\sqrt3}2\\-\frac12&-\frac{\sqrt3}2\end{bmatrix}\begin{bmatrix}U_\alpha\\U_\beta\end{bmatrix}$
</center>

## 案例

## 常见问题
