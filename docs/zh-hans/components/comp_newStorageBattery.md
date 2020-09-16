---
title: 铅酸蓄电池
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3006
order: 200

classname: _newStorageBattery
symbol: newStorageBattery
---

## 基本描述

{% compsymbol newStorageBattery %}

> **该元件用以建模铅酸蓄电池。**

## 参数列表

### Configuration

| 参数名                                         | 单位 | 备注                         |     类型     | 描述                               |
| :--------------------------------------------- | :--- | :--------------------------- | :----------: | :--------------------------------- |
| Name                                           |      | 元件名称                     |     文本     | 此处输入铅酸蓄电池的名称（可缺省） |
| Battery Capacity                               | Ah   | 蓄电池容量                   | 实数（常量） | 蓄电池容量                         |
| Voltage at Fully Charged Point                 | V    | 完全充电电压                 | 实数（常量） | 完全充电电压                       |
| Voltage at End of Exponential Zone             | V    | 指数区域末端电压             | 实数（常量） | 指数区域末端电压                   |
| Discharged Capacity at End of Exponential Zone | Ah   | 指数区域末端已放电的容量     | 实数（常量） | 指数区域末端已放电的容量           |
| Voltage at End of Nominal Zone                 | V    | 标称区域末端电压（标称电压） | 实数（常量） | 标称区域末端电压                   |
| Discharged Capacity at End of Nominal Zone     | Ah   | 标称区域末端已放电的容量     | 实数（常量） | 标称区域末端已放电的容量           |
| Nominal Discharging Current                    | A    | 标称放电电流                 | 实数（常量） | 标称放电电流                       |
| Inner Resistance                               | Ω    | 蓄电池内阻                   | 实数（常量） | 蓄电池内组                         |
| Initial State of Charge (SOC)                  |      | 初始荷电状态                 | 实数（常量） | 初始荷电状态                       |

### Monitoring

| 参数名                        | 备注           | 类型 | 描述                                                    |
| :---------------------------- | :------------- | :--: | :------------------------------------------------------ |
| Source Voltage \[kV\]         | 蓄电池输出电压 | 文本 | 此处输入蓄电池输出电压量测信号的标签，以#号开头，如#Vb  |
| Source Current \[kA\]         | 蓄电池输出电流 | 文本 | 此处输入蓄电池输出电流量测信号的标签，以#号开头，如#Ib  |
| Output Power \[MW\]           | 蓄电池输出功率 | 文本 | 此处输入蓄电池输出功率量测信号的标签，以#号开头，如#Pb  |
| State of Charge, SOC \[p.u.\] | 荷电状态       | 文本 | 此处输入蓄电池 荷电状态量测信号的标签，以#号开头，如#Sb |

## 端口列表

| 端口名 | 数据维数 | 描述                   |
| :----- | :------: | :--------------------- |
| Pin -  |   1×1    | 蓄电池负端（参考方向） |
| Pin +  |   1×1    | 蓄电池负端（参考方向） |

## 使用说明

## 相关元件
