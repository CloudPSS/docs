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

> **该元件根据hold端特性对输入信号进行保持输出。**

## 参数列表
### Configuration
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Name | 元件名称 | 文本 | 此处输入采样保持元件的名称（可缺省） |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Input | 1×1 |输入端口 |
| Hold | 1×1 |保持信号输入端口 |
| Output | 1×1 |输出端口 |

## 使用说明

::: info
+ 当hold端由0变为1时，保持输出该时刻对应的输入信号数值直到hold端为0。
+ 当hold端为0时，输出等于输入。
:::


## 相关元件

[采样](comp_newSample.md)
