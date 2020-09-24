---
title: 三相功率量测
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3000
order: 500

classname: _newPowerMeter_3p
symbol: newPowerMeter_3p
---

## 基本描述

{% compsymbol newPowerMeter_3p %}

> **该元件用以测量三相功率数据。**

## 参数列表

### Configuration

| 参数名                  | 单位 | 备注         |     类型     | 描述                                 |
| :---------------------- | :--- | :----------- | :----------: | :----------------------------------- |
| Name                    |      | 元件名称     |     文本     | 此处输入三相功率测量的名称（可缺省） |
| Fundamental Frequency   | Hz   | 基准频率     | 实数（常量） | 功率测量的基准频率                   |
| Smoothing Time Constant | s    | 平滑时间常数 | 实数（常量） | 功率测量的平滑时间常数               |

## 端口列表

| 端口名                  | 数据维数 | 描述                             |
| :---------------------- | :------: | :------------------------------- |
| 3 Phase Voltage \[kV\]  |   3×1    | 此处输入测量所得三相电压。       |
| 3 Phase Current \[kA\]  |   3×1    | 此处输入测量所得三相电流。       |
| Active Power \[MW\]     |   1×1    | 此处输入测量所得有功功率的名称。 |
| Reactive Power \[MVar\] |   1×1    | 此处输入测量所得无功功率的名称。 |

## 使用说明

## 相关元件

[支路电压表](comp_NewBranchVoltageMeter.md)、[电压表](comp_NewVoltageMeter.md)、[电流表](comp_NewCurrentMeter.md)
