---
title: 可调正弦波发生器
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3008
order: 400

classname: _newAFPMGen
symbol: newAFPMGen
---

## 基本描述

{% compsymbol newAFPMGen %}

> **该元件用以输出幅值、频率、相位可调的正弦波输出信号。**

## 参数列表

### Configuration

| 参数名        | 备注     | 类型 | 描述                                     |
| :------------ | :------- | :--: | :--------------------------------------- |
| Name          | 元件名称 | 文本 | 此处输入可调正弦波发生器的名称（可缺省） |
| Function Type | 函数类型 | 选择 | 选择正弦表达式为“Sine”或“Cosine”         |

## 端口列表

| 端口名 | 数据维数 | 描述         |
| :----- | :------: | :----------- |
| Mag    |   1×1    | 幅值输入端口 |
| Freq   |   1×1    | 频率输入端口 |
| Phase  |   1×1    | 相位输入端口 |
| Output |   1×1    | 输出端口     |

## 使用说明

## 相关元件

[正弦波发生器](comp_newSinGen.html)
