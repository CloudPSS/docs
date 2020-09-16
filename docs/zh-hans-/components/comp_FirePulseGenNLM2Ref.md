---
title: NLM2Ref
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3009
order: 200

classname: _FirePulseGenNLM2Ref
symbol: NLM2Ref
---

## 基本描述

{% compsymbol NLM2Ref %}

> **该元件用于实现 MMC 应用中的最近电平调制及电容电压平衡算法。**

## 参数列表

### Configuration

| 参数名             | 备注     |     类型     | 描述                    |
| :----------------- | :------- | :----------: | :---------------------- |
| Name               | 元件名称 |     文本     | 此处输入 NLM2Ref 的名称 |
| No. of Sub-modules | 子模块数 | 整数（常量） | 子模块数量              |

## 端口列表

| 端口名 | 数据维数 | 描述                       |
| :----- | :------: | :------------------------- |
| Vcp    |   自动   | 上桥臂电容电压输入端口     |
| Vcn    |   自动   | 下桥臂电容电压输入端口     |
| Vpref  |   自动   | 上桥臂参考调制电压输入端口 |
| Vnref  |   自动   | 下桥臂参考调制电压输入端口 |
| Ip     |   自动   | 上桥臂电感电流输入端口     |
| In     |   自动   | 下桥臂电感电流输入端口     |
| Gp     |   自动   | 上桥臂开关信号输出端口     |
| Gn     |   自动   | 下桥臂开关信号输出端口     |

## 使用说明

## 相关元件

[半桥子模块](comp_MultiHalfBridgeModule.html)
