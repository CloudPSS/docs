---
title: 延迟触发器
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3006
order: 500

classname: _newBinaryDelay
symbol: newBinaryDelay
---

## 基本描述

{% compsymbol newBinaryDelay %}

> **该元件用以实现对输入开关信号的延时开通、关断。**

## 参数列表

### Configuration

| 参数名              | 单位 | 备注     |     类型     | 描述                                 |
| :------------------ | :--- | :------- | :----------: | :----------------------------------- |
| Name                |      | 元件名称 |     文本     | 此处输入延迟触发器的名称（可缺省）   |
| Turn ON Delay Time  | s    | 开通延时 | 实数（常量） | 开通延迟时间，在该时间内元件输出为 0 |
| Turn OFF Delay Time | s    | 关断延时 | 实数（常量） | 关断延迟时间，在该时间内元件输出为 1 |
| Initial State       |      | 初始电平 |     选择     | 选择元件的初始电平为高或低           |

## 端口列表

| 端口名 | 数据维数 | 描述     |
| :----- | :------: | :------- |
| Input  |   1×1    | 输入端口 |
| Output |   1×1    | 输出端口 |

## 使用说明

## 相关元件

[单稳态触发器](comp_newMonoStable.md)
