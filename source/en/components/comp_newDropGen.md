---
title: 陷落发生器
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3008
order: 1000

classname: _newDropGen
symbol: newDropGen
---
## 基本描述
{% compsymbol newDropGen %}

> **该元件用以产生陷落信号。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入陷落发生器的名称（可缺省） |
| Drop Time | s | 陷落时刻T1 | 实数（常量） | 陷落发生的时刻 |
| Recover Time | s | 恢复时刻T2(>T1) | 实数（常量） | 陷落恢复的时刻 |
| Initial Value |  | 初始值 | 实数（常量） | 信号的初始输出值 |
| Drop Value |  | 陷落值 | 实数（常量） | 信号在陷落时段的输出值 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Output | 1×1 | 输出端口|

## 使用说明



## 相关元件

[浪涌发生器](comp_newSurgeGen.html)
