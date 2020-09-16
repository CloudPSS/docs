---
title: 采样保持
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3005
order: 500

classname: _newSampleHold
symbol: newSampleHold
---

## 基本描述

{% compsymbol newSampleHold %}

> **该元件根据 hold 端特性对输入信号进行保持输出。**

## 参数列表

### Configuration

| 参数名 | 备注     | 类型 | 描述                                 |
| :----- | :------- | :--: | :----------------------------------- |
| Name   | 元件名称 | 文本 | 此处输入采样保持元件的名称（可缺省） |

## 端口列表

| 端口名 | 数据维数 | 描述             |
| :----- | :------: | :--------------- |
| Input  |   1×1    | 输入端口         |
| Hold   |   1×1    | 保持信号输入端口 |
| Output |   1×1    | 输出端口         |

## 使用说明

{% pullquote info %}

- 当 hold 端由 0 变为 1 时，保持输出该时刻对应的输入信号数值直到 hold 端为 0。
- 当 hold 端为 0 时，输出等于输入。
  {% endpullquote %}

## 相关元件

[采样](comp_newSample.html)
