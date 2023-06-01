---
title: 储水罐
author: Jack
author_email:

date: 2020/4/21 18:05:35
updated: 2020/4/21 18:05:35

type: components
category: 11200
order: 3001

classname: WaterTank
symbol: IES-Charger-WaterTank
---
## 基本描述

> **该元件指储水罐，利用水罐的能量储存和热惯性，解耦源与荷，动态调节机组出力**

> 进口流量
> $$P_{in}-ρgH=K_{in} m_{in} |m_{in} |$$
> 出口流量
> $$ρgH-P_{out}-=K_{out} m_{out} |m_{out} |$$
> 式中，$P_{in}$、$P_{out}$为水罐进出口压力，$m_{in}、m_{out}$为水罐进出口质量流量，$K_{in}、K_{out}$为水罐进出口压力下降系数。

>水罐温度
>$$T_{new} = \frac{\left( {{\rho AH_{tank}T}_{old} + m_{in}T_{in}\mathrm{\Delta}t - m_{out}T_{old}\mathrm{\Delta}t} \right)}{\rho AH_{tank} + m_{in}\mathrm{\Delta}t - m_{out}\mathrm{\Delta}t}$$
>式中，$T_{old}$，$T_{new}$为水罐混合前后的温度，$H_{tank}$为水罐水位高度

![储水罐](./IES-Charger-WaterTank.svg =x300)
