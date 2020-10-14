---
title: 燃气内燃机
author: Jack
author_email:

date: 2020/4/21 18:05:35
updated: 2020/4/21 18:05:35

type: components
category: 11000
order: 4000

classname: GasEngine
symbol: IES-Generator-GasEngine
---
## 基本描述

**该元件指燃气内燃机，燃气内燃机将燃料和空气混合，在其气缸内燃烧，释放出的热能使气缸内产生高温高压的燃气，燃气膨胀推动活塞作功，并将烟气和冷却水排除。**

> $$ \frac{Q}{P} =\frac{\eta_q}{\eta_p} $$
> $$ \eta_q + \eta_p+\eta_l = 1$$
> 式中：Q是制热功率（kW）(kW)，$\eta_q$代表制热效率，P是发电机的额定功率（kW）(kW)，$\eta_p$代表发电效率，$\eta_l$代表燃气内燃机的损失系数。
> $$ Q = m_g(h_g^{out}-h_g^{in})+m_w(h_w^{out}-h_w^{in}) $$
> 式中：$m_g$为烟气质量流量（kg/s），$h_g^{in}$为燃料和空气按照一定比例组成的混合物在环境温度下的比焓(kJ/kg)，$h_g^{out}$为烟气出口比焓(kJ/kg)，$m_w$为水的质量流量（kg/s），$h_w^{in}$为水的入口比焓(kJ/kg)，$h_w^{out}$为水的出口比焓(kJ/kg)。

![燃气内燃机](comp_IES/IES-Generator-4GICE.png =x400)


## 设备信息

### 建模仿真模块机组参数
| 元件名称 | 设备选项 |
| :--- | :--- |
| 燃气内燃机 |  点击选择数据管理模块内已有的设备厂家及对应型号 |

### 建模仿真模块运行参数组
| 设备名称 |  运行参数  |  运行参数  |  运行参数  |
| :--- | :--- | :--- | :--- |
| 燃气内燃机 |  参考节点模式 | 烟气温度 | 供水温度 |

### 数据管理模块设备参数
| 设备名称 | 单位生产厂家 | 设备型号 | 设备额定运行参数 | 设备额定运行参数 | 设备额定运行参数 | 设备额定运行参数 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 燃气内燃机 |  可缺省 | 可缺省 | 额定发电功率（kW）(kW) | 发电效率(%) | 制热效率(%)  | 循环水流量(t/h) |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
|  Power Output | 1×1  | 电接口  |
|  Gas Output | 1×1  | 烟气出口  |
|  Water Output | 1×1  | 水出口  |

## 使用说明



## 相关元件