---
title: 对数函数
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3002
order: 1000

classname: _newLog
symbol: newLog
---
## 基本描述


> **该元件实现对数运算，可配置底数为10、自然常数e或自定义常数a。函数式为：**
> $y(t) = \log u(t)$或$y(t) = \ln u(t)$或$y(t) = {\log _a}u(t)$，$u(t)>0$。

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入对数函数的名称（可缺省） |
| Logarithm Type |  | 底数选择 | 选择 | 选择该对数函数的底数为10、自然常数e或自定义常数a |
| Value of Base a |  | 底数a的值 | 实数（常量） | 输入底数a的值，仅当底数选择为a时有效 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Input | 1×1 |输入端口 |
| Output | 1×1 |输出端口 |

## 使用说明



## 相关元件

[指数函数](../Exp/index.md)
