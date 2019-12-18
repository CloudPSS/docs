---
title: 脉冲发生器
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3008
order: 600

classname: _newPulseGen
symbol: newPulseGen
---
## 基本描述
{% compsymbol newPulseGen %}

> **该元件用以产生幅值、频率可变的脉冲信号，脉冲持续时间为一个仿真步长。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入脉冲发生器的名称（可缺省） |
| Frequency | Hz | 脉冲信号频率 | 实数（常量） | 脉冲信号的频率 |
| Height of Pulse |  | 脉冲峰值 | 实数（常量） | 脉冲信号的最大值 |
| Time of First Pulse | s | 第一个脉冲的发生时间 | 实数（常量） | 脉冲信号产生的起始时间 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Output | 自动 | 输出端口|

## 使用说明



## 相关元件

[单脉冲发生器](comp_newSinglePulse.html)、[方波发生器](comp_newSquareGen.html)
