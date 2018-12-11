---
title: 触发器
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3006
order: 700

classname: _newFlipFlop
symbol: newFlipFlop
---
## 基本描述
{% compsymbol newFlipFlop %}

> **该元件用以实现JK、RS、D、T类触发器。**

## 参数列表
### Configuration
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Flip-Flop Type: | 触发器种类 | 选择 | 选择触发器的种类为JK、RS、D、T类 |
| Initial State of Output Q | Q初始状态 | 选择 | 选择触发器的初始状态为“Low”或“High” |
| Active Clock Trigger Edge | 触发沿选择 | 选择 | 选择触发器的触发沿为“Positive”或“Positive” |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| J | 1×1 |输入J端，仅当触发器种类为JK时有效 |                   
| K | 1×1 |输入K端，仅当触发器种类为JK时有效 |                   
| C | 1×1 |输入C端，仅当触发器种类为JK时有效 |                   
| Q | 1×1 |输出Q端，仅当触发器种类为JK时有效 |                   
| Q̅ | 1×1 | 输出Q非端，仅当触发器种类为JK时有效|                   
| S | 1×1 |输入S端，仅当触发器种类为RS时有效 |                   
| R | 1×1 |输入R端，仅当触发器种类为RS时有效 |                   
| C | 1×1 |输入C端，仅当触发器种类为RS时有效 |                   
| Q | 1×1 |输入Q端，仅当触发器种类为RS时有效 |                   
| Q̅ | 1×1 |输入Q非端，仅当触发器种类为RS时有效 |                   
| D | 1×1 |输入D端，仅当触发器种类为D时有效 |                   
| C | 1×1 |输入C端，仅当触发器种类为D时有效 |                   
| Q | 1×1 |输入Q端，仅当触发器种类为D时有效 |                   
| Q̅ | 1×1 |输入Q非端，仅当触发器种类为D时有效 |                   
| T | 1×1 |输入T端，仅当触发器种类为T时有效 |                   
| C | 1×1 |输入C端，仅当触发器种类为T时有效 |                   
| Q | 1×1 |输入Q端，仅当触发器种类为T时有效 |                   
| Q̅ | 1×1 |输入Q非端，仅当触发器种类为T时有效 |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了触发器的典型应用。

## 相关元件


