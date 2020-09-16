---
title: 周期最大/小值
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3002
order: 1200

classname: _newMaxMinOneCycle
symbol: newMaxMinOneCycle
---

## 基本描述

{% compsymbol newMaxMinOneCycle %}

> **该元件通过定义一个时间窗口，滑动求取输入信号在窗口内的最大/最小值。**

## 参数列表

### Configuration

| 参数名         | 单位 | 备注               |     类型     | 描述                                    |
| :------------- | :--- | :----------------- | :----------: | :-------------------------------------- |
| Name           |      | 元件名称           |     文本     | 此处输入周期最大/最小值的名称（可缺省） |
| Base Frequency | Hz   | 频率               | 实数（常量） | 周期时间窗口对应的频率                  |
| Function       |      | 选择最大或最小功能 |     选择     | 选择功能为为周期最大值或周期最小值      |

## 端口列表

| 端口名 | 数据维数 | 描述     |
| :----- | :------: | :------- |
| Input  |   1×1    | 输入端口 |
| Output |   1×1    | 输出端口 |

## 使用说明

## 相关元件

[最大/最小值](comp_newMaxMin.html)
