---
title: 方波发生器
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3008
order: 200

classname: _newSquareGen
symbol: newSquareGen
---

## 基本描述

{% compsymbol newSquareGen %}

> **该元件用以产生定频率、相位、幅值、脉宽的正弦信号。**

## 参数列表

### Configuration

| 参数名           | 单位 | 备注       |     类型     | 描述                               |
| :--------------- | :--- | :--------- | :----------: | :--------------------------------- |
| Name             |      | 元件名称   |     文本     | 此处输入方波发生器的名称（可缺省） |
| Frequency        | Hz   | 信号频率   | 实数（常量） | 输出方波信号的频率                 |
| Max Output Level |      | 信号最大值 | 实数（常量） | 信号最大值                         |
| Min Output Level |      | 信号最小值 | 实数（常量） | 信号最小值                         |
| Duty Ratio       |      | 占空比     | 实数（常量） | 方波信号高电平持续时间与周期的比值 |
| Initial Phase    | Deg  | 初始相位   | 实数（常量） | 初始相位                           |

## 端口列表

| 端口名 | 数据维数 | 描述     |
| :----- | :------: | :------- |
| Output |   自动   | 输出端口 |

## 使用说明

## 相关元件

[脉冲发生器](comp_newPulseGen.html)
