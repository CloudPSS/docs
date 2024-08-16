---
title: "避雷器"
description: ""
tags:
- emtlab
- components
---

## 元件定义

该元件用以建模避雷器。

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
避雷器在正常工作电压下其电阻值很高，实际上相当于一个绝缘体，而在过电压作用下，电阻片的电阻很小，残压很低。CloudPSS 的避雷器采用分段线性电阻串联可变电压源进行模拟。下图示出了避雷器的伏安特性曲线及其分段线性化过程。

![伏安特性曲线](./voltage-current-curve.png)

根据该曲线，可计算出避雷器的等效电路，如下图所示。

![避雷器等效电路图](./_Arrestor.png)

等效电路图中的可变电压源 $E$ 和 分段线性电阻 $R$ 的计算公式如下：

$$
v=E+Ri
$$

$$
E=\frac{x_2y_1-y_2x_1}{x_2-x_1}
$$

$$
R=\frac{y_2-y_1}{x_2-x_1}
$$

## 案例

## 常见问题

