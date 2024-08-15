---
title: "Park 变换器"
description: ""
---

## 元件定义

该元件实现 Park 变换和逆 Park 变换计算。

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

![坐标位置](./ParkTransform1.png "坐标位置")

当选择 **d 轴与 a 相对齐**时，Park 变换及逆 Park 变换的计算公式为：
+ **Park 变换**
<center>
$\begin{gathered}\begin{bmatrix}U_\mathrm{d}\\U_\mathrm{q}\\U_0\end{bmatrix}=\frac23\begin{bmatrix}\cos\theta&\cos(\theta-2\pi/3)&\cos(\theta+2\pi/3)\\-\sin(\theta)&-\sin(\theta-2\pi/3)&-\sin(\theta+2\pi/3)\\1/2&1/2&1/2\end{bmatrix}\begin{bmatrix}U_\mathrm{a}\\U_\mathrm{b}\\U_\mathrm{c}\end{bmatrix}\end{gathered}$
</center>
+ **逆 Park 变换**
<center>
$\begin{bmatrix}U_\mathrm{a}\\U_\mathrm{b}\\U_\mathrm{c}\end{bmatrix}=\begin{bmatrix}\cos\theta&-\sin(\theta)&1\\\cos(\theta-2\pi/3)&-\sin(\theta-2\pi/3)&1\\\cos(\theta+2\pi/3)&-\sin(\theta+2\pi/3)&1\end{bmatrix}\begin{bmatrix}U_\mathrm{d}\\U_\mathrm{q}\\U_0\end{bmatrix}$
</center>

**注意**：传统 Park 变换中，d 轴超前 q 轴。dq 轴位置如上图**红线**所示。PSCAD 中采用了 q 轴超前 d 轴，如上图**蓝线**所示。因此相同输入下，本元件得出的 q 轴分量与 PSCAD 的结果正负相反。

![坐标位置](./ParkTransform2.png)

当选择 **d 轴滞后 a 相 90°**时，dq 轴位置如上图**绿线**所示。Park 变换及逆 Park 变换的计算公式为：
+ **Park 变换**
<center>
$\begin{gathered}\begin{bmatrix}U_\mathrm{d}\\U_\mathrm{q}\\U_0\end{bmatrix}=\frac23\begin{bmatrix}\sin(\theta)&sin(\theta-2\pi/3)&\sin(\theta+2\pi/3)\\\cos\theta&\cos(\theta-2\pi/3)&\cos(\theta+2\pi/3)\\1/2&1/2&1/2\end{bmatrix}\begin{bmatrix}U_\mathrm{a}\\U_\mathrm{b}\\U_\mathrm{c}\end{bmatrix}\end{gathered}$
</center>
+ **逆 Park 变换**
<center>
$\begin{gathered}\begin{bmatrix}U_\mathrm{a}\\U_\mathrm{b}\\U_\mathrm{c}\end{bmatrix}=\begin{bmatrix}\sin(\theta)&\cos\theta&1\\\sin(\theta-2\pi/3)&\cos(\theta-2\pi/3)&1\\\sin(\theta+2\pi/3)&\cos(\theta+2\pi/3)&1\end{bmatrix}\begin{bmatrix}U_\mathrm{d}\\U_\mathrm{q}\\U_0\end{bmatrix}\end{gathered}$
</center>

下图展示了四种常用的Park变换类型的区别以及和各商用仿真软件的对应关系。

![四种Park变换类型](./park_transform.png)

## 案例

## 常见问题
