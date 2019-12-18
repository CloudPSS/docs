---
title: 微分器
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3003
order: 300

classname: _newDerivative
symbol: newDerivative
---
## 基本描述
{% compsymbol newDerivative %}

> **该元件实现对输入一维信号的微分计算。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入微分器的名称（可缺省） |
| Time Constant | s | 时间常数 | 实数（常量） | 微分环节的时间常数 |
| Initialization Type |  | 初始化方法 | 选择 | 选择微分环节的初始化方法为“稳态”的“任意值” |
| Initial Value |  | 初始值 | 实数（常量） | 微分环节的初始值 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Input | 1×1 |输入端口 |
| Output | 1×1 |输出端口 |

## 使用说明



## 相关元件

[积分器](comp_newIntegrator.html)
