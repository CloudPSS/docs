---
title: 浪涌发生器
author: 
author_email:

date: 2018/12/3 15:57:45
updated: 2018/12/3 15:57:45

type: components
category: -3008
order: 0

classname: _newSurgeGen
symbol: newSurgeGen
---
## 基本描述
{% compsymbol newSurgeGen %}

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 |  |
| Start Time of Up Slope | s | 上升沿开始时刻T1 | 实数（常量） |  |
| End Time of Up Slope | s | 上升沿结束时刻T2(>T1) | 实数（常量） |  |
| Start Time of Down Slope | s | 下降沿开始时刻T3(>T2) | 实数（常量） |  |
| End Time of Down Slope | s | 下降沿结束时刻T4(>T3) | 实数（常量） |  |
| Peak Output |  | 峰值输出 | 实数（常量） |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Output | 1×1 | |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了浪涌发生器的典型应用。

## 相关元件


