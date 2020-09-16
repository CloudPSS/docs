---
title: 斜坡函数发生器
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3008
order: 800

classname: _newRampGen
symbol: newRampGen
---

## 基本描述

{% compsymbol newRampGen %}

> **该元件用以产生斜坡信号。**

## 参数列表

### Configuration

| 参数名             | 单位 | 备注                   |     类型     | 描述                                   |
| :----------------- | :--- | :--------------------- | :----------: | :------------------------------------- |
| Name               |      | 元件名称               |     文本     | 此处输入斜坡函数发生器的名称（可缺省） |
| Ramping Start Time | s    | 斜坡沿开始时刻 T1      | 实数（常量） | 斜坡沿开始时刻 T1                      |
| Ramping End Time   | s    | 斜坡沿结束时刻 T2(>T1) | 实数（常量） | 斜坡沿结束时刻 T2                      |
| Peak Output        |      | 饱和(峰值)输出         | 实数（常量） | 斜坡信号的输出峰值                     |

## 端口列表

| 端口名 | 数据维数 | 描述     |
| :----- | :------: | :------- |
| Output |   1×1    | 输出端口 |

## 使用说明

## 相关元件

[阶跃发生器](comp_newStepGen.html)
