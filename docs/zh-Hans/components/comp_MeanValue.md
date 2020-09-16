---
title: 平均值函数
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3002
order: 1300

classname: _MeanValue
symbol: MeanValue
---

## 基本描述

{% compsymbol MeanValue %}

> **该元件实现对输入信号在一个滑动时间窗口的平均值输出，滑动时间窗口可自由配置。**

## 参数列表

### Configuration

| 参数名                             | 备注             |     类型     | 描述                               |
| :--------------------------------- | :--------------- | :----------: | :--------------------------------- |
| Name                               | 元件名称         |     文本     | 此处输入平均值函数的名称（可缺省） |
| Time Interval of the Moving Window | 滑动窗口时间间隔 | 实数（常量） | 滑动窗口时间间隔                   |
| Initial Output Value               | 初始值           | 实数（常量） | 函数在第一个时间窗口的初始输出值   |

## 端口列表

| 端口名 | 数据维数 | 描述     |
| :----- | :------: | :------- |
| Input  |   1×1    | 输入端口 |
| Output |   1×1    | 输出端口 |

## 使用说明

## 相关元件
