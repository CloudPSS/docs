---
title: 光伏系统
author: Jack
author_email:

date: 2020/4/21 18:05:35
updated: 2020/4/21 18:05:35

type: components
category: 11000
order: 1000

classname: PhotovoltaicSys
symbol: IES-Generator-PhotovoltaicSys
---
## 基本描述

> **太阳能电池组件是光伏发电系统的基础和核心,它的输出功率与光照强度密切相关,假设给定某光伏系统有M个电池组件，每个组件的面积和光电转换效率分别为A和η，于是这个太阳能电池方阵总的输出功率：**
> $$P_M=rA\eta$$
> 
式中：A为方阵总面积，η为方阵总的光电转换效率，r为这一时间段内的实际光强(W/m2)，光伏发电系统在潮流计算中可看作PQ节点。

![光伏系统](./IES-Generator-1PV.png =x300)

在额定工况中，默认在标准测试条件下（standard test condition，STC）：1. 照度：1000W/㎡2；温度：为（25±1）℃；3. 光谱特性：AM1.5 标准光谱；其额定峰值功率为

 $$P_{peak}=1000A\eta$$

