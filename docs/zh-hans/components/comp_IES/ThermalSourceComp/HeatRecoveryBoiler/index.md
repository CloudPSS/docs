---
title: 余热锅炉
author: Jack
author_email:

date: 2020/4/21 18:05:35
updated: 2020/4/21 18:05:35

type: components
category: 11100
order: 3000

classname: HeatRecoveryBoiler
symbol: IES-CH-HeatRecoveryBoiler
---
## 基本描述

> **该元件指余热锅炉的设备设施,余热锅炉的原理与燃气锅炉类似，利用烟气的余热把水加热成热水或蒸汽，因此有热水锅炉和蒸汽锅炉两种类型，对于蒸汽余热锅炉，根据蒸汽压力等级又分为单压和双压两种类型。用户根据具体工质类型在建模仿真模块参数配置面板的锅炉类型中选择切换。**
> $$Q_{B} = Q_{in}\eta$$
> 式中：$Q_{B}$代表锅炉的供热功率（kW），$Q_{in}$代表锅炉的输入功率（kW）,η是锅炉工作效率。
> $$Q_{in} = m_{gas}(h_{gas}^{in}-h_{gas}^{out})$$
> 式中：$m_{gas}$为烟气的质量流量（kg/s），$h_{gas}^{in}$为烟气入口比焓(kJ/kg)，$h_{gas}^{out}$为烟气出口比焓(kJ/kg)。

> **热水燃气锅炉：**
> $$Q_{B} = m_w(h_w^{out}-h_w^{in})$$
> 式中：$m_w$为水的质量流量（kg/s），$h_w^{in}$为水入口比焓(kJ/kg)，$h_w^{out}$为水出口比焓(kJ/kg)。
> ![余热锅炉](./IES-CH-3HRSB.png =x300)

> **单压蒸汽燃气锅炉：**
> $$Q_{B} = m_s(h_s^{out}-h_s^{in})$$
> 式中：$m_s$为蒸汽的质量流量（kg/s），$h_s^{in}$为环境温度下水的比焓(kJ/kg)，$h_s^{out}$为蒸汽出口比焓(kJ/kg)。
> ![余热锅炉](./IES-CH-3HRSB-1.png =x300)

> **双压蒸汽燃气锅炉：**
> $$Q_{B} = m_1(h_s^{out1}-h_s^{in})+m_2(h_s^{out2}-h_s^{in})$$
> 式中：$m_1$为高压蒸汽的质量流量（kg/s），$m_2$为次高压蒸汽的质量流量（kg/s），$h_s^{in}$为环境温度下水的比焓(kJ/kg)，$h_s^{out1}$为高压蒸汽出口比焓(kJ/kg)，$h_s^{out2}$为次高压蒸汽出口比焓(kJ/kg)。
> ![余热锅炉](./IES-CH-3HRSB-2.png =x300)

## 设备信息

### 建模仿真模块机组参数
| 元件名称 | 设备选项 |
| :--- | :--- |
| 余热锅炉 |  点击选择数据管理模块内已有的设备厂家及对应型号 |

### 建模仿真模块运行参数组
| 设备名称 |  运行参数  |  运行参数  |  运行参数  |  运行参数  |  运行参数  |  运行参数  |  运行参数  |  运行参数  |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 余热锅炉 |  蒸汽温度  |  供水温度  |  次高压蒸汽温度  |  高压蒸汽温度 | 烟气出口温度(是/否)指定 |  烟气出口温度  | 烟气出口压力(是/否)指定 |  烟气出口压力  |

### 数据管理模块设备参数
| 设备名称 | 单位生产厂家 | 设备型号 | 设备额定运行参数 | 设备额定运行参数 | 设备额定运行参数 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 余热锅炉 |  可缺省 | 可缺省 | 锅炉类型 | 额定供热量(kW) | 换热效率(%) |

## 端口列表
| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
|  Gas Iutput  | 1×1  | 烟气进口  |
|  Gas Output  | 1×1  | 烟气出口  |
|  Water Output  | 1×1  | 水出口  |


## 使用说明



## 相关元件