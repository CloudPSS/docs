---
title: 阶跃发生器
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3008
order: 700

classname: _newStepGen
symbol: newStepGen
---

## 基本描述

{% compsymbol newStepGen %}

> **该元件用以产生阶跃信号。**

## 参数列表

### Configuration

| 参数名        | 单位 | 备注     |     类型     | 描述                               |
| :------------ | :--- | :------- | :----------: | :--------------------------------- |
| Name          |      | 元件名称 |     文本     | 此处输入阶跃发生器的名称（可缺省） |
| Initial Value |      | 初始值   | 实数（常量） | 信号输出的初始值                   |
| Final Value   |      | 终值     | 实数（常量） | 阶跃发生后，信号的输出值           |
| Step Time     | s    | 阶跃时间 | 实数（常量） | 阶跃发生的时间                     |

## 端口列表

| 端口名 | 数据维数 | 描述     |
| :----- | :------: | :------- |
| Output |   1×1    | 输出端口 |

## 使用说明

## 相关元件

[斜坡函数发生器](comp_newRampGen.md)
