---
title: 单稳态触发器
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3006
order: 600

classname: _newMonoStable
symbol: newMonoStable
---
## 基本描述
{% compsymbol newMonoStable %}

> **该元件用以实现对上升沿输入以高电平持续输出固定时间后，以低电平输出。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入单稳态触发器的名称（可缺省） |
| Pulse Duration | s | 脉冲持续时间 | 实数（常量） | 输出高电平的持续时间 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Input | 1×1 |输入端口 |                   
| Output | 1×1 |输出端口 |                   

## 使用说明



## 相关元件

[延迟触发器](/components/comp_newBinaryDelay.html)
