---
title: 三角函数
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3002
order: 700

classname: _newTrigonometric
symbol: newTrigonometric
---
## 基本描述
{% compsymbol newTrigonometric %}

> **该元件实现三角函数运算，函数种类可配置为Sin、Cos、Tan、ArcSin、ArcCos、ArcTan六种。**

## 参数列表
### Configuration
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Name | 元件名称 | 文本 | 此处输入三角函数的名称（可缺省） |
| Function Type | 函数类型 | 选择 | 选择六种函数类型之一 |
| Angle Type | 角度表示类型 | 选择 | 选择以弧度制还是角度制表示 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Input | 1×1 |输入端口 |
| Output | 1×1 |输出端口 |

## 使用说明

::: info
+ Tan函数在(n+0.5)π处无意义。
+ ArcSin和ArcCos函数的输入值需在-1.0到1.0之间。
:::


## 相关元件


