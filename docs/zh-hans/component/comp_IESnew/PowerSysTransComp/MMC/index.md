---
title: 模块化多电平变流器MMC
author: Jack
author_email:

date: 2020/4/21 18:05:35
updated: 2020/4/21 18:05:35

type: components
category: 11300
order: 3001

classname: MMC
symbol: IES-GD-MMC
---
## 基本描述

 **模块化多电平变流器（Modular Multilevel Converter,MMC）由于具有电压、容量等级易于拓展、谐波含量低、开关频率和运行损耗小等优点，成为目前高压大容量柔性直流输电（Voltage Sourced Converter based High Voltage Direct Current, VSC-HVDC）换流站的主流选择。**

> 模块化多电平变流器，实现交直流转换，其原理示意图如下：
> [MMC](./IES-GD-3MMC.png =x300)
> $$P_{c} = P_{dc} + P_{loss}$$
> $$P_{loss} = a_{c}I_{c}^{2} + b_{c}I_{p} + c_{c}$$
> 式中：$P_c$为MMC功率，$P_{dc}$为MMC直流侧有功功率，$P_{loss}$为MMC转换损失功率。$I_c$为MMC电流，$a_c,b_c,c_c$为MMC系数，可以通过实际工况参数曲线拟合得到。

![MMC](./IES-GD-3MMC.svg =x300)
