---
title: "三相传输线"
description: ""
---

## 元件定义

该元件采用π型集总参数模型和 Begeron 分布参数模型建模三相传输线。

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

1. 建议在具备线路长度信息的情况下优先选用 Bergeron 分布参数模型。该模型支持分网并行计算，可极大地提升仿真计算效率。
2. 选择 Bergeron 模型报如下错误时，说明线路长度不足，应切换为 **Lumped π-Model/π 型集总参数模型**。

   1. **TLine-XXX Error:** +/- Seq. Travel Time is less than the integration time step. Decrease the time step or use Lumped π-Model instead. 
   2. **TLine-XXX Error:** 0 Seq. Travel Time is less than the integration time step. Decrease the time step or use Lumped π-Model instead. 

3. 不具备线路长度信息时，可填写线路长度为 **1km**，线路参数输入时填写**集总参数**，“Has the Data Been Corrected for Long Line Effects?”一项选择 **Yes**。
4. 请确认所填入的参数是否已经经过了长导线修正。若选择 **No**，同时选择了 **Lumped π-Model/π 型集总参数模型**，则 CloudPSS 会对采用如下方式对集总参数进行修正。  

<center>
$\begin{aligned}
&Z_{m} =Z\frac{\sinh{(\gamma l)}}{\gamma l} \\
&Y_{m} =Y\frac{\tanh{(\gamma l/2)}}{\gamma l/2} 
\end{aligned}$
</center>
## 案例

## 常见问题
