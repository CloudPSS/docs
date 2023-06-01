---
title: 常量输入
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3001
order: 100

classname: _newConstant
symbol: newConstant
---
## 基本描述


> **该元件用以产生常数输出信号。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入常量输入的名称（可缺省） |
| Real Constant Value |  | 常数 | 实数（常量） | 输出常数的数值 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Output | 1×1 |输出端口 |

## 使用说明

::: info
若常数的数值是一个表达式，需要在表达式之前加`=`，如下图所示。 
:::

![设置常数为表达式](./设置常数为表达式.png)  


## 相关元件

[时间输入](../Time/index.md)、[仿真步长输入](../DeltaT/index.md)
